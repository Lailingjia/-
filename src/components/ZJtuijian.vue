<template>
  <div class="ZJtuijian">
    <div class="name">
      <img src="../image/aixin.png" />
      <span>
        <b>最近推荐作品</b>
      </span>
    </div>
    <div class="indv">
      <div class="block" v-for="(v,i) in list" :key="i" @click="dec(v,$event)">
        <img :src="v.img" />
        <p
          class="title"
          style="font-size:16px; 
            background-color: black;
            color: #fff;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            position: relative;
            top:-38px;
            opacity: 0.5;
           "
        >{{ v.title }}</p>
      </div>
    </div>
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
        .post(url + "/pro/getzjtj")
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    dec(v, event) {
      console.log(v);
      this.title = v.title;
      this.author = v.author;
      this.$router.push({
        path: "/detail",
        query: {
          title: this.title,
          author: this.author
        }
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
.name {
  position: relative;
  top: -50px;
  left: 30px;
  width: 150px;
  height: 50px;
}
.name img {
  width: 25px;
  height: 25px;
}
.indv {
  width: 1300px;
}
.block {
  width: 220px;
  height: 150px;
  float: left;
  margin-left: 20px;
  margin-bottom: 20px;
}
.block img {
  width: 220px;
  height: 150px;
}
</style>