<template>
  <div>
    <main id="main" class="bg-black">
      <div class="container-fluid pb-3">
        <sub-top></sub-top>
        <div class="row">
          <section
            class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none"
          ></section>
          <section
            class="col-sm-12 col-md-8 tops col-lg-6 col-lg-6"
            style="background-color: #000;"
          >
            <nuxt />
            <mobile-foot></mobile-foot>
          </section>
          <section
            class="col-sm-12 col-md-2 col-lg-3 col-xl-3 d-lg-block d-xl-block d-md-block d-none"
          >
          </section>
        </div>
      </div>
      <mobile-foot></mobile-foot>
    </main>
  </div>
</template>

<script>
import MobileFoot from '~/components/Layouts/MobileFoot.vue';
import SubTop from '~/components/Layouts/sub-top.vue';
import Top from "~/components/Layouts/Top.vue";
export default {
  components: { Top, MobileFoot, SubTop },
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

<style>
</style>
