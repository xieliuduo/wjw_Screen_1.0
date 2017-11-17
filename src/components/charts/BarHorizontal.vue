<template>
  <div :id='chartid' :style='{height:height,width:width}'>
  </div>
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
      barData: [],
      xAxis: []
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
    setChart: function() {
      var options = {
        color: this.options.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.options.xAxis,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
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

            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: this.options.lineColor || '#333'
              }
            },
            splitLine: {
              show: this.options.splitLine || false,
              lineStyle: {
                color: this.options.splitLineColor || '#333'
              }
            }
          }
        ],
        series: this.barData
      }
      this.chart.setOption(options);
      var that = this
      $(window).resize(function() {
        that.chart.resize();
      });
    },
    initData: function() {
      var that = this;
      this.data.forEach(function(cur) {
        that.barData.push({
          name: cur.name,
          type: 'bar',
          barWidth: 'auto',
          data: cur.value
        })
      })
      if (that.barData.length == 1) {
        that.barData[0].itemStyle = {
          normal: {
            color: function(params) {
              // build a color map as your need.
              var colorList = that.options.color;
              //barNum:颜色一次循环的个数
              return colorList[params.dataIndex % (that.options.colorNum || 1)]
            }
          }
        }
      }
    }
  }

}
</script>