<template>
  <Section :id="this.id">
    <template v-slot:background >
      <div class="bg"></div>
    </template>
    2133rfwef
  </Section>
</template>

<script>
import Section from "@/components/Section"

export default {

  components: {Section},
  props: {
    id: Number,
  }
}
</script>

<style scoped lang="scss">
  .bg{
    background: $fourthSection;
    width:100%;
    height: 100%;
  }
</style>