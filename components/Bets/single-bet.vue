<template>
  <div>
    <div v-for="(bet, index) in betlist" :key="index">
      {{ bet }}
      <div v-for="(b, index) in bet" :key="index" class="p-2 mb-1 small" style="background-color: #131c22">
        <div class="d-flex">
          <div class="mr-2 text-white-50">21:36</div>
          <div>
            <a
              class="text-decoration-none text-white"
              href="https://dice.ng/legend/info/broda-shaggi/Y89TG7Lc9E"
            >
              Tournament
            </a>

            <span class="font-weight-bold">
              <a
                class="text-white text-decoration-none"
                href="https://dice.ng/legend/info/broda-shaggi/Y89TG7Lc9E"
              >
                Broda Shaggi #1
              </a>
            </span>
          </div>
          <div class="ml-auto text-danger">
            Loss <span><i class="fa fa-circle"></i></span>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div><span class="text-white-50">Stake:</span> ₦{{b.amount_staked}}</div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Deliver Form</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
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
  name: "single-bet",
  props: ["betlist"],
};
</script>

<style></style>
