<template>
  <Section>
    <template v-slot:background >
      <div class="bg"></div>
    </template>
    2133rfwef
  </Section>
</template>

<script>
import Section from "@/components/Section"

export default {
  name: "HeroSection",
  components: {Section}
}
</script>

<style scoped lang="scss">
  .bg{
    background: $primary;
    width:100%;
    height: 100%;
  }
</style>