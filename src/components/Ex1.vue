<template>
    <!-- 이미지 import 사용 -->
    <h1>Vue bind 사용하기</h1>
    <img v-bind:src="img_beach3" alt="">

    <!-- v-bind:style 글자값 -->
    <div v-bind:style="{ fontSize: size }">
        너는 v-bind:글씨크기 속성이야
    </div>

    <div v-bind:style="{fontSize:size2 + 'px'}">
    너는 v-bind : 글자값 속성이야
    </div>
    <div v-bind:style="{'font-size':size3 + 'px'}">
    너는 v-bind : CSS 속성이야 
    </div> 

    <!-- v-bind:style 색상값 -->
<div v-bind:style="{backgroundColor:`rgb(${bgVal},100,100)`}">
    백그라운 색상값을 backgroundColor:`rgb(${bgVal},100,100)` 변수로 적용
</div>
<div v-bind:style="{backgroundColor:isImportant ? 'lightcoral' : 'lightgray'}">
백그라운 색상값을 조건에 backgroundColor:isImportant ? 'lightcoral' : 'lightgray'
따라 다르게 처리
</div>
<!-- v-bind:class 클래스  -->
<div v-bind:class="className">
    클래스 바인드
</div>
<br>
<div v-bind:class="{myClass:true}">
클래스 true false 바인드
</div>
<br>
<div :class="{myClass:isImportant}">클래스 imIportant속석 여부 :땡땡 v-bind생략가능
:class="{myClass:isImportant}" </div>

</template>


<script setup>
import { ref } from "vue";
import img_beach3 from "../../src/assets/img_beach3.jpg"

const size = ref("20px")
const size2 = ref(30)
const size3 = ref(40)
const bgVal = ref(180)
const isImportant = ref(true)
const className = ref("impClass")

</script>


<style scoped>
.myClass{
    background-color: yellow;
}
img {
    width: 100%; 
    height: 100%;
}
.impClass{
background-color: aqua;
border: 3px dashed rebeccapurple;
}

</style>