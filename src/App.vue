<template>
  <div id="app" :class="{nightTheme: isNightTheme}">
    <ImageBG/>
    <AppContainer>
      <hero-section id="hero"/>
      <skills-section id="skills"/>
      <portfolio-section id="portfolio"/>
      <additional-skils-section id="add_skills"/>
      <about-me-section id="about"/>
      <faq-section id="faq"/>
      <about-company-section id="company"/>

    </AppContainer>
    <div v-if="playingDoom" @click="closeGame" class="close">close</div>
    <DosGame command="DIGGER.COM" file="digger.zip" v-if="playingDoom"/>

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
import AboutCompanySection from "@/layout/AboutCompanySection";

export default {
  name: 'App',
  components: {
    AboutCompanySection,
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
    isNightTheme: () => (
        (new Date()).getHours() >= 3 && (new Date()).getHours() <= 7
    ),
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
      window.location.hash = "";
      window.location.reload();
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

.nightTheme#app {
  filter: grayscale(0.7) brightness(0.5);
}

body {
  margin: 0;
  height: 0;
  overflow-x: hidden;
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
