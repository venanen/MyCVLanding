<template>
  <section data-scroll data-scroll-section :id="idSection" :class="`contentSection`">
    <div id="sectionBackground">
      <slot name="background">
      </slot>
    </div>
    <div data-scroll :class="{'sectionMainContent': true, 'animated': this.animated}" @click="this.handleClick"
         class="h100 w100">
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
    id: String,
    animated: {type: Boolean, default: true},



  },
  data: ()=>({

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
  z-index: 1;
  width: 100%;
  height: 100%;
  //position: absolute;
}

section {
  width: 100%;
  //min-height: 100vh;
  //height: 100vh;
  overflow: hidden;
}
.sectionMainContent{
 //position: absolute;
  z-index: 2;
}
#sectionMainContent.animated {
  z-index: 1;
  height: 100%;
  transform: translateX(-90em);
  transition: 700ms ease-out;
}
#sectionMainContent.is-inview.animated {
  transform: translateX(0em);

}

</style>