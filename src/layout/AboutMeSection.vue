<template>
  <Section :id="this.id">
    <template v-slot:background>
      <div class="bg h100 w100v" />
    </template>
    <div class="bg_color h100 w100v">
      <div class="bg h100 w100v" />
      <div class="container-fluid">
        <section-title>Обо мне</section-title>
        <div class="row">
          <div class="col-lg-6 col-xs-12">
            <div id="about-me-info">
              <img
                alt="me"
                src="/me.jpg"
              >
              <h1>Исаев Иван Викторович</h1>
              <h4>[если вы дочитали до этого момента, то время рассказать о себе]</h4>
              <div id="about-me-text">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; На данный момент студент 1 курса магистратуры <b>РТУ МИРЭА</b> (до лета
                  2022),
                  в том
                  числе на <b>военной кафедре</b>
                  (до лета 2021).
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; До своих первых шагов в сайтостроении изучал кибербезопасность, в <b>14 лет</b> с командой
                  участвовал
                  в <b><i>CTF</i></b> в категории <i>Web</i>. В <b>15 лет</b> мы написали первый вирус в
                  исследорвательских
                  целях,который расширфровывает пароли от браузеров Chromium через DP-API, который игнорировали
                  антивирусы. На данный момент зарегистрирован в hackerOne.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; Свой первый полноценный сайт создал в <b>2014 году</b>, до наших дней он, к
                  сожалению,
                  не сохранился, но <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://web-old.archive.org/web/20150801170416/http://grandray.ru/"
                  >интернет
                    все помнит</a>.
                  Затем работал без официального оформления в DealSport, а затем на фрилансе, на стандартном по тем временам
                  стеке - <b>PHP + Bootsrap/JQuery</b>.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; После поступления в университет, времени на полнценную работу на почти не
                  оставалось, поэтому занимался локальными проектами "для себя" <i>(ничего значимого для мира я не
                    изобрел, поэтому все репозитории из
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/venanen/"
                    >github</a> потер)</i>, и на фрилансе. После 3 курса времени
                  стало больше, и я
                  начал изучать современные стеки разработки,- <b>React+MobX</b> и
                  <b>Vue+Vuex+Vuetify</b>, <b>Nuxt</b>. Считаю наиболее удачным и интуитивно понятным Vue/Nuxt.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; Основные хобби - <b>фотография и путешествия</b>. Параллельно с этим, учусь
                  играть на
                  гитаре и изучаю пакеты <b>Anacondas</b> и <b>TensorFlow</b> на <b>python3</b>. Иногда от скуки
                  перевожу
                  статьи на
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://developer.mozilla.org/ru/profiles/venanen"
                  >MDN</a>.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; Задно оставлю ссылку на контакты
                </p>
                <div class="row center-md around-lg between-md around-xs">
                  <!--                TODO заменить иконками -->
                  <div
                    v-for="(item, i) in contacts"
                    :key="i"
                    class="col"
                  >
                    <a
                      :href="item.link"
                      rel="noreferrer"
                      target="_blank"
                    >{{ item.name }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12">
            <!--          @touchstart="disableLoco" @touchend="enableLoco"-->
            <div
              id="timeline-container"
            >
              <TimeLine :data-timeline="this.$usesData.timeline" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--<InfoBlock :fixed="true " line="left" :scroll="5">Задний фон - это не видео, а игра "Жизнь", написанная мной со стандартными правилами, работающая в реальном времени</InfoBlock>-->
  </Section>
</template>

<script>

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import TimeLine from "@/components/TimeLine";
import contacts from "@/data/contacts";

export default {
  name: "AboutMeSection",
  components: {TimeLine, Section, SectionTitle},
  props: {
    id: String,


  },
  data: () => ({
    contacts
  }),
}
</script>

<style scoped lang="scss">
.bg {
  background-image: url(/back_about_me.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: grayscale(0.6);
  //position: fixed;
  position: absolute;
  z-index: -1;
}

h4 {
  color: white;
  background: black;
  font-family: ui-rounded, serif;
}

p {
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
}

.bg_color {
  background: #1f1f1fd6;
  position: relative;

}

#about-me-info {
  background: whitesmoke;
  border-radius: 4px;
  color: black;
  padding: 2em;
  margin: 1em 0;
}

#about-me-text {
  text-align: justify;
  font-weight: 200;
  font-size: 2rem;
}

img {

  box-shadow: 6px 5px 5px #00000052;
  width: 10vw;
  border-radius: 10vw;
  margin-bottom: 1em;
  animation-name: img-pulse;
  animation-direction: alternate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

}

#timeline-container {
  max-height: 100vh;
  overflow-y: auto;
}

section {
  //min-height: 150vh;
}

@media only screen and (min-width: 300px) and (max-width: 760px) {
  img {
    width: 25vw;
    border-radius: 25vw;
  }
  #timeline-container {
    max-height: initial;
    overflow-y: auto;
  }
}

@keyframes img-pulse {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.1);
    box-shadow: 9px 9px 4px #00000052;
  }
}
</style>