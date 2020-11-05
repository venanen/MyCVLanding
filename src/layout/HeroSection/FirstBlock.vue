<template>
  <CenterContainer :fluid="true" :row="false">
    <h1 data-scroll data-scroll-speed="2"  class="mainTitle">Резюме</h1>
    <h2  data-scroll data-scroll-speed="4"  class="secondTitle"><i>Да, в формате сайта</i></h2>
    <h5  data-scroll data-scroll-speed="6"  class="secondTitle"><i>Зато креативно </i>😎</h5>
  </CenterContainer>

</template>

<script>
import CenterContainer from "@/components/CenterContainer";
export default {
name: "FirstBlock",
  components: {CenterContainer}
}
</script>

<style scoped>
.mainTitle{
  font-size: 10em;
  font-weight: 200;
  text-shadow: black 1px 1px 2px;
}

.secondTitle{
  opacity: 0.8;
}
</style>