<template>
  <div class="mysyb">
    <div class="demo-type">
      <el-avatar :size="50">
        <img :src="this.urlimg" />
      </el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      urlimg: "",
      sizeList: ["large"]
    };
  },
  watch: {},
  computed: {},
  methods: {
    errorHandler() {
      return true;
    },

    get() {
      var data1 = JSON.parse(localStorage.getItem("user"));
      console.log(data1.account);
      let mes = {
        account: data1.account
      };
      var url = "/api";
      this.$axios
        .post(url + "/user/getuser", mes)
        .then(res => {
          console.log(res.data);
          let result = res.data;
          console.log(result.list["0"].tximg);
          this.urlimg = result.list["0"].tximg;
          console.log(this.urlimg);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get();
    this.getImgUrl;
  },
  mounted() {}
};
</script>
<style scoped>
</style>