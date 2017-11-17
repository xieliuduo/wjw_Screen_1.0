<template>
  <div class='top-container' :id='swiperId'>
    <div class='top-main'>
        <PieCard class='top-item' v-for='(item,index) in data' :options='item' :key="index"></PieCard>
    </div>
  </div>
</template>

<script>
  import PieCard from './PieCard'
  import $ from 'jquery'
  export default {
    name:'topPieArea',
    components:{
      PieCard
    },
    props:['data','swiperId'],
    data(){
      return {}
    },
    methods:{
    }
  }
</script>
<style>
  .top-container{
    width: 100%;
    margin-left: .4rem;
    box-sizing: border-box;
  }
  .top-main {
   width: 100%;
  }
</style>