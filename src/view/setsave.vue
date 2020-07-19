<template>
  <div class="set">
    <Topbar class="tb"></Topbar>
    <bar class="bar"></bar>
    <save class="save"></save>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import bar from "../components/person/bar";
import save from "../components/person/save";
export default {
  components: {
    Topbar,
    bar,
    save
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
        this.$router.push({ path: "/setsave" });
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
.set {
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
.save {
  position: relative;
  top: -570px;
  left: 450px;
}
</style>