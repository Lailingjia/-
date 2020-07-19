<template>
  <div class="atta">
    <Topbar class="tb"></Topbar>
    <bar class="bar"></bar>
    <div class="title">
      <p>
        <b>我的关注</b>
      </p>
    </div>
    <atta class="ata"></atta>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import bar from "../components/person/bar";
import atta from "../components/person/atta";
export default {
  components: {
    Topbar,
    bar,
    atta
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
        this.$router.push({ path: "/myatta" });
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
.atta {
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
.ata {
  position: relative;
  top: -630px;
  left: 450px;
}
.title {
  position: relative;
  font-size: 18px;
  top: -570px;
  left: 490px;
  width: 100px;
}
</style>