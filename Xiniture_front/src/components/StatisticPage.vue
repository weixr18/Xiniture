<template>
  <div class="statistics">
    <div class="background" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
      <div class="wrapper">
        <ul class="wrapper-ul">
          <h1>Game Statistics</h1>
          <li class="li-main">
            <div class="left">
              <h2>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
            </div>
            <div class="right">
              <div>lalalalalalallalalalalalala</div>
            </div>
            <div style="clear:both;"></div>
          </li>
          <li class="li-button">
            <el-button type="primary" @click="go">Back</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      bg: require("../assets/images/Riot1.jpg"),
    };
  },
  methods: {
    go() {
      let info = {
        thisPage: "Statistics",
        newPost: true,
        target: "result",
      };
      this.$game.ge.buttonClick(this, info);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.statistics {
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

h1,
h2 {
  font-weight: normal;
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
