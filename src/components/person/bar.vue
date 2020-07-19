<template>
  <div class="bar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="$route.path"
          router
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="white"
          text-color="black"
          active-text-color="purple"
        >
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="xx">
            <b>{{ item.navItem }}</b>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      navList: [
        { name: "/data", navItem: "我的资料" },
        { name: "/mywork", navItem: "我的作品" },
        { name: "/myatta", navItem: "我的关注" },
        { name: "/myzan", navItem: "我的点赞" },
        { name: "/mysold", navItem: "我的出售" },
        { name: "/setdata", navItem: "资料设置" },
        { name: "/setsave", navItem: "账号安全" }
      ],
      activeIndex: ""
    };
  },
  watch: {
    $route() {
      this.handleSelect(this.activeIndex);
    }
  },
  computed: {},
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.tac {
  width: 260px;
  height: 650px;
  box-shadow: 0 0 25px #e2e2e2;
  border: 1px solid rgb(241, 241, 241);
  background-image: url("../../image/bar.jpg");
  background-size: 100% 100%; /*按比例缩放*/
}
</style>