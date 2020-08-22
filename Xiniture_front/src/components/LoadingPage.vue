<template>
  <div class="loading">
    <div class="background" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
      <div class="wrapper">
        <ul class="wrapper-ul">
          <div id="loading-panel">
            <div class="quote">
              <strong>Loading...</strong>
            </div>
            <div>
              <el-progress :percentage="percent"></el-progress>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      percent: 0,
      imgNum: 1,
      bg: require("../assets/images/Riot1.jpg"),
    };
  },
  mounted: function () {
    this.preload();
  },
  methods: {
    preload() {
      let imgURLs = [
        require("../assets/images/blank.jpg"),
        require("../assets/images/Farm_and_factories.jpg"),
        require("../assets/images/File_on_desk.jpg"),
        require("../assets/images/Map_of_Xinjiang.jpg"),
        require("../assets/images/Minorities0.jpg"),
        require("../assets/images/Minorities1.jpg"),
        require("../assets/images/Minorities2.jpg"),
        require("../assets/images/Riot0.jpeg"),
        require("../assets/images/Riot1.jpg"),
        require("../assets/images/Riot2.jpg"),
        require("../assets/images/Riot3.jpg"),
        require("../assets/images/Separatist.jpg"),
        require("../assets/images/Soldiers.jpg"),
        require("../assets/images/Transportation.jpg"),
        require("../assets/images/Transportation1.jpg"),
        require("../assets/images/Transportation2.jpg"),
        require("../assets/images/Transportation3.jpg"),
        require("../assets/images/Xinjiang0.jpg"),
      ];

      this.$data.imgNum = imgURLs.length;

      for (let img of imgURLs) {
        let image = new Image();

        image.onload = () => {
          this.$data.count++;
          let percentNum = Math.floor(
            (this.$data.count / imgURLs.length) * 100
          );
          this.$data.percent = percentNum;
        };

        image.src = img;
      }
    },
  },

  watch: {
    count: {
      handler(newVal, objVal) {
        if (newVal === this.$data.imgNum) {
          // 图片加载完成后跳转页面
          let info = {
            thisPage: "loading",
            newPost: true,
            target: "event",
          };
          this.$game.ge.buttonClick(this, info);
        }
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
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
  margin-top: 300px;
  margin-bottom: 100px;
}
.wrapper-ul {
  margin: 0;
  padding: 0 0 20px 0;
}

.quote {
  font-family: "Times New Roman", serif;
}

h1,
h2 {
  font-weight: normal;
  margin: 0px;
  padding: 0px;
}

.scores {
  margin: 20px;
  padding: 0px;
}

.score-item {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
