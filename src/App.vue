<template>
  <div id="app">

    <el-menu mode="horizontal" default-active="home">
      <el-menu-item index="home" @click="$router.push('/')">首页</el-menu-item>
      <el-menu-item index="about" @click="$router.push('/about')">关于</el-menu-item>
    </el-menu>


    <router-view />
  </div>
</template>

<style>
#app {
  padding: 20px;
}
</style>