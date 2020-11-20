<template>
  <Section :class="{doAnimation: sectionClass}" @click="eventClick" :id="this.id">
    <template v-slot:background>
      <div class="bg"></div>
    </template>
    <div class="container-fluid">
      <SectionTitle>Небольшое FAQ</SectionTitle>

      <div class="row">
        <div class="col-lg-8">
          <info-block :scroll="2" line="left">
            <template v-slot:question>Зачем сайт? Почему не обычное pdf?</template>
            Затем, чтобы чек кек чебурек
          </info-block>
        </div>
        <div class="col-lg-8 col-lg-offset-4">
          <info-block :scroll="2" line="right">
            <template v-slot:question>Зачем сайт? Почему не обычное pdf?</template>
            Затем, чтобы чек кек чебурек
          </info-block>
        </div>
        <div class="col-lg-8">
          <info-block :scroll="2" line="left">
            <template v-slot:question>Зачем сайт? Почему не обычное pdf?</template>
            Затем, чтобы чек кек чебурек
          </info-block>
        </div>
        <div data-scroll-direction="horizontal" data-scroll data-scroll-speed="3" @click="eventClickMe"
             class="col-lg-12 clickMe">Клик💥
        </div>
      </div>
    </div>
    <!--<InfoBlock :fixed="true " line="left" :scroll="5">Задний фон - это не видео, а игра "Жизнь", написанная мной со стандартными правилами, работающая в реальном времени</InfoBlock>-->
  </Section>
</template>

<script>
import Section from "@/components/Section"
import InfoBlock from "@/components/InfoBlock";
import SectionTitle from "@/components/SectionTitle";


export default {

  components: {SectionTitle, InfoBlock, Section},
  props: {
    id: String,

  },
  data: () => ({
    sectionClass: false
  }),
  mounted: function () {

  },
  methods: {
    eventClick: function (e) {
      this.$core.placeNewElementByClick(e, this.$el);

    },
    eventClickMe: function () {
      this.sectionClass = !this.sectionClass;

    }
  }
}
</script>

<style scoped lang="scss">
.bg {
  //background: $secondSection;
  width: 100%;
  height: 100%;
  -webkit-background-image: linear-gradient(45deg, $first 20%, $secondary);
  background-image: linear-gradient(45deg, $first 60%, $secondary);
  animation-name: background;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  background-size: 100%;
  background-position-x: right;
  animation-direction: alternate;
  animation-delay: 1s;
}

section {
  //height: 200vh;
}

.clickMe {
  color: rgb(47, 168, 153)
}

.doAnimation * {
  animation-name: rotate;
  animation-duration: 3s;
  animation-iteration-count: 1;
  background-size: 100%;
  animation-direction: alternate;
  //animation-delay: 1s;
}

@keyframes background {

  0% {
    background-size: 100%;
    animation-timing-function: ease-in-out;
  }
  50% {
    background-size: 250%;
    animation-timing-function: ease-in-out;
  }
}

@keyframes rotate {

  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-in-out;
  }
  /*30%{
    transform: rotate(40deg);
    animation-timing-function: ease-in-out;
  }
  60%{
    transform: rotate(20deg);
    animation-timing-function: ease-in-out;
  }
  80%{
    transform: rotate(60deg);
    animation-timing-function: ease-in-out;
  }*/
  50% {
    transform: rotate(90deg);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: rotate(0deg);
    animation-timing-function: ease-in-out;
  }
}
</style>