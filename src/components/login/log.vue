<template>
  <div class="reg">
    <div class="title">
      <p>
        <b>登录</b>
      </p>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名:" prop="username">
        <el-input
          v-model.number="ruleForm.username"
          placeholder="请输入用户名"
          style="width:350px;position:relative;left:-20px;"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入密码"
          style="width:350px;position:relative;left:-20px;"
        ></el-input>
      </el-form-item>

      <el-form-item class="bt">
        <el-button type="primary" @click="get">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    var checkusername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      name: "",
      ruleForm: {
        username: "",
        pass: "",
        msg: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkusername, trigger: "blur" }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    get() {
      let mes = {
        account: this.ruleForm.username,
        password: this.ruleForm.pass
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/login", mes)
        .then(res => {
          console.log(res.data);
          this.ruleForm.msg = res.data.msg;
          if (this.ruleForm.msg === "登陆成功") {
            // alert("登陆成功");

            localStorage.setItem("user", JSON.stringify(mes));
            this.$router.push({ path: "/index" });
            this.getname();
          } else {
            alert("用户名或密码不正确");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    yy() {
      this.voicePrompt(`欢迎 + ${this.name} + all system is operate！`);
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
          let result = res.data;
          this.name = result.list["0"].name;
          this.yy();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.reg {
  width: 500px;
  border: 1px solid rgb(235, 235, 235);
  box-shadow: 0 0 25px #e2e2e2;
  background-color: #f8f8f8b2;
}
.bt {
  position: relative;
  left: -50px;
}
.title p {
  font-size: 18px;
}
</style>