<template>
    <div class="container">
        <Top></Top>
        <div class="left-wrapper">
            <div class="area-wrapper">
                <Left-Nav></Left-Nav>
            </div>
            <div class="map-wrapper">
                <Maps :map-name='district'></Maps>
                <div class="map-info">
                    <p class="map-info-title">{{area}}已签约居民人数</p>
                    <div class="map-sign-num">
                        <SignNum :sign-num='signNum' />
                    </div>
                    <p class="map-info-subtitle">居民线上签约占比
                        <span class="map-percent">{{contract_percent}}</span>
                    </p>
                    <div class="map-info-foot">
                        <span>
                            <i class="iconfont icon-fangzi">&nbsp;</i>入驻机构&nbsp;
                            <em>{{organ_count}}</em>
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            <i class="iconfont icon-yishengjieshao">&nbsp;</i>入驻医生&nbsp;
                            <em>{{organ_user_count}}</em>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-wrapper">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import Top from '@/components/HeaderItem'
    import LeftNav from '@/components/nav-menu/nav'
    import Maps from '../map'
    import SignNum from '@/components/signNum'
    import { homeGetSettled } from '@/api/test'
    export default {
        name: 'index',
        components: {
            Top,
            Maps,
            LeftNav,
            SignNum
        },
        data(){
            return{
                signNum:'',
                contract_percent:'',
                organ_count:'',
                organ_user_count:'',
                area:'全国'
            }
        },
        computed: {
            district() {
                // return this.$store.state.common.district;
                return this.$store.state.common.controlLeftNavnum;
            },
            ...mapGetters(['curArea'])
        },
        watch:{
            district(){
                this.getData()
            }
        },
        created() {
            console.log('这里是当前地图' + this.district);
            console.log(this.$store)
            this.getData()
            // this.$store.dispatch('changeDistrict')
        },
        methods:{
            getData(){
                this.area = this.curArea.region||this.curArea.city||this.curArea.province||'全国'

                homeGetSettled().then(ret=>{
                    if(ret.status_code!=200){
                        return;
                    }
                    this.signNum = ret.data.contract_contract_count;
                    this.contract_percent = ret.data.contract_persent;
                    this.organ_count = ret.data.organ_count;
                    this.organ_user_count = ret.data.organ_user_count;


                })
            }

        }
    }
</script>

<style>
    /* // 下面的是处理scoped的时候的覆盖element-ui默认样式的样式 */

    @import '../../assets/css/element-ui-reset.css';
    @import '../../assets/css/reset.css';
    @import 'http://at.alicdn.com/t/font_446352_sfsovkay2g0q9f6r.css';
    /* 这个页面写全局的公共样式 */

    body {
        background: #c8f0ed;
        background: -webkit-linear-gradient( left, #c8f0ed, #cedaf2);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient( left, #c8f0ed, #cedaf2);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient( left, #c8f0ed, #cedaf2);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(left, #c8f0ed, #cedaf2);
        /* 标准的语法 */
        font-size: 0.9rem;
    }

    svg {
        background-color: transparent;
    }
    /* svg 公共样式 */

    path {
        stroke: #47bac1;
    }
    /*
g:first-of-type >path:hover{
  fill:transparent;
} */

    .clickable:hover {
        fill: #47bac1;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .container {
        overflow: hidden;
    }

    .layout-right {
        width: 100%;
    }

    .left-wrapper {
        float: left;
        width: 46.9%;
        height: 35.3rem;
        font-size: 0;
        /*消除display inlineblock 产生的间距*/
    }

    .right-wrapper {
        width: 52.4%;
        float: right;
    }

    .area-wrapper {
        width: 24%;
        height: 100%;
        padding-top: 3rem;
        background: #7ed0d7;
        display: inline-block;
        vertical-align: top;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .map-wrapper {
        width: 76%;
        /* height: 300px; */
        /* background: #999; */
        display: inline-block;
    }

    .map-info {
        width: 93.6%;
        height: 12.5rem;
        padding: 1rem;
        /* background: #999; */
        margin-top: -3.5rem;
        font-size: 0.9rem;
    }

    .map-info-title {
        font-weight: normal;
        text-align: center;
        /* font-size: .9rem; */
    }

    .map-info-subtitle {
        text-align: center;
        margin: 1.2rem 0;
        margin-bottom: .6rem;
    }

    .map-percent {
        font-size: 1.5rem;
        vertical-align: sub;
        color: #47bac1;
    }

    .map-sign-num {
        width: 100%;
        height: 3rem;
        margin: .8rem 0;
    }

    .map-info-foot {
        text-align: center;
        font-size: .8rem;
    }

    .map-info-foot em {
        text-align: center;
        font-size: 1rem;
        color: #47bac1;
    }

    .title {
        font-size: .925rem;
        letter-spacing: .05rem;
        padding-left: 0.7rem;
        background: url(../../assets/images/title-bg.png) no-repeat 0 .2rem;
        background-size: .356rem auto
    }
    /* 卡片背景 */

    .section {
        border: 1px solid #c0d1d6;
        box-sizing: border-box;
        background: #d8ecf3;
    }

    .iconfont.icon-fangzi,
    .iconfont.icon-yishengjieshao {
        color: #47bac1;
        font-size: 1.6rem;
        vertical-align: sub;
    }
</style>
