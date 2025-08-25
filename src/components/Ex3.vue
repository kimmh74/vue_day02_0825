<template>

    <!-- 요소는 존재하고 보이고 /안보이고 show값 true/false -->
    <div v-show="showDiv">이 앨리컨트는요감출 수 있어요</div>

    <!-- if와 show 비교 -->
<p>Set the 'showDiv' data property to 'false', 
and run the code again. Right click this green p element, 
choose 'Inspect' or 'Inspect element' and you can see that 
the div element with v-show still exist, it is only the CSS 
display property that is set to 'none', and the div with v-if is destroyed.
</p>
<div v-show="showDiv">div태드를 보이게/감추게 하다</div>
<div v-if="showDiv">div태그를 요소생성/생성X 하다</div>

</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true)
</script>

<style scoped>
div{
    padding: 20px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    border: 1px solid black;
}
</style>