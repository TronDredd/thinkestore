<template>
    <div id="app">
        <nav>
            <router-view name="v-sidebar"></router-view>
        </nav>
        <main>
            <router-view name="v-header"></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Main.vue"
    }
</script>

<style scoped>

</style>