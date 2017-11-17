<template>
    <div class="bmi-wrapper">
        <p class='title'>
            <span></span>居民BMI指数</p>
        <div class="bmi-chart-wrapper section">
            <el-row>
                <el-col :span='2'
                    class="bmi-icon-wrapper">
                    <div class="bmi-icon top">
                        <i class="iconfont icon-baifenbifandian"></i>
                        <br>
                        <span>占比</span>
                    </div>
                    <div class="bmi-icon mid">
                        <i class="iconfont icon-tizhongzhibiao"></i>
                        <br>
                        <span>体型</span>
                    </div>
                    <div class="bmi-icon bottom">
                        <i class="iconfont icon-bmi"></i>
                        <br>
                        <span>指数</span>
                    </div>
                </el-col>
                <el-col :span='11'
                    class="bmi-chart male">
                    <bodyChart chartid='bodyChartMale'
                        :data="[]"
                        width="100%"
                        height="80%"
                        :options="optionsMale">
                    </bodyChart>
                    <el-row style="height:20%;"
                        class="bmi-chart-foot">
                        <el-col :span="5">
                            <18.5</el-col>
                                <el-col :span="5">18.5-23.9</el-col>
                                <el-col :span="4">24-27</el-col>
                                <el-col :span="5">28-32</el-col>
                                <el-col :span="4">>18.5</el-col>
                    </el-row>
                    </el-col>
                    <el-col :span='11'
                        class="bmi-chart female">
                        <bodyChart chartid='bodyChartFemale'
                            :data="[]"
                            width="100%"
                            height="80%"
                            :options="optionsFemale">
                        </bodyChart>
                        <el-row style="height:20%;"
                            class="bmi-chart-foot">
                            <el-col :span="5">
                                <18.5 </el-col>
                                    <el-col :span="5">18.5-23.9</el-col>
                                    <el-col :span="4">24-27</el-col>
                                    <el-col :span="5">28-32</el-col>
                                    <el-col :span="4">>18.5</el-col>
                        </el-row>
                        </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import bodyChart from '@/components/charts/bodyChart'
    export default {
        name: 'BMI',
        components: {
            bodyChart
        },
        data() {
            return {
                optionsMale: {
                    type: 'male',
                    axisTextColor: '#15a4fa',
                    partBodyColor: '#47bac1',
                    fullBodyColor: '#aed5d8'
                },
                optionsFemale: {
                    type: 'female',
                    axisTextColor: '#15a4fa',
                    partBodyColor: '#ae69af',
                    fullBodyColor: '#b6a0b6'
                }
            }
        }
    }
</script>

<style scoped>
    .bmi-wrapper {
        margin-top: .6rem;
    }

    .bmi-chart-wrapper {
        width: 100%;
        height: 14.3rem;
        margin-top: .3rem;
        /* background: red; */
    }

    .el-row {
        height: 100%;
        text-align: center;
        font-size: .7rem;
        /* line-height: 3rem; */
    }

    .bmi-icon-wrapper {
        height: 100%;
        border-right: 1px solid #c0d1d6;
    }

    .bmi-icon {
        width: 100%;
    }
    .bmi-icon .iconfont {
        font-size: 1.4rem;
    }
    .bmi-icon div {
        height: 1rem;
    }
    .bmi-icon.top {
        color: #47bac1;
        margin: 4.6rem auto 2rem;
    }
    .bmi-icon.mid .iconfont, .bmi-icon.bottom .iconfont {
        /* height: 50%; */
        font-size: 1.2rem;        
    }

    .bmi-icon.mid {
        /* height: 30%; */
        color: #15a4fa;
    }

    .bmi-icon.bottom {
        /* height: 20%; */
        color: #ae69af;
        margin: .4rem auto;
    }

    .bmi-chart {
        height: 100%;
    }

    .bmi-chart-foot {
        height: 20%;
        line-height: 3rem;
    }

    .bmi-chart.male {
        color: #ae69af;
        border-right: 1px dashed #c0d1d6;
    }

    .bmi-chart.female {
        color: #ae69af;
    }
</style>
