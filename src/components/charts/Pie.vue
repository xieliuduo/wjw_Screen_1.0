<template>
    <div :id='chartid' :style='{height:height,width:width}'></div>
</template>
<script>
    import echarts from 'echarts'

    export default {
        name: 'pie',
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
            }
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
                    color: this.options.color || ["#113355", "#aabbcc"],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c} ({d}%)"
                    },
                    series: [
                    {
                        type: 'pie',
                        radius: this.options.radius || ['30%', '45%'],
                        avoidLabelOverlap: false,
                        data: this.data
                    }]
                }
                this.chart.setOption(options);
            }
        }
    }
</script>

<style>

</style>
