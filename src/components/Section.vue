<template>
  <div class="section" v-bind:class="theme">

    <header>
      <slot name="header"></slot>
    </header>

    <div class="content" v-bind:class="{'visible':visible}">
      <slot></slot>
    </div class="content">
  </div>
</template>

<script>
export default {
  name: "Section",
  data() {
    return { visible: false };
  },
  props: {
    theme: String
  },
  methods: {
    handleScroll() {
      const rect = this.$el.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const top = rect.top - bodyRect.top;
      const scrollTop = window.pageYOffset + (window.innerHeight * 0.5);
      if (top <= scrollTop) {
        this.visible = true;
      }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
$main-color = #ffffff;
$secondery-color = #000000;
$font-size = 48px;

.section {
  position: relative;
  padding: 180px 150px;
  overflow: hidden;

  header {
    font-weight: bold;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
  }

  .content {
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }

  .content.visible {
    opacity: 1;
  }
}

.seciton.dark {
  background-color: #383838;
  color: #c4c4c4;
}

.section.light {
  background-color: #c4c4c4;
  color: #383838;
}

.section.no-margin {
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;

  .margin {
    padding-left: 150px;
    padding-right: 150px;
  }
}

@media screen and (max-width: 1500px) {
  .section {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media screen and (max-width: 1000px) {
  .section {
    padding-left: 50px;
    padding-right: 50px;
  }

  .section.no-margin {
    .margin {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
}
</style>
