<template>
  <div :class="`${this.isFluid} h100 w100`">
    <div
      v-if="!row"
      class="row h100 center-xs middle-xs "
    >
      <div class="col">
        <slot />
      </div>
    </div>

    <div
      v-else
      class="row h100 center-xs middle-xs "
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterContainer",
  props: {
    fluid: Boolean,
    row: Boolean
  },
  computed: {
    isFluid() {
      return this.fluid ? `container-fluid` : `container`;
    },

  }
}
</script>

<style scoped>

</style>