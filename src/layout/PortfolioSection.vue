<template>
  <Section
    :id="this.id"
    :animated="true"
  >
    <template v-slot:background />
    <div class="bg">
      <section-title
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        Портфолио
      </section-title>
      <div class="container-fluid prod-fluid">
        <div class="row start-lg ">
          <product-card
            v-for="(prod, i) in prods.data"
            :image="prod.image"
            :class="prod.class"
            data-scroll
            :badges="prod.badges"
            :link="prod.link"
            :github="prod.github"
            :adult="prod.adult"
            :key="i"
          >
            {{ prod.title }}
            <template v-slot:subtitle>
              {{ prod.subtitle }}
            </template>
          </product-card>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "@/components/Section"
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";


export default {
  components: {ProductCard, SectionTitle, Section},
  data: function () {
    return {
      prods: this.$usesData.portfolio
    }
  },
  props: {
    id: String,
  }
}
</script>

<style scoped lang="scss">

.bg {
  background: $fourthSection;
  width: 100%;
  height: 100%;
}

section {
  //min-height: 300vh;
}


.prod-fluid {
  padding-left: 10vw;
  padding-right: 10vw;

}

</style>