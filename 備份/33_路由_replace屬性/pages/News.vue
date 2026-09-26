<template>
    <div class="news">
        <!-- 導航區 -->
        <ul>
            <li v-for="news in newList" :key="news.id">
                <!-- 第一種寫法 -->
                <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

                <!-- 第二種寫法 -->
                <RouterLink 
                    :to="{
                        name:'xiang',
                        query:{
                            id:news.id,
                            title:news.title,
                            content:news.content
                        }
                    }"
                >
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示區 -->
         <div class="news-content">
            <RouterView></RouterView>
         </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import {reactive} from "vue"
    import { RouterView, RouterLink} from "vue-router"

    const newList = reactive([
        {id:"asfdtrfay01", title:"一種很好的抗癌食物", content:"西藍花"},
        {id:"asfdtrfay02", title:"如何一夜暴富", content:"學IT"},
        {id:"asfdtrfay03", title:"震驚,萬萬沒想到", content:"明天是周一"},
        {id:"asfdtrfay04", title:"好消息!好消息!", content:"快過年了"}
    ])
</script>

<style scoped>
    .news {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    .news ul {
        margin-top: 30px;
        /* list-style: none; */
        padding-left: 10px;
    }

    .news li::marker {
        color:#64967E
    }

    .news li>a {
        font-size: 18px;
        line-height: 40%;
        text-decoration: none;
        color: #64967E;
        text-shadow: 0 0 1px rgb(0, 84, 0);
    }

    .news-content {
        width: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius: 10px;
    }
</style>