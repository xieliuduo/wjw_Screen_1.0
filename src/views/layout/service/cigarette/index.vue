<template>
    <div class='cigarette'>
        <p class='title'>
            <span></span>控烟</p>
        <div class="cigarette-left">
            <PieWithLegend class="cleft-chart-container" chartid='pie3' :options='options3'></PieWithLegend>
            <PieWithLegend class="cleft-chart-container" chartid='pie1' :options='options1'></PieWithLegend>
        </div>
        <div class="cigarette-right">
            <div class='signed-rate'>
                <span>0%</span>
                <span class='cright-icon'>
                    <i class='iconfont icon-baifenbifandian'></i>
                </span>
                <span>签约居民
                    <br />吸烟率</span>
            </div>
            <div class='smoking-age'>
                <span>0</span>
                <span class='cright-icon'>
                    <i class='iconfont icon-louyutubiaonianlingtongjitu'></i>
                </span>
                <span>签约居民
                    <br />平均吸烟年龄</span>
            </div>
            <div class='smoking-amount'>
                <span>0</span>
                <span class='cright-icon'>
                    <i class='iconfont icon-xiyanqu'></i>
                </span>
                <span>签约居民
                    <br />日吸烟量</span>
            </div>
        </div>


    </div>
</template>
<script>
    import PieWithLegend from '@/views/layout/service/cigarette/PieWithLegend'
    export default {
        name: 'cigarette',
        components: {
            PieWithLegend,
        },
        created() {
            this.options3 = {
                option: {
                    center_x: '50%',
                    color: ["#47bac1","#debc74"],
                },
                data: [
                    { value: 0, name: '男' },
                    { value: 0, name: '女' }
                ],
                pColor: "#47bac1",
                title: '吸烟总人口',
                height: '6.9rem',
                width: '6.9rem',
            }

            this.options1 = {
                option: {
                    center_x: '50%',
                    color: ["#47bac1", "#ae69af", "#7ecef4", "#acd598", "#debc74", "#15a4fa"],
                },
                data: [
                    { value: 0, name: '粗烟' },
                    { value: 0, name: '细烟' },
                    { value: 0, name: '旱烟' },
                    { value: 0, name: '水烟' },
                    { value: 0, name: '电子烟' },
                    { value: 0, name: '其他' }
                ],
                pColor: "#ae69af",
                title: '吸烟种类',
                height: '6.9rem',
                width: '6.9rem',
                legendWidth: '9.1rem',
                legendPerLine: 3
            }

        }
    }
</script>

<style scoped>
    .cigarette>div {
        display: inline-block;
        box-sizing: border-box;
        margin-top: .28rem;
        vertical-align: top
    }

    .cigarette-left {
        width: 57%;
        height: 14.4rem;
        border: 1px solid #c0d1d6;
        background: #d8ecf3;
    }

    .cigarette-right {
        width: 41.2%;
        height: 14.4rem;
        margin-left: .5%
    }

    .cleft-chart-container {
        height: 7.2rem;
        padding-left: 2.5rem;
    }

    .cleft-chart-container:first-child {
        padding-top: .3rem;
    }

    .cigarette-right>div {
        height: 4.48rem;
        width: 100%;
        border: 1px solid #c0d1d6;
        background: #d8ecf3;
        margin-top: .385rem;
    }

    .cigarette-right>div>span {
        display: table-cell;
        vertical-align: middle;
        height: 4.48rem;
        text-align: center;
        font-weight: bold;
        font-size: .71rem;
        width: 36%;
    }

    .cigarette-right>div>span:first-child {
        font-weight: normal;
        font-size: 1.42rem
    }

    .cigarette-right>div:first-child {
        margin-top: 0
    }

    .cigarette-right .cright-icon {
        width: 16%;
        font-weight: normal
    }

    .cigarette-right .iconfont {
        display: inline-block;
        height: 2.5rem;
        width: 2.5rem;
        font-size: 1.4rem;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 2.5rem
    }

    .signed-rate span {
        color: #47bac1;
    }

    .signed-rate .iconfont {
        background: #47bac1;
        font-size: 1.6rem
    }

    .smoking-age span {
        color: #15a4fa;
    }

    .smoking-age .iconfont {
        padding-left: .1rem;
        box-sizing: border-box;
        background: #15a4fa;
        font-size: 1.25rem
    }

    .smoking-amount span {
        color: #ae69af;
    }

    .smoking-amount .iconfont {
        background: #ae69af;
    }
</style>
