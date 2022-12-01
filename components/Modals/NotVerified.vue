<template>
  <b-modal
    centered
    hide-header
    hide-footer
    content-class="bg-sv-primary curvedEdge"
    body-class="p-0 bg-black curvedEdge"
    id="notVerified"
    title-class="text-uppercase font-weight-bold"
  >
    <div class="container-fluid">
      <div
        class="row justify-content-between align-items-center bg-sv-primary p-2 customModalTop"
      >
        <div>
          <nuxt-link to=""
            ><img style="height: 25px" src="/images/logos/logo-white.png"
          /></nuxt-link>
        </div>
        <div class="text-uppercase text-center font-weight-bold">
          <span>Notice</span>
        </div>
        <button
          type="button"
          class="btn rounded-circle p-2"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true"><i class="fa fa-times"></i></span>
        </button>
      </div>
      <div class="row">
        <div class="col-12">
          <div
            class="lead text-white text-center py-3"
            id="verificationModalMessage"
          >
            <div class="mb-3">
              Only Verified Users Are Allowed To Create Premium Games. Please
              Click On Public Games To Create Games
            </div>
            <div class="text-center">
              <nuxt-link
                to="/content/affiliates"
                class="btn bg-sv-primary text-sv-primary"
                >Become a verified user</nuxt-link
              >
            </div>
          </div>
          <div id="verificationModalButton"></div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "filter-modal",
  data() {
    return {};
  },
  methods: {
    close() {},
  },
};
</script>

<style></style>
