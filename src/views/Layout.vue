<template>
    <div class="layout-wrapper">
      <header>layout布局header</header>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
  .layout-wrapper{
    width: 100%;
    header: 100%;
    background-color: #c2c2c2;
  }
</style>
