<template>


  <Section :id="this.id">
    <template v-slot:background>
      <div class="bg">

      </div>
    </template>
    <section-title data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
      Дополнительные скилы
    </section-title>
    <div>


    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-4 col-sm-12">
          <chart :chartdata="addedSkills.data" :options="addedSkills.option"/>
        </div>
        <div class="col-xs-8 col-sm-12">
          <div class="row">
            <div class="col-lg-8 col-sm-12">
              <info-block :scroll="3" line="left">
                <template v-slot:question>Программирование и безопасность</template>
                Знаю
                <badge>С/С++</badge>
                на уровне университетских знаний.<br>
                <badge>Python 3</badge>
                на уровне чтения. На данный момент изучаю
                <badge>Pandas</badge>
                ,
                <badge>NumPy</badge>
                ,
                <badge>Keras</badge>
                ,
                <badge>TensorFlow</badge>
                в рамках университетской программы.
                В школьные годы участвовал с командой в CTF в категории
                <badge>WEB</badge>
                , зарегестрирован в программе
                <badge>hackerOne</badge>
                и даже зарепортил две уязвимости
              </info-block>
            </div>
            <div class="col-lg-8 col-lg-offset-4 col-sm-12">
              <info-block :scroll="3" line="left">
                <template v-slot:question>Разработка электроники</template>
                Основная специальность в университете. Владею пакетами
                <badge>SolidWorks</badge>
                ,
                <badge>AutoCAD</badge>
                <badge>AVR/Atmel Studio</badge>
                <badge>P-CAD/Altium Designer</badge>
                . Могу написать прошивку для микроконтроллера
                <badge>AVR</badge>
                на
                <badge>C</badge>
                или
                <badge>ASM</badge>
                . Также владею пакетом
                <badge>Office</badge>
                и стандартами
                <badge>ЕСКД</badge>
                при написании документации
              </info-block>
            </div>
            <div class="col-lg-8 col-sm-12">
              <info-block :scroll="2" line="left">
                <template v-slot:question>Фотография</template>
                Основное хобби. Снимаю
                <badge>пейзажи</badge>
                ,
                <badge>портреты</badge>
                ,
                <badge>астро-</badge>
                и
                <badge>макро</badge>
                фотографии, и все, что подвернется под руку. Фотография, которая сейчас на заднем плане - <badge>победитель</badge> всероссийского конкурса фотографий и висела в Ботаническом саду, чем я очень горжусь :)
              </info-block>
            </div>
          </div>
        </div>


      </div>
    </div>


  </Section>
</template>

<script>
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import InfoBlock from "@/components/InfoBlock";
import Chart from "@/components/Chart";
import skills from "@/data/skills";
import Badge from "@/components/Badge";

export default {
  name: "AdditionalSkilsSection",
  //TODO delete array
  data: () => ({
    backgrounds: [1],//[1,2,3,4,5,6,7,8,9,10]
    addedSkills: skills.addedSkills,


  }),
  components: {Badge, Chart, SectionTitle, Section, InfoBlock},
  props: {
    id: Number,
  }
}
</script>

<style scoped lang="scss">
.accent {
  font-style: italic;
  text-shadow: 2px 2px 2px #e76f51;
}

.target {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

section {

}

.bg {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: #000000ad;
}


</style>