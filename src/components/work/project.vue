<template>
  <div class="pro">
    <div class="block" v-for="(v,i) in dataShow()" :key="i">
      <!-- <el-image style="width: 275px; height: 190px;" :src="url"></el-image> -->
      <img :src="v.img" @click="dec(v,$event)" class="tu" />
      <p class="title" style="font-size:16px;position:relative;left:25px;top:0px;text-align:left;">
        <b>{{ v.title }}</b>
      </p>

      <p
        class="author"
        style="font-size:14px;position:relative;left:60px;color:gray;top:0px;text-align:left;"
      >{{ v.author }}</p>
      <img :src="v.tximg" class="tx" @click="dec2(v,$event)" />
      <p class="time">发布于:{{formatter(v.Time)}}</p>
    </div>

    <!-- <el-button type="primary" @click="prePage">上一页</el-button>
    <el-button type="primary" @click="nextPage">下一页</el-button>-->

    <el-pagination
      background
      layout="total,prev, pager,next"
      :total="this.list.length"
      :page-size="pageSize"
      @prev-click="prePage"
      @next-click="nextPage"
      class="page"
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
      pageSize: 16,
      currentPage: 0,
      name: ""
    };
  },
  watch: {},
  computed: {
    // dataShow: function() {
    //   let start = this.currentPage * this.pageSize;
    //   let end = Math.min(
    //     (this.currentPage + 1) * this.pageSize,
    //     this.list.length
    //   );
    //   return this.list.slice(start, end);
    // },
    // pageNum: function() {
    //   return Math.ceil(this.list.length / this.pageSize) || 1;
    // }
  },
  methods: {
    get() {
      var url = "/api";
      this.$axios
        .post(url + "/pro/getinfo")
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
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
.pro {
  width: 1500px;
}
.block {
  height: 280px;
  position: relative;
  left: 140px;
  float: left;
  margin-left: 30px;
  margin-top: 25px;
  background-color: rgb(243, 243, 243);
  border-radius: 5px;
}
.tu {
  width: 275px;
  height: 190px;
}
.tx {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  top: -40px;
  left: -100px;
}
.page {
  position: relative;
  height: 50px;
  top: 1250px;
  left: -620px;
}
.time {
  position: relative;
  width: 200px;
  text-align: left;
  font-size: 10px;
  color: gray;
  left: 145px;
  top: -60px;
}
</style>