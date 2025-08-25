<template>
    <h1>v-for 예시</h1>
    <div id="app">
        <ol>
            <li v-for="x in manyFoods">{{ x }}</li>
         </ol>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const manyFoods
    = ref(['Burrito', 'Salad', 'Cake', 'Soup', 'Fish', 'Pizza', 'Rice'])


</script>

<style scoped>
#app>div {
    border: solid black 1px;
    width: 80%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}

img {
    width: 70px;
    margin: 10px;
}
</style>