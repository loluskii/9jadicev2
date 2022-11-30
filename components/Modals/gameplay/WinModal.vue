<template>
  <div>
    <b-modal
      id="WonModal"
      hide-footer
      hide-header
      centered
      no-close-on-backdrop
      no-fade
      body-class="py-0 px-0 bg-dark curvedEdge text border-0"
      content-class="bg-transparent border-0"
    >
      <div class="py-3 px-0 bg-dark curvedEdge" id="LossModalBody">
        <nuxt-link
          to="/"
          class="btn rounded-circle p-2 text-white"
          style="position: absolute; right: 0; top: 0"
          aria-label="Close"
        >
          <span aria-hidden="true"><i class="fa fa-times"></i></span>
        </nuxt-link>
        <div class="text-center mb-4">
          <img
            src="~/assets/images/gameplay/colours/won-image.png"
            class="img-fluid"
            style="width: 70%"
          />
        </div>
        <div class="text-center">
          <div class="mb-3">
            <div class="d-flex justify-content-center">
              <div style="width: 90%">
                <div class="d-flex justify-content-between my-2">
                  <button
                    @click="restart"
                    class="btn bg-sv-warning text-sv-primary w-100 d-flex align-content-stretch justify-content-center align-items-center px-1 btn-sm mr-2"
                  >
                    PLAY AGAIN
                  </button>
                  <nuxt-link
                    class="btn btn-sm btn-danger w-100 d-flex align-content-stretch justify-content-center align-items-center text-white"
                    to="/"
                    >EXIT GAME</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "won-modal",
  methods: {
    restart() {
      this.$bvModal.hide("WonModal");
      this.$nuxt.$emit("refresh_colors");
    },
  },
};
</script>

<style></style>
