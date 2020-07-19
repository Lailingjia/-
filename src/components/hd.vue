<template>
  <div class="hd">
    <div class="title">
      <img src="../image/aixin.png" />
      <span>
        <b>近期活动</b>
      </span>
    </div>
    <ul class="xx">
      <li v-for="(v,i) in list" :key="i">
        <img :src="v.img" />
        <p>{{v.title}}</p>
      </li>
    </ul>
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
        .post(url + "/act/getinfo")
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
.title {
  width: 150px;
  height: 50px;
  position: relative;
  left: 120px;

  margin-bottom: 10px;
}
.title span {
  font-size: 18px;
}
.title img {
  width: 25px;
  height: 25px;
}
.xx li {
  width: 380px;
  height: 260px;
  float: left;
  background-color: rgb(245, 245, 245);
  margin-left: 30px;
  position: relative;
  left: 100px;
  top: 50px;
}
.xx img {
  width: 380px;
  height: 200px;
}
</style>