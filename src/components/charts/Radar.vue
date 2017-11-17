<template>
    <div :id='chartid' :style='{height:height,width:width}'></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: 'barHorizontal',
        props: {
            'options': Object,
            'chartid': { type: String, required: true },
            'height': { type: String, default: '300px' },
            'width': { type: String, default: '300px' },
            'data': { type: Array, required: true }
        },
        data() {
            return {
                chart: null,
                indicator: [],
                legend: []

            }
        },
        mounted() {
            this.chart = echarts.init(document.getElementById(this.chartid));
            this.initData();
            this.setChart();

        },
        watch: {

            data(cur) {
                this.initData();
                this.setChart();
            }
        },
        methods: {
            setChart: function () {
                var options = {
                    color: this.options.color,
                    tooltip: {},
                    legend: {
                        data: this.legend,
                        bottom: 5
                    },
                    radar: {
                        shape: this.options.shape || 'polygon',
                        name: {
                            show: this.options.showName || false,
                            textStyle: {
                                color: this.options.nameColor || '#aaa',
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: this.options.lineColor
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: this.options.lineColor
                            }
                        },
                        indicator: this.indicator,
                        splitArea: {
                            areaStyle: {
                                color: this.options.areaColor || ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
                            }
                        }
                    },
                    series: [{
                        type: 'radar',
                        symbol: this.options.symbol || 'circle',
                        areaStyle: {
                            normal: {
                                opacity: this.options.areaOpacity || 0.4
                            }
                        },
                        data: this.data
                    }]
                }
                this.chart.setOption(options);
                var that = this
                $(window).resize(function () {
                    that.chart.resize();
                });
            },
            initData: function () {
                var that = this;
                //[{name:aaa,value:[1,2,3,4,5]},{}]
                //indicator
                var maxNums = [];
                this.data.forEach(function (item) {
                    maxNums.push(Math.max.apply(null, item.value));
                    that.legend.push(item.name);
                })
                var max = Math.max.apply(null, maxNums);
                this.options.indicator.forEach(function (item) {
                    that.indicator.push({ name: item, max: max })
                })


            }



        }
    }
</script>
