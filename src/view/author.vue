<template>
  <div class="author">
    <el-backtop></el-backtop>
    <Topbar class="tb"></Topbar>
    <display class="dis"></display>

    <div class="title">
      <span>
        <b>推荐作者更新</b>
      </span>
    </div>
    <item class="item"></item>
    <div class="back">
      <img src="../image/back.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import display from "../components/author/display";
import item from "../components/author/item";
export default {
  components: {
    Topbar,
    display,
    item
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
.author {
  width: 1300px;

  z-index: 0;
}
.tb {
  position: fixed;
  top: 0px;
  z-index: 2;
}
.dis {
  widows: 1300px;
  z-index: 1;
  position: relative;
  top: 70px;
}
.title {
  width: 200px;
  height: 50px;
  position: relative;
  top: 100px;
  left: 150px;
  z-index: 0;
}
.item {
  position: relative;
  width: 900px;
  top: 120px;
  left: 200px;
  z-index: 1;
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