<template>
    <div :id='chartid' :style='{height:height,width:width}'></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: 'barVertical',
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
                barData: [],
                xAxis: [],
                dataShadow: []
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
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'	
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '-10%',
                        bottom: '0',
                        top: '10%',
                        containLabel: true
                    },
                    xAxis: [
                    {
                        type: 'value',
						show: false, //隐藏x 轴
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: this.options.lineColor || '#333'
                            }
                        },
                        splitLine: {
                            show: this.options.splitLine || false,
                            lineStyle: {
                                color: this.options.splitLineColor || '#333'
                            }
                        },
                    }],
                    yAxis: [
                    {
                        type: 'category',
                        data: this.options.xAxis,
                        axisTick: {
                            show: false, //隐藏tick
                            alignWithLabel: true
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: this.options.lineColor || '#333'
                            }
                        },
                        axisLabel: {
                            show: this.options.showXlabel || false,
                            rotate: this.options.rotate || 0,
                            interval: 0,
                            textStyle: {
								color: this.options.labelColor || '#aaa',
                                fontSize: 13
                            }

                        },
                    }],
                    series: this.barData
                    // 此处是背景的阴影
                    // series: [
                    //     {
                    //         //for shadow
                    //         type: 'bar',
                    //         itemStyle: {
                    //             normal: { color: '#e7f5f6' }
                    //         },
                    //         barGap: '-100%',
                    //         barCategoryGap: '40%',
                    //         data: this.dataShadow,
                    //         animation: true
                    //     },
                    //     {
                    //         type: 'bar',
                    //         // bar右边数字的展示
                    //         label: {
                    //             normal: {
                    //                 show: true,
                    // 				position: "right",
                    // 				color: 'red'
                    //             }
                    //         },
                    //         itemStyle: {
                    //             normal: {
                    //                 color: function (params) {
                    // 					debugger
                    // 					// var colorList = that.options.color;
                    // 					var colorList = ['red','green'];
                    // 					// return colorList[params.dataIndex];
                    // 					return colorList[params.dataIndex%(colorList.length)]
                    //                 }
                    //             }
                    //         },
                    //         data: this.data
                    //     }

                    // ]
                }
                this.chart.setOption(options);
                var that = this
                $(window).resize(function () {
                    that.chart.resize();
                });
            },
            initData: function () {
                var that = this;
                // 处理后端返回来的数据 1. 最大值的获取 2. dataShadow的生成
                // var maxValue = 1000;
                var sortArr = this.data.slice(0).sort(function (a, b) {
                    return b - a;
                });
                // console.log(sortArr);
                var maxValue = sortArr[0] + parseFloat(sortArr[0] * 0.1);
                if (this.data && this.data.length >= 1) {
                    for (var i = 0; i < this.data.length; i++) {
                        that.dataShadow.push(maxValue);
                    };
                    that.barData.push({
                        //for shadow
						type: 'bar',
						barWidth: '25',
                        itemStyle: {
                            normal: { color: '#e7f5f6' }
                        },
                        barGap: '-100%', 
                        barCategoryGap: '31',
                        data: this.dataShadow,
                        animation: true
                    },
                    {
						type: 'bar',
						barWidth: '25',
						// barGap: '-100%',
						barCategoryGap:'40%',
                        // bar右边数字的展示
                        label: {
                            normal: {
                                show: true,
                                position: "right",
                                //  数字文本的颜色
                                color: function (params) {
									debugger
                                    var colorList = that.options.color;
                                    // return colorList[params.dataIndex];
                                    return colorList[params.dataIndex % (colorList.length)]
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = that.options.color;
                                    // return colorList[params.dataIndex];
                                    return colorList[params.dataIndex % (colorList.length)]
                                }
                            }
                        },
                        data: this.data
                    })
                }

                // console.log(this.dataShadow);
                // this.data.forEach(function(cur){
                // 	that.barData.push({
                //             name:cur.name,
                //             type:'bar',
                //             barWidth: 'auto',
                //             data:cur.value
                //         })

                // })
                // if(that.barData.length==1){
                // 	that.barData[0].itemStyle={
                // 		normal: {
                // 			color: function(params) {
                //                 // build a color map as your need.
                //                 var colorList = that.options.color;
                //                 //barNum:颜色一次循环的个数
                //                 return colorList[params.dataIndex%(that.options.colorNum||1)]
                //             }
                //         }
                //     }
                // }
            }
        }

    }
</script>