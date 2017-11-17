<template>
  <div class='pie-with-legend-container'>
    <PieWithLabel class="pie-with-label" :chartid='chartid' :options='options.option' :data='options.data' :height='options.height' :width='options.width'></PieWithLabel>

    <div class='pie-legend'>
        <p class='pie-legend-title':style='{color:options.pColor||"#000"}'>{{options.title}}</p>
        <div class='pie-legend-items' :style='{width:options.legendWidth}'>
            <ul>
                <li :class='options.legendWidth?"":"widthAuto"' v-for='(item,index) in legend' :key='index' :style='{width:legendItemWidth}'>
                    <span :style='{background:item.color}'></span>
                    {{item.name}}
                </li>
            </ul>
        </div>
	</div>
  </div>
</template>
<script>
    import PieWithLabel from '@/components/charts/PieLabelInCenter'
    export default {
        name:'PieWithLegend',
        components:{
            PieWithLabel
        },
        props:{
            options:Object,
            chartid:String
        },
        computed:{
            legend:function(){
                var legend = [];
                for(var i = 0,length = this.options.data.length;i<length;i++){
                    legend.push({name:this.options.data[i].name,color:this.options.option.color[i]})
                }
                return legend
            },
            legendItemWidth:function(){
                if(!this.options.legendWidth||!this.options.legendPerLine){
                    return 'auto'
                }
                return (this.options.legendWidth.slice(0,-3)/this.options.legendPerLine-.2)+'rem'
            }
        }
    }
</script>
<style scoped>
.pie-with-legend-container{
    width: 100%;
    box-sizing: border-box
}
.pie-legend,.pie-with-label{
    display: inline-block;
    vertical-align: middle
}
.pie-legend{
    padding-left: .71rem
}

.pie-legend p{
    font-size: .71rem
}
.pie-legend-items li{
    display: inline-block;
    font-size: .64rem;
    margin-right: .2rem;
    box-sizing: border-box;
}
.pie-legend-title {
    font-weight: bold;
}
.pie-legend-items li span{
    display: inline-block;
    width: .36rem;
    height:.36rem;
    border-radius: 50%

}
.pie-legend-items li.widthAuto{
    margin-right: .7rem
}

</style>

