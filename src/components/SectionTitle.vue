<template>
  <div class="row">
    <div class="col-xs-12">
      <h2 data-scroll class="nextSectionTitle">
        <slot></slot>
      </h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "SectionTitle",

}
</script>

<style scoped>
@media only screen and (min-width: 720px) {
  .nextSectionTitle {

    padding: 0.5em 1em 1em;
    font-size: 7em;
    text-shadow: 1px 1px 1px black;
    transform: translateX(10em);
    transition: 1s ease-out;
  }
}
.nextSectionTitle.is-inview{

  transform: translateX(0em);

}
@media only screen and (min-width: 320px) and (max-height: 720px) {
  .nextSectionTitle{
    padding: 0.1em;
    font-size: 3em;
    text-shadow: 1px 1px 1px black;
    transform: translateX(10em);
    transition: 1s ease-out;
  }
}

</style>