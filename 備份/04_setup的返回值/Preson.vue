<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年齡:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showTel"> 查看聯繫方式 </button>
    </div>
</template>

<script lang="ts">
    export default {
        name:"Person", // 組件名
        beforeCreate(){
            console.log("beforeCreate")
        },
        
        setup() {
            // 數據,非響應式
            let name="張三"
            let age=18
            let tel="13888888888"

            // 方法,變數改變,但頁面不變
            function changeName(){
                name="zhang-san"
            }
            function changeAge(){
                age+=1
            }
            function showTel(){
                alert(tel)
            }

            // 需要 return 才可使用
            //return {name,age,changeName,changeAge,showTel}
            return()=>"哈哈"
        }
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