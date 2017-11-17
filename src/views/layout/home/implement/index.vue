<template>
<div>
	<p class='title'><span></span>履约情况</p>
	<div class='implement'>
		<div class="implement-top">
			<div class='imple-online'>
				<i class='icon iconfont icon-xianshang'></i>
				<p class='imple-data'>{{visit}}<span>人</span></p>
				<p>居民线上预约<br />就诊人数</p>
			</div>
			<div class='imple-completion'>
				<i class='icon iconfont icon-gongrenwenhuagongzhixiaopeixunzhenghewancheng-'></i>
				<p class='imple-data'>{{integrity}}</p>
				<p>签约人群<br />数据填报完整度</p>
			</div>
			<div class='imple-transfer'>
				<i class='icon iconfont icon-zhuanzhenyuxiezuo'></i>
				<p class='imple-data'>{{referral}}<span>人</span></p>
				<p>家庭医生转诊<br />机制数量统计</p>
			</div>
		</div>
		<div class="implement-bottom">
			<div class='imple-complete-follow'>
				<p>{{complete}}<span>次</span></p>
				<p>家庭医生完成随访统计</p>
			</div>
			<p>
				<span>居民主动发起</span>
				<span>{{patientOrder}}次</span>
			</p>
			<p>
				<span>医生主动发起</span>
				<span>{{doctorOrder}}次</span>
			</p>
			<!-- <p>
				<span>异常提醒发起</span>
				<span>300次</span>
			</p> -->
		</div>
	</div>
</div>
</template>
<script>
	import { homeGetService } from '@/api/test'
	export default {
		name:'homeGetService',
		data(){
			return{
				integrity:'',
				doctorOrder:'',
				patientOrder:'',
				complete:'',
				referral:'',
				visit:''
			}
		},
		created(){
			this.getData()

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
		methods:{
			getData(){
				homeGetService().then((ret)=>{
				if(ret.status_code!=200){
					return;
				}
				let data = ret.data;
				this.integrity = data.data_integrity||'0%'
				this.doctorOrder = data.doctor_order_complete||0
				this.patientOrder = data.patient_order_complete||0
				this.complete = data.order_complete||0
				this.referral = data.referral||0
				this.visit = data.patient_order||0
			})
			}
		}
	}
</script>

<style scoped>
	.implement{
    	height: 16.58rem;
    	width: 20.312rem;
		border:1px solid #c0d1d6;
		margin-top: .355rem;
		background: #d8ecf3;
		padding: .71rem .71rem 0 .71rem;
		box-sizing: border-box;
	}
	.implement-top{
		height: 7.12rem;
		border-bottom: 1px dashed #c0d1d6
	}
	.implement-top>div{
		display: inline-block;
		width: 32.2%;
		height: 100%;
		vertical-align: top;
		text-align: center
	}
	.implement-top i{
		color: #fff;
		display: block;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
		text-align: center;
		line-height: 2.5rem;
		font-size: 1.3rem;
		padding: .02rem;
    	box-sizing: border-box;
		margin: 0 auto;

	}
	.imple-completion i{
		font-size: 1rem;
		background: #15a4fa
	}
	.imple-online i{
		background: #47bac1
	}
	.imple-transfer i{
		background: #ae69af
	}
	.implement-top p{
		font-size:.641rem;
	}
	p.imple-data{
		font-size: 1.242rem;
	    margin: .2rem 0;
		position: relative;
		display: inline-block;
		height: 1.65rem;
	}
	p.imple-data span{
		position: absolute;
		top: .2rem;
		right: 0;
		font-size: .9rem;
	}
	.imple-online .imple-data{
		color:#47bac1;
		padding-right: 1rem
	}
	.imple-completion .imple-data{
		color:#15a4fa;
	}
	.imple-transfer .imple-data{
		color:#ae69af;
		padding-right: 1rem
	}
	.imple-complete-follow{
		width: 100%;
		height: 5.9rem;
		background: url(../../../../assets/images/home-imple.gif) left bottom no-repeat;
		background-size:100%;
		box-sizing: border-box;
		padding-top: .5rem;
		text-align: center
	}
	.imple-complete-follow p{
		font-weight: bold;
		font-size: .71rem;
		text-align: center
	}
	.imple-complete-follow p:first-child{
		font-weight: normal;
		font-size: 1.242rem;
		letter-spacing: .1rem;
		display: inline-block;
		position: relative;
		padding-right: 1rem
	}
	.imple-complete-follow p:first-child span{
		font-size: .9rem;
		vertical-align: middle;
		display: inline-block;
		position: absolute;
		top: .2rem;
		right: 0
	}
	.implement-bottom{
		text-align:center
	}
	.implement-bottom>p{
		display: inline-block;
		width: 32.2%;
		text-align: center;
		font-size: .641rem;
		margin-top: .53rem
	}
	.implement-bottom>p span{
		display: block;
		line-height: .9rem
	}
	@import '../../../../assets/css/iconfont/iconfont.css'
</style>