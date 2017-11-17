<template>
    <div class="bottom-container">
        <div class="left-div">
            <div class="content">
                <p class="know-count">75%</p>
            <p class="konw-text">签约居民服务知晓率</p>
            </div>
        </div>
        <div class="right-div">
            <div class="gongzhonghao">
                <span class="text gongzhonghao-text">公众号关注量</span>
                <i class="iconfont icon-weixin"></i>
               <div class="gongzhonghao-bar"></div>
               <span class="gongzhonghao-count">100,000</span>
            </div>
            <div class="appxiazai">
                <span class="text appxiazai-text">中国家医网App下载量</span>
                <i class="iconfont icon-jiayiwangicon"></i>
                <div class="appxiazai-bar"></div>
                <span class="appxiazai-count">100,000</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bottomArea',
        props: [],
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
    .bottom-container {
        height: 5.58rem;
        width: 100%;
        border: 1px solid #c0d1d6;
        margin-top: .74rem;
        background: #d8ecf3;
        box-sizing: border-box;
        display: inline-block;
    }

    .left-div {
        display: inline-block;
        width: 9.09rem;
        height: 100%;
        padding: .3rem;
        box-sizing: border-box;
        border-right: 1px solid #c0d1d6;
        text-align: center;
        vertical-align: top;
    }
    .content{
        margin-top: .81rem;
    }
    .content p:nth-child(2) {
        margin-top: .31rem;
    }
    .know-count {
        font-size: 1.24rem;
        color: rgb(71, 186, 193);
    }
    .konw-text {
        font-size: .715rem;
        font-weight: bold;
        letter-spacing: .05rem;
        color: rgb(71, 186, 193);
        
    }
    .right-div {
        display: inline-block;
        height: 100%;
        margin-left: .53rem; 
        padding: 0, .3rem;
        box-sizing: border-box;
    }
    .gongzhonghao, .appxiazai {
        margin-top: .9rem;
    }
    .text {
        display: inline-block;
        font-size: .641rem;
        line-height: 1.1rem;
    }
    .gongzhonghao-text {
        margin-left: 2.5rem;
    }
    .iconfont {
        display: inline-block;
        vertical-align: middle;
        width: 1.56rem; 
        height: 1.28rem;
        margin-left: .49rem;
        color: rgb(71, 186, 193);
        font-size: 1.56rem; 
        line-height: 1.28rem;
    }
    .gongzhonghao-bar {
        background: rgb(71, 186, 193);
        display: inline-block;
        vertical-align: middle;
        margin-left: .71rem;
        width: 5.09rem;
        height: .71rem;
    }
    .gongzhonghao-count, .appxiazai-count{
        display: inline-block;
        vertical-align: middle;
        font-size: 25px;
        color: rgb(71, 186, 193);
    }
    .appxiazai-bar {
        background: rgb(71, 186, 193);
        display: inline-block;
        vertical-align: middle;
        margin-left: .71rem;
        width: 7.64rem;
        height: .71rem;
    }
</style>