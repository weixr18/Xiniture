<template>
  <div class="welcome">
    <h1>Game Result</h1>
    <h2>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
    <li>
      <el-button type="primary" @click="go('statistics')">Statistics</el-button>
      <el-button @click="go('')">Replay</el-button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      msg: "hhhhhhhhhhhhhh"
    };
  },
  methods: {
    go(target) {
      let info = {
        thisPage: "result",
        newPost: true,
        target: target
      };
      this.$game.ge.buttonClick(this, info);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
welcome {
  margin-top: 20%;
  margin-bottom: 20%;
  margin-left: 30%;
  margin-right: 30%;
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
