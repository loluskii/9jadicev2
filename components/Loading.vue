<template>
  <div v-if="loading" class="loading-page loadingBackdrop2" id="loadingBackdrop2" style="display: none;">
    <div class="d-flex flex-column align-items-center justify-content-center text-white h-100 w-100">
        <img class="loaderInnerEl" height="50px" src="https://dice.ng/images/mobile/loader.png">
        <div class="loadingTextAnim mt-4">Loading...</div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>
