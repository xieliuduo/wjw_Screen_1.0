<template>
    <div class="num-wrapper">
        <div v-for="( item, index ) in number"
            :key="index"
            :class="item == ','?'num-item num-item-semi':'num-item'">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
    import { signNumFormat } from 'src/utils'
    export default {
        name: 'index',
        props: ['signNum'],
        computed: {
            number() {
                // return this.$store.state.common.district;
                return signNumFormat(this.signNum);
            }
        },
        created() {
            // let _this = this;
            // $('.leaflet-clickable.clickable').unbind('click').on('click',function(){
            //     // let name = $(this).attr('map-name');
            //     alert(111)
            // })
            // this.signNum = '11222333'
            // console.log('这里是签约数字'+this.number);
            // console.log(signNumFormat(1111111))
            // this.$store.dispatch('changeDistrict')
        }
    }
</script>
<style scoped>
    .num-wrapper {
        width: 100%;
        height: 100%;
    }

    .num-item {
        display: inline-block;
        width: 9%;
        height: 100%;
        line-height: 3.2rem;
        margin: 0 .1rem;
        font-size: 3rem;
        color: #fff;
        text-align: center;
        font-weight: 300;
        background: #47bac1;
    }

    .num-item-semi {
        width: 4.48%;
        background: none;
    }

    .num-item-semi span {
        font-family: monospace;
        /* font-weight: normal; */
        color: #47bac1;
    }
</style>