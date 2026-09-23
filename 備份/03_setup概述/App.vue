<template>
    <Person />
</template>

<script lang="ts">
    import Person from "./components/Preson.vue"

    export default {
        name:"App", // 組件名
        components:{Person} // 註冊組件
    }
</script>