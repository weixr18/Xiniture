<template>
  <div class="notice">
    <div class="middle">
      <h1>Game Notice</h1>
      <h2>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
      <el-button type="primary" @click="go">Continue...</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      msg: "hhhhhhhhhhhhhh",
    };
  },
  methods: {
    go() {
      let info = {
        thisPage: "notice",
        newPost: true,
        target: "info",
      };
      this.$game.ge.buttonClick(this, info);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle {
  background-color: rgba(199, 199, 199, 0.4);
  margin-bottom: 20%;
  margin-left: 30%;
  margin-right: 30%;
  border-right: 3px outset;
  border-top: 3px outset;
  border-left: 3px outset;
  border-bottom: 3px outset;
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
