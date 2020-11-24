<template>
  <div>


  <div data-scroll class="prod-container">
    <div class="image-background">

      <img data-scrol :src="image"/>
    </div>
    <div class="row middle-xs">
      <div class="prod-text start-xs col-lg-6 col-sm-12 col-md-12 middle-xs">
        <b class="title" v-if="(link === '')">
          <slot></slot>
        </b>
        <a v-else :href="link" target="_blank" class="title">
          <slot></slot>
        </a>
        <a :href="github" v-if="github !== ''"><img :src="GitHub" alt="" class="github-link"></a>
        <hr class="divider"/>
        <div class="subtitle">
          <slot name="subtitle"></slot>
        </div>

      </div>

      <div class=" col-lg-5 col-sm-12 col-md-12 end-xs middle-xs badge-container">
        <div>
          <badge v-for="(badge, i) in badges" :class="{'badge-accent': (badge === 'Frontend' || badge === 'Backend')}" :key="i">{{ badge }}</badge>
        </div>


      </div>
    </div>

  </div>
  </div>
</template>

<script>
import GitHub from '@/assets/github.svg'
import Badge from "@/components/Badge";

export default {
  name: "ProductCard",
  components: {Badge},
  data: ()=>({
    GitHub
  }),
  props: {
    badges: Array,
    image: String,
    link: {
      type: String,
      default: ''
    },
    github: {
      type: String,
      default: ''
    }

  },

}
</script>

<style scoped lang="scss">
.prod-container {

  background: whitesmoke;
  padding: 2em;
  color: black;
  //box-shadow: #00000052 1px 1px 19px 1px;
  box-shadow: #00000052 5px 5px 4px 0;
  border-radius: 5px;
  transition: 100ms ease-out;
  margin: 20px;
  transform: translateX(-10em);

}
.prod-container.is-inview{
  transform: translateX(0em);
}
.prod-container:hover {

  transform: scale(1.01);
  box-shadow: #00000052 19px 20px 5px 0;

}


.prod-text {
  margin: 0.9em;
}

.title {
  font-size: 2.5em;
}

.subtitle {
  font-style: italic;
}

.badge-container {
  overflow-x: auto;
  overflow-y: hidden;
}

.divider {
  //border-color: #00000030;
  border-color: $first;
}
.github-link{
  height: 2em;
  display: inline-block;
}
@media only screen and (min-width: 300px) and (max-width: 760px){
  .prod-container{
    padding: 0.1em;
    margin: 10px 0;
  }
}
</style>