<template>
  <div class="welcome">
    <div
      class="background"
      v-bind:style="{
        backgroundImage:'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        }"
    >
      <div class="wrapper">
        <h1>Xiniture Project</h1>
        <h2>A Role-play Game</h2>
        <div class="button-wrapper">
          <el-button type="primary" @click="go">Enter Game</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      bg: require("../../static/images/Riot1.jpg"),
      // require 的初始路径就是vue文件所在路径
    };
  },
  methods: {
    go() {
      let info = {
        thisPage: "welcome",
        newPost: true,
        target: "notice",
      };
      this.$forceUpdate();
      this.$game.ge.buttonClick(this, info);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  margin-bottom: 20%;
  margin-left: 20%;
  margin-right: 20%;
  border-color: #777777;
  border-right: 3px outset;
  border-top: 3px outset;
  border-left: 3px outset;
  border-bottom: 3px outset;
}

.background {
  height: 100%;
  width: 100%;
  background: no-repeat center;
  background-size: cover;
  position: relative;
  padding-top: 250px;
  padding-bottom: 250px;
}

.wrapper {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.25);
  padding-top: 30px;
  padding-bottom: 30px;
}

.button-wrapper {
  margin-top: 30px;
  margin-bottom: 30px;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

h1 {
  font-size: 100px;
  font-weight: normal;
  color: #000;
  font-family: "Catherine-de-Beaumont";
  margin-top: 0%;
  margin-bottom: 0%;
}
h2 {
  font-size: 70px;
  font-weight: normal;
  color: #000;
  font-family: "Catherine-de-Beaumont";
  margin-top: 0%;
  margin-bottom: 0%;
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
