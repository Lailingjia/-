<template>
  <div class="sold">
    <div class="title">
      <p>
        <b>其他出售</b>
      </p>
    </div>
    <el-divider class="line"></el-divider>
    <div class="block" v-for="(v,i) in list" :key="i" @click="dec(v,$event)">
      <img :src="v.img" />
      <p
        class="title"
        style="font-size:16px;position:relative;left:20px;top:-10px;text-align:left;"
      >
        <b>{{ v.title }}</b>
      </p>
      <p
        class="author"
        style="font-size:14px;position:relative;left:20px;color:red;top:-15px;text-align:left;"
      >
        <b>{{ v.price +"元" }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["author"],
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
        author: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/sold/getother", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          console.log("00000");
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    dec(v, event) {
      console.log(v);
      this.title = v.title;
      this.price = v.price;
      this.author = v.author;
      this.$router.push({
        path: "/solddetail",
        query: {
          title: this.title,
          price: this.price,
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
.sold {
  width: 900px;
}
.title {
  width: 150px;
  text-align: left;
  position: relative;
  top: -10px;
  left: 30px;
}
.title p {
  font-size: 16px;
  color: black;
}
.block {
  height: 190px;
  position: relative;
  left: 0px;
  top: -20px;
  margin-bottom: 20px;

  float: left;
  margin-left: 18px;
  background-color: rgb(255, 254, 254);
  border-radius: 5px;
  box-shadow: 0 0 10px #5805f3;
}
.block img {
  width: 205px;
  height: 120px;
}
.line {
  position: relative;
  top: -20px;
  left: 5px;
}
</style>