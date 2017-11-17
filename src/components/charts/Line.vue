<template>
	<div :id='chartid' :style='{height:height,width:width}'></div>
</template>

<script>
  	import echarts from 'echarts'

  	export default{
  		name:'line',
  		props:{
        'options':Object,
        'chartid':{type:String,required:true},
        'height':{type:String,default:'300px'},
        'width':{type:String,default:'300px'},
        'data':{type:Array,required:true}
        },
  		data(){
  			return {
  				chart:null,
  				legend:[],
  				linedata:[]
  			}
  		},
  		mounted(){
  			this.chart = echarts.init(document.getElementById(this.chartid));
  			this.initData();
  			this.setChart();
  		},
  		watch:{

  			data(cur){
  				this.initData();
  				this.setChart();
  			}
  		},
  		methods:{
  			setChart:function(){
		      	var options = {
				    color:this.options.color,
				    tooltip : {
				        trigger: 'axis',
				    },
				    legend: {
				        data:this.legend
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : this.options.xAxis,
				            axisLine:{
				            	lineStyle:{
				            		color:this.options.lineColor||'#333'
				            	}
				            },
			
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            axisLine:{
				            	lineStyle:{
				            		color:this.options.lineColor||'#333'
				            	}
				            },
				            splitLine: {
								show: this.options.splitLine||false,
								lineStyle:{
				            		color:this.options.splitLineColor||'#333'
				            	}
							},
				        }
				    ],
				    series : this.linedata
		      	}
	      		this.chart.setOption(options);
	      		var that = this
	      		$(window).resize(function() {
        			that.chart.resize();
        		});
  			},
  			initData:function(){
  				var that = this;
  				this.data.forEach(function(cur,index){
  					that.legend.push(cur.name);
  					that.linedata.push({
  						name:cur.name,
  						type:'line',
  						symbol:'circle',
  						areaStyle:{
  							normal:{
  								color: {
								    type: 'linear',
								    x: 0,
								    y: 0,
								    x2: 0,
								    y2: 1,
								    colorStops: [{
								        offset: 0, color: that.options.color[index] // 0% 处的颜色 rgba
								    }, {
								        offset: 1, color: 'rgba(255,255,255,0)' // 100% 处的颜色
								    }],
								    globalCoord: false // 缺省为 false
								}
  							}
  						},
  						data:cur.value
  					})
  				
  				})
  			}
  		}
  	}
</script>