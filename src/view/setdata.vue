<template>
  <div class="setdata">
    <Topbar class="tb"></Topbar>
    <bar class="bar"></bar>
    <set class="set"></set>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import bar from "../components/person/bar";
import set from "../components/person/set";
export default {
  components: {
    Topbar,
    bar,
    set
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
        this.$router.push({ path: "/setdata" });
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
.setdata {
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
.set {
  position: relative;
  left: 450px;
  top: -570px;
}
</style>