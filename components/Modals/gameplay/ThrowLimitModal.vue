<template>
  <div>
    <b-modal
      id="modal-1"
      hide-footer
      hide-header
      centered
      no-close-on-backdrop
      body-class="py-0 px-0 bg-dark curvedEdge text border-0"
      content-class="bg-transparent border-0"
    >
      <div class="body curvedEdge py-3">
        <nuxt-link to="/" class="cancel btn rounded-circle p-2 text-white" style="position: absolute;right: 0; top: 0;" aria-label="Close">
          <span aria-hidden="true"><i class="fa fa-times"></i></span>
        </nuxt-link>
        <div class="text-center">
            <img src="https://dice.ng/images/mobile/games/dice/gameplay-assets/cheers-text.png" class="img-fluid" style="width: 70%;">
        </div>
        <div class="text-white text-center" id="throwLimitText">
            <div class="mb-2 fadedBlackBg">Please check back  1 week from now for results.</div>
        </div>
        <div class="text-center" style="position: absolute; bottom: 0; left: 0;width: 100%;">
          <div class="pl-3" id="pointsInfoDiv">
   				  <div class="d-flex justify-content-center" style="width: 95%">
              <div class="flex-fill text-center">
                <div class="font-weight-bold text-white">Points</div>
                <div class="text-center bg-light font-weight-bold py-1 rounded btn-outline-sv-warning text-black">27,249</div>
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
                  <a class="btn bg-sv-primary text-sv-primary w-100 d-flex align-content-stretch justify-content-center align-items-center px-1 btn-sm mr-2" href="https://dice.ng/legend/ZgQFUXiCpe/leaderboard">View Leaderboard</a>
                  <a class="btn btn-sm btn-danger w-100 d-flex align-content-stretch justify-content-center align-items-center text-white" href="/">Exit Game</a>
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
  props: ['score','end_date','tournament_id', 'ref_id']
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
