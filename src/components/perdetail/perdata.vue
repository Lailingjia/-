<template>
  <div class="per">
    <div class="head">
      <img src="./../../image/head.png" />
    </div>
    <el-avatar :size="135" class="tx">
      <img :src="this.urlimg" />
    </el-avatar>
    <p class="name">
      <b>{{cname}}</b>
    </p>
    <div class="title">
      <p>
        <b>资料</b>
      </p>
    </div>
    <el-divider class="line"></el-divider>
    <p class="pho">昵称:</p>
    <p class="phone">{{cname}}</p>
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
  props: ["name"],
  data() {
    return {
      urlimg: "",
      cname: "",
      uid: "",
      acctype: "",
      type1: "普通账户",
      type2: "画师用户",
      intro: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      let mes = {
        name: this.name
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getxx", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          this.urlimg = result.list["0"].tximg;
          this.cname = result.list["0"].name;

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
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style scoped>
.per {
  width: 900px;
  height: 450px;
}
.title {
  position: relative;
  height: 10px;
  width: 50px;
  top: 50px;
}
.head {
  position: relative;
  left: -295px;
  top: -20px;
  width: 1200px;
  height: 100px;
}
.head img {
  width: 1500px;
  height: 250px;
}
.tx {
  position: relative;
  left: 0px;
  top: 60px;
}
.name {
  position: relative;
  left: 350px;
  top: 70px;
  font-size: 24px;
  width: 200px;
}
.line {
  position: relative;
  top: 50px;
}
.pho {
  position: relative;
  width: 100px;
  text-align: left;
  left: 300px;
  top: 70px;
}
.phone {
  position: relative;
  text-align: left;
  left: 500px;
  top: 32px;
  width: 200px;
}

.ui {
  position: relative;
  width: 100px;
  text-align: left;
  left: 300px;
  top: 50px;
}
.uid {
  position: relative;
  left: 500px;
  text-align: left;
  width: 200px;
  top: 15px;
}
.acc {
  position: relative;
  width: 100px;
  text-align: left;
  left: 300px;
  top: 25px;
}
.type {
  position: relative;
  text-align: left;
  left: 500px;
  width: 200px;
  top: -13px;
}
.int {
  position: relative;
  left: 300px;
  top: -5px;
  width: 100px;
  text-align: left;
}
.intro {
  position: relative;
  left: 500px;
  width: 200px;
  top: -42px;
  text-align: left;
}
</style>