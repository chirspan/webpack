<template>
  <div class="login">
    <div id="login_background">
      <img class="login-img" src="./../assets/img/body-bg-01.png"/>
    </div>
    <div id="login_content">
      <div id="login_logo">
        <img src="./../assets/img/logo.png"/>
      </div>
      <div id="login_title">
        <div>\{{appName}}</div>
      </div>
      <div id="login_form">
        <div class="title">登录</div>
        <div class="input-box">
          <Form :model="loginData" :rules="rules" ref="loginForm">
            <FormItem prop="username">
              <Input v-model="loginData.username" placeholder="用户名" size="large"></Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="loginData.password" placeholder="密码" size="large" @keyup.enter.native="submitForm('loginForm')"></Input>
            </FormItem>
          </Form>
          <div class="box-bottom">
            <Button type="primary" shape="circle" @click="submitForm('loginForm')" style="width: 100%;" size="large">登录</Button>

          </div>
          <div class="box-bottom_rg">
            <a>忘记密码</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import appConf from '@/libs/app-conf.js'

  var Base64 = require('js-base64').Base64;

  export default {
    data() {
      return {
        appName: appConf.appName,
        loginData: {
          username: null,
          password: null
        },
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var UDATA = {}
            UDATA.token = 'asdasdasda';
            UDATA.user = Base64.encode(JSON.stringify(this.loginData))
            this.$store.dispatch('login', UDATA);
            let redirect = decodeURIComponent(this.$route.query.redirect);
            console.log(redirect)
            if (redirect == 'undefined') {
              redirect = '/home';
            }
            this.$router.push({
              path: redirect
            });
            /*this.loginInfo = ''
            this.axios.post('/yy-api/auth/token', {
              username: this.loginData.username,
              password: this.loginData.password
            }).then((response) => {

              var UDATA = {}
              UDATA.user = response.data.split(".")[1];
              UDATA.token = response.data;
              this.$store.dispatch('login', UDATA);
              let redirect = decodeURIComponent(this.$route.query.redirect);
              if (redirect == 'undefined')
                redirect = 'test';
              this.$router.push({
                path: redirect
              });
            }).catch((response) => {
              console.log(response)
              this.$Message.error('用户名或密码错误!');
            })*/

          } else {
            return false;
          }
        });
      }
    }
  }
</script>


<style scoped>


  /* login page */
  #login_background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #login_content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 70%;
    background: #fff;
    filter: Alpha(opacity=95);
    opacity: 0.95;
  }

  #login_logo {
    margin-top: 20%;
    text-align: center;
  }

  #login_title {
    margin-top: 35px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #474a4f;
  }

  #login_form {
    position: absolute;
    top: 35%;
    text-align: center;
    width: 100%;
    /*margin-left: 23%;*/
    /*margin-right: 23%;*/
  }

  /* login page end */
  .login {
    height: 100%;
    /*min-height: 600px;*/
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
  }

  .login .logo {
    position: absolute;
    margin-top: 50px;
    margin-left: 50px;
  }

  .login .title {
    font-weight: 700;
    font-size: 20px;
    color: #20a0ff;
  }

  .input-box {
    margin-top: 30px;
    padding-left: 18%;
    padding-right: 18%;
  }

  .box-bottom {
    margin-top: 10px;
    /*padding: 28px 20px 15px 40px;*/
  }

  .box-bottom_rg {
    text-align: right;
    padding-right: 30px;
    padding-top: 20px;
  }

  .box-bottom_rg a {
    color: gray;
    cursor: pointer;
  }

  .box-bottom_rg a:hover {
    color: #000;
  }

  .appName {
    font-size: 20px;
    color: #f44336;
  }

  .erro {
    color: red;
  }


</style>
