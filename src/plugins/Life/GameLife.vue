<template>
  <div id="canvasContainer">
    <canvas
      ref="canvas"
      width="1000"
      height="500"
      id="life"
    />
  </div>
</template>

<script>
//window.requestAnimationFrame(start)
export default {
  props: {
    isLifeRun: Boolean
  },
  data: () => ({
    life: {}
  }),
  name: "GameLife",
  mounted: function () {

    if(!this.$core.isLifeRun())
      return 1;
    const canvas = this.$refs.canvas;
    this.$core.mountGameLife(canvas);


  },
  methods: {
    start: function () {
      this.life.start();
    },
    stop: () => {
      this.life.stop();
    }
  }
}
</script>

<style lang="scss" scoped>
#life {
  ///position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width:100%;
  height: 100%;
  z-index: -1;
  //это было реально красиво, но производительность ужасна
  //filter: blur(2px);
  background: $primary;


}

#canvasContainer {
  background: #00000094;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

div {
  min-height: 110vh;
  height: 100%;
}


</style>