<template>
  <div class="downlist">
    <el-dropdown trigger="click">
      <div class="el-dropdown-link">
        <mysyb></mysyb>
      </div>
      <el-dropdown-menu slot="dropdown" class="list">
        <el-dropdown-item disabled>
          <mysyb></mysyb>
          <p style="color:black;font-size:16px;position:absolute;left:30%;top:0">
            <b>{{name}}</b>
          </p>
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-home" divided @click.native="person($event)">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-user-solid" @click.native="per">我的资料</el-dropdown-item>
        <el-dropdown-item icon="el-icon-document" @click.native="work">我的作品</el-dropdown-item>
        <el-dropdown-item icon="el-icon-star-off" @click.native="myatta">我的关注</el-dropdown-item>
        <el-dropdown-item icon="el-icon-sunny" @click.native="myzan">我的点赞</el-dropdown-item>
        <el-dropdown-item icon="el-icon-user" @click.native="set">资料设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-warning" @click.native="save">账号安全</el-dropdown-item>
        <el-dropdown-item icon="el-icon-coordinate" divided @click.native="sold">我的出售</el-dropdown-item>
        <el-dropdown-item icon="el-icon-caret-right" divided @click.native="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import mysyb from "./mysyb";
export default {
  components: {
    mysyb
  },
  props: {},
  data() {
    return {
      name: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    per() {
      this.$router.replace({ path: "/data" });
    },
    work() {
      this.$router.replace({ path: "/mywork" });
    },
    myatta() {
      this.$router.replace({ path: "/myatta" });
    },
    myzan() {
      this.$router.replace({ path: "/myzan" });
    },
    set() {
      this.$router.replace({ path: "/setdata" });
    },
    save() {
      this.$router.replace({ path: "/setsave" });
    },
    sold() {
      this.$router.replace({ path: "/mysold" });
    },
    logout() {
      // localStorage.clear();
      localStorage.removeItem("user");
      this.$router.replace({ path: "/login" });
    },
    person(event) {
      this.name = this.name;
      this.$router.push({
        path: "/perdetail",
        query: {
          name: this.name
        }
      });
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
          this.name = result.list["0"].name;
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
.downlist {
  width: 10%;
}
.list {
  width: 22%;
}

.el-dropdown-link {
  cursor: pointer;
}
</style>