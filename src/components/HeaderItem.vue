<template>
	<header>
		<h1>全国家庭医生签约管理平台</h1>
    <ClockItem class="time"></ClockItem>
		<ul @click='tabLineSlide($event)'>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/sign">签约情况</router-link>
      </li>
      <li>
        <router-link to="/service">服务情况</router-link>
      </li>
      <li class="user-center">用户中心
        <ul>
          <li>退出</li>
        </ul>
      </li>
    </ul>
    <div class="tab-line"></div>
	</header>
</template>
<script>
  import ClockItem from '@/components/ClockItem'
  import $ from 'jquery'
  export default{
    name:'header',
    components:{
      ClockItem
    },
    mounted(){
      var index = $('header>ul>li').index($('.router-link-active').parent())
      $('.tab-line').css('right',index==0?'17.3rem':index==1?'13.35rem':'8.6rem');
      this.ucHover();
    },
    methods:{
      tabLineSlide:function(e){
        var evt = e||window.event;
        var target = evt.target|| evt.srcElement
        if(target.nodeName.toLowerCase() != "a"){
          return;
        }
        var index = $('header>ul>li').index($(target).parent())
        $('.tab-line').css('right',index==0?'17.3rem':index==1?'13.35rem':'8.6rem')
      },
      ucHover:function(){
        $('.user-center').on('mouseover',function(){
          $(this).find('ul').stop().slideDown(300)
        }).on('mouseleave',function(){
          $(this).find('ul').stop().slideUp(300)
        })
      }

    }
  }
</script>
<style scoped>
  header{
    font-size:.74rem;
    padding: .7rem 2.65rem 0 2.65rem;
    height: 3.13rem;
    box-sizing: border-box;
    background:#e7f5f6;
    border-bottom: .01rem solid #90a5b5;
    position: relative;
  }
  header h1{
    display: inline-block;
    text-align:center;
    font-size: 1.45rem;
    margin-bottom: 0;
    width: 43%;
    font-weight: lighter;
    letter-spacing: .2rem;
    padding-bottom:.7rem;
    
  }
  header .time{
    display: inline-block;
    float:left;
    width:28%;
    letter-spacing: .1rem;
    margin-top:.78rem;
    font-size:.78rem;
  }
  header>ul{
    display: inline-block;
    width: 28%;
    text-align: center
  }
  header>ul li{
    display: inline-block;
    cursor: pointer;
    letter-spacing: .1rem
  }
  header>ul li a{
    text-decoration: none;
    padding-bottom:.6rem;
    display: inline-block;
    width: auto;
    color: #133d4b
  }
  header>ul>li{
    text-align: center;
    padding: .2rem .6rem 0 .6rem;
  }
  .user-center{
    position: relative;
  }
  .user-center ul{
    display: none;
    position: absolute;
    left: 0;
    color:#fff;
    top: 1.3rem;
    width: 100%;
    padding-left: 0;
    text-align: center;
    background:rgba(71,186,193,.8);
    padding: .3rem 0 .3rem 0;
    overflow: hidden;

  }
  .user-center{
    transition:background .5s
  }
  .user-center:hover{
    background:#47bac1;
    color: #fff;
    padding-bottom:.3rem;
  }
  header:after{
    display: block;
    height: 0;
    content: '';
    overflow: hidden;
    clear: both
  }
  .router-link-active{
    color:#47bac1;
  }

  .tab-line{
    height: .15rem;
    width: 3.5rem;
    position: absolute;
    top: 2.95rem;
    background:#47bac1;
    -moz-transition: right .3s linear; /* Firefox 4 */
    -webkit-transition: right .3s linear; /* Safari 和 Chrome */
    -o-transition: right .3s linear; /* Opera */
    transition: right .3s linear;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
  }

</style>