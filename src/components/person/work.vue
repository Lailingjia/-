<template>
  <div class="work">
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-demo"
      mode="horizontal"
      background-color="white"
      text-color="black"
      active-text-color="#5805f3"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="xx">
        <b>{{ item.navItem }}</b>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      navList: [
        { name: "/mywork", navItem: "最新" },
        { name: "", navItem: "按点赞" },
        { name: "", navItem: "按评论" },
        { name: "", navItem: "按浏览" }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.work {
  width: 900px;
  height: 650px;
  border: 1px solid rgb(235, 235, 235);
  box-shadow: 0 0 25px #e2e2e2;
}
</style>