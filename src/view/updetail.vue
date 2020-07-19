<template>
  <div class="add">
    <Topbar class="tb"></Topbar>
    <updet class="up"></updet>
    <div class="img">
      <img src="../image/qd.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import updet from "../components/person/updet";
export default {
  components: {
    Topbar,
    updet
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
        this.$router.push({ path: "/updetail" });
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
.add {
  height: 690px;
}
.tb {
  position: fixed;
  top: 0px;
  z-index: 2;
}
.up {
  position: relative;
  top: 80px;
  left: 370px;
  z-index: 1;
}
.img {
  position: relative;
  top: -520px;
  left: -570px;
  z-index: 0;
}
.img img {
  width: 400px;
  height: 600px;
}
</style>