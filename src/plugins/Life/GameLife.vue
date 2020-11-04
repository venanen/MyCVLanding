<template>
  <div id="canvasContainer">
    <canvas ref="canvas" width="1000" height="500" id="life">
    </canvas>

  </div>
</template>

<script>
import GameLife from "@/plugins/Life/lifeCore";
import initialPixels from "@/plugins/Life/initialPixels";






//window.requestAnimationFrame(start)
export default {
  data: ()=>({
    life: {}
  }),
name: "GameLife",
  mounted: function () {
    //const canvas = document.getElementById('life');
    const canvas = this.$refs.canvas;
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    //canvas.height =

    let frameControl = 2,
        frameCurrent = 0;
    const gL = new GameLife(canvas);
    gL.setStep(30);
    gL.import(initialPixels);
    window.onresize = ()=>{
      gL.onResizeWindow()
    }
    canvas.addEventListener('mousedown', function (e) {
      gL.setPixelsByMouse(e);
    })
    // eslint-disable-next-line no-unused-vars
    let animation = "";
    this.life.start = () => {

      if(frameCurrent++> frameControl) {
        frameCurrent = 0;
        gL.tick()
      }
      animation = window.requestAnimationFrame(this.life.start)
    }

    this.life.stop = () => {
      window.cancelAnimationFrame(animation);
    }
    this.life.reset = () => {
      gL.reset();
    }
    this.life.start();

  },
  methods: {
    start: function(){
      this.life.start();
    },
   stop: ()=>{
      this.life.stop();
    }, /*
    reset: ()=>{
      reset();
    }*/
  }
}
</script>

<style lang="scss" scoped>
#life {
  /*background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);*/
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: -1;
  filter: blur(2px);
  background: $primary;


}
div{
  min-height: 100vh;
  height: 100%;
}


</style>