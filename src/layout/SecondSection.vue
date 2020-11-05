<template>
  <Section @click="eventClick" :id="this.id">
    <template v-slot:background >
      <div   class="bg"></div>
    </template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="nextSectionTitle">Небольшое FAQ</h2>
        </div>

      </div>
      <div class="row">
        <div class="col-lg-8">
          <InfoBlock :scroll="2" line="left">
            <template v-slot:question>Зачем сайт? Почему не обычное pdf?</template>
            Затем, чтобы чек кек чебурек
          </InfoBlock>
        </div>
        <div class="col-lg-8 col-lg-offset-4">
          <InfoBlock :scroll="2" line="right">
            <template v-slot:question>Зачем сайт? Почему не обычное pdf?</template>
            Затем, чтобы чек кек чебурек
          </InfoBlock>
        </div>
        <div class="col-lg-8">
          <InfoBlock :scroll="2" line="left">
            <template v-slot:question>Зачем сайт? Почему не обычное pdf?</template>
            Затем, чтобы чек кек чебурек
          </InfoBlock>
        </div>
      </div>
    </div>
    <!--<InfoBlock :fixed="true " line="left" :scroll="5">Задний фон - это не видео, а игра "Жизнь", написанная мной со стандартными правилами, работающая в реальном времени</InfoBlock>-->
  </Section>
</template>

<script>
import Section from "@/components/Section"
import InfoBlock from "@/components/InfoBlock";
//TODO вынести в отдельный файл фукнции
function rnd(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}
function offset(el) {
  var rect = el.getBoundingClientRect(),

      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return Math.floor(rect.top + scrollTop);
}
export default {

  components: {InfoBlock, Section},
  props: {
    id: Number,
  },
  methods:{
    eventClick: function(e){
      //console.log(e)
      var div = document.createElement('div');
      div.style.position = 'absolute';
      //div.style.left = e.clientX;   // Координаты дива X и Y не забываем указать еденицы измерения,
      //div.style.top = e.clientY;    // например 40px или 20%
      div.style.background = 'red';   //  Див с красной заливкой ))
      div.appendChild(document.createTextNode('клик🤖'));  //  Добавим текст в див
      div.setAttribute("style", `position: absolute; top: ${e.clientY-offset(this.$el)}px; left: ${e.clientX}px;`)
      div.setAttribute("data-scroll", '')
      div.setAttribute("data-scroll-speed", rnd(0, 3));
      this.$el.appendChild(div);   //  Добавим наш див на страницу
      this.$store.state.scroll.update()
     console.log(div, offset(this.$el), this.loco)

    }
  }
}
</script>

<style scoped lang="scss">
  .bg{
    background: $secondSection;
    width:100%;
    height: 100%;
  }
  section{
    height: 200vh;
  }
</style>