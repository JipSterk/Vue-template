<template>
    <div>
        <h1>Welcome to the Vue and Webpack template!</h1>
        <img class='vue-image'/>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default class App extends Vue {
}
</script>

<style lang='scss'>
h1 {
    font-family: sans-serif;
}
.vue-image {
    content: url('../images/vue-webpack.png');
}
</style>