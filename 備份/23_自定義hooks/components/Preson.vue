<template>
    <div class="person">
        <h2>當前求和為:{{ sum }}, 放大 10 倍後:{{bigSum}}</h2>
        <button @click="add">點我sum + 1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="getDog">再給我一隻小狗</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import useDog from "@/hooks/useDog"
import useSum from "@/hooks/useSum"

const {sum,add,bigSum} = useSum()
const {dogList,getDog} = useDog()
</script>

<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
    li{
        font-size:20px;
    }
    img{
        height: 100px;
        margin-right: 10px;
    }
</style>