<template>
  <div class="result">
    <div class="background" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
      <div class="wrapper">
        <ul class="wrapper-ul">
          <li class="li-main">
            <div class="left">
              <h1>The Year of 1995</h1>
              <hr />
              <h2>Game over.</h2>
              <div class="scores">
                <div class="score-item">Conflict : {{score.CON}}</div>
                <div class="score-item">Culture : {{score.CUL}}</div>
                <div class="score-item">Economy : {{score.ECO}}</div>
                <div class="score-item">Military : {{score.MIL}}</div>
                <div class="score-item">Sinicization : {{score.SIN}}</div>
              </div>
            </div>
            <div class="right">
              <div>{{description}}</div>
            </div>
            <div style="clear:both;"></div>
          </li>
          <li class="li-button">
            <el-button type="primary" @click="go('statistics')">Statistics</el-button>
            <el-button @click="go('')">Replay</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      score: {
        CON: this.$game.ge.state.CON,
        CUL: this.$game.ge.state.CUL,
        ECO: this.$game.ge.state.ECO,
        MIL: this.$game.ge.state.MIL,
        SIN: this.$game.ge.state.SIN * 10,
      },
      description: "Game over. Thanks for playing.",
      bg: require("../assets/images/Riot1.jpg"),
    };
  },
  methods: {
    go(target) {
      let info = {
        thisPage: "result",
        newPost: true,
        target: target,
      };
      this.$game.ge.buttonClick(this, info);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result {
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
  background-size: contain;
  background: no-repeat center;
  position: absolute;
}

.wrapper {
  height: auto;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0px;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 100px;
  margin-bottom: 100px;
}
.wrapper-ul {
  margin: 0;
  padding: 0 0 20px 0;
}

.li-main {
  width: max-content;
  height: 100%;
  margin: 0%;
  padding: 0%;
  display: block;
}
.li-button {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0%;
  display: block;
}

.left {
  display: block;
  float: left;
  padding: 0px;
  margin: 20px;
}
.right {
  display: block;
  float: left;
  padding: 0px;
  margin: 20px;
  max-width: 300px;
}

h1,
h2 {
  font-weight: normal;
  margin: 0px;
  padding: 0px;
}

.scores {
  margin: 20px;
  padding: 0px;
}

.score-item {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
