<template>
  <Section :id="this.id">
    <template v-slot:background>

      <div class="bg" data-scroll-speed="0" data-scroll>
        <GameLife/>
      </div>
    </template>
    <SubSection>
      <FirstBlock/>
    </SubSection>
    <div data-scroll-speed="2" data-scroll class="tips">Задний фон - это не видео, а игра "Жизнь", написанная мной со стандартными правилами, работающая в реальном времени</div>



    <SubSection>

    </SubSection>


  </Section>
</template>

<script>
import Section from "@/components/Section"
import GameLife from "@/plugins/Life/GameLife";
import FirstBlock from "@/layout/HeroSection/FirstBlock";
import SubSection from "@/components/SubSection";


export default {
  name: "HeroSection",
  components: { SubSection, FirstBlock,  GameLife, Section},
  props: {
    id: Number,
  }
}
</script>

<style scoped lang="scss">
.tips{

}

.bg {
  background: #00000085;
  width: 100%;
  height: 100%;

}

.mainTitle{
  font-size: 10em;
  font-weight: 200;
  text-shadow: black 1px 1px 2px;
}

.secondTitle{
  opacity: 0.8;
}
</style>