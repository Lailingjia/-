<template>
  <div class="message">
    <el-avatar :size="105" class="tx">
      <img :src="this.urlimg" />
    </el-avatar>
    <p class="name">
      <b>{{name}}</b>
    </p>
    <p class="zan">人气值:</p>
    <p class="zannum">
      <b>{{zan}}</b>
    </p>
    <p class="gz">关注:</p>
    <p class="gznum">
      <b>{{gz}}</b>
    </p>
    <p class="work">作品:</p>
    <p class="worknum">
      <b>{{work}}</b>
    </p>
    <p class="fs">粉丝:</p>
    <p class="fsnum">
      <b>{{fs}}</b>
    </p>
    <el-divider class="line"></el-divider>
    <p class="log">
      <b>登录账户</b>
    </p>
    <p class="pho">手机:</p>
    <p class="phone">{{phone}}</p>
    <p class="data">
      <b>基本资料</b>
    </p>
    <p class="ui">UID:</p>
    <p class="uid">{{uid}}</p>
    <p class="acc">账户类型:</p>
    <p class="type">{{acctype}}</p>
    <p class="int">个人简介:</p>
    <p class="intro">{{intro}}</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      urlimg: "",
      name: "",
      phone: "",
      uid: "",
      acctype: "",
      type1: "普通账户",
      type2: "画师用户",
      intro: "",
      zan: "",
      gz: "",
      work: "",
      fs: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      var data1 = JSON.parse(localStorage.getItem("user"));

      let mes = {
        account: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getuser", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          this.urlimg = result.list["0"].tximg;
          this.name = result.list["0"].name;
          this.phone = result.list["0"].phone;
          this.uid = result.list["0"].account;
          this.acctype = result.list["0"].acctype;
          if (this.acctype == 0) {
            this.acctype = this.type1;
          } else {
            this.acctype = this.type2;
          }
          this.intro = result.list["0"].intro;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getzan() {
      var data1 = JSON.parse(localStorage.getItem("user"));

      let mes = {
        zzaccount: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/zan/getzannum", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          this.zan = res.data.list.length * 10;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getgz() {
      var data1 = JSON.parse(localStorage.getItem("user"));

      let mes = {
        account: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/getgznum", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          this.gz = res.data.list.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getwork() {
      var data1 = JSON.parse(localStorage.getItem("user"));

      let mes = {
        myaccount: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/getiwork", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          this.work = res.data.list.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getfs() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        zzaccount: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/getfsnum", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          this.fs = res.data.list.length;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get();
    this.getzan();
    this.getgz();
    this.getwork();
    this.getfs();
  },
  mounted() {}
};
</script>
<style scoped>
.message {
  width: 900px;
  height: 550px;
  border: 1px solid rgb(235, 235, 235);
  box-shadow: 0 0 25px #e2e2e2;
}
.tx {
  position: relative;
  left: -300px;
  top: 50px;
}
.name {
  position: relative;
  left: 180px;
  top: -50px;
  font-size: 24px;
  width: 200px;
}
.log {
  position: relative;
  left: 40px;
  width: 200px;
  font-size: 18px;
  top: -300px;
}
.pho {
  position: relative;
  left: -320px;
  top: -300px;
}
.phone {
  position: relative;
  left: 165px;
  top: -334px;
  width: 200px;
}
.data {
  position: relative;
  left: 40px;
  width: 200px;
  top: -320px;
}
.ui {
  position: relative;
  left: -320px;
  top: -315px;
}
.uid {
  position: relative;
  left: 165px;
  width: 200px;
  top: -350px;
}
.acc {
  position: relative;
  left: -305px;
  top: -345px;
}
.type {
  position: relative;
  left: 155px;
  width: 200px;
  top: -383px;
}
.int {
  position: relative;
  left: -305px;
  top: -375px;
}
.intro {
  position: relative;
  left: 165px;
  width: 200px;
  top: -412px;
}
.line {
  position: relative;
  top: -300px;
}
.zan {
  position: relative;
  width: 100px;
  text-align: left;
  left: 260px;
  top: -50px;
}
.zannum {
  position: relative;
  width: 50px;
  text-align: left;
  left: 320px;
  top: -84px;
}
.gz {
  position: relative;
  width: 100px;
  text-align: left;
  left: 360px;
  top: -122px;
}
.gznum {
  position: relative;
  width: 50px;
  text-align: left;
  left: 405px;
  top: -156px;
}
.work {
  position: relative;
  width: 100px;
  text-align: left;
  left: 440px;
  top: -194px;
}
.worknum {
  position: relative;
  width: 50px;
  text-align: left;
  left: 490px;
  top: -228px;
}
.fs {
  position: relative;
  width: 100px;
  text-align: left;
  left: 530px;
  top: -265px;
}
.fsnum {
  position: relative;
  width: 50px;
  text-align: left;
  left: 580px;
  top: -298px;
}
</style>