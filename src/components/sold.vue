<template>
  <div class="sold">
    <div class="name">
      <span>
        <b>正在出售的作品(〃'▽'〃)</b>
      </span>
    </div>

    <div class="block" v-for="(v,i) in list" :key="i" @click="dec(v,$event)">
      <!-- <el-image style="width: 275px; height: 190px;" :src="url"></el-image> -->
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
  props: {},
  data() {
    return {
      list: [],
      title: "",
      price: "",
      author: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      var url = "/api";
      this.$axios
        .post(url + "/sold/getinfo")
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
<style  scoped>
.sold {
  width: 1300px;
}
.name {
  position: relative;
  width: 250px;
  height: 50px;
  left: 165px;
  top: -20px;
}

.name span {
  font-size: 21px;
  position: relative;
  top: -5px;
}
.block {
  height: 190px;
  position: relative;
  left: 140px;
  margin-top: 20px;
  float: left;
  margin-left: 18px;
  background-color: rgb(255, 254, 254);
  border-radius: 5px;
  box-shadow: 0 0 10px #5805f3;
}
.block img {
  width: 185px;
  height: 120px;
}
</style>