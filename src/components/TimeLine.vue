<template>
  <div id="timeline-container">
    <ul class="timeline">
      <li
        v-for="(item, i) in dataTimeline"
        :key="i"
        class="timeline-event"
      >
        <label class="timeline-event-icon" />
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">
            {{ item.year }}
          </p>
          <h3>{{ item.head }}</h3>
          <h4 v-html="item.text" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "TimeLine",
  props: {
    dataTimeline: Array
  }
}
</script>

<style scoped lang="scss">


#timeline-container {
  #width: 28vw;
  border-radius: 1vw;
  box-shadow: 6px 5px 4px #00000052;
}
::marker{
  color: $accent;
}


/* Variables */
$color-1: black;
$color-2: whitesmoke;
$color-3: $accent;

/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);
body {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
}

/* Layout */
* {

}

/* Styling */
.timeline {
  margin: 4em auto;
  position: relative;
  max-width: 46em;

  &:before {
    background-color: $color-1;
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
}

.timeline-event {
  position: relative;

  &:hover {

    .timeline-event-icon {

      background-color: $color-3;
    }

    .timeline-event-thumbnail {

    }
  }
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;

  h3 {
    font-size: 1.75em;
  }

  h4 {
    font-size: 1.2em;
    margin-bottom: 1.2em;
  }

  strong {
    font-weight: 700;
  }

  p:not(.timeline-event-thumbnail) {
    padding-bottom: 1.2em;
  }
}

.timeline-event-icon {


  background-color: $accent;
  //outline: 10px solid $color-2;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
  border-radius: 20px;
  border: solid 2px black;
}

.timeline-event-thumbnail {

  color: $color-2;
  font-size: 0.75em;

  background-color: $color-1;

  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}
</style>