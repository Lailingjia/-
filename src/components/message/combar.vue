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
        { name: "/workcom", navItem: "作品评论" },
        { name: "/plcom", navItem: "评论回复" }
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
  height: 100px;
}
</style>