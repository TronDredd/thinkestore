<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <nav class="col-2 bg-365a7e" id="main-sidebar">
                <side-bar></side-bar>
            </nav>
            <main class="col-10" id="main-content">
                <Header></Header>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
    import SideBar from "./main/SideBar";
    import Header from "./main/HeadBar";
    export default {
        name: "Main.vue",
        components: {Header, SideBar},
        //before entering the login component
        beforeRouteEnter(to, from, next) {
            window.document.body.style.backgroundColor = "#f3f3f3";
            next();
        },
    }
</script>

<style scoped>
    /*left part*/
    #main-sidebar {
        height: 100vh;
        padding: 0;
    }
    /*right part*/
    #main-content {
        padding: 0;
    }
    .bg-365a7e {
        background-color: #365a7e;
    }
</style>