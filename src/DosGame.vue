<template>
  <div>
    <canvas id="jsdos"></canvas>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Dos from 'js-dos'
export default {
name: "DosGame",
  mounted() {
  const canvas = document.getElementById("jsdos");

  window.Dos(canvas, {
      wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
      cycles: 1000,
      autolock: false,
    }).ready(function (fs, main) {
      fs.extract("/digger.zip").then(function () {
        main(["-c", "DIGGER.COM"]).then(function (ci) {
          window.ci = ci;
        });
      });
    });
  }
}
</script>

<style scoped>
  canvas{
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
  }
</style>