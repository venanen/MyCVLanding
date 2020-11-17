<template>
  <Section :id="this.id" :animated="false">
    <template v-slot:background>
      <div class="bg"></div>
    </template>
    <section-title data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">Портфолио</section-title>
    <div class="container-fluid prod-fluid">
      <div class="row start-lg ">
        <product-card v-for="(prod, i) in prods.data" :image="prod.image"
                      :class="prod.class"
                      data-scroll
                      :badges="prod.badges"
                      :link="prod.link"
                      :github="prod.github"
                      :key="i"
        >
          {{ prod.title }}
          <template v-slot:subtitle>{{ prod.subtitle }}</template>
        </product-card>



      </div>
    </div>
  </Section>
</template>

<script>
import Section from "@/components/Section"
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import portfolioData from "@/data/portfolio";

export default {
  mounted() {
    //TODO delete this
    this.$nextTick(()=>{
      window.loco.update();
    })
  },
  components: {ProductCard, SectionTitle, Section},
  data: ()=>({
    prods: portfolioData
  }),
  props: {
    id: Number,
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
  min-height: 300vh;
}


.prod-fluid {
  padding-left: 10vw;
  padding-right: 10vw;

}

</style>