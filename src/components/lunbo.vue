<template>
  <div class="lunbo">
    <el-carousel indicator-position="outside" arrow="always" trigger="click" height="250px">
      <el-carousel-item v-for="(v,i) in list" :key="i" class="xx">
        <img :src="v.img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      var url = "/api";
      this.$axios
        .post(url + "/show/getinfo")
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          console.log(this.list);
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
<style scoped>
.lunbo {
  width: 1198px;
}
.xx img {
  width: 1198px;
  height: 250px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>