<template>
    <div class="container">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption-html="Ludoteca"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="http://jdr.cl/assets/img-temp/1920x1080/img4.jpg"
          class="heroSlide"
          caption-tag="h1">  
        </b-carousel-slide>
      </b-carousel>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Hero',
    data() {
      return {
        slide: 0,

      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true;
        console.log(slide) //para que el eslinter no joda
      },
      onSlideEnd(slide) {
        this.sliding = false;
        console.log(slide) //para que el eslinter no joda
      },
    },
    computed: {
        ...mapGetters([
          'showHero'
        ])
    },
    beforeMount: function () {
      this.$store.dispatch('callDataToHero');

    }
  }
</script>

<style lang="scss" scoped>
.heroSlide {
  margin: 5vh 0;
  height: 60vh;
}
.carousel-caption {
  color: #38006b !important;
}
</style>