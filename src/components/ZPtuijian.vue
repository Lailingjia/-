<template>
  <div class="Tuijian">
    <el-container>
      <el-header>
        <img src="../image/aixin.png" />
        <span>
          <b>最近作品被推荐</b>
        </span>
      </el-header>
      <el-main>
        <div class="list" v-for="(v,i) in list" :key="i" @click="dec(v,$event)">
          <img :src="v.tximg" />

          <p>{{v.name}}</p>
        </div>
      </el-main>
    </el-container>
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
<style  scoped>
.Tuijian {
  width: 580px;
}
.el-header {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 500px;
}
.el-header img {
  width: 5%;
  position: relative;
  float: left;
  top: 30%;
}
.el-header span {
  position: relative;
  float: left;
  left: 2%;
}
.el-main {
  background-color: #f3f2f2;
  color: #333;
  text-align: center;
  line-height: 50px;
  width: 580px;
  height: 120px;
}
.list {
  width: 15%;
  height: 80px;
  float: left;
  flex: 1;
  margin-left: 1%;
}
.list img {
  width: 55px;
  height: 55px;
  border-radius: 50px;
}
.list p {
  position: relative;
  height: 40px;
  margin-top: -22%;
  font-size: 14px;
}
</style>