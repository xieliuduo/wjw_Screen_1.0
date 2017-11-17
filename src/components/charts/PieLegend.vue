<!-- 
options:{
  title,//中间的字
  radius,
  center_x,//圆心
  color,
  showTooltip,
  showLegend,
  animation,//hover时动画
  pFontSize,//中间字的大小
}
 -->
}
<template>
<div class="LegendCon">
	<div :id='chartid' :style='{height:height,width:width}'></div>
  <p v-if='options.title' :style='{width:pwidth,color:pcolor,fontSize:options.pFontSize,lineHeight:height}'>{{options.title}}</p>
  <i v-if='options.icon' :class='["icon","iconfont",options.icon] ':style='{width:pwidth,color:pcolor,fontSize:options.pFontSize,lineHeight:height}'></i>
  </div>
</template>
<script>
  	import echarts from 'echarts'

  	export default{
  		name:'pieLegend',
  		props:{
        'options':Object,
        'chartid':{type:String,required:true},
        'height':{type:String,default:'300px'},
        'width':{type:String,default:'300px'},
        'data':{type:Array,required:true},
        'pcolor':{type:String,default:'#000'}
  		},
  		data(){
  			return {
  				chart:null,
  			}
  		},
      created(){
        this.options.radius=this.options.radius?this.options.radius:['30%','45%']
        this.options.center_x=this.options.center_x?this.options.center_x:'30%'
      },
  		mounted(){
  			this.chart = echarts.init(document.getElementById(this.chartid));
  			this.setChart()
  		},
  		watch:{
  			data(cur){
  				this.setChart()
  			}
  		},
      computed:{
        legendData:function(){
          let legend = [];
          if(!this.data){
            return legend
          }
          this.data.forEach(function(cur){
            legend.push(cur.name)
          })
          return legend
        },
        pwidth:function(){
          return (Number(this.options.center_x.slice(0,-1))*2)+'%'
        }
      },
  		methods:{
  			setChart:function(){
		      	var options = {
		      		color:this.options.color,
			        tooltip: {
                show:this.options.showTooltip||false,
			          trigger: 'item',
			          formatter: "{b}: {c} ({d}%)"
	        		},
              legend: {
                show:this.options.showLegend||false,
                type: 'scroll',
                orient: 'vertical',
                right: 0,
                top:'auto',
                bottom: 100,
                data: this.legendData
              },
			        series: [
	          		{
			            type:'pie',
			            radius: this.options.radius,
                  center: [this.options.center_x,'50%'],
			            avoidLabelOverlap: false,
                  hoverAnimation:this.options.animation||false,
			            data:this.data,
                  label:{
                    normal:{
                      show:false
                    }
                  }
		          	}
			        ]
		      	}
	      		this.chart.setOption(options);
            var that = this
            $(window).resize(function() {
              that.chart.resize();
            });
  			}
  		}

  	}
</script>

<style type="text/css" scoped>
.LegendCon{
  position: relative
}
.LegendCon>p,.LegendCon>i{
  display: block;
  text-align: center;
  position: absolute;
  top: 0
}

</style>