<template>
  <b-modal
    centered
    hide-header
    hide-footer
    content-class="bg-sv-primary curvedEdge"
    body-class="p-0 bg-dark curvedEdge all"
    :id="'instructionModal_' + game.reference_id"
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
              src="https://dice.ng/images/mobile/logo-white.png"
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
        active-nav-item-class="text-dark btn-light"
        small
      >
        <b-tab>
          <template #title>
            <small>Overview</small>
          </template>
          <div
            class="tab-pane text-white fade show active pb-5"
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
            <small>Instruction</small>
          </template>
          <div class="text-white my-2 pt-2 pb-4 text-center">
            <div>
              Tap on the dice cup twice or play button once to roll your way into billions!
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "instruction-modal",
  data() {
    return {};
  },
  props: ["game"],
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
  },
  mounted() {
  },
};
</script>

<style>
.all{
  font-family: 'Montserrat';
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
