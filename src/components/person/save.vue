<template>
  <div class="save">
    <div class="title">
      <p>
        <b>密码设置</b>
      </p>
    </div>
    <div class="new">
      <p>旧密码</p>
      <el-input placeholder="请输入旧密码" v-model="input" clearable class="mima"></el-input>
    </div>
    <div class="redo">
      <p>新密码</p>
      <el-input placeholder="请输入新密码" v-model="reinput" clearable class="remima"></el-input>
    </div>
    <el-button type="primary" @click="alter" class="bt">修改</el-button>
    <div class="tu">
      <img src="../../image/mm.jpeg" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      input: "",
      reinput: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    alter() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      if (data1.password != this.input) {
        this.open();
        return;
      }
      let mes = {
        account: data1.account,
        password: this.reinput
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/updatepass", mes)
        .then(res => {
          console.log(res.data);

          this.right();
        })
        .catch(err => {
          console.log(err);
        });
    },
    open() {
      this.$alert("原密码输入不正确", "", {
        confirmButtonText: "确定",
        callback: action => {
          this.$router.go(0);
        }
      });
    },
    right() {
      this.$alert("修改成功！", "", {
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
.save {
  width: 900px;
  height: 650px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}
.title {
  position: relative;
  width: 100px;
  left: 55px;
  margin-top: 50px;
  margin-bottom: 30px;
}
.new p {
  position: relative;
  width: 100px;
  left: 50px;
}
.mima {
  width: 300px;
  position: relative;
  left: -230px;
}
.redo p {
  position: relative;
  width: 100px;
  left: 55px;
}
.remima {
  width: 300px;
  position: relative;
  left: -230px;
}
.bt {
  position: relative;
  top: 50px;
  left: -340px;
}
.tu {
  position: relative;
  width: 400px;
  height: 400px;

  top: -300px;
  left: 400px;
}
.tu img {
  width: 400px;
  height: 400px;
}
</style>