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
          class="mainTitle glitch"
          data-text="РЕЗЮМЕ"
        >
          РЕЗЮМЕ
        </h1>
        <h2
          data-scroll
          data-scroll-speed="4"
          class="secondTitle"
        >
          <i>На позицию Vue Frontend Developer</i>
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
  background: linear-gradient(to top, #000000b0, #210000b5);


}

.mainTitle {
  font-size: 12em;
  letter-spacing: 0.2em;
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
@mixin glitchCopy {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch {
  position: relative;
  color: white;
  font-size: 10em;
  letter-spacing: .5em;
  animation: glitch-skew 1s infinite linear alternate-reverse;
  &::before {
    @include glitchCopy;
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  &::after {
    @include glitchCopy;
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    animation: glitch-anim2 1s infinite linear alternate-reverse;
  }
}
@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*((1/$steps)))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
      transform: skew((random(100)/ 100) + deg);
    }
  }
}
@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
      transform: skew((random(100)/100) + deg);
    }
  }
}

@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}
</style>
