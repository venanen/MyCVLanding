<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HeroSection/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeroSection from "@/layout/HeroSection";
export default {
  name: 'App',
  components: {
    HeroSection,
    HelloWorld
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  margin-top: 60px;
}
</style>
