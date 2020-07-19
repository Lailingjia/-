<template>
  <div class="Topbar">
    <div class="top">
      <div class="logo">
        <img src="../../image/logo.png" @click="sy" />
      </div>
      <div class="title">
        <h2>岚空绘图 Σ(⊙▽⊙"a</h2>
      </div>

      <div class="list">
        <div class="listbar">
          <img src="../../image/搜索.png" @click="ss" />
        </div>
        <div class="listbar">
          <img src="../../image/message.png" @click="com" />
        </div>
        <div class="listbar" @click="xitong">
          <img src="../../image/notification.png" />
        </div>
        <div class="listbar" @click="mail">
          <img src="../../image/email.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Input } from "element-ui";
import downlist from "./downlist";
export default {
  components: {
    Input,
    downlist
  },
  props: {},
  data() {
    return {
      input: "",
      select: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    sy() {
      this.$router.replace({ path: "/index" });
    },
    xitong() {
      if (localStorage.getItem("user") == null) {
        this.open();
      } else {
        this.$router.push({ path: "/xitong" });
      }
    },
    mail() {
      if (localStorage.getItem("user") == null) {
        this.open();
      } else {
        this.$router.push({ path: "/mymail" });
      }
    },
    com() {
      if (localStorage.getItem("user") == null) {
        this.open();
      } else {
        this.$router.push({ path: "/workcom" });
      }
    },
    ss() {
      this.$router.replace({ path: "/exploer" });
    },
    open() {
      this.$alert("现在去登录", "客官！您还没登录呢", {
        confirmButtonText: "确定",
        callback: action => {
          this.$router.push({ path: "/login" });
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.top {
  height: 60px;
  width: 1550px;
  background-color: rgba(0, 0, 0, 0.863);
  border-bottom: 1px solid purple;
}

.logo img {
  width: 55px;

  position: relative;
  float: left;
  left: 205px;
}
.title {
  font-size: 20px;
  position: relative;
  float: left;
  left: 215px;
  width: 400px;
  color: white;
  margin: 0%;
  padding: 0%;
  top: -15px;
  text-align: left;
}

.list {
  position: relative;
  float: right;
  right: 280px;
  display: flex;
  width: 250px;
  margin-right: 20px;
  top: 15px;
  border-right: 1px solid white;
}
.listbar img {
  width: 30px;
}
.listbar {
  flex: 1;
}
.mine {
  position: absolute;
  right: 200px;
  top: 70px;
}
</style>