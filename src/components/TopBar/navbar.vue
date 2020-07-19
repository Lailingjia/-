<template>
  <div class="navbar">
    <div class="bar">
      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="white"
        text-color="black"
        active-text-color="#5805f3"
      >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="xx">
          <b>{{ item.navItem }}</b>
        </el-menu-item>
        <el-button size="large" type="success" class="button1" @click="sold" :disabled="mes">
          <b>出售作品</b>
        </el-button>
        <el-button size="large" type="primary" class="button" @click="pub" :disabled="mes1">
          <b>立即发布</b>
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      navList: [
        { name: "/index", navItem: "首页" },
        { name: "/recommand", navItem: "推荐" },
        { name: "/pro", navItem: "作品" },
        { name: "/author", navItem: "作者" },
        { name: "", navItem: "插画外包平台" },
        { name: "", navItem: "岚空绘画学院" }
      ],
      activeIndex: "",
      mes: true,
      mes1: true,
      acctype: ""
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
    },
    pub() {
      this.$router.replace({ path: "/addwork" });
    },
    sold() {
      this.$router.replace({ path: "/addsold" });
    },
    get() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      if (data1.account != 0) {
        this.mes1 = false;
      }
      let mes = {
        account: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getuser", mes)
        .then(res => {
          console.log(res.data);
          this.acctype = res.data.list[0].acctype;
          if (this.acctype == 1) {
            this.mes = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style  scoped>
.bar {
  box-shadow: 0 0 15px #5805f3;
  width: 1550px;
}
.xx {
  width: 125px;
  left: -260px;
}
.button {
  position: relative;
  right: 150px;
  top: 10px;
}
.button1 {
  position: relative;
  right: 150px;
  top: 10px;
}
</style>