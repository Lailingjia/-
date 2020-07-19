<template>
  <div class="detail">
    <el-backtop></el-backtop>
    <Topbar class="tb"></Topbar>
    <smain class="smain" :title="title" :author="author"></smain>
    <soldmes class="sd" :price="price" :title="title" :author="author"></soldmes>
    <othersold class="os" :author="author"></othersold>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import smain from "../components/detail/smain";
import soldmes from "../components/detail/soldmes";
import othersold from "../components/detail/othersold";
export default {
  components: {
    Topbar,
    soldmes,
    smain,
    othersold
  },
  props: {},
  data() {
    return {
      title: "",
      price: "",
      author: "",
      list: []
    };
  },
  watch: {
    $route: "get"
  },
  computed: {},
  methods: {
    get() {
      var data = this.$route.query.title;
      var data1 = this.$route.query.price;
      var data2 = this.$route.query.author;
      if (data == null || data1 == null || data2 == null) {
        alert("页面错误");
        this.$router.push({ path: "/index" });
      } else {
        // 将数据放在当前组件的数据内
        console.log("传来的参数==" + data + data1 + data2);
        this.title = data;
        this.price = data1;
        this.author = data2;
      }
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style scoped>
.tb {
  position: fixed;
  top: 0%;
  z-index: 1;
}
.sd {
  position: fixed;
  right: 8.5%;
  top: 18.5%;
  z-index: 0;
}
.smain {
  position: relative;

  top: 80px;
  left: 100px;
}
.os {
  position: relative;
  top: 100px;
  left: 80px;
}
</style>