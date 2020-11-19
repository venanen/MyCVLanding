<template>
  <div id="app">

    <AppContainer>
      <hero-section :id="1"/>
      <skills-section :id="3"/>
      <portfolio-section :id="4"/>
      <additional-skils-section :id="5"/>
      <about-me-section :id="6"/>
      <faq-section :id="2"/>

    </AppContainer>
    <div v-if="playingDoom" @click="closeGame" class="close">close</div>
    <DosGame command="DIGGER.COM" file="digger.zip" v-if="playingDoom"/>
    <ImageBG/>
    <transition name="fade">

      <Loading key="main-loading" v-if="!isLoading"/>

    </transition>
  </div>
</template>

<script>
import HeroSection from "@/layout/HeroSection";
import FaqSection from "@/layout/FaqSection";
import SkillsSection from "@/layout/SkillsSection";
import PortfolioSection from "@/layout/PortfolioSection";
import AppContainer from "@/layout/AppContainer";
import DosGame from "@/components/DosGame";
import AdditionalSkilsSection from "@/layout/AdditionalSkilsSection";
import ImageBG from "@/components/ImageBG";
import Loading from "@/components/Loading";
import {mapGetters} from 'vuex';
import AboutMeSection from "@/layout/AboutMeSection";

export default {
  name: 'App',
  components: {
    SkillsSection,
    AboutMeSection,
    Loading,
    ImageBG,
    AdditionalSkilsSection,
    DosGame,
    AppContainer,
    PortfolioSection,

    FaqSection,
    HeroSection,

  },
  data: () => ({
    game: true,
    location: window.location.hash,

  }),
  mounted() {
    this.$store.dispatch('doneTimeOut')
    window.onhashchange = () => {

      this.location = window.location.hash;
    }

  },
  computed: {
    playingDoom: function () {

      return /digger/.test(this.location) && this.game;
    },
    ...mapGetters([
      'isLoading'
      // ...
    ])


  },
  methods: {
    keyPress: function (e) {
      console.log(e)
    },
    closeGame: function () {
      this.game = false;
    },

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

.close {
  color: white;
  //z-index: 10;
  position: fixed;
  top: 3px;
  right: 3px;
  z-index: 31;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}

.dosbox-container {
  //display: none !important;
}
</style>
