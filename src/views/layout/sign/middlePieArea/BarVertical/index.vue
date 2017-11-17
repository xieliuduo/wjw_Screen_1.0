<template>
    <div class='bar-card-container'>
        <div class="bar-card">
            <BarVertical class="bar-card-chart" :width='options.width' :height='options.height' :chartid='options.id' :options='options' :data='options.data'></BarVertical>
        </div>
    </div>
</template>
<script>
    import BarVertical from '@/components/charts/BarVertical'
    export default {
        name: 'pie-card',
        components: {
            BarVertical
        },
        props: {
            'options': Object,

        },
        created() {},

    }
</script>

<style scoped>
    .bar-card-container {
        height: 14.05rem;
        width: 23.06rem;
    }

    .bar-card {
        /* width: 10.06rem; */
        width: 100%;
            height: 100%;
        /* height: 12.05rem; */
        /* border:1px solid #c0d1d6; */
        /*box-shadow: 0rem 0rem .5rem rgba(49,75,82,.1);*/
        /* background:#dbedf4; */
        /* padding: .7rem; */
        box-sizing: border-box;
        position: relative;
    }

    .bar-card-chart {
        width: 100%;
    }
</style>