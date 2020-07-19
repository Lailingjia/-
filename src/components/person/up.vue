<template>
  <div class="up">
    <span>您好，欢迎来到岚空，使用更多功能请升级用户!</span>
    <el-button type="warning" @click="up" :disabled="mes">升级为画师</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      acctype: "",
      mes: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    up() {
      this.$router.replace({ path: "/updetail" });
    },
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
          this.acctype = res.data.list[0].acctype;
          if (this.acctype == 1) {
            this.mes = true;
          }
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
.up {
  width: 900px;
  height: 80px;
  border: 1px solid rgb(233, 233, 233);
  box-shadow: 0 0 25px #e2e2e2;
}
.up span {
  position: relative;
  font-size: 19px;
  float: left;
  left: 80px;
  top: 25px;
}
.el-button {
  position: relative;
  top: 20px;
  left: 100px;
  border-radius: 50px;
  background-color: yellow;
  color: black;
}
</style>