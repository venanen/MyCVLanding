<template>
  <section :id="idSection">
    <div id="sectionBackground">
      <slot name="background">
      </slot>
    </div>
    <div id="sectionMainContent" class="h100 w100">
      <slot>

      </slot>
    </div>

  </section>

</template>

<script>
export default {
  name: "Section",
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
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
    handleScroll() {
      let elem = document.getElementById(this.idSection);
      console.log(this.idSection, elem.getBoundingClientRect().y,  document.documentElement.clientHeight)
      if (elem.getBoundingClientRect().y > document.documentElement.clientHeight*1.5 || elem.getBoundingClientRect().y < -(document.documentElement.clientHeight*1.5)){
        console.log("Enter")
        return false;

      }

      if (elem.getBoundingClientRect().y > 5 && elem.getBoundingClientRect().y < -5 && this.animated) {
        return;
      }

      if (elem.getBoundingClientRect().y < 200 && elem.getBoundingClientRect().y > -200) {
          this.animated = true;
          elem.scrollIntoView({behavior: "smooth"})
        //console.log(this.animated)


      }
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
  height: 100vh;
  overflow: hidden;
}

#sectionMainContent {
  z-index: 1;
  height: 100%;
}

</style>