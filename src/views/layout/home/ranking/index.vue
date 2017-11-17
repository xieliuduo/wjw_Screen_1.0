<template>
	<div>
		<p class='title'><span></span>签约人数排行</p>
		<div class='ranking'>
			<ul>
				<li v-for='(item,index) in data'>
					<span class='sign-rank'>{{'0'+(index+1)}}</span>
					<span>{{item.name}}</span>
					<span class='sign-count'>{{item.count}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import testApi from 'api/test'
	export default {
		name:'ranking',
		data(){
			return {
				data:[]
			}
		},
		created(){
			this.getData()
		},
		methods:{
			getData:function(){

				this.data = [
					{name:'机构名称1',count:10000},
					{name:'机构名称2',count:9999},
					{name:'机构名称3',count:5000},
					{name:'机构名称4',count:5000},
					{name:'机构名称机构名称机构名称5',count:4000},
					{name:'机构名称6',count:3000},
					{name:'机构名称7',count:200},
					{name:'机构名称8',count:10}
				]

			}
		}
	}
</script>

<style scoped>
/*滚动条 start*/
::-webkit-scrollbar {width: .3rem;height:6px;}
::-webkit-scrollbar-track-piece{background-color: #bccad8;margin: -2px;}
::-webkit-scrollbar-thumb{background: #87b8c4;min-height: 150px;min-width: 1px;width: .1rem;border-radius: .5rem;}
::-webkit-scrollbar-thumb:vertical:hover{background: #87b8c4}
::-webkit-scrollbar-thumb:horizontal:hover{background: #87b8c4}
/*滚动条 end*/
	ul{
		height: 15.5rem;
		overflow-y: auto
	}
	li{
		list-style: none;
		margin-bottom: 1rem
	}
	.ranking{
    	height: 16.58rem;
	    width: 13.35rem;
		border:1px solid #c0d1d6;
		margin-top: .355rem;
		background: #d8ecf3;
		padding-top: 1rem;
		box-sizing: border-box;
		padding-right: .356rem
	}
	li span{
		display: table-cell;
		font-size: .71rem;
		width: 8rem
	}

	.sign-rank{
		width: 1.6rem;
		text-align: center
	}
	.sign-count{
		width: 3.1rem;
		color:#47bac1;
		text-align: center
	}
</style>