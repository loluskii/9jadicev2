<template>
  <b-modal
    centered
    hide-header
    hide-footer
    content-class="bg-sv-primary curvedEdge"
    body-class="p-0 bg-dark curvedEdge all"
    no-close-on-backdrop
    id="winnerModal"
  >
    <div class="container-fluid">
      <div
        class="row justify-content-between align-items-center bg-sv-primary p-2 customModalTop"
      >
        <div>
          <img
            style="height: 25px"
            src="~/assets/images/logos/logo-white.png"
          />
        </div>
        <div
          class="d-flex flex-column text-uppercase text-center font-weight-bold mb-2"
        >
          Info
        </div>
        <button
          type="button"
          class="btn rounded-circle p-2 text-sv-primary"
          aria-label="Close"
          @click="restart"
        >
          <span aria-hidden="true"><i class="fa fa-times"></i></span>
        </button>
      </div>
      <div class="row my-3 text-white">
        <div class="col-12 text-center">
          <h4 class="modal-title" id="winnerPlayer">{{ data.game_status == 1 ? 'Congratulations!' : 'Sorry!' }}</h4>
          <div class="mb-2" v-if="data.game_status == 0">Try Once More!</div>
          <div class="mb-2" v-if="data.game_status == 1">You won N{{ data.amount_won }}</div>
          <div class="d-flex justify-content-center align-items-center">
            <button
              type="button"
              class="btn bg-sv-warning mr-4"
              @click="restart"
            >
              Play Again
            </button>
            <nuxt-link to="/" class="btn btn-sm btn-danger">Quit</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "winner-modal",
  data() {
    return {};
  },
  props: ["data","game_type"],
  methods: {
    restart(){
      if(this.game_type == 7){
        this.$nuxt.$emit('refresh_under_over');
      }else if(this.game_type == 8){
        console.log('o/e')
        this.$nuxt.$emit('refresh_odd_even');
      }
      this.$bvModal.hide('winnerModal')
    }
  },
};
</script>

<style>
.all {
  font-family: "Montserrat";
}
.nav-top {
  margin-top: -13px;
}

/*INFO MODAL TAB STYLES*/
#public-info-modal-tabs__BV_tab_controls_ > li.nav-item > a.nav-link {
  padding: 0.25rem 0.5rem;
  color: #000;
}

#infoModal small,
#infoModal .small {
  font-size: 80%;
  font-weight: 400;
}
</style>
