<template>
    <div>
	    <div class="layout-right">
			<Swiper v-if='swiperReady' :data='chartdata' swiperId='swiper1'></Swiper>
			<Implement class="imple-com inline-com"></Implement>
			<Ranking class="ranking-com inline-com"></Ranking>

	    </div>
    </div>
</template>
<script>
	import PieCard from '@/views/layout/home/swiper/PieCard'
	import Swiper from '@/views/layout/home/swiper'
	import Implement from '@/views/layout/home/implement'
	import Ranking from '@/views/layout/home/ranking'
	import { homeContract } from '@/api/test'
	export default {
		name:'home',
		components:{
			PieCard,
			Swiper,
			Implement,
			Ranking
		},
		data(){
			return{
				chartdata:[],
				swiperReady:false,
				colors:['#47bac1','#15a4fa','#ae69af'],
				titles:['全人群签约率','重点人群签约率','建档立卡人群签约率'],
				icons:['icon-renqun','icon-dibucaidan_zhongdianrenqun','','icon-gongzuorenyuanqun']
			}
		},
		computed: {
            district() {
                // return this.$store.state.common.district;
                return this.$store.state.common.controlLeftNavnum;
            }
		},
		watch:{
            district(){
                this.getData()
            }
        },
		created(){
			this.getData()	
		},
		methods:{
			getData(){
				homeContract().then(ret=>{
					
					Object.values(ret.data)
					
					if(ret.status_code!=200){
						return
					}
					let dataArray = Object.entries(ret.data)
					console.log(dataArray)
					let data = [],i=0;
					dataArray.forEach((item,index)=>{
						if(item[0]=='disease_count'){
							return
						}
						data.push({
							id:'pie'+index,
							color:[this.colors[i],'#dbdbdb'],
							icon:this.icons[index],
							showLegend:false,
							radius:['82%','100%'],
							center_x:'50%',
							width:'100%',
							height:'5.9rem',
							title_b:this.titles[i++],
							pFontSize:'2.4rem',
							signed:item[1][item[0]],
							total:item[1][item[0]+'_discover'],
							percent:item[1][item[0]+'_present']
						})
					})
					this.chartdata = data
					this.swiperReady=true
				})
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
	}
	.inline-com{
		display: inline-block;
		vertical-align: top;
		margin-left: .2rem;
	}
	.inline-com:first{
		margin-left: 0
	}
</style>