<template>
  <div class="talkto">
    <Topbar class="tb"></Topbar>
    <talk class="talk" :name="name"></talk>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import talk from "../components/detail/talk";
export default {
  components: {
    Topbar,
    talk
  },
  props: {},
  data() {
    return {
      name: ""
    };
  },
  watch: {
    $route: "get"
  },
  computed: {},
  methods: {
    get() {
      var data = this.$route.query.name;
      if (data == null) {
        alert("页面错误");
        this.$router.push({ path: "/index" });
      } else {
        // 将数据放在当前组件的数据内
        console.log("传来的参数====" + data);
        this.name = data;
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
  z-index: 2;
}
.talk {
  position: relative;
  top: 70px;
  left: 300px;
}
</style>