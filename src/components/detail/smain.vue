<template>
  <div class="main">
    <div class="list" v-for="(v,i) in list" :key="i">
      <p class="author">
        <b>{{v.title}}</b>
      </p>
      <!-- <p class="time">发布于:{{v.time}}</p> -->
      <el-divider class="line"></el-divider>
      <img :src="v.img" />
      <el-divider class="line2"></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["title", "author"],
  data() {
    return {
      list: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      let mes = {
        title: this.title,
        author: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/sold/getdata", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
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
.smain {
  width: 880px;

  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}
.author {
  position: relative;
  left: -290px;
  font-size: 24px;
}

.list img {
  width: 700px;
}
</style>