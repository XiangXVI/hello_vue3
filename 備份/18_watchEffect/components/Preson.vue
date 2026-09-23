<template>
    <div class="person">
        <h2>當前水溫:{{temp}}</h2>
        <h2>當前水位:{{height}}</h2>
        <button @click="changeTemp">點我水溫 +10</button>
        <button @click="changeHeight">點我水位 + 10</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,watch,watchEffect} from "vue"
    // 數據
    let temp = ref(10)
    let height = ref(0)

    // 方法
    function changeTemp(){
        temp.value += 10
    }
    function changeHeight(){
        height.value += 10
    }

    // watch 監視
    /*
    watch([temp,height],(value)=>{
        // 從 value 中獲取最新的水溫及水位
        let [newTemp,newHeight] = value
        console.log([newTemp,newHeight])
        if(newTemp >= 60 || newHeight >= 80){
            console.log("給服務器發請求")
        }
    })
    */

    // watchEffect 監視
    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80){
            console.log("給服務器發請求")
        }
    })
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
</style>