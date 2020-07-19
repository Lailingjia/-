<template>
  <div class="comment">
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入评论内容"
      v-model="content"
      class="intext"
      maxlength="20"
      show-word-limit
    ></el-input>
    <el-button type="primary" class="bt" @click="send">发表</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["title", "author"],
  data() {
    return {
      list: [],
      data: [],
      content: "",
      myname: "",
      mytximg: "",
      zzaccount: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
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
          this.list = res.data.list;
          this.myname = this.list[0].name;
          this.mytximg = this.list[0].tximg;
        })
        .catch(err => {
          console.log(err);
        });
    },
    send() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      if (localStorage.getItem("user") == null) {
        alert("请先登录！");
        return;
      }
      let mes = {
        myaccount: data1.account,
        mytximg: this.mytximg,
        title: this.title,
        author: this.author,
        content: this.content,
        myname: this.myname,
        zzaccount: this.zzaccount
      };
      var url = "/api";
      this.$axios
        .post(url + "/com/add", mes)
        .then(res => {
          console.log(res.data);
          this.open();
        })
        .catch(err => {
          console.log(err);
        });
    },
    open() {
      this.$alert("评论成功", "", {
        confirmButtonText: "确定",
        callback: action => {
          this.$router.go(0);
        }
      });
    }
  },
  created() {
    this.getname();
    this.get();
  },
  mounted() {}
};
</script>
<style  scoped>
.comment {
  width: 900px;
  height: 100px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}

.intext {
  width: 700px;
  position: relative;
  top: 20px;
  left: 0px;
}
.bt {
  position: relative;
  top: 10px;
  width: 80px;
  left: 10px;
}
</style>