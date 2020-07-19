<template>
  <div class="zan">
    <Topbar class="tb"></Topbar>
    <bar class="bar"></bar>
    <div class="title">
      <p>
        <b>我的点赞</b>
      </p>
    </div>
    <mzan class="mzan"></mzan>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import bar from "../components/person/bar";
import mzan from "../components/person/mzan";
export default {
  components: {
    Topbar,
    bar,
    mzan
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      if (localStorage.getItem("user") == null) {
        alert("请先登录");
        this.$router.push({ path: "/login" });
      } else {
        this.$router.push({ path: "/myzan" });
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
.zan {
  height: 800px;
}
.tb {
  position: fixed;
  top: 0px;
  z-index: 1;
}
.bar {
  position: relative;
  top: 80px;
  left: 170px;
  width: 250px;
  z-index: 0;
}
.mzan {
  position: relative;
  top: -630px;
  left: 450px;
}
.title {
  position: relative;
  font-size: 18px;
  top: -570px;
  left: 490px;
  width: 100px;
}
</style>