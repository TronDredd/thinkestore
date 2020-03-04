<template>
    <div id="login">
        <div id="margin1"></div>
        <div id="logo">
            <h1>Customers Admin</h1>
        </div>
        <div id="margin2"></div>
        <div class="inputbox">
            <input name="username" type="text" v-model="username">
        </div>
        <div id="margin3">
<!--            msg output-->
            <p>{{msg1}}</p>
        </div>
        <div class="password">
            <input name="password" type="password" v-model="password">
        </div>
        <div id="margin4">
            <p>{{msg2}}</p>
        </div>
        <button @click="handleClick">click me</button>
    </div>
</template>

<script>
    import axios from "../api/index.js"
    const msgs = [
    "Username should not be empty",
    "Password should not be empty",
    "Incorrect username or password"
    ];
    const url = "https://07acd98d-b481-4f39-af3b-cf0b01c6fee2.mock.pstmn.io/login";
    export default {
        name: "Login.vue",

        data() {
            return {
                username: "",
                password: "",
                msg1: "",
                msg2: "",
            }
        },
        methods: {
            handleClick: function () {
                this.msg1 = "";
                this.msg2 = "";
                const username = this.username;
                const pwd = this.password;
                //whether the username or the password is empty
                if(username == "") {
                    this.msg1 = msgs[0];
                    return;
                }
                if(pwd == "") {
                    this.msg2 = msgs[1];
                    return;
                }

                axios
                   .post(url)
                   .then(response => {
                       console.log(response.data)
                   }).catch(error => {
                    console.log(`出现错误, ${error}`)
                })
            }
        }
    }
</script>

<style scoped>

</style>