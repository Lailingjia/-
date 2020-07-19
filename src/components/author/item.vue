<template>
  <div class="iwork">
    <div class="list" v-for="(v,i) in dataShow()" :key="i">
      <img :src="v.tximg" @click="dec(v,$event)" class="tx" />
      <p class="name">
        <b>{{v.author}}</b>
      </p>
      <p class="time">发布于：{{formatter(v.Time)}}</p>
      <el-button round type="success" class="xq" @click="dec(v,$event)">详情</el-button>
      <img :src="v.img" class="work" @click="dec2(v,$event)" />
    </div>

    <el-pagination
      background
      layout="total,prev, pager,next"
      :total="this.list.length"
      :page-size="pagesize"
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
      data: [],
      pagesize: 10,
      currentPage: 0,
      name: "",
      title: ""
    };
  },
  watch: {},
  computed: {},
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
    dataShow() {
      let start = this.currentPage * this.pagesize;
      let end = Math.min(
        (this.currentPage + 1) * this.pagesize,
        this.list.length
      );
      return this.list.slice(start, end);
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
    },
    dec2(v, event) {
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
    formatter(date) {
      return `${date.split("T")[0]} ${date.split("T")[1].split(".")[0]}`;
    }
  },
  created() {
    this.get();
  },
  updated() {},
  mounted() {}
};
</script>
<style scoped>
.iwork {
  width: 1200px;
}
.list {
  width: 1050px;
  height: 200px;
  left: 50px;
  position: relative;
  background-color: white;
  border-bottom: 1px solid rgb(160, 160, 160);
}
.tx {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  top: 20px;
  left: -400px;
}
.name {
  position: relative;
  width: 200px;
  text-align: left;
  left: 220px;
  top: -75px;
  font-size: 22px;
  color: black;
}
.page {
  display: flex;
  justify-content: center;
  position: relative;
  height: 50px;
  top: 50px;
  left: -50px;
}
.xq {
  position: relative;
  left: -200px;
  top: -240px;
}
.data {
  position: relative;
}
.data img {
  width: 150px;
  height: 100px;
  float: left;
}
.work {
  position: relative;
  left: 250px;
  top: -205px;
  width: 400px;
  height: 190px;
}
.time {
  position: relative;
  width: 400px;
  text-align: left;
  font-size: 15px;
  left: 350px;
}
</style>