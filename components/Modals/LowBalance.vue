<template>
  <div
    class="modal fade"
    id="depositModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="depositModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content bg-transparent border-0 curvedEdge">
        <div class="modal-body p-0 curvedEdge text-right">
          <button
            type="button"
            class="btn rounded-circle text-white p-2"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fa fa-times"></i></span>
          </button>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 text-center py-2">
                <img
                  class="img-fluid"
                  style="height: 50vh"
                  src="/images/homepage/promotions/low-balance.png"
                  alt="low-balance"
                />

                <div class="mt-2">
                  <nuxt-link to="" class="btn bg-sv-primary text-sv-primary"
                    >Deposit Now!</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "low-balance",
};
</script>

<style></style>
