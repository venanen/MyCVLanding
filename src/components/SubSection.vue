<template>
  <div class="subSection">
    <slot />
  </div>
</template>

<script>
export default {
name: "SubSection"
}
</script>

<style scoped>
.subSection{
  height: 100vh;
}
</style>