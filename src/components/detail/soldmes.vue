<template>
  <div class="xinxi">
    <div class="tx" @click="dec(v,$event)">
      <img :src="this.tximg" />
    </div>
    <div class="list" v-for="(v,i) in list" :key="i">
      <p style="font-size:20px;">
        <b>{{v.author}}</b>
      </p>
      <p class="bq">版权归属：{{v.author}}</p>
      <p class="jy">交易类型：{{v.jytype}}</p>
      <p class="pro">作品性质: {{v.propty}}</p>
      <p class="tool">绘制工具: {{v.tool}}</p>
      <p class="type">作品种类: {{v.type}}</p>
      <el-divider class="line"></el-divider>
      <div class="pic">
        <p>
          <b>价格:</b>
        </p>
      </div>
      <div class="price">
        <p>
          <b>{{v.price}}.00元</b>
        </p>
      </div>
      <el-button type="success" class="buy" size="medium" :disabled="mes">立即购买</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["price", "title", "author"],
  data() {
    return {
      list: [],
      tximg: "",
      name: "",
      mes: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      if (localStorage.getItem("user") == null) {
        this.mes = true;
      }
      let mes = {
        title: this.title,
        price: this.price
      };
      var url = "/api";
      this.$axios
        .post(url + "/sold/getmes", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    tx() {
      let mes = {
        name: this.author
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getxx", mes)
        .then(res => {
          console.log(res.data);
          this.tximg = res.data.list[0].tximg;
        })
        .catch(err => {
          console.log(err);
        });
    },
    dec(v, event) {
      console.log(v);
      this.name = this.author;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
      });
    }
  },
  created() {
    this.get();
    this.tx();
  },
  mounted() {}
};
</script>
<style scoped>
.xinxi {
  width: 400px;
  height: 550px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}

.list img {
  position: relative;
  border-radius: 50%;
  top: 20px;
  width: 100px;
  height: 100px;
}
.list p {
  position: relative;
  top: 30px;
}

.line {
  position: relative;
  top: 30px;
}
.pic {
  position: relative;
  width: 50px;
  left: 20px;
}
.price {
  position: relative;
  text-align: left;
  width: 200px;
  left: 30px;
  top: -10px;
  font-size: 24px;
  color: red;
}
.buy {
  position: relative;
  top: 10px;
  width: 350px;
}
.tx {
  width: 100px;
  height: 100px;
  position: relative;
  left: 150px;
  top: 30px;
}
.tx img {
  width: 100px;
  height: 90px;
  border-radius: 50%;
}
.jy {
  position: relative;
  width: 200px;
  text-align: left;
  left: 100px;
}
.pro {
  position: relative;
  width: 200px;
  text-align: left;
  left: 100px;
}
.tool {
  position: relative;
  width: 200px;
  text-align: left;
  left: 100px;
}
.type {
  position: relative;
  width: 200px;
  text-align: left;
  left: 100px;
}
.bq {
  position: relative;
  width: 200px;
  text-align: left;
  left: 100px;
}
</style>