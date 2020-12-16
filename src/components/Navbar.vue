<template>
  <div
    id="navbar-container"
    :class="{'white-bg': whiteBg, 'transparent-bg': !whiteBg}"
  >
    <div class="container-fluid">
      <div class="row around-lg middle-lg">
        <div class="col-lg-6">
          <div class="me">
            Isaev Ivan {{ (new Date().getFullYear()) }}
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row around-lg middle-lg">
            <div
              class="col"
              v-for="(item, i) in data "
              :key="i"
            >
              <a
                rel="noreferrer"
                :href="`#section_${item.anchor}`"
              >{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    whiteBg: false
  }),
  props: {
    data: Array
  },
  methods: {
    onscoll: function () {
      this.whiteBg = window.pageYOffset > window.innerHeight;
    }
  },
  mounted() {
    window.onscroll = this.onscoll

  }
}
</script>

<style scoped lang="scss">
#navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 12px;
  transition: 0.5s;

}
.transparent-bg{
  //background: rgba(0, 0, 0, 0.1);
  a {
    font-size: 1.3em;
    color: whitesmoke;
    transition: 0.5s;
  }

  a:hover {
    color: $accent;
  }
}

.white-bg {
  background: whitesmoke;
  color: black;
  box-shadow: 0 1px 8px 0 #0000006e;
  a {
    font-size: 1.3em;
    color: black;
    transition: 0.5s;
  }

  a:hover {
    color: $accent;
  }
}



a:hover {
  color: $accent;
}

.me {
  transition: word-spacing 900ms;
  font-size: 1.5em;
}

.me:hover {
  word-spacing: -4em;
}
</style>