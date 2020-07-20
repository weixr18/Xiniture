<template>
  <div class="welcome">
    <h1>Game Statistics</h1>
    <h2>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
    <el-button type="primary" @click="go">Back</el-button>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      msg: "hhhhhhhhhhhhhh"
    };
  },
  methods: {
    go() {
      let info = {
        thisPage: "Statistics",
        newPost: true,
        target: "result"
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
