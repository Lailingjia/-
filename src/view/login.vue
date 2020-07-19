<template>
  <div class="login">
    <Topbar class="tb"></Topbar>
    <log class="log"></log>
    <div class="back">
      <img src="../image/002.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import log from "../components/login/log";
export default {
  components: {
    Topbar,
    log
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.login {
  height: 400px;
}
.tb {
  position: fixed;
  top: 0%;
  z-index: 2;
}
.log {
  position: relative;
  top: 190px;
  left: 500px;
  z-index: 1;
}
.back {
  position: relative;
  top: -280px;
  width: 150px;
}
.back img {
  width: 1519px;
  height: 800px;
}
</style>