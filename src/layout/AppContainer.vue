<template>
  <div data-scroll-container data-scroll-repeat="true" ref="scrollSections" class="hello">
    <slot></slot>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";


export default {
  name: "AppContainer",
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      scrollIns: null
    };
  },
  mounted() {
    const _self = this;
    _self.initLocoScroll();
  },
  methods: {
    initLocoScroll() {
      const _self = this;
      this.scroll = new LocomotiveScroll({
        el: _self.$refs['scrollSections'],
        smooth: true,
        smoothMobile: true,
        getDirection: true
      });
      window.loco = this.scroll;

    this.$store.commit("setScroll", this.scroll)
    }
  }
};
</script>

<style scoped>
section {

  border-bottom: 1px solid #38495C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  display: block;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
