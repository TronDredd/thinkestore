<template>
    <div id="header">
        <ul class="menu-root">
            <li>
                <a>仪表盘</a>
            </li>
            <li>
                <a>用户管理</a>
                <ul class="用户列表">
                    <li>
                        <a>用户列表</a>
                    </li>
                    <li>
                        <a>LDAP用户列表</a>
                    </li>
                    <li>
                        <a>用户组</a>
                    </li>
                    <li>
                        <a>登录日志</a>
                    </li>
                </ul>
            </li>
            <li>
                <a>导航管理</a>
                <ul>

                </ul>
            </li>
            <li>
                <a>权限管理</a>
            </li>
            <li>
                <a>系统管理</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>