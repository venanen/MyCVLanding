<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2>Небольшое FAQ</h2>
      </div>

    </div>
    <div class="row">
      <div class="col-lg-8">
        <InfoBlock line="left">
          <h3>Главный вопрос, зачем сайт?</h3>
        </InfoBlock>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";
export default {
name: "SecondBlock",
  components: {InfoBlock}
}
</script>

<style scoped>

</style>