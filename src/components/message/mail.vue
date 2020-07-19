<template>
  <div class="mail">
    <div class="top">
      <p>
        <b>私信</b>
      </p>
    </div>
    <div class="list" v-for="(v,i) in list" :key="i">
      <el-collapse @change="handleChange">
        <el-collapse-item>
          <template slot="title">
            <div class="title">发信人：{{v.name}}</div>
            <img :src="v.tximg" class="tx" @click="dec(v,$event)" />
            <el-button round class="res" size="small" @click="sl(v,$event)">回复</el-button>
            <el-button round class="del" size="small" @click="del(v,$event)" type="danger">删除</el-button>
            <div class="time">{{formatter(v.Time)}}</div>
          </template>
          <el-divider class="line"></el-divider>
          <div class="main">{{v.content}}</div>
        </el-collapse-item>
      </el-collapse>
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
      time: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleChange(i) {
      console.log(i);
    },
    get() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      let mes = {
        accepter: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/talk/getsl", mes)
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
      this.name = v.name;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
      });
    },
    sl(v, event) {
      console.log(v);
      this.name = v.name;
      this.$router.push({
        path: "/talkto",
        query: {
          name: this.name
        }
      });
    },
    del(v, event) {
      var data1 = JSON.parse(localStorage.getItem("user"));
      this.time = v.Time;
      let mes = {
        Time: this.time,
        sender: v.sender,
        accepter: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/talk/del", mes)
        .then(res => {
          console.log(res.data);
          alert("删除成功");
          this.$router.go(0); //刷新页面
        })
        .catch(err => {
          console.log(err);
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
.mail {
  width: 900px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 0 0 25px #e2e2e2;
}
.top {
  position: relative;
  left: -400px;
  font-size: 20px;
}
.title {
  font-size: 18px;
  position: relative;
  left: 50px;
  color: rgba(74, 0, 192, 0.637);
}
.main {
  font-size: 16px;
  float: left;
  position: relative;
  left: 80px;
  top: -30px;
}
.tx {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  left: 70px;
}
.time {
  position: absolute;
  width: 300px;
  text-align: left;
  left: 680px;
}
.res {
  position: relative;
  left: 400px;
}
.del {
  position: relative;
  left: 400px;
}
.line {
  position: relative;
  top: -24px;
}
</style>