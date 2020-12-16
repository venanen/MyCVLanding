<template>
  <div
    class="bg"
    id="bg"
  >
    <div data-scroll>
      <div id="background" />
      <!--   Хак для того, чтобы дождаться загрузки картинки на заднем планеr-->
      <img
        @load="setLoadedImage({name: 'bgImage'})"
        :src="`/back1.jpg`"
      >
    </div>
  </div>
</template>

<script>


import {mapMutations} from "vuex";

export default {
  name: "ImageBG",
  data: () => ({
    backgrounds: [1],//[1,2,3,4,5,6,7,8,9,10]
  }),
  methods: {
    ...mapMutations([
      'setLoadedImage'
    ])
  }
}
</script>

<style scoped lang="scss">
$countbg: 10;
.black-screen {

}

#background {
  height: 150vh;
  width: 120vw;
  background-image: url(/back1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.bg {
  position: fixed;
  z-index: -1;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: #f4a261;
  width: 1000vw;
  height: 100%;
  transform: translate(0em, -40vh);
  text-align: left;
  filter: grayscale(0.7);
  animation-name: bgScroll;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}


img {
  width: 1px;
  height: 1px;
}

@keyframes bgScroll {
  0% {
    transform: translate(0, -40vh);
  }
  100% {
    transform: translate(-10vw, -40vh);
  }
}

</style>