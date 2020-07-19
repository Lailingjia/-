<template>
  <div class="detail">
    <el-backtop></el-backtop>
    <Topbar class="tb"></Topbar>
    <imain class="imain" :title="title" :author="author"></imain>
    <xinxi class="xx" :author="author"></xinxi>
    <zan class="zan" :title="title" :author="author"></zan>
    <countzan class="cz" :title="title" :author="author"></countzan>
    <el-divider class="line"></el-divider>
    <comment class="com" :title="title" :author="author"></comment>
    <comlist class="comlist" :title="title" :author="author"></comlist>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import imain from "../components/detail/imain";
import zan from "../components/detail/zan";
import xinxi from "../components/detail/xinxi";
import countzan from "../components/detail/countzan";
import comment from "../components/detail/comment";
import comlist from "../components/detail/comlist";
export default {
  components: {
    imain,
    zan,
    xinxi,
    Topbar,
    countzan,
    comment,
    comlist
  },
  props: {},
  data() {
    return {
      title: "",
      author: ""
    };
  },
  watch: {
    $route: "get"
  },
  computed: {},
  methods: {
    get() {
      var data = this.$route.query.title;
      var data1 = this.$route.query.author;
      if (data == null || data1 == null) {
        alert("页面错误");
        this.$router.push({ path: "/index" });
      } else {
        // 将数据放在当前组件的数据内
        console.log("传来的参数==" + data + data1);
        this.title = data;
        this.author = data1;
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
.xx {
  position: fixed;
  right: 9.5%;
  top: 18.5%;
  z-index: 0;
}
.zan {
  position: fixed;
  right: 9.5%;
  top: 85.5%;
  z-index: 0;
}
.imain {
  position: relative;
  left: 160px;
  top: 80px;
  z-index: 0;
}
.cz {
  position: relative;
  left: 160px;
  top: 90px;
}
.com {
  position: relative;
  left: 160px;
  top: 70px;
}
.comlist {
  position: relative;
  left: 160px;
  top: 80px;
}
.line {
  position: relative;
  top: 80px;
  width: 900px;
  left: 160px;
}
</style>