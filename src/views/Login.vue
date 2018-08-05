<template>
  <div>
    <h1>登录页</h1>
    <div>hint: 直接点login就能登录了</div>
    <div>账号：<input type="text" maxlength="11"></div>
    <div>密码：<input type="password" maxlength="16"></div>
    <button @click="loginHandle">login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'clydeusername',
        password: '123'
      }
    }
  },
  methods: {
    /**
     * 登录
     */
    loginHandle () {
      // TODO promise
      this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
        this.$router.push({ path: '/hello' })
      })
    }
  }
}
</script>

<style scoped>

</style>
