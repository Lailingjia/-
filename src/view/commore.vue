<template>
  <div class="commore">
    <Topbar class="tb"></Topbar>
    <div class="comlist">
      <div class="pl">
        <b>更多评论</b>
      </div>
      <el-divider class="line"></el-divider>
      <div class="list" v-for="(v,i) in list" :key="i">
        <img :src="v.mytximg" class="tx" />
        <div class="title">
          <b>{{v.myname}}</b>
        </div>
        <div class="main">{{v.content}}</div>
        <div class="time">发表于：{{v.Time}}</div>
        <!-- <el-button round class="res" size="small">回复</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
export default {
  components: {
    Topbar
  },
  props: {},
  data() {
    return {
      title: "",
      zzaccount: "",
      placcount: "",
      content: "",
      list: []
    };
  },
  watch: {
    $route: "get"
  },
  computed: {},
  methods: {
    get() {
      var data = this.$route.query.placcount;
      var data1 = this.$route.query.plcontent;
      var data2 = this.$route.query.title;
      var data3 = this.$route.query.zzaccount;
      // 将数据放在当前组件的数据内
      console.log("传来的参数====" + data + data1 + data2 + data3);
      this.placcount = data;
      this.content = data1;
      this.title = data2;
      this.zzaccount = data3;
      this.getcom();
    },
    getcom() {
      let mes = {
        title: this.title,
        zzaccount: this.zzaccount,
        placcount: this.placcount,
        plcontent: this.content
      };
      var url = "/api";
      this.$axios
        .post(url + "/res/getres", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
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
<style  scoped>
.tb {
  position: fixed;
  top: 0%;
  z-index: 2;
}
.comlist {
  position: relative;
  top: 80px;
  left: 300px;
  width: 900px;
  height: 650px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
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
</style>