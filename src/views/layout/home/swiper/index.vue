<template>
  <div>
    <p class='title'><span></span>签约情况</p>
    <div class="swiper-div">
      <div class='swiper-container' :id='swiperId'>
        <div class='swiper-wrapper'>
            <PieCard class="swiper-slide" v-for='(item,index) in data' :options='item' :key='index'></PieCard>
        </div>
      </div>
      <div @click='swipePrev($event)' class="swiper-button swiper-button-prev"></div>
      <div @click='swipeNext($event)' class="swiper-button swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
  import PieCard from './PieCard'
  import Swiper from 'static/swiper/idangerous.swiper.min.js'
  import $ from 'jquery'
  export default {
    name:'Swiper',
    components:{
      PieCard
    },
    props:['data','swiperId'],
    data(){
      return {
        mySwiper:null
       
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init:function(){ 
        this.mySwiper = new Swiper('#'+this.swiperId, {
          slidesPerView : 3,
          calculateHeight : true,
          onlyExternal:true
        })
        $('#'+this.swiperId).parent().find('.swiper-button-prev').addClass('disabled');
        if($('#'+this.swiperId).width()<$('#'+this.swiperId).find('.swiper-wrapper').width()){
          return;
        }
        $('#'+this.swiperId).parent().find('.swiper-button-next').addClass('disabled');
      },
      swipePrev:function(e){
        if($(e.target).hasClass('disabled')){
          return;
        }
        e.preventDefault()
        this.mySwiper.swipePrev();
        $('#'+this.swiperId).parent().find('.swiper-button-next').removeClass('disabled')
        var that = this;
        this.mySwiper.wrapperTransitionEnd(function(){
          if(that.mySwiper.getWrapperTranslate('x')==0){
            $('#'+that.swiperId).parent().find('.swiper-button-prev').addClass('disabled')
          }
        })        
      },
      swipeNext:function(e){
        if($(e.target).hasClass('disabled')){
          return;
        }
        e.preventDefault()
        this.mySwiper.swipeNext();
        $('#'+this.swiperId).parent().find('.swiper-button-prev').removeClass('disabled')
        var that = this;
        this.mySwiper.wrapperTransitionEnd(function(){
          var length = (that.mySwiper.getWrapperTranslate('x')-$('#'+that.swiperId).width()).toFixed(0),
          width = $('#'+that.swiperId).find('.swiper-wrapper').width().toFixed(0);
          if(length ==-width){
             $('#'+that.swiperId).parent().find('.swiper-button-next').addClass('disabled')
          }
        })    
      },

    }
  }
</script>
<style>
.swiper-div{
  margin-top: .355rem;
  text-align: center;
  width: 97%;
  margin-bottom:.3rem;
  height:12.05rem;
}
.swiper-container{
  display: inline-block;
  width: 93%;
  margin-left: .3rem;
  position: relative;
}


.swiper-button{
  height: 1.5rem;
  width: 2%;
  margin-top: 5.4rem;
  cursor: pointer;
}

.swiper-button-prev{
  float:left;
  background: url('../../../../assets/images/swiper-arrow-left.png') bottom no-repeat;
  background-size: 100%;
}
.swiper-button-prev.disabled{
  background-position-y:top 
}
.swiper-button-next{
  float:right;
  background: url('../../../../assets/images/swiper-arrow-right.png') bottom no-repeat;
  background-size: 100%;
}
.swiper-button-next.disabled{
  background-position-y:top 
}
@import '../../../../assets/css/swiper/idangerous.swiper.css'

</style>