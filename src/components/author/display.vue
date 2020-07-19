<template>
  <div class="display">
    <!-- <img src="../../image/head.png" /> -->
    <div class="title">
      <span>
        <b>最新推荐作者</b>
      </span>
    </div>
    <div class="list" v-for="(v,i) in list" :key="i">
      <img :src="v.tximg" @click="dec(v,$event)" />
      <p>
        <b>{{v.name}}</b>
      </p>
      <el-button round type="success" @click="dec(v,$event)">详情</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [],
      data: [],
      myname: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      var url = "/api";
      this.$axios
        .post(url + "/user/getdis")
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // gz(v, event) {
    //   var data1 = JSON.parse(localStorage.getItem("user"));
    //   let mes = {
    //     account: data1.account,
    //     name: this.myname,
    //     author: v.name,
    //     tximg: v.tximg,
    //     zzaccount: v.account
    //   };
    //   var url = "/api";
    //   this.$axios
    //     .post(url + "/gz/add", mes)
    //     .then(res => {
    //       console.log(res.data);
    //       // this.mess = res.data.list[0].message;
    //       alert("关注成功");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    // getname() {
    //   var data1 = JSON.parse(localStorage.getItem("user"));
    //   let mes = {
    //     account: data1.account
    //   };
    //   var url = "/api";
    //   this.$axios
    //     .post(url + "/user/getuser", mes)
    //     .then(res => {
    //       console.log(res.data);
    //       this.data = res.data.list;
    //       this.myname = this.data[0].name;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },

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
.display {
  width: 1516px;
  height: 300px;
  background-image: url("../../image/head.png");
}

.title {
  width: 200px;
  height: 50px;
  position: relative;
  top: 0px;
  left: 130px;
  font-size: 20px;
  color: rgb(255, 138, 5);
}
.list {
  width: 280px;
  height: 220px;
  float: left;
  position: relative;

  left: 150px;
  background-color: rgba(218, 218, 218, 0.589);
  margin-left: 20px;
  border-radius: 5px;
}
.list img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: relative;
  top: 20px;
}
.list p {
  position: relative;
  top: 10px;
  font-size: 22px;
  color: black;
}
</style>