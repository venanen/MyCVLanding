<template>
  <Section :id="this.id">
    <template v-slot:background >

      <div class="bg">
        <GameLife/>
      </div>
    </template>
    <CenterContainer :fluid="false" :row="false"><h1>Привет, ты пидор</h1>
      <a class="button" href="#">Пойти нахуй</a></CenterContainer>
  </Section>
</template>

<script>
import Section from "@/components/Section"
import CenterContainer from "@/components/CenterContainer";
import GameLife from "@/others/Life/GameLife";

export default {
  name: "HeroSection",
  components: {GameLife, CenterContainer, Section},
  props: {
    id: Number,
  }
}
</script>

<style scoped lang="scss">
@import "src/milligram/milligram";
  .bg{
    background: #00000085;
    width:100%;
    height: 100%;

  }
</style>