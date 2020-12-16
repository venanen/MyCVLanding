<template>
  <div>
    <canvas
      ref="canvas"
      id="jsdos"
    />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Dos from 'js-dos'

export default {
  name: "DosGame",
  props: {
    file: String,
    command: String
  },

  mounted() {
    const canvas = this.$refs.canvas;
    let self = this;
    window.Dos(canvas, {
      wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
      cycles: 1000,
      autolock: false,
    }).ready(function (fs, main) {
      fs.extract(`/${self.file}`).then(function () {
        main(["-c", `${self.command}`]).then(function (ci) {
          window.ci = ci;
        });
      });
    });
  }
}
</script>

<style scoped>
canvas {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
}
</style>