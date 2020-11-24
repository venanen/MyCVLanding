<template>
  <div class="badges">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "Badge"
}
</script>

<style scoped lang="scss">
.badges{
  display: inline-block;
  background: $accent;
  border-radius: 3em;
  padding: 0.4em;
  margin: 0.1em;
  color: whitesmoke;
}
.badge-accent{
  background: $first;
}
.badges.inline{
  padding: 0.2em;
}
</style>