<template>
  <div
    class="row flex-nowrap d-flex py-1 mt-0 hideScrollbar"
    style="overflow-x: auto"
  >
    <div class="col-12 p-0">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="/images/banners/tg.png"></b-carousel-slide>

        <b-carousel-slide img-src="/images/banners/lotg.jpg"></b-carousel-slide>

        <b-carousel-slide img-src="/images/banners/lod.jpg"></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      slide: 0,
      sliding: null,
      loading: true,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style></style>
