<template>
  <div class="upload">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="作品名称" prop="name">
        <el-input v-model="ruleForm.title" style="width: 700px;"></el-input>
      </el-form-item>

      <el-form-item label="作品性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="手绘" name="type"></el-checkbox>
          <el-checkbox label="涂鸦" name="type"></el-checkbox>
          <el-checkbox label="漫画" name="type"></el-checkbox>
          <el-checkbox label="水墨" name="type"></el-checkbox>
          <el-checkbox label="立绘" name="type"></el-checkbox>
          <el-checkbox label="临摹" name="type"></el-checkbox>
          <el-checkbox label="动漫" name="type"></el-checkbox>
          <el-checkbox label="商业插画" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="作品介绍" prop="intro">
        <el-input type="textarea" v-model="ruleForm.intro" style="width: 700px;"></el-input>
      </el-form-item>
      <el-form-item label="上传图片" ref="uploadElement" prop="imageUrl" class="up">
        <div>
          <input type="file" id="saveImage" name="myphoto" />
        </div>
      </el-form-item>
      <el-form-item class="bt">
        <el-button type="primary" @click="imageSubmit">立即发布</el-button>
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
    return {
      ruleForm: {
        title: "",
        author: "",
        type: [],
        intro: "",
        imageSave: "",
        tximg: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入作品名称", trigger: "blur" }
          // { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],

        intro: [{ required: true, message: "请填写作品介绍", trigger: "blur" }],
        imageUrl: [{ required: true, message: "请上传图片", trigger: "blur" }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm.imageUrl = "";
    },
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
          this.ruleForm.author = result.list["0"].name;
          this.ruleForm.tximg = result.list["0"].tximg;
        })
        .catch(err => {
          console.log(err);
        });
    },
    imageSubmit() {
      let x = document.getElementById("saveImage").files[0];
      console.log(x);
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

            this.ruleForm.imageSave = "http://127.0.0.1:3000" + result.img;

            this.alter1();
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    alter1() {
      if (this.ruleForm.title.length == 0) {
        alert("标题不能为空");
        return;
      }
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        myaccount: data1.account,
        author: this.ruleForm.author,
        title: this.ruleForm.title,
        img: this.ruleForm.imageSave,
        intro: this.ruleForm.intro,
        tximg: this.ruleForm.tximg
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/add", mes)
        .then(res => {
          console.log(res.data);
          this.open();
          // this.$router.go(0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    open() {
      this.$alert("发布成功", "", {
        confirmButtonText: "确定",
        callback: action => {
          this.$router.go(0);
        }
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
.upload {
  width: 900px;
  padding-top: 50px;
  height: 550px;
  background-color: white;
  border-radius: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.bt {
  position: relative;
  top: 150px;
  left: -50px;
}
.up {
  position: relative;
  top: 70px;
}
</style>