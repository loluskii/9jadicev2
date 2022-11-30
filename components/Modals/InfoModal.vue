<template>
  <b-modal
    centered
    hide-header
    hide-footer
    content-class="bg-sv-primary curvedEdge"
    body-class="p-0 bg-dark curvedEdge"
    :id="'game_' + game.reference_id"
  >
    <div class="container-fluid" id="infoModal">
      <div
        class="row bg-sv-primary p-2"
        style="border-radius: 18px 18px 0 0; height: 115px"
      >
        <div class="col-12 d-flex justify-content-between align-items-center">
          <div>
            <img
              style="height: 25px"
              src="~/assets/images/logos/logo-white.png"
            />
          </div>
          <div
            class="text-uppercase text-sv-primary text-center font-weight-bold mb-2"
            id="tournamentName"
          >
            {{ game.name }}
          </div>
          <button type="button" class="btn rounded-circle p-2 text-sv-primary">
            <span aria-hidden="true"><i class="fa fa-times"></i></span>
          </button>
        </div>
        <div
          class="col-12 d-flex justify-content-between align-items-center small font-weight-bold text-sv-primary px-2 pt-2 pb-3"
          id="matchInfo"
        >
          <div class="small mr-2">
            <p class="small mb-0">{{ formatDate(game.time_started) }}</p>
            <small>{{ getTime }}</small>
          </div>
          <div class="flex-fill small px-2">
            <div id="infojoin81817">
              {{ formatNumber(game.no_of_players_joined) }} of
              {{ formatNumber(game.no_of_players) }}
            </div>
            <div class="text-uppercase d-flex align-items-center small">
              <div id="percent81817" class="text-nowrap mr-1">
                {{ percent }} % full
              </div>
              <div class="progress w-100" style="height: 5px">
                <div
                  id="progress81817"
                  class="progress-bar bg-warning"
                  role="progressbar"
                  :style="{ width: percent + '%' }"
                  aria-valuenow="0.12"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="small text-right">
            <div>Guaranteed to first</div>
            <div>₦{{ calculateWinnings(game) }} to 1st</div>
          </div>
        </div>
      </div>
      <b-tabs
        no-key-nav
        no-nav-style
        id="public-info-modal-tabs"
        nav-wrapper-class="row justify-content-center nav-top"
        nav-class="bg-white text-dark justify-content-between font-weight-bold pubic-info-modal-tabs"
        active-nav-item-class="text-white bg-sv-warning"
        small
      >
        <b-tab>
          <template #title>
            <small>Overview</small>
          </template>
          <div
            class="tab-pane text-white fade show active"
            id="overviewTab"
            role="tabpanel"
            aria-labelledby="overview-tab"
          >
            <div class="d-flex justify-content-between border-bottom py-2">
              <span id="prizeText">Stake</span>
              <span id="prizeID">{{ game.stake }}</span>
            </div>
            <div class="d-flex justify-content-between border-bottom py-2">
              <span>Creator</span>
              <span id="creatorID">{{ game.creator.user_data_name }}</span>
            </div>
            <div class="d-flex justify-content-between border-bottom py-2">
              <span id="startText">Start Time</span>
              <span>
                <span><i class="fa fa-clock-o"></i></span>
                <span id="startID">{{ getDuration(game.time_started) }}</span>
              </span>
            </div>
            <div class="d-flex justify-content-between border-bottom py-2">
              <span id="endText">End Time</span>
              <span>
                <span><i class="fa fa-clock-o"></i></span>
                <span id="endID">{{ getDuration(game.end_date) }}</span>
              </span>
            </div>
            <div
              class="d-flex justify-content-between border-bottom py-2"
              style="overflow-x: auto"
            >
              <span>Players</span>
              <span id="playerCount"
                >{{ game.no_of_players_joined }}/{{ game.no_of_players }}</span
              >
            </div>
            <div
              id="specialErrorInfoFeedback"
              class="text-center text-danger small"
            ></div>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <small>Rules</small>
          </template>
          <div class="text-white my-2">
            <div>
              NOTE: A service charge of 10% of the total amount accummulated for
              this game will be deducted.
            </div>
            <ol class="pl-4">
              <li>Create a Tournament or Join an existing Tournament.</li>
              <li>Pay the Entry Fee.</li>
              <li>Go to game page to play and earn your point.</li>
              <li>
                To play the game, tap the dice cup twice to roll the dice and
                accumulate your points.
              </li>
              <li>Check your position on the leaderboard.</li>
              <li>Claim your prizes!</li>
            </ol>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <small>Leaderboard</small>
          </template>

          <div class="px-2 py-1 btn btn-sm btn-block rounded-0 text-white">
            <small>Shows the current position of players per ticket.</small>
          </div>
          <div
            class="d-flex justify-content-between text-white border-bottom py-2"
          >
            <span class="font-weight-bold">Player</span>
            <!--  <span class="font-weight-bold">Winnings</span> -->

            <span class="font-weight-bold">Points</span>
          </div>
          <div id="leaderboard-body">
            <div v-for="(player, index) in leaderboard" :key="index">
              <div
                class="d-flex justify-content-between bg-dark text-white px-1 py-2 topBar mb-1"
              >
                <span
                  >{{ index + 1 }}. {{ player.username }} #{{
                    player.join_count ? player.join_count : ""
                  }}</span
                >
                <span>{{ player.score ?? 0 }}</span>
              </div>
            </div>
            <div class="text-center mb-2">
              <nuxt-link
                :to="{
                  name: 'legend-tournamentid-leaderboard',
                  params: { tournamentid: game.id },
                }"
                class="btn bg-sv-warning btn-sm text-white"
                >View leaderboard</nuxt-link
              >
            </div>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <small>Paytable</small>
          </template>

          <div class="px-2 py-1 btn btn-sm btn-block rounded-0 text-white">
            <small>Payouts when tickets are completely sold out.</small>
          </div>
          <div id="tablePay" style="height: 300px; overflow-y: auto">
            <div v-for="(data, index) in paytable.pay_table" :key="index">
              <div class="d-flex justify-content-between p-2 text-white">
                <div>{{ data.position }}</div>
                <div class="font-weight-bold">₦{{ data.amount }}</div>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <small>Payouts</small>
          </template>

          <div class="px-2 py-1 btn btn-sm btn-block rounded-0 text-white">
            <small>Payouts based on current ticket/tickets sold.</small>
          </div>
          <div id="livePayoutList" style="height: 300px; overflow-y: auto">
            <div v-for="(x, index) in paytable.payout" :key="index">
              <div class="d-flex justify-content-between p-2 text-white">
                <div>{{ x.position }}</div>
                <div class="font-weight-bold">₦{{ x.amount }}</div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
      <div class="col-12">
        <div id="infoModalFeedback"></div>
        <div id="joinDiv" class="py-3 d-flex justify-content-center">
          <div class="d-flex">
            <button
              id="join_button"
              class="btn btn-sm bg-sv-primary text-sv-primary px-3"
              style="font-size: 12px"
              onclick='openSpecialConfirmationModal({"id":81817,"name":"Sure Game","category_id":3,"duration":6,"duration_type":"day","slug":"sure-game","reference_id":"syPcDikknA","end_date":"2022-10-11 16:08:45","stake":100,"status":"started","no_of_players":5000,"no_of_players_joined":6,"time_started":"2022-10-05 16:08:45","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":"larry","verfication":1},"api_leaderboard":[],"leaderboard_length":6,"api_userrecords":[],"freetournament":null})'
            >
              Join
            </button>
            <div id="legendInfoModal"></div>
            <button
              class="btn btn-sm bg-sv-warning text-nowrap text-white mx-1 px-1"
              style="font-size: 12px"
            >
              <span>Share Game<i class="fa fa-share ml-2"></i></span>
            </button>
            <a
              href="https://dice.ng/legend/info/sure-game/syPcDikknA"
              class="btn btn-sm text-nowrap btn-primary mr-1 px-1"
            >
              <span class="text-white" style="font-size: 12px">Info Page</span>
            </a>
            <a
              href="https://dice.ng/tournament/81817/discussions"
              class="btn btn-sm text-nowrap bg-sv-primary text-sv-primary mr-1 px-1"
            >
              <span style="font-size: 12px"
                >Discuss<i class="fa fa-comments ml-2"></i
              ></span>
            </a>
          </div>
        </div>
        <div id="playSlider" class="">
          <div id="joinedGamesDiv">
            <div class="small text-white text-center mb-2">My active games:</div>
            <div
              class="d-flex flex-nowrap hideScrollbar py-3"
              style="overflow-x: scroll"
              v-if="game.auth_user.pending_count > 0"
            >
              <span style="position: absolute; right: 0; margin-right: 5px">
                <i class="fa fa-caret-right fa-2x text-white"></i>
              </span>

              <div class="mb-1 mr-2" v-for="(play, index) in game.auth_user.pending_plays" :key="index">
                <div class="small text-center position-relative">
                  <span
                    class="badge badge-pill bg-sv-warning text-dark small font-weight-light"
                    style="
                      position: absolute;
                      left: 0;
                      top: 0;
                      margin-left: 46%;
                      margin-top: -8px;
                    "
                    > {{ play.join_count }} </span
                  >
                  <div class="bg-sv-primary text-white">
                    <button
                    @click.prevent="playUnrolled(play.id, play.reference)"
                      class="btn bg-sv-primary text-sv-primary py-1 w-100 btn-sm"
                      >Play Game</button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "info-modal",
  data() {
    return {};
  },
  props: ["game", "paytable", "leaderboard"],
  computed: {
    getTime() {
      return this.$moment().format("LTS");
    },
    percent() {
      let total = this.game.no_of_players;
      let joined = this.game.no_of_players_joined;
      return ((joined / total) * 100).toFixed(2);
    },
  },
  methods: {
    playUnrolled(id, ref){
      let name = this.game.slug;
      let refid = this.game.reference_id
      this.$store.dispatch('setCommitRecordID', id)
      this.$router.push({name: "legend-name-ref-refid-game", params: {name:name, ref:ref, refid:refid}})
    }
  },
  mounted() {
  },
};
</script>

<style>
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
