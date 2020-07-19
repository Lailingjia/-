<template>
  <div class="talk">
    <el-avatar :size="40" class="tx">
      <img :src="this.urlimg" />
    </el-avatar>
    <div class="name">
      <p>{{name}}</p>
    </div>
    <div class="int">
      <p class="in">TO:</p>
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入私聊内容"
        v-model="content"
        class="intext"
        maxlength="50"
        show-word-limit
      ></el-input>
      <el-button type="primary" class="bt2" @click="send">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["name"],
  data() {
    return {
      urlimg: "",
      content: "",
      account: "",
      sendname: "",
      tximg: "",
      list: [],
      data: []
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
          this.list = res.data.list;
          this.urlimg = this.list[0].tximg;
          this.account = this.list[0].account;
        })
        .catch(err => {
          console.log(err);
        });
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
          this.sendname = this.data[0].name;
          this.tximg = this.data[0].tximg;
        })
        .catch(err => {
          console.log(err);
        });
    },
    send() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        tximg: this.tximg,
        sender: data1.account,
        accepter: this.account,
        content: this.content,
        name: this.sendname
      };
      var url = "/api";
      this.$axios
        .post(url + "/talk/add", mes)
        .then(res => {
          console.log(res.data);
          this.open();
        })
        .catch(err => {
          console.log(err);
        });
    },
    open() {
      this.$alert("发送成功", "", {
        confirmButtonText: "确定",
        callback: action => {
          this.$router.go(0);
        }
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
.talk {
  width: 900px;
  height: 580px;
  box-shadow: 0 0 25px #e2e2e2;
  border: 1px solid rgb(241, 241, 241);
}
.tx {
  position: relative;
  top: 115px;
  left: -250px;
}
.name {
  position: relative;
  text-align: left;
  width: 100px;
  height: 50px;
  left: 230px;
  top: 65px;
}
.int {
  position: relative;
  width: 800px;
  left: 50px;
}
.in {
  width: 200px;
}
.intext {
  width: 700px;
}
.bt2 {
  position: relative;
  top: 100px;

  width: 100px;
}
</style>