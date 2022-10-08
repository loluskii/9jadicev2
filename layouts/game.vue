<template>
  <div>
    <main id="main" class="bg-black">
      <div class="container-fluid pb-3">
        <top></top>
        <div class="row">
          <section
            class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none"
          ></section>
          <section
            class="col-sm-12 col-md-8 col-lg-6 col-lg-6"
            style="background-color: #0e171c; height: 95vh"
          >
            <nuxt />
            <mobile-foot></mobile-foot>
          </section>
          <section
            class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none"
          >
            <!-- @include('desktop.components.right-view') -->
          </section>
        </div>
      </div>
      <mobile-foot></mobile-foot>
    </main>
    <div class="d-flex flex-column align-items-center button-float-action">
      <button
        class="btn customFabToggleButton fab-child d-inline"
        data-toggle="modal"
        data-target="#quit"
      >
        <span><i class="fa fa-times"></i></span>
      </button>
      <button
        class="btn customFabToggleButton fab-child d-inline"
        onclick="gameStartInfo()"
      >
        <span><i class="fa fa-info"></i></span>
      </button>
      <button
        class="btn customFabToggleButton fab-child"
        onclick="toggleSound()"
      >
        <span id="volumeUp" style="display: block"
          ><i class="fa fa-volume-up"></i
        ></span>
        <span id="volumeDown" style="display: none"
          ><i class="fa fa-volume-down text-danger"></i
        ></span>
      </button>
      <button
        class="btn customFabToggleButton shadow"
        onclick="toggleFabOptions();"
      >
        <i class="fa fa-cog"></i>
      </button>
    </div>
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
