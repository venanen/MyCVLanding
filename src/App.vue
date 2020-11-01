<template>
  <div id="app">

    <HeroSection :id="1"/>
    <SecondSection :id="2"/>
    <ThirdSection :id="3"/>
    <FourthSection :id="4"/>
  </div>
</template>

<script>
import HeroSection from "@/layout/HeroSection";
import SecondSection from "@/layout/SecondSection";
import ThirdSection from "@/layout/ThirdSection";
import FourthSection from "@/layout/FourthSection";

export default {
  name: 'App',
  components: {
    FourthSection,
    ThirdSection,
    SecondSection,
    HeroSection,

  },

}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  //margin-top: 60px;
}
body{
  margin:0;
  height: 0;
}
</style>
