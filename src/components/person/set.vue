<template>
  <div class="set">
    <el-avatar :size="105" class="tx">
      <img :src="this.urlimg" />
    </el-avatar>

    <div class="up">
      <input type="file" id="saveImage" name="myphoto" />
      <el-button type="primary" @click="imageSubmit" class="bt1">修改</el-button>
    </div>

    <el-divider class="line"></el-divider>
    <p class="title">
      <b>基本资料</b>
    </p>
    <p class="na">昵称:</p>
    <p class="name">
      <b>{{name}}</b>
    </p>
    <div class="al">
      <p>新的昵称:</p>
      <el-input placeholder="请输入新昵称" v-model="ruleForm.input" clearable class="alt"></el-input>
    </div>
    <el-button type="primary" @click="alter" class="bt">提交修改</el-button>

    <div class="int">
      <p class="in">个人简介:</p>
      <el-input type="textarea" :rows="4" placeholder="请输入简介" v-model="textarea" class="intext"></el-input>
      <el-button type="primary" @click="alter2" class="bt2">提交</el-button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  props: {},
  data() {
    return {
      urlimg: "",
      name: "",
      textarea: "",
      imageSave: "",
      ruleForm: {
        input: ""
      }
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
          this.name = result.list["0"].name;
          if (this.ruleForm.input.length == 0) {
            this.ruleForm.input = this.name;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    alter() {
      let mes = {
        name: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getxx", mes)
        .then(res => {
          console.log(res.data);
          this.msg = res.data.list;
          console.log(this.msg);
          if (this.msg.length == 1) {
            alert("昵称已存在");
          } else {
            this.altername();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    altername() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        name: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/update", mes)
        .then(res => {
          console.log(res.data);
          this.alterproname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alterproname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        myaccount: data1.account,
        author: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/updateauthor", mes)
        .then(res => {
          console.log(res.data);
          this.altergzname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altergzname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        name: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/updatename", mes)
        .then(res => {
          console.log(res.data);
          this.altergzzzname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altergzzzname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        zzaccount: data1.account,
        author: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/updatezzname", mes)
        .then(res => {
          console.log(res.data);
          this.altertalkname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altertalkname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        sender: data1.account,
        name: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/talk/updatename", mes)
        .then(res => {
          console.log(res.data);
          this.alterzanname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alterzanname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        name: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/zan/updatename", mes)
        .then(res => {
          console.log(res.data);
          this.alterzanauthor();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alterzanauthor() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        zzaccount: data1.account,
        author: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/zan/updateauthor", mes)
        .then(res => {
          console.log(res.data);
          this.altercomname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altercomname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        myaccount: data1.account,
        myname: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/com/updatename", mes)
        .then(res => {
          console.log(res.data);
          this.altercomauthor();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altercomauthor() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        zzaccount: data1.account,
        author: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/com/updateauthor", mes)
        .then(res => {
          console.log(res.data);
          this.alterresname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alterresname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        myaccount: data1.account,
        myname: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/res/updatename", mes)
        .then(res => {
          console.log(res.data);
          this.altersoldname();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altersoldname() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        author: this.ruleForm.input
      };
      var url = "/api";
      this.$axios
        .post(url + "/sold/updatename", mes)
        .then(res => {
          console.log(res.data);
          alert("修改成功");
          this.$router.go(0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    imageSubmit() {
      let x = document.getElementById("saveImage").files[0];

      let params = new FormData(); //创建一个form对象,必须是form对象否则后端接受不到数据
      params.append("lai", x, x.name); //append 向form表单添加数据
      //添加请求头  通过form添加的图片和文件的格式必须是multipart/form-data
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      var url = "/api";
      this.$axios
        .post(url + "/file/upload", params, config)
        .then(
          function(res) {
            console.log(res);
            let result = res.data;
            this.imageSave = "http://127.0.0.1:3000" + result.img;
            this.alter1();
          }.bind(this)
        )

        .catch(function(error) {
          console.log(error);
        });
    },
    alter1() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        name: this.ruleForm.input,
        tximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/updatetx", mes)
        .then(res => {
          console.log(res.data);
          this.alterprotx();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alter2() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        intro: this.textarea
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/updateintro", mes)
        .then(res => {
          console.log(res.data);
          this.$router.go(0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    altergztx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        tximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/updatetx", mes)
        .then(res => {
          console.log(res.data);
          this.altertalktx();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alterprotx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        myaccount: data1.account,
        tximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/updatetx", mes)
        .then(res => {
          console.log(res.data);
          this.altergztx();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altertalktx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        sender: data1.account,
        tximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/talk/updatetx", mes)
        .then(res => {
          console.log(res.data);
          this.alterzantx();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alterzantx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        tximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/zan/updatetx", mes)
        .then(res => {
          console.log(res.data);
          this.altercomtx();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altercomtx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        myaccount: data1.account,
        mytximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/com/updatetx", mes)
        .then(res => {
          console.log(res.data);
          this.alterrestx();
        })
        .catch(err => {
          console.log(err);
        });
    },
    alterrestx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        myaccount: data1.account,
        mytximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/res/updatetx", mes)
        .then(res => {
          console.log(res.data);
          this.altersoldtx();
        })
        .catch(err => {
          console.log(err);
        });
    },
    altersoldtx() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        account: data1.account,
        tximg: this.imageSave
      };
      var url = "/api";
      this.$axios
        .post(url + "/res/updatetx", mes)
        .then(res => {
          console.log(res.data);
          alert("修改成功");
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
<style scoped>
.set {
  width: 900px;
  height: 650px;
  box-shadow: 0 0 25px #e2e2e2;
  border: 1px solid rgb(241, 241, 241);
}
.tx {
  position: relative;
  left: -300px;
  top: 50px;
}
.line {
  position: relative;
  top: 80px;
}
.title {
  position: relative;
  left: 50px;
  width: 200px;
  top: 100px;
}
.na {
  position: relative;
  top: 120px;
  left: -315px;
}
.name {
  position: relative;
  left: -30px;
  width: 500px;
  top: 83px;
}
.al {
  position: relative;
  left: 150px;
  width: 200px;
  top: 100px;
}
.al p {
  position: relative;
  left: -100px;
}
.alt {
  position: relative;
  left: -35px;

  width: 200px;
}
.bt {
  position: relative;
  top: 150px;
  left: -285px;
}
.int {
  position: relative;
  width: 500px;
  left: 450px;
  top: -150px;
}
.in {
  width: 200px;
}
.intext {
  width: 300px;
}
</style>