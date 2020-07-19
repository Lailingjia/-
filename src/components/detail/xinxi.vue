<template>
  <div class="xinxi">
    <div class="list" v-for="(v,i) in list" :key="i">
      <img :src="v.tximg" @click="dec(v,$event)" />
      <p>
        <b>{{v.name}}</b>
      </p>
      <el-button round class="gz" size="small" type="primary" @click="gz" :disabled="xx">{{message}}</el-button>
      <el-button round class="sl" size="small" @click="sl(v,$event)" :disabled="slxx">私聊</el-button>

      <el-button round class="lx" size="small" @click="getxx">工作联系</el-button>
    </div>
    <p class="zan">人气值:</p>
    <p class="zannum">
      <b>{{zan}}</b>
    </p>
    <el-divider class="line"></el-divider>
    <div class="data" v-for="(x,y) in data" :key="y">
      <p>微信：{{x.wx}}</p>
      <p>QQ：{{x.qq}}</p>
      <p>邮箱：{{x.mail}}</p>
      <p>个人留言：{{x.word}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["author"],
  data() {
    return {
      list: [],
      data: [],
      lx: false,
      account: "",
      zzname: "",
      myname: "",
      img: "",
      mess: [],
      message: "",
      message1: "关注",
      xx: false,
      slxx: false,
      name: "",
      dis: [],
      zan: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      let mes = {
        name: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getxx", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          this.account = this.list[0].account;
          this.zzname = this.list[0].name;
          this.img = this.list[0].tximg;
          this.getinfo();
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
    },
    getxx() {
      let mes = {
        account: this.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/xinxi/getinfo", mes)
        .then(res => {
          console.log(res.data);
          this.data = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sl(v, event) {
      console.log(v);
      this.name = v.name;
      this.$router.push({
        path: "/talkto",
        query: {
          name: this.name
        }
      });
    },
    gz() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        name: this.myname,
        author: this.zzname,
        tximg: this.img,
        zzaccount: this.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/add", mes)
        .then(res => {
          console.log(res.data);
          alert("关注成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getuser", mes)
        .then(res => {
          console.log(res.data);
          this.dis = res.data.list;
          this.myname = this.dis[0].name;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getinfo() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      if (localStorage.getItem("user") == null) {
        this.message = this.message1;
        this.xx = true;
        this.slxx = true;
      }
      let mes = {
        account: data1.account,
        zzaccount: this.account,
        author: this.zzname
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/getinfo", mes)
        .then(res => {
          console.log(res.data);
          this.mess = res.data.list;
          if (this.mess == 0) {
            this.message = this.message1;
          } else {
            this.message = res.data.list[0].message;
            this.xx = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getzan() {
      let mes = {
        author: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/zan/getzanauthor", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          this.zan = res.data.list.length * 10;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get();
    this.getname();
    this.getzan();
  },
  mounted() {}
};
</script>
<style scoped>
.xinxi {
  width: 300px;
  height: 490px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}

.list img {
  position: relative;
  border-radius: 50%;
  top: 20px;
  width: 100px;
  height: 100px;
}
.list p {
  position: relative;
  font-size: 22px;
  top: 30px;
}
.gz {
  position: relative;
  top: 60px;
  left: 0px;
}
.sl {
  position: relative;
  top: 60px;
}
.lx {
  position: relative;
  top: 60px;
}
.line {
  position: relative;
  top: 0px;
}
.data {
  position: relative;
  top: 0px;
  color: rgba(82, 0, 175, 0.568);
}
.zan {
  position: relative;
  width: 100px;
  top: -25px;
  left: 80px;
  text-align: left;
  color: rgba(160, 160, 160, 0.842);
}

.zannum {
  position: relative;
  width: 50px;
  text-align: left;
  top: -59px;
  left: 150px;
}
</style>