<template>
  <div class="welcome">
    <h1>Xiniture Project</h1>
    <h2>A Role-play Game</h2>
    <el-button type="primary" @click="go">Enter Game</el-button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {};
  },
  methods: {
    go() {
      let info = {
        thisPage: "welcome",
        newPost: true,
        target: "notice"
      };
      this.$game.ge.buttonClick(this, info);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  margin-bottom: 20%;
  margin-left: 30%;
  margin-right: 30%;
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
