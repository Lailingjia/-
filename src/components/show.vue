<template>
  <div class="show">
    <ul class="xx">
      <li v-for="(v,i) in list" :key="i">
        <img :src="v.img" />
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
        .post(url + "/show/getshow")
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
.xx img {
  width: 294px;
  height: 160px;
  flex: 1;
  float: left;
  margin-left: 9px;
}
</style>