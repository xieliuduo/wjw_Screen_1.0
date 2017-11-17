<template>
    <div class='middle-container'>
        <div class='middle-main'>
            <PieCard class='left-area' :options='data'></PieCard>
            <BarVertical class='right-area' :options="barData"></BarVertical>
        </div>
    </div>
</template>

<script>
    import PieCard from './PieCard'
    import BarVertical from './BarVertical'
    import $ from 'jquery'
    export default {
        name: 'middleArea',
        props: ['data', 'barData'],
        data() {
            return {}
        },
        components: {
            PieCard,
            BarVertical
        },
        methods: {}
    }
</script>
<style>
    .middle-container {
        height: 14.58rem;
        width: 100%;
        border: 1px solid #c0d1d6;
        margin-top: .74rem;
        background: #d8ecf3;
        /* padding: .71rem .71rem 0 .71rem; */
        box-sizing: border-box;
    }
    .middle-main {
        width: 100%;
    }
    .left-area, .right-area {
        display: inline-block;
        vertical-align: middle;
    }
</style>