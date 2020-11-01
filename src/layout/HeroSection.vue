<template>
  <Section :id="this.id">
    <template v-slot:background >
      <div class="bg"></div>
    </template>
    <CenterContainer :fluid="false" :row="false"><h1>Привет, я гандон</h1>
      <a class="button" href="#">Default Button</a></CenterContainer>
  </Section>
</template>

<script>
import Section from "@/components/Section"
import CenterContainer from "@/components/CenterContainer";

export default {
  name: "HeroSection",
  components: {CenterContainer, Section},
  props: {
    id: Number,
  }
}
</script>

<style scoped lang="scss">
@import "src/milligram/milligram";
  .bg{
    background: $firstSection;
    width:100%;
    height: 100%;

  }
</style>