<template>
  <Section :id="id" :custom-bg="false">
    <div class="bg">
      <section-title>Компания мечты и контакты</section-title>

      <div class="row start-lg center-sm center-md">
        <div class=" col-sm-12 col-lg-5 col-lg-offset-1">
          хотелось бы<h2>Условия </h2>
          <ol>
            <li v-for="(item, i) in company" :key="i"><b> {{ item.point }}</b> - {{ item.text }}</li>

          </ol>
        </div>
        <div class=" col-sm-12 col-lg-5 col-lg-offset-1">
          если вы заинтересовались, то вот
          <h2>Контакты</h2>
          <ol>
            <li v-for="(item, i) in contacts" :key="i"><a :href="item.link">{{ item.name }}</a></li>

          </ol>
        </div>
      </div>


    </div>
  </Section>
</template>

<script>

//TODO заменить на this.$dataCV
import contacts from "@/data/contacts";
import company from "@/data/company";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

export default {
  name: "AboutCompanySection",
  components: {SectionTitle, Section},
  props: {
    id: String,
  },
  data: () => ({
    company,
    contacts
  })
}
</script>

<style scoped>
.bg {
  background: #1c1c1c;
  height: 100%;

}
h4{
  color: white;
  background: black;
  font-family: ui-rounded, serif;
}
section {
  /* TODO: remove */

}

li {
  font-size: 2em;
}
</style>