<template>
  <div id="app"  >
    <AppContainer>
      <HeroSection :id="1"/>
      <SecondSection :id="2"/>
      <ThirdSection :id="3"/>
      <FourthSection :id="4"/>
    </AppContainer>


  </div>
</template>

<script>
import HeroSection from "@/layout/HeroSection";
import SecondSection from "@/layout/SecondSection";
import ThirdSection from "@/layout/ThirdSection";
import FourthSection from "@/layout/FourthSection";
// eslint-disable-next-line no-unused-vars
import LocomotiveScroll from 'locomotive-scroll';
import AppContainer from "@/layout/AppContainer";


export default {
  name: 'App',
  components: {
    AppContainer,
    FourthSection,
    ThirdSection,
    SecondSection,
    HeroSection,

  },
  data: ()=>{
    return {
      animated: false
    }
  },
  mounted() {

    /*console.log(this.$el.parentElement.onscroll = ()=>{
      this.scrollHandler()
    })*/

  },
  methods: {
    scrollHandler: function (){

      for(let elem of document.querySelectorAll("section.contentSection")){
        if (elem.getBoundingClientRect().y < 200 && elem.getBoundingClientRect().y > -200) {
          //this.$el.parentElement.scrollTop = 400;
          elem.scrollIntoView();



          console.log("Scrolling "+elem.id+" Bounded client "+elem.getBoundingClientRect().y)
        }

      }
    },
    scroll: function(){
      console.log("sc")
    }
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
  //margin-top: 60px;
}
body{
  margin:0;
  height: 0;
}
</style>
