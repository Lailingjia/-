<template>
  <div class="zan">
    <el-button
      type="danger"
      class="dz"
      icon="el-icon-sunny"
      @click="zan"
      :disabled="mes"
    >{{message}}</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["title", "author"],
  data() {
    return {
      message: "",
      message1: "点赞",

      list: [],
      tximg: "",
      name: "",
      mes: false,
      zzaccount: "",
      data: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      if (localStorage.getItem("user") == null) {
        this.message = this.message1;
        this.mes = true;
      }
      let mes = {
        account: data1.account,
        title: this.title,
        author: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/zan/getinfo", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list.length;
          if (this.list == 0) {
            this.message = this.message1;
          } else {
            this.message = res.data.list[0].message;
            this.mes = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    zan() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        title: this.title,
        author: this.author,
        tximg: this.tximg,
        name: this.name,
        zzaccount: this.zzaccount
      };
      var url = "/api";
      this.$axios
        .post(url + "/zan/add", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list[0].message;
          this.message = this.list;
          this.$router.go(0);
          console.log(this.message);
        })
        .catch(err => {
          console.log(err);
        });
    },
    gettx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getuser", mes)
        .then(res => {
          console.log(res.data);
          this.tximg = res.data.list[0].tximg;
          this.name = res.data.list[0].name;
          console.log(this.name);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getzzaccount() {
      let mes = {
        name: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getxx", mes)
        .then(res => {
          console.log(res.data);
          this.data = res.data.list;
          this.zzaccount = this.data[0].account;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get();
    this.gettx();
    this.getzzaccount();
  },
  mounted() {}
};
</script>
<style scoped>
.zan {
  width: 300px;
  height: 80px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}
.dz {
  width: 250px;
  position: relative;
  top: 20px;
}
</style>