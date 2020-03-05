<template>
    <div class="container-fluid min-width max-width">
        <div id="login" class="row row-cols-1 align-items-center justify-content-center login-center">
            <form>
                <h1 class="text-center text-white margin-bottom">Customer Admin</h1>
                <div class="inputbox">
                    <i class="fas fa-user input-head"></i>
                    <input name="username" type="text" v-model="username" placeholder="Username" autocomplete="off">
                </div>
        <!--     msg output-->
<!--                <p class="warning" v-if="show1">{{msg1}}</p>-->
                <div id="gap"></div>
                <div class="inputbox">
                    <i class="fas fa-lock input-head"></i>
                    <input name="password" type="password" v-model="password" placeholder="Password">
                </div>
                <div class="row rememberbox justify-content-around align-items-center">
<!--                    <p class="warning col-8" v-if="show2">-->
<!--                    {{msg2}}-->
<!--                    </p>-->
                    <label class="col text-right" for="remember">
                        <input type="checkbox" id="remember" v-model="rememberuser">记住我
                    </label>
                </div>

                <button @click="handleClick" class="btn btn-block login-btn">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "../api/index.js"
    import { setCookie } from "../utils/Cookie.js"
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
                msg1: "  ",
                // msg2: msgs[1],
                rememberuser: false,
            }
        },
        methods: {
            handleClick: function () {
                const username = this.username;
                const pwd = this.password;
                // whether the username or the password is empty
                if(username == "") {
                    this.showWarning(msgs[0]);
                    return;
                }
                if(pwd == "") {
                    this.showWarning(msgs[1]);
                    return;
                }

                axios
                   .post(url)
                   .then(response => {
                       //incorrect username or password
                       if(response.data.msg == "fail") {
                           this.msg2 = msgs[2];
                           return;
                       }
                       //login success
                       //not sure
                       const token  = response.data.data;
                       const Days = 30;
                       const exp = new Date();
                       exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                       // document.cookie = `token = ${escape(token)}; expires = ${exp.toUTCString()}`
                       console.log(`token: ${token}, type: ${typeof(token)}, expire: ${exp}, type: ${typeof(exp)}`);

                       //save cookie
                       if(this.rememberuser) {
                           console.log("remember the user,and save cookie")
                           // setCookie('token', token, Infinity);
                       }
                       //router to main
                       this.$router.push({ path: 'main' });
                   })
                    .catch(error => {
                    console.log(`出现错误, ${error}`)
                })
            },
            showWarning(val) {
                window.alert(val);
            }
        },
        //before entering the login component
        beforeRouteEnter(to, from, next) {
            window.document.body.style.backgroundColor = "#333a56";
            next();
        },
        //before leaving the login component
        beforeRouteLeave(to, from, next) {
            window.document.body.style.backgroundColor = "";
            next();
        }
    }
</script>

<style scoped>
    input {
        line-height: 6vh;
        padding: 0;
        margin-left: 10px;
        outline: none;
        border: none;
        background: transparent;
        color: #a9b8e5;
    }
    label,button {
        margin: 0;
        color: #a9b8e5;
    }
    #login {
        color: #a9b8e5;
    }
    ::-webkit-input-placeholder {
        color: #a9b8e5;
    }
    :-moz-placeholder {/* Firefox 18- */
        color: #a9b8e5;
    }
    ::-moz-placeholder{/* Firefox 19+ */
        color: #a9b8e5;
    }
    :-ms-input-placeholder {
        color: #a9b8e5;
    }
    .min-width {
        width: 80%;
    }
    .max-width {
        max-width: 480px;
    }
    .login-center {
        height: 100vh;
    }
    .margin-bottom {
        margin-bottom: 40px;
    }
    .inputbox {
        position: relative;
        height: 6vh;
        width: 100%;
        border: 1px solid #456eab;
        border-radius: 10px;
        color: #a9b8e5;
    }
    .input-head {
        margin-left: 16px;
    }
    .login-btn {
        height: 6vh;
        outline: none;
        border-style: none;
        background-color: #2797ff;
        border-radius: 10px;
    }
    #gap {
        height: 1rem;
    }
</style>