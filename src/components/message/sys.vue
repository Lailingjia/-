<template>
  <div class="sys">
    <div class="title">
      <p>
        <b>系统消息</b>
      </p>
    </div>

    <div class="list" v-for="(v,i) in list" :key="i">
      <div class="biaoti">
        <p>{{v.title}}</p>
      </div>
      <!-- <div class="time">
        <p>{{v.time}}</p>
      </div>-->
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
        .post(url + "/rem/getinfo")
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
.sys {
  width: 900px;
  height: 500px;
}
.title {
  position: relative;
  width: 100px;
}
.list {
  width: 900px;
  float: left;
  border: 1px solid gainsboro;
  position: relative;
  margin-bottom: 20px;
  top: 30px;
  background-color: rgba(184, 184, 184, 0.479);
}
.biaoti {
  font-size: 18px;
  position: relative;
  text-align: left;
  left: 25px;
  color: black;
}
/* .time {
  font-size: 14px;
  position: relative;
  left: -350px;
  color: rgb(167, 167, 167);
} */
</style>