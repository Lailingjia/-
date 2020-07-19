<template>
  <div class="comtalk">
    <Topbar class="tb"></Topbar>
    <div class="talk">
      <div class="pl">
        <b>回复的评论：</b>
      </div>
      <div class="plxx">
        <img :src="tximg" class="tx" />
        <div class="name">
          <b>{{name}}</b>
        </div>
        <div class="time">{{time}}</div>
        <div class="main">{{content}}</div>
      </div>
      <div class="comment">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入评论内容"
          v-model="newcontent"
          class="intext"
          maxlength="20"
          show-word-limit
        ></el-input>
        <el-button
          type="primary"
          class="bt"
          @click="send"
          style="position:relative;left:0px;top:55px;"
        >发表</el-button>
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
      time: "",
      placcount: "",
      content: "",
      tximg: "",
      name: "",
      newcontent: "",
      myname: "",
      mytximg: "",
      zzaccount: ""
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
      var data4 = this.$route.query.pltximg;
      var data5 = this.$route.query.plname;
      var data6 = this.$route.query.time;
      // 将数据放在当前组件的数据内
      console.log("传来的参数====" + data + data1 + data2 + data3);
      this.placcount = data;
      this.content = data1;
      this.title = data2;
      this.zzaccount = data3;
      this.tximg = data4;
      this.name = data5;
      this.time = data6;
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

    send() {
      var data1 = JSON.parse(localStorage.getItem("user"));

      let mes = {
        title: this.title,
        zzaccount: this.zzaccount,
        myaccount: data1.account,
        mytximg: this.mytximg,
        content: this.newcontent,
        myname: this.myname,
        plname: this.name,
        plcontent: this.content,
        placcount: this.placcount
      };
      var url = "/api";
      this.$axios
        .post(url + "/res/add", mes)
        .then(res => {
          console.log(res.data);
          alert("评论成功");
          this.$router.go(-1); //刷新页面
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get();
    this.getname();
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
.pl {
  position: relative;
  width: 250px;
  text-align: left;
  left: 50px;
  top: 30px;
}
.plxx {
  position: relative;
  top: 50px;
  left: 50px;
  width: 800px;

  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}
.talk {
  width: 900px;
  height: 600px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
  position: relative;
  top: 80px;
  left: 300px;
}
.tx {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  left: -350px;
  top: 25px;
}
.name {
  position: relative;
  width: 300px;
  text-align: left;
  left: 100px;
  top: -20px;
}
.time {
  position: relative;
  width: 300px;
  text-align: left;
  font-size: 14px;
  color: rgba(128, 128, 128, 0.562);
  left: 100px;
  top: -20px;
}
.main {
  position: relative;
  left: 100px;
  width: 600px;
  height: 80px;
  text-align: left;
}
.comment {
  position: relative;
  width: 700px;
  height: 200px;
  top: 100px;
  left: 100px;
}
</style>