<template>

  <div id="timeline-container">


    <div class="entries">
      <div class="entry">
        <div class="title">2011</div>
        <div class="body">
          <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.
            Doloremque et distinctio quod molestiae ut.</p>
        </div>
      </div>
      <div class="entry">
        <div class="title">2012</div>
        <div class="body">
          <p>Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.</p>
        </div>
      </div>
      <div class="entry">
        <div class="title big">2013</div>
        <div class="body">
          <p>Rerum sit libero possimus amet excepturi. Exercitationem enim dolores sunt praesentium dolorum
            praesentium.</p>
        </div>
      </div>
      <div class="entry">
        <div class="title">2014</div>
        <div class="body">
          <p>Voluptatibus veniam ea reprehenderit atque. Reiciendis non laborum adipisci ipsa pariatur omnis. Sed ipsam
            repudiandae velit. Omnis libero nostrum aperiam nemo dolor ea eos eius. Esse a non itaque quidem.</p>
        </div>
      </div>
      <div class="entry">
        <div class="title">2015</div>
        <div class="body">
          <p>VAdipisci totam omnis cum et suscipit excepturi et excepturi. Inventore sequi sit ut aliquid. Modi aut
            dolores dignissimos.</p>
          <p>Delectus facere officia consequuntur molestias deserunt illo. Placeat laudantium beatae natus excepturi ab
            nihil voluptates.</p>
        </div>
      </div>
      <div class="entry">
        <div class="title big">2016</div>
        <div class="body">
          <p>Impedit dolorem commodi explicabo fugit aut alias voluptatem. Magnam earum rerum quae dicta quibusdam
            aliquam ut.</p>
        </div>
      </div>
      <div class="entry">
        <div class="title">2017</div>
        <div class="body">
          <p>Qui facere eos aut suscipit doloremque quos...</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
//TODO разобраться с этой фигней и таймлайном
import timeline from "@/data/timeline";

export default {
  data: () => ({
    data: timeline.dataTimeline,
  }),
  name: "TimeLine"
}
</script>

<style scoped lang="scss">
$color: skyblue;
$lineColor: $accent;
$fontColor: #bbb;
$bgColor1: #222;
$bgColor2: #444;
$yearBgColor: #333;

$breakpoint: 700px;

#timeline-container {
  #width: 28vw;
  border-radius: 1vw;
  box-shadow: 6px 5px 4px #00000052;
}

#timeline-container {
  background-color: #1D1D1D;
  min-height: 100vh;
  margin: 0;
  font-family: 'Droid Sans', sans-serif;

  &:before {
    content: '';
    position: fixed;
    top: 0px;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    width: 4px;
    background-color: #fff;
  }

  .entries {
    width: calc(100% - 80px);
    max-width: 800px;
    margin: auto;
    position: relative;
    left: -5px;

    .entry {
      width: calc(50% - 80px);
      float: left;
      padding: 20px;
      clear: both;
      text-align: right;

      &:not(:first-child) {
        margin-top: -60px;
      }

      .title {
        font-size: 32px;
        margin-bottom: 12px;
        position: relative;
        color: #fff;

        &:before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border: 4px solid #ffffff;
          background-color: #1D1D1D;
          border-radius: 100%;
          top: 50%;
          transform: translateY(-50%);
          right: -73px;
          z-index: 1000;
        }

        &.big:before {
          width: 24px;
          height: 24px;
          transform: translate(8px, -50%);
        }
      }

      .body {
        color: #aaa;

        p {
          line-height: 1.4em;
        }
      }

      &:nth-child(2n) {
        text-align: left;
        float: right;

        .title {
          &:before {
            left: -63px;
          }

          &.big:before {
            transform: translate(-8px, -50%);
          }
        }
      }
    }
  }
}
</style>