<template>
  <Section :id="id">
    <template v-slot:background>
      <GameLife :is-life-run="isLifeRun" />
    </template>
    <div class="h100v w100v bg">
      <CenterContainer
        :fluid="true"
        :row="false"
      >
        <h1
          data-scroll
          data-scroll-speed="2"
          class="mainTitle"
        >
          Резюме
        </h1>
        <h2
          data-scroll
          data-scroll-speed="4"
          class="secondTitle"
        >
          <i>На позицию WEB разработчика</i>
        </h2>
        <!-- <h5
          data-scroll
          data-scroll-speed="6"
          class="secondTitle"
        >
          <i>Да, в виде сайта. Но зато креативно </i>😎
        </h5> -->
      </CenterContainer>
    </div>

    <div
      data-scroll-speed="2"
      data-scroll
      class="tips"
    >
      Задний фон - это не видео, а игра "Жизнь", написанная мной со
      стандартными правилами, работающая в реальном времени
    </div>
  </Section>
</template>

<script>
import Section from "@/components/Section"
import GameLife from "@/plugins/Life/GameLife";

import CenterContainer from "@/components/CenterContainer";


export default {
  name: "HeroSection",
  components: {CenterContainer, GameLife, Section},

  props: {
    id: String,
    isLifeRun: Boolean
  }
}
</script>

<style scoped lang="scss">

.tips {
  position: absolute;
  bottom: -2px;
  right: 0;
  left: 0;
}

.bg {
  background: #00000085;


}

.mainTitle {
  font-size: 10em;
  font-weight: 200;
  text-shadow: black 1px 1px 2px;
}

.secondTitle {
  opacity: 0.8;
}

@media only screen and (min-width: 300px) and (max-width: 760px) {
  .mainTitle {
    font-size: 5em;
    font-weight: 200;
    text-shadow: black 1px 1px 2px;
  }
}
</style>
