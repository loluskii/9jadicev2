<template>
  <div>

    <main id="main" class="bg-black">
      <div class="container-fluid pb-3">
        <game-top></game-top>
        <div class="row">
          <section class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none">
            <!-- <left></left> -->
          </section>
          <section class="col-sm-12 col-md-8 col-lg-6 col-lg-6" style="background-color: #0e171c; height: 95vh">
            <nuxt />
            <!-- <mobile-foot></mobile-foot> -->
          </section>
          <section class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none">
            <!-- <right></right> -->
          </section>
        </div>
      </div>
      <mobile-foot></mobile-foot>
    </main>

  </div>
</template>

<script>
import GameTop from '~/components/Layouts/GameTop';
  import Foot from "../components/Layouts/Foot";
  import MobileFoot from "../components/Layouts/MobileFoot";

  export default {
    components: { Foot, MobileFoot, GameTop },
    name: "default",
    methods:{
      refresh_user(){
        this.$auth.fetchUser()
      }
    },
    mounted(){
      this.refresh_user();
    }
  };
</script>

<style scoped>
  * {
    font-family: 'Montserrat';
  }
</style>
