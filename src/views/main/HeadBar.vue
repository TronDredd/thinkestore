<template>
    <div id="headerbar" class="bg-white">
        <nav class="nav justify-content-end align-items-center first-line">
            <li class="nav-item">
                <a>文档</a>
            </li>
            <li class="nav-item">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle"></i>
                    <span>Administrator</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item">1</a>
                    <a class="dropdown-item">2</a>
                </div>
            </li>
        </nav>
        <nav class="nav justify-content-start align-items-center second-line">
            <li class="nav-item">
                <a>仪表盘</a>
            </li>
            /
            <li class="nav-item">
                <a>用户管理</a>
            </li>
            /
            <li class="nav-item">
                <a>用户列表</a>
            </li>
        </nav>
        <router-view name="v-selectedcomponent"></router-view>
    </div>
</template>

<script>
    export default {
        name: "HeadBar"
    }
</script>

<style scoped>
    nav {
        height: 8vh;
        padding: 0 1rem;
        font-weight: 600;
    }
    nav a {
        margin: 0 1.2rem;
    }
    nav span {
        margin-left: .8rem;
    }
    .first-line {
        border-bottom: 1px solid #a9b8e5;
    }
</style>