<template>
  <div class="aboutcom">
    <div class="title">
      <p>
        <b>评论回复</b>
      </p>
    </div>
    <el-divider class="line"></el-divider>
    <div class="list" v-for="(v,i) in dataShow()" :key="i">
      <img :src="v.mytximg" class="tx" @click="dec(v,$event)" />
      <div class="name">
        <b>{{v.myname}}</b>回复了你
      </div>

      <div class="main">{{v.content}}</div>
      <div class="time">发表于：{{formatter(v.Time)}}</div>
      <div class="area">
        <div class="from">
          From：
          <b>{{v.title}}</b>
        </div>
        <div class="mypl">我的评论:</div>
        <div class="pl">{{v.plcontent}}</div>
      </div>

      <el-button class="res" plain @click="res(v,$event)">回复</el-button>
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
  props: {},
  data() {
    return {
      list: [],
      pageSize: 3,
      currentPage: 0,
      message: "",
      message1: "还没人回复你"
    };
  },
  watch: {},
  computed: {},
  methods: {
    getcom() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        placcount: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/res/getrescom", mes)
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
    res(v, event) {
      this.title = v.title;
      this.zzaccount = v.zzaccount;
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
    dec(v, event) {
      this.name = v.myname;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
      });
    },
    formatter(date) {
      return `${date.split("T")[0]} ${date.split("T")[1].split(".")[0]}`;
    }
  },
  created() {
    this.getcom();
  },
  mounted() {}
};
</script>
<style  scoped>
.aboutcom {
  width: 900px;

  border: 1px solid rgb(226, 226, 226);
  height: 1000px;
  box-shadow: 0 0 25px #e2e2e2;
  margin-bottom: 30px;
}
.title {
  position: relative;
  width: 150px;
  text-align: left;
  left: 50px;
}
.list {
  width: 900px;
  position: relative;
  top: -20px;
  border-bottom: 1px solid rgba(133, 133, 133, 0.404);
  padding-bottom: 20px;
}
.name {
  width: 400px;
  text-align: left;
  position: relative;
  left: 120px;
  top: -30px;
  font-size: 14px;
}
.name b {
  font-size: 18px;
  margin-right: 20px;
}
.main {
  width: 800px;

  text-align: left;
  position: relative;
  top: 20px;
  left: 120px;
}
.time {
  width: 300px;
  text-align: left;
  position: relative;
  color: rgba(202, 202, 202, 0.822);
  top: -40px;
  left: 120px;
  font-size: 12px;
}
.list img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  left: -370px;
  top: 25px;
}
.from {
  position: relative;
  width: 400px;
  text-align: left;
  left: 20px;
  top: 10px;
}
.res {
  position: relative;

  left: 350px;
  top: 10px;
}
.page {
  position: relative;
  top: 20px;
}
.mypl {
  position: relative;
  width: 200px;
  text-align: left;
  top: 15px;
  left: 20px;
}
.pl {
  position: relative;
  width: 600px;
  text-align: left;
  top: -6px;
  left: 100px;
}
.area {
  position: relative;
  top: 20px;
  left: 100px;
  width: 600px;
  height: 100px;

  background-color: rgba(202, 202, 202, 0.473);
}
.mes {
  position: relative;
}
</style>