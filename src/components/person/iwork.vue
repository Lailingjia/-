<template>
  <div class="iwork">
    <div class="block" v-for="(v,i) in dataShow()" :key="i">
      <img :src="v.img" @click="dec(v,$event)" class="tu" />
      <p
        class="zpm"
        style="font-size:18px;position:relative;left:350px;top:-170px;width:100px;text-align:left"
      >
        <b>作品名:</b>
      </p>
      <p
        class="title"
        style="font-size:18px;position:relative;left:420px;top:-212px;width:200px;text-align:left"
      >
        <b>{{ v.title }}</b>
      </p>
      <p
        class="zpm"
        style="font-size:16px;position:relative;left:350px;top:-200px;width:100px;text-align: left"
      >介绍:</p>
      <p
        class="author"
        style="font-size:16px;position:relative;left:400px;color:gray;top:-235px;width:300px;text-align: left"
      >{{ v.intro }}</p>
      <p
        class="zpm"
        style="font-size:16px;position:relative;left:350px;top:-200px;width:100px;text-align:left;"
      >发布日期:</p>
      <p
        class="author"
        style="font-size:14px;position:relative;left:420px;color:gray;top:-234px;width:300px;text-align: left"
      >{{ formatter(v.Time) }}</p>
      <el-button round class="del" size="small" type="danger" @click="del(v,$event)">删除</el-button>
    </div>
    <div class="mes">{{message}}</div>
    <el-pagination
      background
      layout="total,prev, pager,next"
      :total="this.list.length"
      :page-size="pageSize"
      @prev-click="prePage"
      @next-click="nextPage"
      class="page"
      hide-on-single-page
    ></el-pagination>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [],
      pageSize: 3,
      currentPage: 0,
      name: "",
      myname: "",
      title: "",
      message: "",
      message1: "暂无作品信息"
    };
  },
  watch: {},
  computed: {},
  methods: {
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
          this.myname = res.data.list[0].name;
          this.getpro();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getpro() {
      let mes = {
        author: this.myname
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/getper", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          if (this.list.length == 0) {
            this.message = this.message1;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    del(v, event) {
      this.title = v.title;
      let mes = {
        title: this.title
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/delet", mes)
        .then(res => {
          console.log(res.data);
          alert("删除成功");
          this.$router.go(0); //刷新页面
        })
        .catch(err => {
          console.log(err);
        });
    },
    nextPage() {
      var vm = this;
      if (vm.currentPage == vm.pageNum - 1) return;
      vm.currentPage++;
    },
    prePage() {
      var vm = this;
      if (vm.currentPage == 0) return;
      vm.currentPage--;
    },
    // 显示第几页

    dataShow() {
      let start = this.currentPage * this.pageSize;
      let end = Math.min(
        (this.currentPage + 1) * this.pageSize,
        this.list.length
      );
      return this.list.slice(start, end);
    },
    pageNum: function() {
      return Math.ceil(this.list.length / this.pageSize) || 1;
    },
    dec(v, event) {
      console.log(v);
      this.title = v.title;
      this.author = v.author;
      this.$router.push({
        path: "/detail",
        query: {
          title: this.title,
          author: this.author
        }
      });
    },
    dec2(v, event) {
      console.log(v);
      this.name = v.author;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
      });
    },
    formatter(date) {
      return `${date.split("T")[0]} ${date.split("T")[1].split(".")[0]}`;
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style scoped>
.xx {
  position: relative;
  left: 0px;
}
.iwork {
  width: 890px;
}
.block {
  height: 170px;
  position: relative;
  margin-bottom: 10px;
  top: -35px;
  background-color: rgb(243, 243, 243);
  border-radius: 5px;
}
.tu {
  position: relative;
  left: -290px;
  width: 300px;
  height: 170px;
}
.page {
  position: relative;
  top: -30px;
}
.del {
  position: relative;
  top: -350px;
  left: 360px;
}
.mes {
  position: relative;
  top: 100px;
}
</style>