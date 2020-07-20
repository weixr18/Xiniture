<template>
  <div class="info">
    <ul>
      <li>
        <h1>Your Infomation</h1>
      </li>
    </ul>
    <ul>
      <li>Age</li>
      <li>Age inputer</li>
    </ul>
    <ul>
      <li>Nationality</li>
      <li>Nationality inputer</li>
      <li>Nationality inputer</li>
    </ul>
    <ul>
      <li>
        <el-button type="primary" @click="go">Start Game</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      msg: "hhhhhhhhhhhhhh"
    };
  },
  methods: {
    go() {
      let info = {
        thisPage: "info",
        newPost: true,
        target: "event",
        userID: 0
      };
      this.$game.ge.buttonClick(this, info);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
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
