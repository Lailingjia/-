<template>
  <div class="comlist">
    <div class="pl">
      <b>网友评论</b>
    </div>
    <el-divider class="line"></el-divider>
    <div class="list" v-for="(v,i) in dataShow()" :key="i">
      <img :src="v.mytximg" class="tx" @click="dec(v,$event)" />
      <div class="title">
        <b>{{v.myname}}</b>
      </div>
      <div class="main">{{v.content}}</div>
      <div class="time">发表于：{{formatter(v.Time)}}</div>

      <el-button class="res" plain @click="res(v,$event)">回复</el-button>
      <el-button class="more" plain @click="more(v,$event)">更多评论</el-button>
    </div>
    <div class="mes">{{message}}</div>
    <el-pagination
      background
      layout="total,prev, pager,next"
      :total="this.list.length"
      :page-size="pageSize"
      @prev-click="prePage"
      @next-click="nextPage"
      class="page"
      hide-on-single-page
    ></el-pagination>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["title", "author"],
  data() {
    return {
      list: [],
      activeClass: 0,
      data: [],
      myname: "",
      mytximg: "",
      newcontent: "",
      zzaccount: "",
      pageSize: 3,
      currentPage: 0,
      message: "",
      message1: "暂无评论"
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
        .post(url + "/com/getcom", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          if (this.list.length == 0) {
            this.message = this.message1;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    dec(v, event) {
      this.name = v.myname;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
      });
    },
    getzz() {
      let mes = {
        name: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getxx", mes)
        .then(res => {
          console.log(res.data);
          this.data = res.data.list;
          this.zzaccount = this.data[0].account;
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
          this.data = res.data.list;
          this.myname = this.data[0].name;
          this.mytximg = this.data[0].tximg;
        })
        .catch(err => {
          console.log(err);
        });
    },

    more(v, event) {
      this.title = this.title;
      this.zzaccount = this.zzaccount;
      this.account = v.myaccount;
      this.con = v.content;
      this.$router.push({
        path: "/commore",
        query: {
          title: this.title,
          zzaccount: this.zzaccount,
          placcount: this.account,
          plcontent: this.con
        }
      });
    },
    res(v, event) {
      if (localStorage.getItem("user") == null) {
        alert("请先登录！");
        return;
      }
      this.title = this.title;
      this.zzaccount = this.zzaccount;
      this.myname = v.myname;
      this.mytximg = v.mytximg;
      this.account = v.myaccount;
      this.con = v.content;
      this.time = v.Time;
      this.$router.push({
        path: "/comtalk",
        query: {
          title: this.title,
          zzaccount: this.zzaccount,
          pltximg: this.mytximg,
          placcount: this.account,
          plcontent: this.con,
          plname: this.myname,
          time: this.time
        }
      });
    },
    nextPage() {
      var vm = this;
      if (vm.currentPage == vm.pageNum - 1) return;
      vm.currentPage++;
    },
    prePage() {
      var vm = this;
      if (vm.currentPage == 0) return;
      vm.currentPage--;
    },
    // 显示第几页

    dataShow() {
      let start = this.currentPage * this.pageSize;
      let end = Math.min(
        (this.currentPage + 1) * this.pageSize,
        this.list.length
      );
      return this.list.slice(start, end);
    },
    pageNum: function() {
      return Math.ceil(this.list.length / this.pageSize) || 1;
    },
    formatter(date) {
      return `${date.split("T")[0]} ${date.split("T")[1].split(".")[0]}`;
    }
  },
  created() {
    this.get();
    this.getzz();
    this.getname();
  },
  mounted() {}
};
</script>
<style  scoped>
.comlist {
  width: 900px;
  height: 650px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
  margin-bottom: 30px;
}
.list {
  width: 900px;
  position: relative;

  border-bottom: 1px solid rgba(133, 133, 133, 0.404);
  padding-bottom: 20px;
}
.title {
  width: 200px;
  text-align: left;
  position: relative;
  left: 90px;
  top: -30px;
  font-size: 18px;
}
.main {
  width: 800px;

  text-align: left;
  position: relative;
  top: 20px;
  left: 90px;
}
.time {
  width: 300px;
  text-align: left;
  position: relative;
  color: rgba(202, 202, 202, 0.822);
  top: -40px;
  left: 90px;
  font-size: 12px;
}
.list img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  left: -400px;
  top: 25px;
}
.res {
  position: relative;

  left: 350px;
  top: 10px;
}
.more {
  position: relative;

  left: 350px;
  top: 10px;
}
.comment {
  width: 500px;
  position: relative;
  left: 100px;
  top: 80px;
}

.pl {
  position: relative;
  width: 250px;
  text-align: left;
  left: 50px;
  top: 30px;
}
.line {
  position: relative;
  top: 20px;
}
.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.pop {
  background-color: #fff;
  position: fixed;
  top: 100px;
  left: 300px;
  width: calc(100% - 600px);
  height: calc(100% - 400px);
  z-index: 2;
}
.page {
  position: relative;
  left: -20px;
  top: 20px;
}
</style>