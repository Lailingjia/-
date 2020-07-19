<template>
  <div class="index">
    <Top></Top>
    <navbar></navbar>

    <div :class="activeClass == 0 ? 'active':''">
      <downlist class="dl"></downlist>
    </div>
    <div :class="activeClass == 1 ? 'active':''">
      <div class="xx">
        <a @click="log">
          <b>登录</b>
        </a>
        <a @click="reg">
          <b>创建新账户</b>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./Top";
import navbar from "./navbar";
import downlist from "./downlist";
export default {
  components: {
    Top,
    navbar,
    downlist
  },
  props: {},
  data() {
    return {
      activeClass: 0,
      index: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    log() {
      this.$router.replace({ path: "/login" });
    },
    reg() {
      this.$router.replace({ path: "/register" });
    },
    mes() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      if (data1) {
        this.activeClass = this.index;
      }
      console.log(this.activeClass);
    }
  },
  created() {
    this.mes();
  },
  mounted() {}
};
</script>
<style  scoped>
.index {
  width: 1550px;
  height: 130px;
}
.dl {
  position: absolute;
  left: 1240px;
  top: 5px;
}

.active {
  display: none;
}
.xx {
  position: relative;
  width: 150px;
  top: -100px;
  left: 1280px;
}
.xx a {
  color: white;
}
</style>