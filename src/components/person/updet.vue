<template>
  <div class="up">
    <div class="title">
      <b>升级账号</b>
    </div>
    <el-avatar :size="105" class="tx">
      <img :src="this.urlimg" />
    </el-avatar>
    <el-divider class="line"></el-divider>
    <div class="warn">
      <p class="one">
        <b>提示:</b>
      </p>
      <p class="two">账号设置后将无法修改</p>
    </div>
    <div class="set">设置工作信息</div>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" class="xx" label-width="100px">
      <el-form-item label="微信:">
        <el-input v-model="weixin"></el-input>
      </el-form-item>
      <el-form-item label="QQ号:">
        <el-input v-model="qq"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:">
        <el-input v-model="mail"></el-input>
      </el-form-item>
      <el-form-item label="留言:">
        <el-input v-model="word" type="textarea" :rows="4"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="alter" class="bt">确认</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      labelPosition: "right",
      urlimg: "",
      weixin: "",
      qq: "",
      word: "",
      mail: "",
      acctype: "1"
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      console.log(data1.account);
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
        })
        .catch(err => {
          console.log(err);
        });
    },
    alter() {
      this.alter2();
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        wx: this.weixin,
        qq: this.qq,
        mail: this.mail,
        word: this.word
      };
      var url = "/api";
      this.$axios
        .post(url + "/xinxi/add", mes)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    alter2() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        acctype: this.acctype
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/updatetype", mes)
        .then(res => {
          console.log(res.data);
          this.$router.go(0);
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
.up {
  width: 800px;
  height: 750px;
  box-shadow: 0 0 25px #e2e2e2;
  border: 1px solid rgb(241, 241, 241);
}
.title {
  position: relative;
  width: 200px;
  font-size: 22px;
  top: 50px;
}
.tx {
  position: relative;
  left: 0px;
  top: 80px;
}
.line {
  position: relative;
  top: 100px;
}
.warn {
  width: 600px;
}
.one {
  position: relative;
  top: 37px;
  color: red;
}
.two {
  position: relative;
  left: 100px;
  color: rgb(168, 168, 168);
}
.set {
  position: relative;
  width: 200px;
  top: 20px;
}
.xx {
  position: relative;
  top: 30px;
  left: 100px;
  width: 500px;
}
.bt {
  position: relative;
  top: 50px;
  left: 0px;
  width: 100px;
}
</style>