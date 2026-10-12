<template>
  <div class="talk">
    <button @click="getLoveTalk">獲取一句土味情話</button>
    <ul>
        <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import axios from 'axios';
    import { reactive } from 'vue';
    import { nanoid } from 'nanoid' ;
    import { useTalkStore } from '@/store/loveTalk'; 
    import { storeToRefs } from 'pinia';

    const talkStore = useTalkStore()
    const {talkList} = storeToRefs(talkStore)
    talkStore.$subscribe((mutate,state)=>{
      console.log("talkStore 裡面保存的數據發生了變化",mutate,state)
      localStorage.setItem("talkList",JSON.stringify(state.talkList))
    })

    // 數據


    // 方法
    function getLoveTalk(){
      talkStore.getATalk()
    }   
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>