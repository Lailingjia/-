<template>
  <div class="register">
    <Topbar class="tb"></Topbar>
    <reg class="reg"></reg>
    <div class="back">
      <img src="../image/001.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import reg from "../components/reg/reg";
export default {
  components: {
    Topbar,
    reg
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
.register {
  height: 400px;
}
.tb {
  position: fixed;
  top: 0%;
  z-index: 2;
}
.reg {
  position: relative;
  top: 150px;
  left: 500px;
  z-index: 1;
}
.back {
  position: relative;
  top: -400px;
  width: 150px;
}
.back img {
  width: 1519px;
  height: 800px;
}
</style>