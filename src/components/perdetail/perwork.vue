<template>
  <div class="bet">
    <div class="title">
      <span>
        <b>作品</b>
      </span>
    </div>
    <el-divider content-position="center" class="zz"></el-divider>
    <div class="indv">
      <div class="block" v-for="(v,i) in list" :key="i" @click="dec(v,$event)">
        <!-- <el-image style="width: 275px; height: 190px;" :src="url"></el-image> -->
        <img :src="v.img" />
        <p
          class="title"
          style="font-size:16px;position:relative;left:20px;top:10px;  text-align: left;"
        >
          <b>{{ v.title }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["name"],
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
        author: this.name
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/getper", mes)
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
<style scoped>
.title {
  position: relative;
  width: 200px;
  left: 220px;
}
.title span {
  font-size: 16px;
}
.block {
  height: 260px;
  position: relative;
  left: 115px;
  margin-top: 20px;
  float: left;
  margin-left: 30px;
  background-color: rgb(243, 243, 243);
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(212, 8, 212, 0.63);
}
.block img {
  width: 285px;
  height: 190px;
}
.zz {
  position: relative;
}
</style>