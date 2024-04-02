<script setup lang="ts">
import {LoginModel} from "@/stores/user.ts";
import { login } from "@/api/demo/index.ts"


const systemlogin = ()=>{
  let user:LoginModel = {username:"admin",password:"123456"}
  login(user);
}
</script>

<template>
  <h1>首页</h1>
  <el-button size="large"  type="primary" @click="systemlogin()" style="width: 100%;">登录</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
