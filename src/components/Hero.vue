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
        <!-- Text slides with image -->
            <b-carousel-slide
                :img-src="showHeroIMG"
                class="heroSlide"
            >
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
        randomGame: {},
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
          'showHeroIMG'
        ])
    },
    beforeMount: function () {
      console.log('la imagen',this.showHeroIMG)
      this.$store.dispatch('callDataToHero');

    }
  }
</script>

<style lang="scss" scoped>
.heroSlide {
  margin: 5vh 0;
  height: 45vh;
}

</style>