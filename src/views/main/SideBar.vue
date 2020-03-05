<template>
    <div id="sidebar" class="text-center">
        <div id="logo">
            <a class="color-white">
                <i class="fab fa-google"></i>
            </a>
        </div>
        <ul class="menu-root" id="accordion">
            <li>
                <a class="color-white"><i class="fas fa-tachometer-alt"></i><span>仪表盘</span></a>
            </li>
            <li>
                <a id="userlistbtn" class="color-white" data-toggle="collapse" data-target="#userlist" aria-expanded="false" aria-controls="userlist">
                    <i class="fas fa-users"></i>
                    <span>用户管理</span>
                </a>
                <ul class="collapse sublist" id="userlist" aria-labelledby="userlistbtn" data-parent="#accordion">
                    <li>
                        <a class="btn color-white"><span>用户列表</span></a>
                    </li>
                    <li>
                        <a class="btn color-white"><span>LDAP用户列表</span></a>
                    </li>
                    <li>
                        <a class="btn color-white"><span>用户组</span></a>
                    </li>
                    <li>
                        <a class="btn color-white"><span>登录日志</span></a>
                    </li>
                </ul>
            </li>
            <li>
                <a id="navmanagebtn" class="color-white" type="button" data-toggle="collapse" data-target="#navmanage" aria-expanded="false" aria-controls="navmanage">
                    <i class="fas fa-location-arrow"></i>
                    <span>导航管理</span>
                </a>
                <ul class="collapse sublist" id="navmanage" aria-labelledby="navmanagebtn" data-parent="#accordion">
                    <li>
                        <a class="btn color-white"><span>登录日志</span></a>
                    </li>
                </ul>
            </li>
            <li>
                <a class="color-white">
                    <i class="fas fa-edit"></i>
                    <span>权限管理</span>
                </a>
            </li>
            <li>
                <a class="color-white">
                    <i class="fas fa-cogs"></i>
                    <span>系统管理</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        padding: 1.5vh 1rem;
        text-align: left;
    }
    button {
        width: 100%;
    }
    a {
        cursor: pointer;
    }
    .color-white {
        color: white;
    }
    .selectedlist {
        background-color: #263543;
    }
    .sublist li {
        padding: 0 1rem;
    }
    .menu-root span {
        margin-left: 1rem;
    }
    .menu-root .sublist span {
        margin-left: 1.2rem;
    }
    #logo {
        height: 8vh;
        background-color: #263543;
        font-size: 2rem;
    }
</style>