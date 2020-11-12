<template>
  <Section :id="this.id">
    <template v-slot:background>
      <div class="bg"></div>
    </template>
    <section-title><span id="hard-skills">Hard</span>/<span id="soft-skills">Soft</span> Skills</section-title>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-lg-offset-1">
          <chart :chartdata="hardSkills.data" :options="hardSkills.option"/>
        </div>

        <div class="col-lg-4 col-lg-offset-2">
          <chart :chartdata="softSkills.data" :options="softSkills.option"/>
        </div>
      </div>
    </div>

  </Section>
</template>

<script>
import Section from "@/components/Section"
import SectionTitle from "@/components/SectionTitle";
import Chart from "@/components/Chart";
import skills from "@/data/skills";

export default {

  components: {Chart, SectionTitle, Section},
  props: {
    id: Number,
  },
  data: ()=>({
    hardSkills: skills.hardSkills,
    softSkills: skills.softSkills

  })
}
</script>

<style scoped lang="scss">
$soft-hard-time: 1s;
.bg {
  //-webkit-background-image: linear-gradient(45deg, $accent 20%, $lightAccent);
  background-image: linear-gradient(84deg, $accent 60%, $lightAccent);
  //background: $thirdSection;
  width: 100%;
  height: 100%;
  animation-name: background;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  background-size: 100%;
  background-position-x: right;
  animation-direction: alternate;
  animation-delay: 1s;
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

#soft-skills {
  opacity: 0.2;
  animation: alternate;
  animation-name: soft;
  animation-duration: $soft-hard-time;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: $soft-hard-time;
}

#hard-skills {
  opacity: 1;
  animation: alternate;
  animation-name: hard;
  animation-duration: $soft-hard-time;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: 0s;
}

@keyframes hard {

  0% {
    opacity: 1;
    animation-timing-function: ease-in-out;
  }
  50% {
    opacity: 0.2;
    animation-timing-function: ease-in-out;

  }
}

@keyframes soft {

  0% {
    opacity: 0.2;
    animation-timing-function: ease-in-out;
  }
  50% {
    opacity: 1;
    animation-timing-function: ease-in-out;

  }
}
</style>