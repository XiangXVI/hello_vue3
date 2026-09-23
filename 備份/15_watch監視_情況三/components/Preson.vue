<template>
    <div class="person">
        <h1>情況三:監視[reactive]定義的[對象類型]數據</h1>
        <h2>姓名:{{ person.name }}</h2>
        <h2>年齡:{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="changePerson">修改整個人</button>
        <hr>
        <h2>測試:{{obj.a.b.c}}</h2>
        <button @click="changeObj">測試</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive,watch} from "vue"
    // 數據
    let person = reactive({
        name:"張三",
        age:18
    })
    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    // 方法
    function changeName(){
        person.name += "~"
    }
    function changeAge(){
        person.age += 1
    }
    function changePerson(){
        Object.assign(person,{name:"李四",age:90})
    }
    function changeObj(){
        obj.a.b.c = 888
    }

    // 監視,情況三:監視[reactive]定義的[對象類型]數據,且默認開啟深度監視
    watch(person,(newValue,oldValue)=>{
        console.log("person變化了",newValue,oldValue)
    })
    watch(obj,(newValue,oldValue)=>{
        console.log("obj變化了",newValue,oldValue)
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