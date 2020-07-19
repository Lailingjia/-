<template>
  <div class="bet">
    <div class="title">
      <span>
        <b>精选作品</b>
      </span>
    </div>
    <el-divider content-position="center" class="zz">SELECTED WORKS</el-divider>
    <div class="indv">
      <div class="demo-image">
        <div class="block" v-for="(v,i) in list" :key="i">
          <!-- <el-image style="width: 275px; height: 190px;" :src="url"></el-image> -->
          <img :src="v.img" @click="dec(v,$event)" class="tu" />
          <p
            class="title"
            style="font-size:16px;position:relative;relative;left:30px;top:0px;text-align:left;"
          >
            <b>{{ v.title }}</b>
          </p>
          <p
            class="author"
            style="font-size:14px;position:relative;left:60px;color:gray;top:0px;text-align:left;"
          >{{ v.author }}</p>
          <img :src="v.tximg" class="tx" @click="dec2(v,$event)" />
          <p class="time">发布于:{{formatter(v.Time)}}</p>
        </div>
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
        .post(url + "/pro/getzxtj")
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
    },
    dec2(v, event) {
      console.log(v);
      this.name = v.author;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
      });
    },
    formatter(date) {
      return `${date.split("T")[0]} ${date.split("T")[1].split(".")[0]}`;
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
  left: 660px;
}
.title span {
  font-size: 25px;
}
.block {
  height: 280px;
  position: relative;
  left: 115px;
  margin-top: 20px;
  float: left;
  margin-left: 30px;
  background-color: rgb(243, 243, 243);
  border-radius: 5px;
}
.tu {
  width: 275px;
  height: 190px;
}
.tx {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  top: -40px;
  left: -100px;
}
.zz {
  position: relative;
  left: 110px;
}
.time {
  position: relative;
  width: 200px;
  text-align: left;
  font-size: 10px;
  color: gray;
  left: 145px;
  top: -55px;
}
</style>