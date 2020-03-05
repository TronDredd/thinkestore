<template>
    <div id="userinfo">
        <div class="selectedcomponent bg-white">
            <i class="fas fa-laptop"></i>
            <span class="margin-left-4">用户详情</span>
        </div>
        <div>
            <nav class="nav justify-content-end bg-white padding">
                <a class="margin-left-4"><i class="fas fa-chevron-up"></i></a>
                <a class="margin-left-4"><i class="fas fa-wrench"></i></a>
                <a class="margin-left-4"><i class="fas fa-times"></i></a>
            </nav>
            <div class="card padding infobox">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <span id="username">ZABBIX</span>
                    </li>
                    <!--editable component-->
                    <li class="list-group-item">
                        <span>名称:</span>
                        <span>Cras</span>
                    </li>
                    <li class="list-group-item">
                        <span>Logo:</span>
                        <span>Crdsffvas</span>
                    </li>
                    <li class="list-group-item">
                        <span>Url:</span>
                        <span>Crfdsaerfdscbas</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped>
    .selectedcomponent {
        display: inline-block;
        padding: .6rem 1.2rem;
    }
    .margin-left-4 {
        margin-left: .4rem;
    }
    .padding {
        padding: .4rem .6rem;
    }
    .infobox {
        border: none;
        border-top: 1px solid rgba(0,0,0,.125);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        -webkit-border-top-left-radius: 0;
        -webkit-border-top-right-radius: 0;
    }
    #userinfo {
        margin: .6rem 1rem;
    }
    #username {
        background-color: red;
        font-size: 2rem;
        color: white;
    }
</style>