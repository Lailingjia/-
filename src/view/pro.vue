<template>
  <div class="pro">
    <el-backtop></el-backtop>
    <Topbar class="tb"></Topbar>
    <lunbo class="lb"></lunbo>
    <project class="project"></project>
    <div class="back">
      <img src="../image/back.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import project from "../components/work/project";
import lunbo from "../components/lunbo";
export default {
  components: {
    Topbar,
    project,
    lunbo
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
.tb {
  position: fixed;
  top: 0%;
  z-index: 1;
}
.project {
  position: relative;
  left: 16px;
  z-index: 0;
  top: 70px;
}
.lb {
  position: relative;
  top: 80px;
  left: 180px;
  z-index: 0;
}
.back {
  width: 150px;
  height: 150px;
  position: fixed;
  right: 0%;
  bottom: 0%;
  z-index: -1;
}
.back img {
  width: 150px;
  height: 150px;
}
</style>