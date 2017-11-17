
<template>
	<div class="layout-right">
		<Cigarette></Cigarette>
		<BMIrate></BMIrate>
	</div>
</template>
<script>
	import Cigarette from "./cigarette";
	import BMIrate from "./BMIrate";
	export default {
		name: "service",
		components: {
			Cigarette,
			BMIrate
		}
	};
</script>

<style scoped>
	.layout-right {
		padding: 1.245rem 0;
		padding-right: 1rem;
		box-sizing: border-box;
	}
</style>

