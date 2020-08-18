//import qs from 'qs'

function GameEngine() {

    this.state = {
        date: "1960.01",
        ECO: 0,
        MIL: 0,
        CON: 0,
        CUL: 0,
        SIN: 0,
        labels: [],
        pageContent: {},
    };


    this.loadGame = function (cpnt) {
        // 载入游戏
        cpnt.$http.get('/static/event.json').then(function (response) {
            // 事件读取
            cpnt.$game.ge.events = response.data;

            //初始化事件队列
            cpnt.$game.ge.eventQueue = cpnt.$game.ge.events.filter(
                (value) => { return value.date !== "" && value.date !== undefined && value.type !== "introduction"; }
            );
            cpnt.$game.ge.eventQueue.sort(
                (a, b) => Number(a.date) - Number(b.date)
            );
            console.log("initial:", cpnt.$game.ge.eventQueue);

            //初始化监听列表
            cpnt.$game.ge.listenList = cpnt.$game.ge.events.filter(
                (value) => { return value.type === "riot" || (value.date === "" && value.trigger !== undefined) }
            );

            let time = new Date();
            cpnt.$game.ge.logTime = time.getTime();

            //渲染第一页
            let nxtPage = {
                type: "introduction",
                id: 0
            };
            var pageContent = cpnt.$game.ge.getContent(nxtPage);
            cpnt.$game.ge.state.pageContent = pageContent[0]
            cpnt.$game.ge.updatePage(cpnt);

        }).catch(function (response) {
            console.log("ERROR!")
            console.log(response)
        })
    };

    this.buttonClick = function (cpnt, info) {
        //点击事件处理
        if (info.newPost && info.target !== undefined) {
            // URL跳转
            if (info.thisPage === "info") {
                this.userID = info.userID;
            }
            cpnt.$router.push("/" + info.target);
        }
        else {
            // 游戏内

            //1. 寻找下一事件
            console.log(this.eventQueue);
            let pageContent = this.state.pageContent;
            if (pageContent.option.length === 1 &&
                pageContent.option[0].country_event !== undefined) {

                var nextEvent = pageContent.option[0].country_event;
            }
            else {
                var nextEvent = this.nextEvent(info);
            }
            if (nextEvent.GAME_OVER !== undefined) {
                // 游戏结束
                let info = {
                    thisPage: "event",
                    newPost: true,
                    target: "result"
                };
                this.buttonClick(cpnt, info);
                return;
            }
            console.log("nextevent:", nextEvent.type, nextEvent.id)

            //2. 向服务器发送记录
            var info_send_back = {
                "user_id": 0,
                "log_time": this.logTime,
                "current_page": {
                    "id": this.state.pageContent.id,
                    "type": this.state.pageContent.type
                },
                "user_choice": info.marker,
                "date": this.state.date,
                "ECO": this.state.ECO,
                "MIL": this.state.MIL,
                "CON": this.state.CON,
                "CUL": this.state.CUL,
                "SIN": this.state.SIN,
            };
            console.log("info_send_back:", info_send_back);

            let url = '/api/user_action';
            cpnt.$http.post(url, info_send_back, { emulateJSON: true }).then(res => {
                console.log(res.body);
            });


            //3. 获取页面内容
            this.state.pageContent = this.getContent(nextEvent)[0]

            //4. 更新页面
            this.updatePage(cpnt);
            return;
        }

    }

    this.nextEvent = function (info) {

        // 寻找下一个事件
        //0. 获取选项
        console.log("marker:", info.marker);
        let pageContent = this.state.pageContent;
        //console.log("current event:", pageContent);
        let chosenOpt = pageContent.option.filter(e => e.marker === info.marker)
        if (chosenOpt.length === 0) {
            console.log("FATAL ERROR!");
            return;
        }
        chosenOpt = chosenOpt[0];

        //1. 进行事件immediate
        let immediate = pageContent.immediate;
        if (immediate.add_tag !== undefined && immediate.add_tag.length > 0) {
            this.state.labels.push.apply(this.state.labels, immediate.add_tag);
        }


        //2. 进行选项effect和date更新
        let effect = chosenOpt.effect;
        if (effect.add_tag !== undefined && effect.add_tag.length > 0) {
            this.state.labels.push.apply(this.state.labels, effect.add_tag);
        }

        if (effect.remove_tag !== undefined && effect.remove_tag.length > 0
            && this.state.labels !== undefined && this.state.labels.length > 0) {
            this.state.labels = this.state.labels.filter(e => effect.remove_tag.indexOf(e) < 0);
        }

        for (let key in effect.property_add) {
            if (this.state[key] === undefined) {
                console.log("FATAL ERROR 2.", key);
                continue;
            }
            this.state[key] += effect.property_add[key];
        }
        if (pageContent.date !== undefined && pageContent.date !== "") {
            this.state.date = pageContent.date;
        }
        //console.log("state:", this.state);


        //3. 判定选项是否有country_event，若有则直接返回
        if (effect.country_event !== undefined) {
            if (this.eventQueue.length > 0
                && this.eventQueue[0].id === effect.country_event.id
                && this.eventQueue[0].type === effect.country_event.type) {
                this.eventQueue.shift();
            }
            return effect.country_event;
        }

        //4. watchList逐个进行判定，若满足条件则进行移动。
        let trigger_judge = function (obj, trigger, is_or = true, is_not = false) {
            let temp_flag = !is_or;

            for (let key2 in trigger) {

                if (key2 === "or" || key2 === "mean_time_to_happen" || key2 === "not") {
                    continue;
                }

                if (key2 === "has_tag") {
                    if (is_or) {
                        temp_flag = temp_flag || obj.state.labels[trigger[key2]] !== undefined;
                    }
                    else {
                        temp_flag = temp_flag && obj.state.labels[trigger[key2]] !== undefined;
                    }
                    continue;
                }

                if (key2 === "not_has_tag") {
                    if (is_or) {
                        temp_flag = temp_flag || obj.state.labels[trigger[key2]] === undefined;
                    }
                    else {
                        temp_flag = temp_flag && obj.state.labels[trigger[key2]] === undefined;
                    }
                    continue;
                }

                if (obj.state[key2] === undefined) {
                    console.log("FATAL ERROR 3", key2);
                    continue;
                }


                if (key2 === "date") {
                    let res = (
                        trigger[key2].compare === "less" && obj.date < trigger[key2].value ||
                        trigger[key2].compare === "greater" && obj.date > trigger[key2].value ||
                        trigger[key2].compare === "equal" && obj.date === trigger[key2].value
                    )
                    if (is_or) {
                        temp_flag = temp_flag || res;
                    }
                    else {
                        temp_flag = temp_flag && res;
                    }
                    continue;
                }


                let res = (
                    trigger[key2].compare === "less" && obj.state[key2] < trigger[key2].value ||
                    trigger[key2].compare === "greater" && obj.state[key2] > trigger[key2].value ||
                    trigger[key2].compare === "equal" && obj.state[key2] === trigger[key2].value
                )

                if (is_or) {
                    temp_flag = temp_flag || res;
                }
                else {
                    temp_flag = temp_flag && res;
                }
                if (is_not) {
                    temp_flag = !temp_flag;
                }
            }

            return temp_flag;
        }

        for (let event of this.listenList) {

            // 用and进行整体判定
            let flag = trigger_judge(this, event.trigger, false)

            //进行or和not部分的判定
            for (let key in event.trigger) {
                if (key === "or") {
                    flag = flag && trigger_judge(this, event.trigger.or, true);
                    continue;
                }

                if (key === "not") {
                    flag = flag && trigger_judge(this, event.trigger.or, false, true);
                    continue;
                }
            }

            if (flag) {
                // 激活条件满足
                console.log("SATISFIED!!! Event:", event);

                // 设置该event的date
                if (event.trigger !== undefined &&
                    event.trigger.mean_time_to_happen !== undefined) {
                    // 日期计算
                }
                else {
                    event["date"] = this.state.date;
                }

                //移动，排序
                this.listenList = this.listenList.filter((e) => e !== event);
                this.eventQueue.push(event);
                this.eventQueue.sort(
                    (a, b) => Number(a.date) - Number(b.date)
                );
                break;
            }
        }

        //5. 从queue取出队首，若有trigger则判断条件是否满足，不满足取下一队首，将其返回
        if (this.eventQueue.length === 0) {
            console.log("GAME OVER!!!!!");
            return { "GAME_OVER": true };
        }

        let nxtEvent = this.eventQueue.shift();
        if (nxtEvent.trigger !== undefined) {
            if (!trigger_judge(this, nxtEvent.trigger, false)) {
                nxtEvent = this.eventQueue.shift();
            }
        }
        //TODO: 判断队首日期和当前日期关系，丢弃过期事件直至找到符合日期的事件

        return nxtEvent;
    }

    this.getContent = function (nxtEvent) {
        // 获取某个事件的相关信息
        if (this.events !== undefined) {
            var result = this.events.filter(item => item.type === nxtEvent.type && item.id === nxtEvent.id)
            return result
        }
    }

    this.updatePage = function (cpnt) {
        // 更新页面元素
        let pageContent = this.state.pageContent
        cpnt.title = pageContent.title
        cpnt.text = pageContent.description
        cpnt.choiceList = pageContent.option
        if (pageContent.picture !== undefined && pageContent.picture !== "") {
            cpnt.bg = require("../../static/images/" + pageContent.picture)
        }
        else if (pageContent.picture === undefined) {
            console.log("11111111111111")
            cpnt.bg = require("../../static/images/" + "blank.jpg")
        }
        else if (pageContent.picture === "") {
            console.log("222222222222222")
            cpnt.bg = require("../../static/images/" + "blank.jpg")
        }
    }
}

let ge = new GameEngine()

export default {
    ge
};