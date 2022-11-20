<template>
  <div>
    <main id="main" class="bg-black">
      <div class="container-fluid pb-3">
        <top></top>
        <div class="row">
          <section class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none"></section>
          <section class="col-sm-12 col-md-8 col-lg-6 col-lg-6" style="background-color: #0e171c; height: 95vh">
            <nuxt />
            <mobile-foot></mobile-foot>
          </section>
          <section class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none">
            <!-- @include('desktop.components.right-view') -->
          </section>
        </div>
      </div>
      <mobile-foot></mobile-foot>
    </main>

  </div>
</template>

<script>
  import MobileFoot from '~/components/Layouts/MobileFoot.vue';
  import Top from "~/components/Layouts/Top.vue";
  export default {
    components: { Top, MobileFoot },
  };

</script>

<style>
</style>


