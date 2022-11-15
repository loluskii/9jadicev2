<template>
  <div>
      <b-modal
        centered
        hide-header
        hide-footer
        no-close-on-backdrop
        no-close-on-esc
        content-class="bg-sv-primary curvedEdge"
        body-class="p-0 bg-dark curvedEdge"
        :id="'joinConfirmation_' + game.id"
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
                class="text-uppercase text-center text-sv-primary font-weight-bold mb-2"
                id="tournament_name"
              ></div>

            </div>
            <div class="row my-2 text-white">
              <div class="col-12 text-center">
                <div class="h5">Are you sure you want to join this game?</div>
                <div id="gameDetailsConfirmation">
                  <div
                    class="d-flex justify-content-center bg-black lead font-weight-bold p-2"
                  >
                    <div class="text-sv-warning mr-3">Stake:</div>
                    <div>{{ game.stake }}</div>
                  </div>
                </div>
                <div id="confirmationFeedback">
                  <span v-if="loading" class="alert alert-primary py-1"><span>{{ loadingMsg }}</span></span>
                  <span v-if="error" class="alert alert-danger py-1"><span>{{ errorMsg }}</span></span>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                  id="confirmationButtonsDiv"
                >
                  <div>
                    <div class="d-flex align-items-center">
                      <div class="mr-3">
                        <button
                          class="btn bg-sv-primary text-white px-4"
                          id="joinSpecialTournamentButton"
                          @click="joinSpecialTournament(game.id)"
                        >
                          Yes
                        </button>
                      </div>
                      <div>
                        <button
                          class="btn btn-danger btn-sm px-3"
                          @click="closeModal(game.id)"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12"></div>
            </div>
          </div>
      </b-modal>
  </div>
</template>

<script>
export default {
  name: "join-confirmation",
  props: ["game"],
  data(){
    return {
      loading: false,
      loadingMsg: "Joining game...",
      error: false,
      errorMsg: ""
    }
  },
  methods: {
    joinSpecialTournament(id){
      this.loading = true;
      this.$axios.post(`/tournaments/${id}/join`).then((res)=>{
        let name = res.data.data.slug;
        let ref = res.data.data.reference
        let refid = res.data.data.reference_id
        this.$store.commit('setTournament',res.data.data);

        this.$router.push({name: "legend-name-ref-refid-game", params: {name:name, ref:ref, refid:refid}})
      }).catch(err => {
        console.log(err)
        this.loading = false;
        this.error = true;
        this.errorMsg = err.response.data.message;
      })
    },
    closeModal(id){
      this.error= false,
      this.$bvModal.hide(`joinConfirmation_${id}`);
    }
  }
};
</script>

<style></style>
