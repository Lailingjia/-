<template>
  <div class="mymail">
    <Topbar class="tb"></Topbar>
    <mail class="mail"></mail>
    <div class="img">
      <img src="../image/author.jpg" />
    </div>
    <div class="img2">
      <img src="../image/author2.jpg" />
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import mail from "../components/message/mail";
export default {
  components: {
    Topbar,
    mail
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    get() {
      if (localStorage.getItem("user") == null) {
        alert("请先登");
        this.$router.push({ path: "/login" });
      } else {
        this.$router.push({ path: "/mymail" });
      }
    }
  },
  created() {
    this.get();
  },
  mounted() {}
};
</script>
<style  scoped>
.tb {
  position: fixed;
  top: 0%;
  z-index: 1;
}
.mail {
  position: relative;
  top: 100px;
  left: 300px;
}
.img {
  width: 300px;
  height: 500px;
  position: fixed;
  bottom: -1%;
  right: 1%;
  z-index: -1;
}
.img img {
  width: 300px;
  height: 500px;
}
.img2 {
  width: 250px;
  height: 300px;
  position: fixed;
  left: -5%;
  bottom: 5%;
  z-index: -1;
}
.img2 img {
  width: 250px;
  height: 500px;
}
</style>