<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>

<script setup lang="ts" name="Home">
    import {onMounted} from "vue"
    import {useRouter} from "vue-router"

    const router = useRouter()

    /*
    onMounted(()=>{
        // 在此處編寫一段代碼，讓路由實現跳轉
        setTimeout(()=>{
            router.push("/news")
        },3000)
    })
    */
</script>

<style scoped>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>