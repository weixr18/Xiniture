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
        <h1 ref="title">{{title}}</h1>
        <h4 ref="text">{{text}}</h4>
        <ul v-if="choiceList.length > 1">
          <p v-for="item in choiceList" v-bind:key="item.marker">
            <el-button @click="go(item.marker)">{{item.text}}</el-button>
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
export default {
  name: "EventPage",
  data() {
    return {
      ShowPage: false,
      choiceList: [],
      title: "EVENT",
      text: "test text test text xxxxxxxxxxxxxx",
      bg: require("../../static/images/Map_of_Xinjiang.jpg"),
    };
  },
  created() {
    this.loadGame();
  },
  methods: {
    loadGame() {
      this.$game.ge.loadGame(this);
      this.ShowPage = true;
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
  padding-top: 20px;
  padding-bottom: 0px;
  min-height: 500px;

  background: no-repeat center;
  background-size: contain;
  position: relative;
}

.wrapper {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  padding-top: 30px;
  padding-bottom: 30px;
}

h1,
h2 {
  font-weight: normal;
  margin-top: 0%;
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
