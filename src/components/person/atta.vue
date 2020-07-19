<template>
  <div class="atta">
    <div class="block" v-for="(v,i) in dataShow()" :key="i">
      <img :src="v.tximg" @click="dec(v,$event)" class="tu" />
      <p class="zpm" style="font-size:18px;position:relative;left:160px;top:-100px;width:100px">
        <b>作者名:</b>
      </p>
      <p class="title" style="font-size:18px;position:relative;left:200px;top:-143px;width:200px">
        <b>{{ v.author }}</b>
      </p>
      <p class="zpm" style="font-size:16px;position:relative;left:160px;top:-140px;width:100px">账号:</p>
      <p
        class="author"
        style="font-size:16px;position:relative;left:250px;color:gray;top:-175px;width:300px;text-align: left"
      >{{ v.zzaccount }}</p>
      <el-button round class="del" size="small" type="danger" @click="del(v,$event)">取消关注</el-button>
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
      pageSize: 4,
      currentPage: 0,
      name: "",
      myname: "",
      title: "",
      zzaccount: "",
      message: "",
      message1: "你还没关注任何人，快去看看吧"
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
          this.getgz();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getgz() {
      let mes = {
        name: this.myname
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/getgz", mes)
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
      var data1 = JSON.parse(localStorage.getItem("user"));
      this.zzaccount = v.zzaccount;
      let mes = {
        zzaccount: this.zzaccount,
        account: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/gz/del", mes)
        .then(res => {
          console.log(res.data);
          alert("取消成功");
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
      this.name = v.author;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
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
.xx {
  position: relative;
  top: 100px;
  left: 0px;
}
.atta {
  width: 890px;

  border: 1px solid rgb(226, 226, 226);
  height: 650px;
  box-shadow: 0 0 25px #e2e2e2;
}
.block {
  height: 120px;
  width: 800px;
  position: relative;
  margin-bottom: 10px;
  left: 50px;
  top: 60px;
  background-color: rgb(243, 243, 243);
  border-radius: 5px;
}
.tu {
  position: relative;
  left: -300px;
  top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.page {
  position: relative;
  top: 80px;
}
.del {
  position: relative;
  top: -230px;
  left: 330px;
}
.mes {
  position: relative;
  top: 100px;
}
</style>