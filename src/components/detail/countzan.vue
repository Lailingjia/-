<template>
  <div class="count">
    <div class="num">
      <b>{{list.length}}人赞</b>
    </div>
    <el-divider class="line"></el-divider>
    <div class="list" v-for="(v,i) in list" :key="i" v-if="i < 8">
      <img :src="v.tximg" />
      <p class="author">{{v.name}}</p>
    </div>
    <div class="mes">
      <b>{{message}}</b>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["title", "author"],
  data() {
    return {
      list: [],
      message: "",
      message1: "..."
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
        .post(url + "/zan/getzan", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          if (this.list.length > 8) {
            this.message = this.message1;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style scoped>
.count {
  width: 900px;
  height: 160px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}
.num {
  position: relative;
  left: -400px;
  top: 10px;
  font-size: 18px;
}
.list {
  width: 100px;
  height: 100px;
  float: left;
  position: relative;
  top: -10px;
}
.list img {
  width: 60px;
  height: 55px;
  border-radius: 50%;
}
.list p {
  font-size: 14px;
  position: relative;
  top: -10px;
}
.mes {
  position: relative;
  font-size: 25px;
  width: 10px;
  left: 830px;
  top: -90px;
}
</style>