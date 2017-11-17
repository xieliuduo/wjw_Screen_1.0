<template>
  <div style="height:24rem;">
    <China v-if=" mapName=='全国' "></China>
    <!-- 河北 -->
    <Hebei v-if=" mapName=='河北' "></Hebei>
    <HebeiShijiazhuang v-if=" mapName=='河北-石家庄' "></HebeiShijiazhuang>
    <ShijiazhuangQiaoxiqu v-if=" mapName=='河北-石家庄-桥西区' "></ShijiazhuangQiaoxiqu>
    <!-- 贵州 -->
    <Guizhou v-if=" mapName=='贵州' "></Guizhou>
    <GuizhouZunyi v-if=" mapName=='贵州-遵义' "></GuizhouZunyi>
    <ZunyiBozhouqu v-if=" mapName=='贵州-遵义-播州区' "></ZunyiBozhouqu>
    <ZunyiChishuixian v-if=" mapName=='贵州-遵义-赤水县' "></ZunyiChishuixian>
    <ZunyiDaozhenxian v-if=" mapName=='贵州-遵义-道真县' "></ZunyiDaozhenxian>
    <ZunyiFenggangxian v-if=" mapName=='贵州-遵义-凤冈县' "></ZunyiFenggangxian>
    <ZunyiHonghuagangqu v-if=" mapName=='贵州-遵义-红花岗区' "></ZunyiHonghuagangqu>
    <ZunyiHuichuanqu v-if=" mapName=='贵州-遵义-汇川区' "></ZunyiHuichuanqu>
    <ZunyiMeitanxian v-if=" mapName=='贵州-遵义-湄潭县' "></ZunyiMeitanxian>
    <ZunyiRenhuaixian v-if=" mapName=='贵州-遵义-仁怀县' "></ZunyiRenhuaixian>
    <ZunyiWuchuanxian v-if=" mapName=='贵州-遵义-务川县' "></ZunyiWuchuanxian>
    <ZunyiSuiyangxian v-if=" mapName=='贵州-遵义-绥阳县' "></ZunyiSuiyangxian>
    <ZunyiXishuixian v-if=" mapName=='贵州-遵义-习水县' "></ZunyiXishuixian>
    <ZunyiYuqingxian v-if=" mapName=='贵州-遵义-余庆县' "></ZunyiYuqingxian>
    <ZunyiZhenganxian v-if=" mapName=='贵州-遵义-正安县' "></ZunyiZhenganxian>
    <!-- 内蒙古 -->
    <Neimenggu v-if=" mapName=='内蒙古' "> </Neimenggu>
    <NeimengguHulunbeier v-if=" mapName=='内蒙古-呼伦贝尔' "></NeimengguHulunbeier>
    <HulubbeierMolidawa v-if=" mapName=='内蒙古-呼伦贝尔-莫力达瓦达斡尔族自治旗' "></HulubbeierMolidawa>
    <!-- 湖南 -->
    <Hunan v-if=" mapName=='湖南' "></Hunan>
    <HunanChenzhou v-if="mapName=='湖南-郴州' "></HunanChenzhou>
    <HunanChenzhouGuiyangxian v-if=" mapName=='湖南-郴州-桂阳县' "></HunanChenzhouGuiyangxian>
    <HunanChenzhouYongxingxian v-if=" mapName=='湖南-郴州-永兴县' "></HunanChenzhouYongxingxian>
    <HunanChenzhouAnrenxian v-if=" mapName=='湖南-郴州-安仁县' "></HunanChenzhouAnrenxian>
    <HunanChenzhouZixingshi v-if=" mapName=='湖南-郴州-资兴市' "></HunanChenzhouZixingshi>
    <HunanChenzhouSuxianqu v-if=" mapName=='湖南-郴州-苏仙区' "></HunanChenzhouSuxianqu>
    <HunanChenzhouBeihuqu v-if=" mapName=='湖南-郴州-北湖区' "></HunanChenzhouBeihuqu>
    <HunanChenzhouLinwuxian v-if=" mapName=='湖南-郴州-临武县' "></HunanChenzhouLinwuxian>
    <HunanChenzhouJiahexian v-if=" mapName=='湖南-郴州-嘉禾县' "></HunanChenzhouJiahexian>
    <HunanChenzhouYizhangxian v-if=" mapName=='湖南-郴州-宜章县' "></HunanChenzhouYizhangxian>
    <HunanChenzhouRuchengxian v-if=" mapName=='湖南-郴州-汝城县' "></HunanChenzhouRuchengxian>
    <HunanChenzhouGuidongxian v-if=" mapName=='湖南-郴州-桂东县' "></HunanChenzhouGuidongxian>
  </div>
</template>
<script>
  import maps from "src/utils/mapUtils";
  export default {
    name: "map",
    props: ["mapName"],
    components: maps,
    data() {
      return {
        currentControlLeftNavnum: this.$store.state.common.controlLeftNavnum
        // currentControlLeftNavnum:this.$store.state.common.controlLeftNavnum
      };
    },
    created() {
      //   this.mapName = 'hebei'
      //   alert(this.mapName)
    },

    mounted() {
      console.log("mounted");
      var _this = this;
      $(".clickable").unbind('click').on("click", function () {
        var index = $(this).attr("map-name");
        _this.selectNav(index);
      });
    },
    updated: function () {
      // alert("updated");
      console.log("updated 被更新后");
      var _this = this;
      $(".clickable").on("click", function () {
        var index = $(this).attr("map-name");
        _this.selectNav(index);
      });
    },
    methods: {
      selectNav(index) {
        // console.log(this.$refs.all.getAttribute('index'));
        // debugger
        this.$store.state.common.controlLeftNavnum = index;
      }
    }
  };

</script>
<style type="text/css" scoped>


</style>
