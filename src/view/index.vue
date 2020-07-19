<template>
  <div class="root">
    <el-backtop></el-backtop>
    <div class="index">
      <Topbar class="TB"></Topbar>
      <middlelun class="Mdl"></middlelun>
      <show class="show"></show>
      <ZPtuijian class="ZPTJ"></ZPtuijian>
      <ZZtuijian class="ZZTJ"></ZZtuijian>
      <SYtuijian class="SYTJ"></SYtuijian>
      <el-divider content-position="center" class="zz">
        <b>你所爱的！值得用心分享~</b>
      </el-divider>
      <ZJtuijian class="ZJTJ"></ZJtuijian>
      <Findmon class="fm"></Findmon>
      <sold class="sold"></sold>
      <hd class="hd"></hd>
      <el-divider content-position="center" class="dz">
        <b>这是缘，亦是命中最美的相见</b>
      </el-divider>
      <div class="foot">
        <img src="../image/footer.png" />
      </div>
      <div class="back">
        <img src="../image/back.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/Topbar";
import lunbo from "../components/lunbo";
import show from "../components/show";
import ZPtuijian from "../components/ZPtuijian";
import ZZtuijian from "../components/ZZtuijian";
import SYtuijian from "../components/SYtuijian";
import ZJtuijian from "../components/ZJtuijian";
import middlelun from "../components/middlelun";
import Findmon from "../components/Findmon";
import sold from "../components/sold";
import hd from "../components/hd";
export default {
  components: {
    Topbar,
    lunbo,
    show,
    ZPtuijian,
    ZZtuijian,
    SYtuijian,
    ZJtuijian,
    middlelun,
    Findmon,
    sold,
    hd
  },
  props: {},
  data() {
    return {
      name: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.root {
  width: 1300px;
  z-index: 0;
}
.index {
  width: 1300px;
  z-index: 0;
}
.TB {
  position: fixed;
  top: 0px;
  z-index: 10;
}
.Mdl {
  position: relative;
  top: 80px;
  left: 160px;
  z-index: 1;
}
.show {
  position: relative;
  top: 100px;
  left: 150px;
  z-index: 1;
}
.ZPTJ {
  position: relative;
  top: 280px;
  left: -1050px;
  z-index: 1;
}
.ZZTJ {
  position: relative;
  top: 100px;
  left: 770px;
  z-index: 1;
}
.SYTJ {
  position: relative;
  top: 110px;
  z-index: 9;
}
.ZJTJ {
  position: relative;
  top: 250px;
  left: 150px;
  z-index: 8;
}
.zz {
  position: relative;
  top: 760px;
  left: 105px;
}
.fm {
  position: relative;
  top: 320px;
  z-index: 7;
}
.sold {
  position: relative;
  top: 390px;
  z-index: 6;
}
.hd {
  position: relative;
  top: 420px;
  left: 30px;
  z-index: 5;
}
.foot {
  position: relative;
  top: 500px;
  left: 100px;
}
.dz {
  position: relative;
  top: 2150px;
  left: 100px;
}
.back {
  width: 150px;
  height: 150px;
  position: fixed;
  right: 0%;
  bottom: 0%;
  z-index: 0;
}
.back img {
  width: 150px;
  height: 150px;
}
</style>