<template>


  <Section :id="this.id">
    <template v-slot:background>


    </template>
    <div class="bg">
      <section-title data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        Дополнительные скилы {{hash}}
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
                <info-block :scroll="2" line="left">
                  <template v-slot:question>Программирование и безопасность</template>
                  Знаю
                  <badge class="inline">С/С++</badge>
                  на уровне университетских знаний.<br>
                  <badge class="inline">Python 3</badge>
                  на уровне чтения. На данный момент изучаю
                  <badge class="inline">Pandas</badge>
                  ,
                  <badge class="inline">NumPy</badge>
                  ,
                  <badge class="inline">Keras</badge>
                  ,
                  <badge class="inline">TensorFlow</badge>
                  в рамках университетской программы.
                  В школьные годы участвовал с командой в CTF в категории
                  <badge class="inline">WEB</badge>
                  , зарегестрирован в программе
                  <badge class="inline">hackerOne</badge>
                  и даже зарепортил две уязвимости
                </info-block>
              </div>
              <div class="col-lg-8 col-lg-offset-4 col-sm-12">
                <info-block :scroll="2" line="left">
                  <template v-slot:question>Разработка электроники</template>
                  Основная специальность в университете. Владею пакетами
                  <badge class="inline">SolidWorks</badge>
                  ,
                  <badge class="inline">AutoCAD</badge>
                  <badge class="inline">AVR/Atmel Studio</badge>
                  <badge class="inline">P-CAD/Altium Designer</badge>
                  . Могу написать прошивку для микроконтроллера
                  <badge class="inline">AVR</badge>
                  на
                  <badge class="inline">C</badge>
                  или
                  <badge class="inline">ASM</badge>
                  . Также владею пакетом
                  <badge class="inline">Office</badge>
                  и стандартами
                  <badge class="inline">ЕСКД</badge>
                  при написании документации
                </info-block>
              </div>
              <div class="col-lg-8 col-sm-12">
                <info-block :scroll="2" line="left">
                  <template v-slot:question>Фотография</template>
                  Основное хобби. Снимаю
                  <badge class="inline">пейзажи</badge>
                  ,
                  <badge class="inline">портреты</badge>
                  ,
                  <badge class="inline">астро-</badge>
                  и
                  <badge class="inline">макро</badge>
                  фотографии, и все, что подвернется под руку. Фотография, которая сейчас на заднем плане -
                  <badge class="inline">победитель</badge>
                  всероссийского конкурса фотографий и висела в Ботаническом саду, чем я очень горжусь :)
                </info-block>
              </div>
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
    hash: window.location.hash


  }),
  components: {Badge, Chart, SectionTitle, Section, InfoBlock},
  props: {
    id: String,
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
  //position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: #000000ad;
}


</style>