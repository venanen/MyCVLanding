<template>
  <div class="row">
    <div class="col-lg-12">
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
.nextSectionTitle{
  padding: 1em;
  font-size: 7em;
  text-shadow: 1px 1px 1px black;
  transform: translateX(10em);
  transition: 1s ease-out;
}
.nextSectionTitle.is-inview{

  transform: translateX(0em);

}
</style>