<template>
  <div class="monster">
    <div class="title">
      <img src="https://qiniucssjs.gracg.com/logoxxx.png" />
    </div>
    <div class="list" v-for="(v,i) in list" :key="i">
      <img :src="v.tximg" @click="dec(v,$event)" />
      <p>{{v.author}}</p>
      <el-button type="success" class="bt" @click="dec(v,$event)">找他约稿</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      var url = "/api";
      this.$axios
        .post(url + "/user/getzz")
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    dec(v, event) {
      console.log(v);
      this.name = v.name;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
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
.monster {
  width: 1300px;
  height: 300px;
}
.title {
  width: 120px;
  position: relative;
  height: 100px;
  left: 180px;
  top: -50px;
}
.title img {
  width: 120px;
  height: 30px;
}
.list {
  width: 200px;
  float: left;
  position: relative;
  left: 160px;
  background-color: rgb(240, 240, 240);
  box-shadow: 0 0 10px #eeeeee;
  padding-top: 20px;
  padding-bottom: 20px;
}
.list img {
  width: 85px;
  height: 85px;
  border-radius: 50px;
  margin: 0%;
}
</style>