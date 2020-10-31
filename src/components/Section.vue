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

<style lang="scss" scoped>

#sectionBackground{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
section{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

</style>