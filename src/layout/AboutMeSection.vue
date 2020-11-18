<template>
  <Section :id="this.id">
    <template v-slot:background>
      <div class="bg h100 w100v"></div>
    </template>
    <div class="container-fluid">
      <section-title>Обо мне</section-title>
      <div class="row">
        <div class="col-lg-6 col-xs-12">
          <img src="/me.jpg">
        </div>
        <div class="col-lg-6 col-xs-12">
          <div id="timeline-container" @mouseenter="disableLoco()" @mouseleave="enableLoco()">
            <TimeLine/>
          </div>
        </div>
      </div>

    </div>

    <!--<InfoBlock :fixed="true " line="left" :scroll="5">Задний фон - это не видео, а игра "Жизнь", написанная мной со стандартными правилами, работающая в реальном времени</InfoBlock>-->
  </Section>
</template>

<script>

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import TimeLine from "@/components/TimeLine";


export default {
  name: "AboutMeSection",
  components: {TimeLine, Section, SectionTitle},
  props: {
    id: Number,

  },
  methods: {
    enableLoco: () => {
      window.loco.start()
    },
    disableLoco: () => {
      window.loco.stop()
    }
  }
}
</script>

<style scoped lang="scss">
.bg {
  background-image: url(/back_about_me.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: grayscale(0.6);
}

img {
  width: 28vw;
  border-radius: 1vw;
  box-shadow: 6px 5px 4px #00000052;
}

#timeline-container {
  max-height: 100vh;
  overflow-y: auto;
}

section {
  min-height: 150vh;
}
</style>