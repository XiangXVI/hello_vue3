<template>
    <div class="person">
        <h2>一輛{{car.brand}}車，價值{{car.price}}萬</h2>
        <button @click="changePrice">修改汽車的價格</button>
        <br>
        <h2>遊戲列表:</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name}}</li>
        </ul>
        <button @click="changeFirstGame">修改第一個遊戲的名字</button>
    </div>
</template>

<script lang="ts" setup name="Person234">
    import {reactive, ref} from 'vue'

    // 數據
    let car=ref({brand:"賓士",price:100})
    let games=ref([
        {id:'aysdytfsatr01',name:"王者榮耀"},
        {id:'aysdytfsatr02',name:"原神"},
        {id:'aysdytfsatr03',name:"三國志"}
    ])
    let obj=reactive({x:999})

    // 方法
    function changePrice(){
        car.value.price+=10
    }
    function changeFirstGame(){
        games.value[0].name="流星蝴蝶劍"
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
    li{
        font-size:20px;
    }
</style>