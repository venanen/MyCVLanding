<template>
  <div data-scroll :data-scroll-speed="this.scroll"
       :class="`info
       line-${this.line}
       ${fixed?'fixed':'unfixed'}`"
  >
    <div>
      <h2 class="question"><i>
        <slot name="question"></slot>
      </i></h2>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InfoBlock",
  props: {
    line: String,
    scroll: Number,
    fixed: Boolean
    //position: Object,
    //background: String,

  }
}
</script>

<style scoped lang="scss">
.info {
  margin-bottom: 2em;
  right: 3em;

  background: rgba(0, 0, 00, 0.34);
  padding: 1em;
  border-radius: 8px;
  color: whitesmoke;
  font-size: 1.6em;
  /* opacity: 0.8; */

  line-height: 1.1em;
  text-align: justify;
  border: $accent solid 1px;
  text-shadow: 1px 1px 1px black;
}

.line-right {
  border-right: $accent solid 0.4em;
}

.line-left {
  border-left: $accent solid 0.4em;
}

.fixed {
  position: fixed;
  max-width: 15vw;
}

.unfixed {
  width: 100%;
}

.qustion h2 {
  border-left: #e76f51 solid 0.4em;
}

.question {
  border-left: $accent solid 0.4em;
  border-radius: 2px;
  padding-left: 6px;
}
@media only screen and (min-width: 300px) and (max-width: 760px){
  .info{
    font-size: 1em;
  }
  .unfixed{
    width: 90%;
  }

}
</style>