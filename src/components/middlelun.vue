<template>
  <div class="middle">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(v,i) in list" :key="i" class="xx">
        <img :src="v.img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [],
      imgHeight: "400"
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
<style  scoped>
.middle {
  width: 1198px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.xx img {
  width: 600px;
  height: 300px;
}
</style>