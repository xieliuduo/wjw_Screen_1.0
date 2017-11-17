<template>
    <div :id='chartid' :style='{height:height,width:width}'></div>
</template>
<script>
    import echarts from 'echarts'

    export default {
        name: 'pieLegend',
        props: {
            'options': Object,
            'chartid': { type: String, required: true },
            'height': { type: String, default: '300px' },
            'width': { type: String, default: '300px' },
            'data': { type: Array, required: true },
        },
        data() {
            return {
                chart: null,
            }
        },
        created() {
            this.options.center_x = this.options.center_x ? this.options.center_x : '30%'
        },
        mounted() {
            this.chart = echarts.init(document.getElementById(this.chartid));
            this.setChart()
        },
        watch: {
            data(cur) {
                this.setChart()
            }
        },
        methods: {
            setChart: function () {
                var options = {
                    color: this.options.color,
                    tooltip: {
                        trigger: 'item',
                        formatter: "{d}%<br/>{b}：{c}",
                        position:function(point,params, dom, rect, size){
                            var position = {top:point[1]+10}
                            // console.log(point)
                            if(point[0] <= size.viewSize[0] / 2){
                                position['left']=point[0]-75;
                                return position
                            }
                            position['left']=point[0]+20;
                            return position

                        }
                    },
                    series: [
                    {
                        type: 'pie',
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '18',
                                    color: '#0b3644'
                                },
                                formatter: '{b}'
                            }
                        },
                        radius: this.options.radius || ['58%', '89%'],
                        center: [this.options.center_x, '50%'],
                        avoidLabelOverlap: false,
                        hoverOffset:5,
                        data: this.data

                    }]
                }
                this.chart.setOption(options);
                var that = this
                $(window).resize(function () {
                    that.chart.resize();
                });
            }
        }

    }
</script>

<style type="text/css" scoped>
    .pie-label-legend-container {
        width: 100%
    }

    .pie-legend-title {
        display: inline-block;
    }
</style>