<template>
  <div class="mywork">
    <Topbar class="tb"></Topbar>
    <bar class="bar"></bar>
    <work class="work"></work>
    <iwork class="iwork"></iwork>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import bar from "../components/person/bar";
import work from "../components/person/work";
import iwork from "../components/person/iwork";
export default {
  components: {
    Topbar,
    bar,
    work,
    iwork
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
        this.$router.push({ path: "/mywork" });
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
.mywork {
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
.work {
  position: relative;
  top: -570px;
  left: 450px;
}
.iwork {
  position: relative;
  top: -1120px;
  left: 455px;
}
</style>