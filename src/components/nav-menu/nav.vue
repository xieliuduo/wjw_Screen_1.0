<template>
  <div id="nav-menu">
    <el-row class="tac">
      <el-col>
        <!-- <h5>mapMenu</h5> -->
        <el-menu v-for="item in menuArr" :key="item.code" :default-active="navselected" :active="navselected" class="el-menu-vertical-demo" @select="selectItems"
          @open="handleOpen" @close="handleClose" theme="#33a8af">
          <el-menu-item :index="item.code" v-if="!item.children" @click="all" :key="item.code">{{ item.name }}</el-menu-item>
          <!-- 存在二级菜单 -->
          <el-submenu :index="item.code" v-if="item.children && item.children.length > 0 ">
            <template slot="title">
              <div @click="selectChildren" :id="item.code" class="tmp-title second">{{ item.name }}</div>
            </template>
             <!-- 存在三级菜单 -->
            <div v-for="city in item.children" :key="city.code">
              <el-menu-item-group>
                <el-menu-item :index="city.code" v-if="!city.children" @click="all">{{ city.name }}</el-menu-item>
              </el-menu-item-group>
              <el-submenu :index="city.code" v-if="city.children && city.children.length > 0">
                <template slot="title">
                  <div @click="selectChildren" :id="city.code" class="tmp-title third">{{ city.name }}</div>
                </template>
                 <!-- 存在四级菜单 -->
                <div v-for="area in city.children" :key="area.code">
                  <el-menu-item-group>
                    <el-menu-item :index="area.code" v-if="!area.children">{{ area.name }}</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu :index="area.code" v-if="area.children && area.children.length > 0">
                    <template slot="title">
                      <div @click="selectChildren" :id="area.code" class="tmp-title fourth">{{ area.name }}</div>
                    </template>
                    <!-- 存在五级菜单 -->
                    <div v-for="hospital in area.children" :key="hospital.code">
                      <el-menu-item-group>
                        <el-menu-item :index="hospital.code" v-if="!hospital.children">{{ hospital.name }}</el-menu-item>
                      </el-menu-item-group>
                      <!-- <el-submenu :index="hospital.code" v-if="hospital.children && hospital.children.length > 0">
                        <template slot="title">{{ hospital.name }}</template>
                        <div v-for="weisheng in hospital.children" :key="weisheng.code">
                          <el-menu-item-group>
                            <el-menu-item :index="weisheng.code" v-if="!weisheng.children">{{ weisheng.name }}</el-menu-item>
                          </el-menu-item-group>
                        </div>

                      </el-submenu> -->
                    </div>
                  </el-submenu>
                </div>
              </el-submenu>
            </div>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <!-- <div id="map">
      <p v-for="item in mapArr" @click="selectNav(item.code)" :key="item.index">{{item.title}}</p>
    </div> -->
  </div>
</template>

<script>
import utils from "@/utils/index.js"
import mapList from "@/utils/mapList"
export default {
  name: "nav-menu",
  data() {
    return {
      //  mock的数据  全国》》省》》市》》县》》卫生局
      menuArr: mapList,
      navselected: "全国",
      mapArr: [
        {
          title: "全国",
          code: "全国"
        },
        {
         title: "河北全部",
         code: "河北"
        },
         {
          title: "石家庄全部",
           code: "河北-石家庄"
        },
        {
          title: "石家庄桥西区",
          code: "河北-石家庄-桥西区"
        },

        {
          title: "贵州全部",
           code: "贵州"
        },
          {
          title: "遵义全部",
           code: "贵州-遵义"
        },
        {
          title: "遵义县",
           code: "贵州-遵义-遵义县"
        },
        {
         title: "内蒙古",
         code: "内蒙古"
        }
      ]
    };
  },
  created () {
    this.handleMapMenuData();
  },
  methods: {
    //  处理mock的数据
    // handleMenuData() {},
    handleMapMenuData () {
      utils.mapDataHandle (this.menuArr);
    //   console.log(this.menuArr);
    },
    //  针对el-submenu 中template中的样式
    selectChildren (e) {
      // e.currentTarget.style.color = "#20a0ff";
    },
    all(a) {
      console.log(a.$el);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //  选择地图的index
    selectNav(index) {
      // console.log(this.$refs.all.getAttribute('index'));
      this.$store.state.common.controlLeftNavnum = index;
    },
    getNavType() {
      this.navselected = this.$store.state.common.controlLeftNavnum;
      // store.state.adminleftnavnum里值变化的时候，设置navselected
    },
    selectItems(index) {
    //   this.$store.state.common.controlLeftNavnum = index;
      this.$store.dispatch('getDefaultMapMenu', index);
      console.log(this.$store.state.common.controlLeftNavnum);
    }
  },
  watch: {
    // 监测store.state
    "$store.state.common.controlLeftNavnum": "getNavType"
  }
};
</script>

<style scoped>
/*滚动条 start*/
::-webkit-scrollbar {width: 5px;height:6px;}
::-webkit-scrollbar-track-piece{background-color: transparent;margin: -2px;}
::-webkit-scrollbar-thumb{background: #2c929b;min-height: 150px;min-width: 150px;border-radius: 10px;}
::-webkit-scrollbar-thumb:vertical:hover{background: #2c929b}
::-webkit-scrollbar-thumb:horizontal:hover{background: #2c929b}
/*滚动条 end*/
#nav-menu {
  background: #7ed0d7;
  height: 28rem;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
