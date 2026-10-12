<template>
    <div class="count">
        <h2>當前求和為:{{sum}}</h2>\
        <h3>歡迎來到:{{school}}，坐落於:{{ address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">減</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { ref,reactive,toRefs } from 'vue';
    import { storeToRefs } from 'pinia';
    // 引入 useCountStore
    import {useCountStore} from "@/store/count"
    //使用 useCountStore ，得到一個專門保存count相關的store
    const countStore = useCountStore()
    // storeToRefs 只會關注 store 中的數據，不會對方法進行 ref 包裹
    const {sum,school,address} = storeToRefs(countStore)
    // console.log("!!!!!!!",storeToRefs(countStore))
    
    // 數據
    let n = ref(1) // 用戶選擇的數字

    // 方法
    function add(){
        countStore.increment(n.value)
    }
    function minus(){
        countStore.sum -= n.value
    }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>