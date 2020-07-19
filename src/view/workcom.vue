<template>
  <div class="workcom">
    <Topbar class="tb"></Topbar>
    <combar class="cb"></combar>
    <aboutcom class="aboutcom"></aboutcom>
    <div class="tu">
      <img src="../image/com.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import combar from "../components/message/combar";
import aboutcom from "../components/message/aboutcom";
export default {
  components: {
    Topbar,
    combar,
    aboutcom
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
        this.$router.push({ path: "/workcom" });
      }
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style  scoped>
.tb {
  position: fixed;
  top: 0%;
  z-index: 1;
}
.cb {
  position: relative;
  width: 260px;
  top: 80px;
  left: 170px;
}
.aboutcom {
  position: relative;
  left: 430px;
  top: -20px;
}
.tu {
  width: 450px;
  height: 600px;

  position: relative;
  z-index: -1;
  top: -700px;
}
.tu img {
  width: 450px;
  height: 600px;
}
</style>