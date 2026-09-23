<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年齡:{{ age }}</h2>
        <h2>地址:{{ address }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showTel"> 查看聯繫方式 </button>
    </div>
</template>

<!--
<script lang="ts">
    export default {
        name:"Person", // 組件名
    }
</script>
-->

<script lang="ts" setup name="Person234">
    import {ref} from 'vue'

    // 數據
    let name=ref("張三")
    let age=ref(18)
    let tel="13888888888"
    let address="北京昌平區宏福苑,宏福科技園區"

    // 方法,數據改變
    function changeName(){
        name.value="zhang-san"
    }
    function changeAge(){
        age.value+=1
    }
    function showTel(){
        alert(tel)
    }
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
</style>