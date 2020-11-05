<template>
  <section data-scroll-section :id="idSection" class="contentSection">
    <div id="sectionBackground">
      <slot name="background">
      </slot>
    </div>
    <div id="sectionMainContent" @click="this.handleClick" class="h100 w100">
      <slot>

      </slot>
    </div>

  </section>

</template>

<script>
export default {
  name: "Section",
  mounted() {

  },

  props: {
    id: Number
  },
  data: ()=>({
    animated: false
  }),
  computed: {
    idSection() {
      return 'section_' + this.id;
    }
  },
  methods: {
    handleClick: function(e){
      this.$emit("click", e)
    }

  }
}
</script>

<style lang="scss" scoped>

#sectionBackground {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
}

section {
  width: 100%;
  height: 110vh;
  overflow: hidden;
}

#sectionMainContent {
  z-index: 1;
  height: 100%;
}

</style>