<template>
  <div class="game">
    <div
      class="background"
      v-bind:style="{
        backgroundImage:'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        }"
    >
      <div class="wrapper">
        <li class="top-li">
          <div class="date-div">Date:{{date}}</div>
          <div class="score-div" ref="chart"></div>
        </li>
        <h1 ref="title">{{title}}</h1>
        <h4 ref="text" class="text">{{text}}</h4>
        <ul v-if="choiceList.length > 1">
          <p v-for="item in choiceList" v-bind:key="item.marker">
            <el-button @click="go(item.marker)" autofocus:False>{{item.text}}</el-button>
          </p>
        </ul>
        <ul v-if="choiceList.length === 1">
          <el-button type="primary" @click="go('A')">{{choiceList[0].text}}</el-button>
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
      bg: require("../../static/images/Map_of_Xinjiang.jpg"),
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
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 15%;
  margin-right: 15%;
  border-color: #777777;
  border-right: 3px outset;
  border-top: 3px outset;
  border-left: 3px outset;
  border-bottom: 3px outset;
}
.background {
  height: 100%;
  width: 100%;
  min-height: 500px;
  padding: 0px;

  background: no-repeat center;
  background-size: contain;
  position: relative;
}

.wrapper {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0px;
}

.top-li {
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}

.date-div {
  display: block;
  float: left;
  height: 100%;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 20px;
}

.score-div {
  display: block;
  float: right;
  width: 300px;
  height: 170px;
}

h1,
h2 {
  font-weight: normal;
  margin-top: 0%;
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
