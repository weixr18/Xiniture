<template>
  <div class="game">
    <div class="background" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
      <div class="wrapper">
        <ul class="wrapper-ul">
          <li class="top-li">
            <div class="date-div">Date:{{date}}</div>
            <div class="title-div" ref="title">
              <h1>{{title}}</h1>
            </div>
            <div class="score-div" ref="chart"></div>
          </li>

          <h4 ref="text" class="text">{{text}}</h4>
          <ul v-if="choiceList.length > 1">
            <p v-for="item in choiceList" v-bind:key="item.marker">
              <el-button @click="go(item.marker)" autofocus:False>{{item.text}}</el-button>
            </p>
          </ul>
          <ul v-if="choiceList.length === 1">
            <el-button type="primary" @click="go('A')">{{choiceList[0].text}}</el-button>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";

export default {
  name: "EventPage",
  data() {
    return {
      ShowPage: false,
      choiceList: [],
      title: "EVENT",
      text: "test text test text xxxxxxxxxxxxxx",
      bg: require("../assets/images/Map_of_Xinjiang.jpg"),
      date: 1959.01,
      chartOption: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["Scores"],
        },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "3%",
          top: "8%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
          },
        ],
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            data: ["CON", "CUL", "ECO", "MIL", "SIN"],
          },
        ],
        series: [
          {
            name: "Value",
            type: "bar",
            label: {
              show: true,
              position: "inside",
            },
            data: [0, 0, 10, -10, 50],
            // use watcher to refresh chart
          },
        ],
      },
    };
  },
  mounted() {
    this.loadGame();
    this.getEchartData();
  },
  methods: {
    loadGame() {
      this.$game.ge.loadGame(this);
      this.ShowPage = true;
    },
    getEchartData() {
      const chart = this.$refs.chart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        this.$game.ge.echart = myChart;
        const option = this.$data.chartOption;
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
    go(marker) {
      let info = {
        thisPage: "event",
        newPost: false,
        target: "event",
        marker: marker,
      };
      this.$game.ge.buttonClick(this, info);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  margin-top: 0%;
  margin-bottom: 0%;
  margin-left: 0%;
  margin-right: 0%;
  height: max-content;
}

.background {
  height: 100%;
  width: 100%;
  min-height: 500px;
  padding: 0px;
  margin: 0px;

  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  position: absolute;
}

.wrapper {
  height: auto;
  width: auto;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 40px;
  margin-bottom: 100px;
  border-right: 3px outset;
  border-top: 3px outset;
  border-left: 3px outset;
  border-bottom: 3px outset;
}
.wrapper-ul {
  margin: 0;
  padding: 0 0 20px 0;
}

.top-li {
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 0px;
}

.date-div {
  display: inline-block;
  vertical-align: top;
  position: relative;
  height: 100%;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 20px;
}

.title-div {
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  max-width: 600px;
}

.score-div {
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 300px;
  height: 170px;
}

h1 {
  font-weight: normal;
  font-size: 40px;
  max-width: 600px;
  margin-top: 0%;
  margin-bottom: 0%;
}

h2 {
  font-weight: normal;
  margin-top: 0%;
  margin-bottom: 0%;
}

.text {
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
