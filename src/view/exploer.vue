<template>
  <div class="explo">
    <el-backtop></el-backtop>
    <Topbar class="tb"></Topbar>
    <div class="ex">
      <el-form class="exp">
        <el-input v-model="content" placeholder="请输入作品或作者" suffix-icon="el-icon-search"></el-input>
      </el-form>
      <el-button
        type="success"
        style="position:relative;left:420px;top:-10px;width:100px;"
        @click="sousuo"
      >搜索</el-button>
    </div>
    <el-divider class="line"></el-divider>
    <div class="data">
      <div class="block" v-for="(v,i) in  dataShow()" :key="i">
        <img :src="v.img" class="tu" @click="dec(v,$event)" />
        <p class="title">
          <b>{{ v.title }}</b>
        </p>
        <p class="author">{{ v.author }}</p>
        <img :src="v.tximg" class="tx" @click="dec2(v,$event)" />
        <p class="time">发布于：</p>
        <p class="timee">{{formatter(v.Time)}}</p>
      </div>
    </div>
    <el-pagination
      background
      layout="total,prev, pager,next"
      :total="this.list.length"
      :page-size="pageSize"
      @prev-click="prePage"
      @next-click="nextPage"
      class="page"
      hide-on-single-page
      :class="activeClass == 0 ? 'active':''"
    ></el-pagination>
    <div class="mp4" style="position:relative;top:-140px;z-index:-1">
      <video id="myVideo" class="video-js" style="width= 100%; height=100%; object-fit: fill;">
        <source src="../image/舰队收藏OP.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
export default {
  components: {
    Topbar
  },
  props: {},
  data() {
    return {
      content: "",
      list: [],
      pageSize: 6,
      currentPage: 0,
      activeClass: 0,
      index: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    sousuo() {
      let mes = {
        kw: this.content
      };
      var url = "/api";
      this.$axios
        .post(url + "/pro/getinfobykw", mes)
        .then(res => {
          console.log(res.data);
          this.list = res.data.list;
          if (this.list.length != 0) {
            this.activeClass = this.index;
          } else {
            alert("未查询到结果");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    nextPage() {
      var vm = this;
      if (vm.currentPage == vm.pageNum - 1) return;
      vm.currentPage++;
    },
    prePage() {
      var vm = this;
      if (vm.currentPage == 0) return;
      vm.currentPage--;
    },
    // 显示第几页

    dataShow() {
      let start = this.currentPage * this.pageSize;
      let end = Math.min(
        (this.currentPage + 1) * this.pageSize,
        this.list.length
      );
      return this.list.slice(start, end);
    },
    pageNum: function() {
      return Math.ceil(this.list.length / this.pageSize) || 1;
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
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: false,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "1519px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "850px",
        loop: true
      });
    },
    formatter(date) {
      return `${date.split("T")[0]} ${date.split("T")[1].split(".")[0]}`;
    }
  },
  created() {},
  mounted() {
    this.initVideo();
  }
};
</script>
<style  scoped>
.tb {
  position: fixed;
  top: 0px;
  z-index: 2;
}
.ex {
  position: relative;
  width: 1200px;
  height: 100px;
  top: 100px;
  left: 150px;
  border: 1px solid rgba(158, 158, 158, 0.63);
  background-color: rgba(158, 158, 158, 0.5);
}
.exp {
  position: relative;
  width: 800px;
  top: 30px;
  left: 150px;
}
.data {
  position: relative;
  width: 1200px;

  left: 170px;
  top: 100px;
}
.block {
  width: 370px;
  height: 315px;

  float: left;
  margin-right: 15px;
  margin-bottom: 20px;
  background-color: rgba(209, 209, 209, 0.651);
}
.tu {
  width: 370px;
  height: 230px;
}
.tx {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  left: -150px;
  top: -80px;
}
.title {
  position: relative;
  text-align: left;
  left: 150px;
  top: -10px;
  color: black;
}
.author {
  position: relative;
  text-align: left;
  left: 70px;
  top: -30px;
  color: black;
}
.time {
  position: relative;
  text-align: left;
  left: 160px;
  top: -90px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.733);
}
.timee {
  width: 200px;
  position: relative;
  text-align: left;
  left: 220px;
  top: -120px;
  font-size: 14px;
  color: rgba(3, 1, 1, 0.719);
}
.page {
  position: relative;
  height: 50px;
  top: 770px;
  left: -600px;
}
.active {
  display: none;
}
.line {
  position: relative;
  top: 100px;
}
</style>