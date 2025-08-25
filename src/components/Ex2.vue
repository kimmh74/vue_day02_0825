<template>
    <p v-if="typewritersInStock">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount > 0">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <!-- --{{ typewriterCount2 }} 재고수량  -->
    <p v-if="typewriterCount2 > 3">재고 있음->>{{ typewriterCount2 }}</p>
    <p v-else-if="typewriterCount2 > 0">재고가 few조금 남음->>{{ typewriterCount2 }}</p>
    <p v-else-if="typewriterCount2 == 0">재고 없음->>{{ typewriterCount2 }}</p>
    <p v-else>선불(예약 있음)->>{{ typewriterCount2 }}</p>
    <hr>
    <p v-if="text.includes('pizza')">"pizza"글자가 포함되어 있어요.</p>
    <p v-else>"pizza" 글자가 포함 없음</p>
    <hr>
    <div v-if="text2.includes('피자')">
        <p>피자</p>
        <img src="../assets/img_pizza.svg" alt="피자이미지">
    </div>
    <p v-else>피자 없음</p>
</template>

<script setup>
import { ref } from 'vue';

const typewritersInStock = ref(false)
const typewriterCount = ref(0)
const typewriterCount2 = ref(-5)


text: 'I like taco, pizza, Thai beef salad, pho soup and tagine.'
const text = ref("I like taco, pizza, Thai beef salad, pho soup and tagine.")
const text2 = ref("I like taco, 피자, Thai beef salad, pho soup and tagine.")

</script>

<style scoped></style>