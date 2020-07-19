<template>
  <div class="main">
    <div class="list" v-for="(v,i) in list" :key="i">
      <p class="author">
        <b>{{v.title}}</b>
      </p>
      <p class="tim">发布于:</p>
      <p class="time">{{formatter(v.Time)}}</p>
      <p class="int">简介:</p>
      <p class="intro">{{v.intro}}</p>
      <el-divider class="line"></el-divider>
      <img :src="v.img" />
      <el-divider class="line2"></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["title", "author"],
  data() {
    return {
      list: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      let mes = {
        title: this.title,
        author: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/getdet", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    formatter(date) {
      return `${date.split("T")[0]} ${date.split("T")[1].split(".")[0]}`;
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style scoped>
.main {
  width: 900px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}
.author {
  position: relative;
  width: 500px;
  text-align: left;
  left: 50px;
  font-size: 24px;
}
.int {
  position: relative;
  width: 50px;
  left: 50px;
  top: -30px;
  font-size: 16px;
  color: black;
}
.list img {
  width: 700px;
}
.intro {
  position: relative;
  width: 500px;
  text-align: left;
  top: -64px;
  left: 100px;
  font-size: 16px;
  color: rgb(170, 170, 170);
}
.tim {
  position: relative;
  width: 100px;
  text-align: left;
  left: 50px;
  color: rgb(170, 170, 170);
  font-size: 14px;
}
.time {
  position: relative;
  width: 300px;
  text-align: left;
  left: 100px;
  top: -31px;
  color: rgb(170, 170, 170);
  font-size: 14px;
}
.line {
  position: relative;
  top: -70px;
}
</style>