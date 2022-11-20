<template>
  <div>
    <main id="" class="container bg-black small">
      <div class="row">
        <div class="col-sm-12 col-md-1 col-lg-2 col-xl-2"></div>
        <div class="col-sm-12 col-md-10 col-lg-8 col-xl-8 px-0">
          <game-top></game-top>
          <Nuxt />
        </div>
        <div class="col-sm-12 col-md-1 col-lg-2 col-xl-2"></div>
      </div>
      <menu-footer></menu-footer>
    </main>
  </div>
</template>

<script>
import GameTop from '~/components/Layouts/GameTop.vue';
  import Foot from "../components/Layouts/Foot";
  import Left from "../components/Layouts/Left";
  import MenuFooter from "../components/Layouts/MobileFoot";
  import Right from "../components/Layouts/Right";
  import Top from "../components/Layouts/Top";

  export default {
    components: { Left, Right, Top, Foot, MenuFooter, GameTop },
    name: "default",
  };
</script>

<style scoped></style>
