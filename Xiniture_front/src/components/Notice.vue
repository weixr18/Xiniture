<template>
  <div class="notice">
    <h1>Game Notice</h1>
    <h2>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
    <el-button type="primary" @click="go">Continue...</el-button>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      msg: "hhhhhhhhhhhhhh"
    };
  },
  methods: {
    go() {
      let info = {
        thisPage: "notice",
        newPost: true,
        target: "info"
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
