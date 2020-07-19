<template>
  <div class="reg">
    <div class="title">
      <p>
        <b>注册新账户</b>
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
      <el-form-item label="确认密码:" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请确认密码"
          style="width:350px;position:relative;left:-20px;"
        ></el-input>
      </el-form-item>
      <el-form-item label="昵称:" prop="name">
        <el-input
          v-model.number="ruleForm.name"
          placeholder="请输入昵称"
          style="width:350px;position:relative;left:-20px;"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机:" prop="phone">
        <el-input
          v-model.number="ruleForm.phone"
          placeholder="请输入手机号码"
          style="width:350px;position:relative;left:-20px;"
        ></el-input>
      </el-form-item>
      <el-form-item class="bt">
        <el-button type="primary" @click="get">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
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
    var checkname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      }
    };
    var checkphone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机不能为空"));
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
        name: "",
        phone: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkusername, trigger: "blur" }],
        name: [{ validator: checkname, trigger: "blur" }],
        phone: [{ validator: checkphone, trigger: "blur" }]
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
      var url = "/api";
      this.$axios
        .post(url + "/user/reg", {
          account: this.ruleForm.username,
          password: this.ruleForm.pass,
          name: this.ruleForm.name,
          phone: this.ruleForm.phone
        })
        .then(res => {
          console.log(res.data);
          this.ruleForm.msg = res.data.msg;
          if (this.ruleForm.msg === "注册成功") {
            // alert("注册成功");
            // this.$router.push({ path: "/login" });
            this.open();
          } else if (this.ruleForm.msg === "用户名已存在") {
            alert("用户名已存在");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    open() {
      this.$alert("注册成功", "", {
        confirmButtonText: "确定",
        callback: action => {
          this.$router.push({ path: "/login" });
        }
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