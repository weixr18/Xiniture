<template>
  <div class="notice">
    <div class="background" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
      <div class="wrapper">
        <ul class="wrapper-ul">
          <h1>Game Notice</h1>
          <h2>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
          <el-button type="primary" @click="go">Continue...</el-button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      bg: require("../assets/images/Riot1.jpg"),
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
.notice {
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
  border-right: 3px outset;
  border-top: 3px outset;
  border-left: 3px outset;
  border-bottom: 3px outset;
}
.wrapper-ul {
  margin: 0;
  padding: 0 0 20px 0;
}

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
