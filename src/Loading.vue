<template>
  <div>
    <div class="crunch_loading" id="crunch_container" style="">
      <img id="crunch1" class="crunch_loading" src="/crutch.png"/>
      <img id="crunch2" class="crunch_loading" src="/crutch.png"/>
      <img id="crunch3" class="crunch_loading" src="/crutch.png"/>
      <img id="crunch4" class="crunch_loading" src="/crutch.png"/>

    </div>
<p class="crunch_loading_text">Подождите...</p>
  </div>

</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped lang="scss">
$imageSize: 100px;
$duration: 1.4s;
p{
  height: initial;
  right: 0;
  /* bottom: 0; */
  left: 0;
  text-align: center;
  color: black;
  font-size: 1.5em;
  position: fixed;
  z-index: 50;
  top: calc(50% - 0.75em);
}
.crunch_loading {
  position: fixed;
  top: calc(50% - (#{$imageSize}) / 2);
  right: calc(50% - (#{$imageSize}) / 2);
  height: $imageSize;
  transition: $duration;
  z-index: 50;
}

#crunch_container {
  animation-name: crunch_container;
  animation-duration: $duration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  background: whitesmoke;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
}

#crunch1 {
  transform: rotate(0.25turn) translate($imageSize, 0);
  animation-name: crunch1;
  animation-duration: $duration;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

#crunch2 {
  transform: rotate(0.5turn) translate($imageSize, 0);
  animation-name: crunch2;
  animation-duration: $duration;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

#crunch3 {
  transform: rotate(0.75turn) translate($imageSize, 0);
  animation-name: crunch3;
  animation-duration: $duration;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

#crunch4 {
  transform: rotate(1turn) translate($imageSize, 0);
  animation-name: crunch4;
  animation-duration: $duration;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

@keyframes crunch1 {
  0% {
    transform: rotate(0.25turn) translate($imageSize, 0);
  }
  100% {
    transform: rotate(1.25turn) translate($imageSize, 0);
  }
}

@keyframes crunch2 {
  0% {
    transform: rotate(0.5turn) translate($imageSize, 0);
  }

  100% {
    transform: rotate(1.5turn) translate($imageSize, 0);
  }
}

@keyframes crunch3 {
  0% {
    transform: rotate(0.75turn) translate($imageSize, 0);
  }

  100% {
    transform: rotate(1.75turn) translate($imageSize, 0);
  }
}

@keyframes crunch4 {
  0% {
    transform: rotate(1turn) translate($imageSize, 0);
  }

  100% {
    transform: rotate(2turn) translate($imageSize, 0);
  }
}

@keyframes crunch_container {
  0% {
    transform: scale(1.2);
  }


  100% {
    transform: scale(1.6);
  }
}
</style>