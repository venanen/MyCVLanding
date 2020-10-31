<template>
  <section>
    <div id="sectionBackground">
      <slot name="background">
      </slot>
    </div>
    <slot>

    </slot>
  </section>

</template>

<script>
export default {
  name: "Section"
}
</script>

<style scoped>

</style>