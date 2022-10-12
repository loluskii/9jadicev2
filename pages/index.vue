<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
      <div class="col-sm-12 tops col-md-12 col-lg-12 col-xl-12">
        <slider></slider>
        <b-tabs
          small
          nav-class="bg-sv-primary w-100 justify-content-around py-1"
          active-nav-item-class="active-tournament-type-btn rounded-pill"
          nav-wrapper-class="row"
          pills
        >
          <b-tab
            title="Premium"
            title-link-class="btn btn-sm border-0 py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
            active
          >
            <verified-games></verified-games>
            <!-- {{-- STATE GAMES --}} -->
            <!-- <state-games></state-games> -->
            <!-- {{-- BIGGEST PRIZES GAMES --}} -->
            <!-- <biggest-prize></biggest-prize> -->
            <!-- {{-- PREMIER LEAGUES GAMES --}} -->
            <football-games></football-games>
            <!-- {{-- LUXURY GAMES --}} -->
            <!-- <luxury-games></luxury-games> -->
            <!-- {{-- BONUS GAMES --}} -->
            <bonus-games></bonus-games>
            <!-- {{-- FREE GAMES --}} -->
            <!-- <free-games></free-games> -->
            <!-- {{-- GAMES LIST END --}} -->
          </b-tab>
          <b-tab
            title="Public"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
          >
            <div class="">
              <div class="row">
                <div class="tab-content col-12 p-0">
                  <div class="tab-pane active" id="special-all">
                    <div>
                      <div class="d-flex flex-column small py-1 topic-bg">
                        <div class="d-flex px-1">
                          <div class="d-flex align-items-center">
                            <div class="font-weight-bold text-capitalize">
                              Public Games
                            </div>
                          </div>
                          <div class="d-flex ml-auto">
                            <div class="rounded listOptionTitle">
                              <div
                                class="text-capitalize small d-flex align-items-center"
                              >
                                <span style="margin-right: 0.2rem"
                                  ><i class="fa fa-user"></i
                                ></span>
                                <span>Players</span>
                              </div>
                            </div>
                            <div class="rounded listOptionTitle">
                              <small class="text-capitalize">Amount</small>
                            </div>
                            <div class="rounded listOptionTitle">
                              <small class="text-capitalize">Status</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="publicGamesList">
                        <div class="text-white text-center font-italic">
                          No game available.
                        </div>
                      </div>
                      <div id="specialGamesViewMore"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab
            title="Partners"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
          >
            <div class="row">
              <div class="col-12 px-0">
                <div>
                  <div class="d-flex flex-column small py-1 topic-bg">
                    <div class="d-flex px-1">
                      <div class="d-flex align-items-center">
                        <div class="font-weight-bold text-capitalize">
                          Agent Games
                        </div>
                      </div>
                      <div class="d-flex ml-auto">
                        <div class="rounded listOptionTitle">
                          <div
                            class="text-capitalize small d-flex align-items-center"
                          >
                            <span style="margin-right: 0.2rem"
                              ><i class="fa fa-user"></i
                            ></span>
                            <span>Players</span>
                          </div>
                        </div>
                        <div class="rounded listOptionTitle">
                          <small class="text-capitalize">Amount</small>
                        </div>
                        <div class="rounded listOptionTitle">
                          <small class="text-capitalize">Status</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="agentGamesList">
                    <div class="text-white text-center font-italic">
                      No game available.
                    </div>
                  </div>
                  <div id="agentGamesViewMore"></div>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab
            title="Ends in 10 mins"
            id="endsInTenMinutesButton"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 pl-1 mr-2 tournament-type-btn cursorPointer small d-flex align-items-center mr-2"
          >
            <template #title>
              <span class="notificationAnimation mr-1"></span> Ends in 10 mins
            </template>
            <div class="row">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        Ending in 10mins
                      </div>
                    </div>
                    <div class="d-flex ml-auto">
                      <div class="rounded listOptionTitle">
                        <div
                          class="text-capitalize small d-flex align-items-center"
                        >
                          <span style="margin-right: 0.2rem"
                            ><i class="fa fa-user"></i
                          ></span>
                          <span>Players</span>
                        </div>
                      </div>
                      <div class="rounded listOptionTitle">
                        <small class="text-capitalize">Amount</small>
                      </div>
                      <div class="rounded listOptionTitle">
                        <small class="text-capitalize">Status</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="endsInTenMinutesGamesList">
                  <div class="text-white text-center font-italic">
                    No game available.
                  </div>
                </div>
              </div>
              <div class="col-12 p-0" id="endsInTenMinutesGamesViewMore"></div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
    </div>
    <!-- STATE GAMES -->
    <div class="">
      <div class="row d-md-block d-lg-block d-none mt-2 mb-3">
        <div class="col-12 px-0">
          <div class="d-flex flex-column small py-1 topic-bg">
            <div class="d-flex px-1">
              <div class="d-flex align-items-center">
                <div class="font-weight-bold text-capitalize">State Games</div>
              </div>
              <div class="d-flex ml-auto">
                <div class="rounded listOptionTitle">
                  <div class="text-capitalize small d-flex align-items-center">
                    <span style="margin-right: 0.2rem"
                      ><i class="fa fa-user"></i
                    ></span>
                    <span>Players</span>
                  </div>
                </div>
                <div class="rounded listOptionTitle">
                  <small class="text-capitalize">Amount</small>
                </div>
                <div class="rounded listOptionTitle">
                  <small class="text-capitalize">Status</small>
                </div>
              </div>
            </div>
          </div>
          <div class="p-0" id="stateGamesList2">
            <div class="small py-1 listBackground">
              <span
                class="ml-1 prizeToFirstText px-1 rounded bg-sv-warning text-white"
                style="font-size: 8px"
                >₦360,000 to 1st</span
              >
              <div class="d-flex justify-content-between text-white px-1">
                <div
                  class="d-flex justify-content-between align-items-center flex-fill mr-3"
                >
                  <div
                    onclick='openInfoModal({"id":81793,"name":"Lagos Fans","category_id":10,"duration":10,"duration_type":"day","slug":"lagos-fans","reference_id":"iaqEdwn1Tl","end_date":"2022-09-27 17:18:42","stake":100,"status":"started","no_of_players":50000,"no_of_players_joined":6,"time_started":"2022-09-17 17:18:42","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":6,"api_userrecords":[],"freetournament":null});'
                    class="d-flex flex-column"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        class="font-weight-bold text-uppercase tournamentTitle small"
                        >Lagos Fans</span
                      >
                    </div>
                    <div class="tournamentGameListInfoText">
                      <div>
                        <span>Ends in 7 days</span>

                        <span class="ml-1 badge badge-success px-1">
                          <i class="fa fa-circle text-white">&nbsp;Live</i>
                        </span>
                      </div>
                      <div class="bg-secondary text-white rounded px-1">
                        Multiple entries allowed
                      </div>
                    </div>
                  </div>
                  <span>
                    <button
                      class="btn btn-sm text-dark btn-light info-button"
                      onclick='openInfoModal({"id":81793,"name":"Lagos Fans","category_id":10,"duration":10,"duration_type":"day","slug":"lagos-fans","reference_id":"iaqEdwn1Tl","end_date":"2022-09-27 17:18:42","stake":100,"status":"started","no_of_players":50000,"no_of_players_joined":6,"time_started":"2022-09-17 17:18:42","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":6,"api_userrecords":[],"freetournament":null})'
                    >
                      <i class="fa fa-info cursorPointer"></i>
                    </button>
                  </span>
                </div>

                <div class="d-flex">
                  <div class="bg-sv-primary p-1 rounded-left listOption">
                    <div>
                      <div id="join81793" class="text-center">6</div>
                      <div class="listBorderTop text-center">50K</div>
                    </div>
                  </div>
                  <div class="bg-sv-primary p-1 rounded-0 listOption">₦100</div>
                  <div class="bg-sv-primary p-1 rounded-right small listOption">
                    <button
                      id="join_button"
                      class="btn btn-sm btn-success rounded-pill shadow py-0 px-2 text-white"
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="small py-1 listBackground">
              <span
                class="ml-1 prizeToFirstText px-1 rounded bg-sv-warning text-white"
                style="font-size: 8px"
                >₦180,000 to 1st</span
              >
              <div class="d-flex justify-content-between text-white px-1">
                <div
                  class="d-flex justify-content-between align-items-center flex-fill mr-3"
                >
                  <div
                    onclick='openInfoModal({"id":81792,"name":"Abuja Fans","category_id":10,"duration":10,"duration_type":"day","slug":"abuja-fans","reference_id":"vCR4LoorcP","end_date":"2022-09-27 17:18:00","stake":100,"status":"started","no_of_players":20000,"no_of_players_joined":1,"time_started":"2022-09-17 17:18:00","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":1,"api_userrecords":[],"freetournament":null});'
                    class="d-flex flex-column"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        class="font-weight-bold text-uppercase tournamentTitle small"
                        >Abuja Fans</span
                      >
                    </div>
                    <div class="tournamentGameListInfoText">
                      <div>
                        <span>Ends in 7 days</span>

                        <span class="ml-1 badge badge-success px-1">
                          <i class="fa fa-circle text-white">&nbsp;Live</i>
                        </span>
                      </div>
                      <div class="bg-secondary text-white rounded px-1">
                        Multiple entries allowed
                      </div>
                    </div>
                  </div>
                  <span>
                    <button
                      class="btn btn-sm text-dark btn-light info-button"
                      onclick='openInfoModal({"id":81792,"name":"Abuja Fans","category_id":10,"duration":10,"duration_type":"day","slug":"abuja-fans","reference_id":"vCR4LoorcP","end_date":"2022-09-27 17:18:00","stake":100,"status":"started","no_of_players":20000,"no_of_players_joined":1,"time_started":"2022-09-17 17:18:00","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":1,"api_userrecords":[],"freetournament":null})'
                    >
                      <i class="fa fa-info cursorPointer"></i>
                    </button>
                  </span>
                </div>

                <div class="d-flex">
                  <div class="bg-sv-primary p-1 rounded-left listOption">
                    <div>
                      <div id="join81792" class="text-center">1</div>
                      <div class="listBorderTop text-center">20K</div>
                    </div>
                  </div>
                  <div class="bg-sv-primary p-1 rounded-0 listOption">₦100</div>
                  <div class="bg-sv-primary p-1 rounded-right small listOption">
                    <button
                      id="join_button"
                      class="btn btn-sm btn-success rounded-pill shadow py-0 px-2 text-white"
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="small py-1 listBackground">
              <span
                class="ml-1 prizeToFirstText px-1 rounded bg-sv-warning text-white"
                style="font-size: 8px"
                >₦180,000 to 1st</span
              >
              <div class="d-flex justify-content-between text-white px-1">
                <div
                  class="d-flex justify-content-between align-items-center flex-fill mr-3"
                >
                  <div
                    onclick='openInfoModal({"id":81791,"name":"Edo Fans","category_id":10,"duration":10,"duration_type":"day","slug":"edo-fans","reference_id":"bHxe3YLMPg","end_date":"2022-09-27 17:17:28","stake":100,"status":"started","no_of_players":20000,"no_of_players_joined":1,"time_started":"2022-09-17 17:17:28","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":1,"api_userrecords":[],"freetournament":null});'
                    class="d-flex flex-column"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        class="font-weight-bold text-uppercase tournamentTitle small"
                        >Edo Fans</span
                      >
                    </div>
                    <div class="tournamentGameListInfoText">
                      <div>
                        <span>Ends in 7 days</span>

                        <span class="ml-1 badge badge-success px-1">
                          <i class="fa fa-circle text-white">&nbsp;Live</i>
                        </span>
                      </div>
                      <div class="bg-secondary text-white rounded px-1">
                        Multiple entries allowed
                      </div>
                    </div>
                  </div>
                  <span>
                    <button
                      class="btn btn-sm text-dark btn-light info-button"
                      onclick='openInfoModal({"id":81791,"name":"Edo Fans","category_id":10,"duration":10,"duration_type":"day","slug":"edo-fans","reference_id":"bHxe3YLMPg","end_date":"2022-09-27 17:17:28","stake":100,"status":"started","no_of_players":20000,"no_of_players_joined":1,"time_started":"2022-09-17 17:17:28","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":1,"api_userrecords":[],"freetournament":null})'
                    >
                      <i class="fa fa-info cursorPointer"></i>
                    </button>
                  </span>
                </div>

                <div class="d-flex">
                  <div class="bg-sv-primary p-1 rounded-left listOption">
                    <div>
                      <div id="join81791" class="text-center">1</div>
                      <div class="listBorderTop text-center">20K</div>
                    </div>
                  </div>
                  <div class="bg-sv-primary p-1 rounded-0 listOption">₦100</div>
                  <div class="bg-sv-primary p-1 rounded-right small listOption">
                    <button
                      id="join_button"
                      class="btn btn-sm btn-success rounded-pill shadow py-0 px-2 text-white"
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" id="stateGamesViewMore2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/Slider";
import BiggestPrize from "~/components/Tournaments/BiggestPrize";
import BonusGames from "~/components/Tournaments/BonusGames";
import FootballGames from "~/components/Tournaments/FootballGames.vue";
import FreeGames from "~/components/Tournaments/FreeGames.vue";
import LuxuryGames from "~/components/Tournaments/LuxuryGames";
import StateGames from "~/components/Tournaments/StateGames.vue";
import VerifiedGames from "~/components/Tournaments/VerifiedGames";
import searchFilter from "../components/search-filter";
export default {
  components: {
    searchFilter,
    Slider,
    VerifiedGames,
    LuxuryGames,
    BonusGames,
    BiggestPrize,
    StateGames,
    FootballGames,
    FreeGames,
  },
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      slide: 0,
      sliding: null,
      loading: true,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },

    showJoinConfirmationModal() {
      this.$bvModal.show("joinConfirmationModal");
    },
  },
};
</script>
<style scoped>
.topic-bg {
  background: #b7bac4;
}

.nav-link {
  padding: 0;
}

.categoryContainer {
  background-color: rgba(52, 140, 164, 0.7);
}
.cursorPointer:hover {
  cursor: pointer;
}
.text-9jaluck2 {
  color: #008d5a;
}
.straightEdge {
  border-radius: 0px !important;
}
.cursorPointer:hover {
  cursor: pointer;
}
.curvedEdge {
  border-radius: 18px;
}

.listBorderTop {
  border-top: 1px solid var(--theme-color-primary-text);
}
.listOptionTitle {
  width: 60px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.1rem;
  color: #000000;
}
.listOption {
  width: 60px !important;
  display: flex;
  justify-content: center;
  color: var(--theme-color-primary-text);
  align-items: center;
  margin-right: 0.1rem;
}
.listBackground:nth-child(2n) {
  background-color: #3e444a;
}
.listBackground:nth-child(2n + 1) {
  background-color: #343a40;
}
@media only screen and (max-width: 360px) {
  .tournamentTitle {
    font-size: 0.7rem;
    /*color: yellow;*/
  }
}
</style>
