<template>
  <div class="storypage" v-if="ShowPage">
    <h1 ref="title">{{title}}</h1>
    <h2 ref="text">{{text}}</h2>
    <el-button type="primary" ref="button" @click="go">{{buttonText}}</el-button>
  </div>
</template>

<script>
export default {
  name: "StoryPage",
  data() {
    return {
      ShowPage: false,
      title: "TITLE",
      text: "test text test text...",
      buttonText: "Continue"
    };
  },
  created() {
    this.loadGame();
  },
  methods: {
    loadGame() {
      this.$game.ge.loadGame(this);
      this.ShowPage = true;
    },
    go() {
      let info = {
        thisPage: "story",
        newPost: false,
        target: "story"
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
