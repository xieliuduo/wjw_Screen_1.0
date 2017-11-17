<template>
	<div class='pie-card-container'>
		<div class="pie-card">
			<span :style = '{color:options.color[0]}' class='pie-card-percent'>100%</span>
			<PieLegend class="pie-card-chart" :width='options.width':height='options.height' :chartid = 'options.id' :options='options' :data='data' :pcolor='options.color[0]'></PieLegend>
			<div class="pie-card-text">
			  <p class="title-bottom" :style='{color:options.color[0]}'>{{options.title_b}}</p>
			  <p>已覆盖：{{total}}人</p>
			  <p>已签约：{{signed}}人</p>
			</div>
		</div>
	</div>	
</template>
<script>
import PieLegend from '@/components/charts/PieLegend'
export default {
	name:'pie-card',
	components:{
		PieLegend
	},
	props:{
		'options':Object,

	},
	computed:{
		signed:function(){
			return this.toThousands(this.options.signed)
		},
		total:function(){
			return this.toThousands(this.options.total)
		},
		data:function(){
			return [
			{name:'已签约',value:this.options.signed},
			{name:'未签约',value:this.options.total-this.options.signed}
			]
		}
	},
	created(){
	},
	methods:{
		toThousands:function(num) {
		    var num = (num || 0).toString(), result = '';
		    while (num.length > 3) {
		        result = ',' + num.slice(-3) + result;
		        num = num.slice(0, num.length - 3);
		    }
		    if (num) { result = num + result; }
		    return result;
		}
	}


}
	
</script>

<style scoped>
	.pie-card-container{
		height: 10.78rem;
		width: 16.77rem;
		display: inline-block;
	}
	.pie-card-container:nth-child(2){
		height: 10.78rem;
		width: 16.77rem;
		float: right;
		display: inline-block;
	}
	/* .pie-card-container:nth-child(2) {
		margin-left: 1.5602rem;
	} */
	.pie-card{
    	width: 16.77rem;
    	height: 10.78rem;
		border:1px solid #c0d1d6;
		/*box-shadow: 0rem 0rem .5rem rgba(49,75,82,.1);*/
		background:#dbedf4;
		/* padding: .7rem; */
		padding-top: .43rem;
		box-sizing: border-box;
		position: relative;
	}
	.pie-card-percent{
		position: absolute;
		top: 1.3rem;
		right: 7.7rem;
		font-size: 1.24rem;
	}
	.pie-card-chart{
		display: inline-block;
		vertical-align: middle;
		margin-top: 2.09rem;
		margin-left: 1.21rem;
		width: 6.84rem;
    	height: 6.70rem;
	}
	.pie-card-text {
		display: inline-block;
		vertical-align: middle;
		/* margin-right: .71rem;
		margin-top: 1.77rem; */
	}
	p{
		font-size: .641rem;
		text-align: center;
		line-height: 1.1rem;

	}
	.title-bottom{
		text-align: center;
		font-size: .715rem;
		font-weight: bold;
		letter-spacing: .05rem;
		margin-top: .3rem;
		margin-bottom:.1rem;
	}
</style>