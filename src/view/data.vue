<template>
  <div class="data">
    <Topbar class="tb"></Topbar>
    <bar class="bar"></bar>
    <up class="up"></up>
    <message class="mes"></message>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import bar from "../components/person/bar";
import up from "../components/person/up";
import message from "../components/person/message";
export default {
  components: {
    Topbar,
    bar,
    up,
    message
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
        this.$router.push({ path: "/data" });
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
.data {
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
.up {
  position: relative;
  top: -570px;
  left: 450px;
  z-index: 0;
}
.mes {
  position: relative;
  top: -555px;
  left: 450px;
  z-index: 0;
}
</style>