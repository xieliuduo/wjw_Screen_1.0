<template>
	<div>
		{{year}}年{{month}}月{{day}}日 {{hour}}:{{minute}}:{{second}}
	</div>
</template>
<script>
	export default{
		name:'time',
		data(){
			return {
				second:'00',
				minute:'00',
				hour:'00',
				day:'00',
				month:'00',
				year:'00'
			}
		},
		created(){
			let that = this;
			setInterval(function(){
				let date = new Date();
				that.minute = date.getMinutes().toString().length==1?'0'+date.getMinutes():date.getMinutes();
				that.second = date.getSeconds().toString().length==1?'0'+date.getSeconds():date.getSeconds();
				that.hour = date.getHours();
				that.day = date.getDate();
				that.month = date.getMonth()+1;
				that.year = date.getFullYear();
			},1000)
		}
	}
</script>
<style scoped>
	.time{
		font-size: .8rem
	}
</style>