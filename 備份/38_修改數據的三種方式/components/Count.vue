<template>
    <div class="count">
        <h2>當前求和為:{{countStore.sum}}</h2>\
        <h3>歡迎來到:{{countStore.school}}，坐落於:{{ countStore.address }}</h3>
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
    import { ref,reactive } from 'vue';
    // 引入 useCountStore
    import {useCountStore} from "@/store/count"
    //使用 useCountStore ，得到一個專門保存count相關的store
    const countStore = useCountStore()
    
    // 數據
    let n = ref(1) // 用戶選擇的數字

    // 方法
    function add(){
        // 這是第一種修改方式
        // countStore.sum += 1

        //  第二種方法
        /*
        countStore.$patch({
            sum:888,
            school:"尚硅谷",
            address:"北京"
        })
        */

        // 第三種方式
        countStore.increment(n.value)
    }
    function minus(){
        
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