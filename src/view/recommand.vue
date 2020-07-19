<template>
  <div class="TJ">
    <el-backtop></el-backtop>
    <Topbar class="tb"></Topbar>
    <recmand class="rec"></recmand>
    <betselect class="bet"></betselect>
    <el-divider content-position="center" class="zz">
      <b>这是缘，亦是命中最美的相见</b>
    </el-divider>
    <div class="foot">
      <img src="../image/footer.png" />
    </div>
    <div class="back">
      <img src="../image/back.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import recmand from "../components/recommand/recmand";
import betselect from "../components/recommand/betselect";
export default {
  components: {
    Topbar,
    recmand,
    betselect
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
.TJ {
  width: 1300px;
  z-index: 0;
}
.tb {
  position: fixed;
  top: 0px;
  z-index: 10;
}
.rec {
  position: relative;
  margin-top: 120px;
  z-index: 5;
}
.bet {
  position: relative;
  top: 60px;
  z-index: 4;
}
.foot {
  position: relative;
  left: 160px;
  top: 100px;
  z-index: -1;
}
.foot img {
  width: 900px;
}
.zz {
  position: relative;
  top: 1300px;
  left: 100px;
  z-index: -1;
}
.back {
  width: 150px;
  height: 150px;
  position: fixed;
  right: 0%;
  bottom: 0%;
  z-index: 0;
}
.back img {
  width: 150px;
  height: 150px;
}
</style>