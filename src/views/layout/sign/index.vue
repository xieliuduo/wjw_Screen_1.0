<template>
    <div>
        <div class="layout-right">
            <TopPieArea :data='[pieCard1,pieCard3]'
                swiperId='swiper1'></TopPieArea>
            <MiddlePieArea class="middle-area"
                :data='pieCard2'
                :barData="barVertical"></MiddlePieArea>
            <BottomArea class="bottom-area"></BottomArea>
        </div>
    </div>
</template>
<script>
	import TopPieArea from '@/views/layout/sign/topPieArea'
	import MiddlePieArea from '@/views/layout/sign/middlePieArea'
	import BottomArea from '@/views/layout/sign/bottomArea'
	export default {
		name:'sign',
		components:{
			TopPieArea,
			MiddlePieArea,
			BottomArea
		},
		data(){
			return {
				// pieCard1:null,
			}
		},
		created(){
			this.pieCard1={
				id:'pie1',
				color:['#47bac1','#dbdbdb'],
				icon:'icon-renqun',
				showLegend:false,
				radius:['82%','100%'],
        		center_x:'50%',
        		width:'100%',
        		height:'5.9rem',
        		title_b:'全人群签约率',
        		pFontSize:'2.4rem',
        		signed:'1000000',
        		total:'100000000'
			}
			this.pieCard2={
				id:'pie2',
				color:['#15a4fa','#dbdbdb'],
				icon:'icon-dibucaidan_zhongdianrenqun',
				showLegend:false,
				radius:['82%','100%'],
        		center_x:'50%',
        		width:'100%',
        		height:'5.9rem',
        		title_b:'重点人群签约率',
        		pFontSize:'2.4rem',
        		signed:'1000000',
        		total:'100000000'
			}
			this.pieCard3={
				id:'pie3',
				color:['#ae69af','#dbdbdb'],
				icon:'icon-gongzuorenyuanqun',
				showLegend:false,
				pcolor:'#47bac1',
				radius:['82%','100%'],
        		center_x:'50%',
        		width:'100%',
        		height:'5.9rem',
        		title_b:'建档立卡人群签约率',
        		pFontSize:'2.4rem',
        		signed:'1000000',
        		total:'100000000'
			},
			this.barVertical = {
				id:'barVertical',
				width: '100%',
				height: '100%',
				color:['#47bac1','#15a4fa'],
                xAxis:['结核病','糖尿病','高血压','重度精神病','残疾人','孕产妇','儿童','老人'],
                lineColor:'#aabbcc',
                splitLine:false,
                splitLineColor:'red',
                showXlabel:true,
				labelColor:'rgb(11, 54, 68)',
				data: [100, 300, 800, 200, 80, 300, 200, 50]
				// data: [{name:'aaa',value:[234,222]},{name:'bbb',value:[442,333]},{name:'ccc',value:[345,423]}]
			}
		}
	}
</script>
<style scoped>
	.layout-right {
		/* float: right; */
	    padding: 1.245rem 0;
		padding-right: 1rem;
		height: 30rem;
		box-sizing: border-box;

	}
	.middle-area, .bottom-area{
		display: inline-block;
		vertical-align: top;
		margin-left: .4rem;
	}
</style>