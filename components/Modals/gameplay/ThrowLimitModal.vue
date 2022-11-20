<template>
  <div>
    <b-modal
      id="throwLimitModal"
      hide-footer
      hide-header
      centered
      no-close-on-backdrop
      no-fade
      body-class="py-0 px-0 bg-dark curvedEdge text border-0"
      content-class="bg-transparent border-0"
    >
      <div class="body curvedEdge py-3">
        <button @click="clear" class="cancel btn rounded-circle p-2 text-white" style="position: absolute;right: 0; top: 0;" aria-label="Close">
          <span aria-hidden="true"><i class="fa fa-times"></i></span>
        </button>
        <div class="text-center">
            <img src="https://dice.ng/images/mobile/games/dice/gameplay-assets/cheers-text.png" class="img-fluid" style="width: 70%;">
        </div>
        <div class="text-white text-center" id="throwLimitText">
            <div class="mb-2 fadedBlackBg">Please check back {{ getDuration(end_date) }} from now for results.</div>
        </div>
        <div class="text-center" style="position: absolute; bottom: 0; left: 0;width: 100%;">
          <div class="pl-3" id="pointsInfoDiv">
   				  <div class="d-flex justify-content-center" style="width: 95%">
              <div class="flex-fill text-center">
                <div class="font-weight-bold text-white">Points</div>
                <div class="text-center bg-light font-weight-bold py-1 rounded btn-outline-sv-warning text-black">{{ score }}</div>
              </div>
            </div>
          </div>
          <div class="mb-3" id="throwLimitButtons">
            <div class="d-flex justify-content-center">
              <div style="width:90%">
                <div class="my-2">
                  <button class="btn bg-sv-warning btn-block text-white font-weight-bold btn-sm py-2" id="showJoinAgainConfirmationButton">Join Again</button>
                </div>
                <div class="d-flex justify-content-between">
                  <nuxt-link class="btn bg-sv-primary text-sv-primary w-100 d-flex align-content-stretch justify-content-center align-items-center px-1 btn-sm mr-2" :to="{name:'legend-tournamentid-leaderboard', params: {tournamentid:tournament_id}}">View Leaderboard</nuxt-link>
                  <nuxt-link to="/" class="btn btn-sm btn-danger w-100 d-flex align-content-stretch justify-content-center align-items-center text-white">Exit Game</nuxt-link>
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
  name: "throw-limit-modal",
  props: ['score','end_date','tournament_id', "tournament"],
  methods:{
    clear(){
      this.$bvModal.hide('throwLimitModal')
      this.$router.push('/')
      this.$nuxt.refresh()
    },
    goToLeaderboard(){
      this.$router.push({name: "legend-tournamentid-leaderboard", params: {tournamentid:this.tournament_id}})
    }
  }

};
</script>

<style>
.body{
  background: url(https://dice.ng/images/mobile/games/dice/gameplay-assets/cheers-bg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 70vh;
}
</style>
