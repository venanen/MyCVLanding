<template>
  <Section :id="this.id">
    <template v-slot:background>
      <div class="bg"></div>
    </template>
    <section-title><span id="hard-skills">Hard</span>/<span id="soft-skills">Soft</span> Skills</section-title>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-xs-12 col-sm-12 col-lg-offset-134 chart-container">
          <chart :chartdata="hardSkills.data" :options="hardSkills.option"/>
        </div>

        <div class="col-lg-6 col-xs-12 col-sm-12 col-lg-offset-243 chart-container">
          <chart :chartdata="softSkills.data" :options="softSkills.option"/>
        </div>

        <a id="digger" title="Start digger game" href="#digger">🕹</a>

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
    id: String,
  },
  data: () => ({
    hardSkills: skills.hardSkills,
    softSkills: skills.softSkills

  })
}
</script>

<style scoped lang="scss">
$soft-hard-time: 1s;
#digger {
  position: fixed;
  bottom: 1em;
  right: 1em;
  opacity: 0.3;
  color: initial;
  font-size: 3em;
  transform: scale(1);
  animation-name: digger;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

}
@keyframes digger {
  0%{
    transform: scale(1) rotate(0turn);
    opacity: 0.5;


  }
  33%{
    transform: scale(1.4) rotate(20deg);
    opacity: 0.7;
  }
  66%{
    transform: scale(1.4) rotate(-20deg);
    opacity: 0.7;
  }
  100%{
    transform: scale(1) rotate(0turn);
    opacity: 0.5;
  }
}

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

.chart-container {
  margin-bottom: 2em;
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