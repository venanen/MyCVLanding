<template>
  <div class="bg" id="bg" @scroll="(e)=>console.log(e)">

    <div data-scroll>
      <img v-for="number in backgrounds" :key="number" :src="`/back${number}.jpg`"/>
    </div>


  </div>
</template>

<script>


export default {
name: "ImageBG",
  data: () => ({
    backgrounds: [1],//[1,2,3,4,5,6,7,8,9,10]
  }),

}
</script>

<style scoped lang="scss">
$countbg: 10;
.black-screen{

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
  height:150vh;
}

@keyframes bgScroll {
  0% {
    transform: translate(0, -40vh);
  }
  100% {
    transform: translate(calc(-1 * (225vh - 100vw)), -40vh);
  }
}

</style>