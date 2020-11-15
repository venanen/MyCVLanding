<template>
  <div id="app" >
    <div v-if="playingDoom" @click="closeGame" class="close">close</div>
    <DosGame command="DIGGER.COM" file="digger.zip" v-if="playingDoom"/>

    <AppContainer>
      <HeroSection :id="1"/>
      <SecondSection :id="2"/>
      <ThirdSection :id="3"/>
      <FourthSection :id="4"/>
      <ImageBG/>
      <FifthSection :id="5"/>
    </AppContainer>


  </div>
</template>

<script>
import HeroSection from "@/layout/HeroSection";
import SecondSection from "@/layout/SecondSection";
import ThirdSection from "@/layout/ThirdSection";
import FourthSection from "@/layout/FourthSection";
import AppContainer from "@/layout/AppContainer";
import DosGame from "@/DosGame";
import FifthSection from "@/layout/FifthSection";
import ImageBG from "@/ImageBG";


export default {
  name: 'App',
  components: {
    ImageBG,
    FifthSection,
    DosGame,
    AppContainer,
    FourthSection,
    ThirdSection,
    SecondSection,
    HeroSection,

  },
  data: () => ({
    game: true,
    location: window.location.hash
  }),
  mounted() {

    window.onhashchange = ()=>{
      console.log(window.location.hash);
      this.location = window.location.hash;
    }

  },
  computed: {
    playingDoom: function(){
      //console.log(/digger/.test(window.location.hash))
      return /digger/.test(this.location) && this.game;
    },


  },
  methods: {
    keyPress: function(e){
      console.log(e)
    },
    closeGame: function(){
      this.game = false;
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

body {
  margin: 0;
  height: 0;
}
.close{
  color: white;
  //z-index: 10;
  position: fixed;
  top: 3px;
  right: 3px;
  z-index: 31;
}
.dosbox-container{
  //display: none !important;
}
</style>
