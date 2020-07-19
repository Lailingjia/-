<template>
  <div class="perdet">
    <el-backtop></el-backtop>
    <Topbar class="tb"></Topbar>
    <perdata class="pd" :name="name"></perdata>
    <div class="bt">
      <el-button round class="gz" size="small" type="primary" @click="gz" :disabled="xx">{{message}}</el-button>
      <el-button round class="sl" size="small" @click="sl($event)" :disabled="slxx">私聊</el-button>
    </div>
    <perwork class="pw" :name="name"></perwork>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import perdata from "../components/perdetail/perdata";
import perwork from "../components/perdetail/perwork";

export default {
  components: {
    Topbar,
    perdata,
    perwork
  },
  props: {},
  data() {
    return {
      name: "",
      myname: "",
      data: [],
      list: [],
      tximg: "",
      zzaccount: "",
      mess: [],
      message: "",
      message1: "关注",
      xx: false,
      slxx: false
    };
  },
  watch: {
    $route: "get"
  },
  computed: {},
  methods: {
    get() {
      var data = this.$route.query.name;
      if (data == null) {
        alert("页面错误");
        this.$router.push({ path: "/index" });
      } else {
        // 将数据放在当前组件的数据内
        console.log("传来的参数==" + data);
        this.name = data;
      }
    },
    sl(event) {
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
        author: this.name,
        tximg: this.tximg,
        zzaccount: this.zzaccount
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
          this.list = res.data.list;
          this.myname = this.list[0].name;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getxx() {
      let mes = {
        name: this.name
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getxx", mes)
        .then(res => {
          console.log(res.data);
          this.data = res.data.list;
          this.tximg = this.data[0].tximg;
          this.zzaccount = this.data[0].account;
          this.getinfo();
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
        zzaccount: this.zzaccount,
        author: this.name
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
    }
  },
  created() {
    this.get();
    this.getxx();

    this.getname();
  },
  mounted() {}
};
</script>
<style scoped>
.tb {
  position: fixed;
  top: 0%;
  z-index: 2;
}
.pd {
  position: relative;
  top: 80px;
  left: 300px;
}
.pw {
  position: relative;
  top: 220px;
}
.bt {
  position: relative;
  width: 200px;
  left: 1000px;
  top: -100px;
}
</style>