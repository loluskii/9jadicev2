<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
      <div class="col-sm-12 tops col-md-12 col-lg-12 col-xl-12" :class="$auth.loggedIn ? 'tops-auth': 'tops'">
        <slider></slider>
        <b-tabs

          nav-class="bg-sv-primary w-100 justify-content-around py-1"
          active-nav-item-class="active-tournament-type-btn rounded-pill"
          nav-wrapper-class="row"
          pills
        >
          <b-tab
            title="Premium"
            title-link-class="btn btn-sm border-0 py-0 px-2 mx-2 tournament-type-btn cursorPointer "
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
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer "
          >
            <public></public>
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
    <state-games></state-games>
  </div>
</template>

<script>
import Slider from "~/components/Slider";
import BiggestPrize from "~/components/Tournaments/BiggestPrize";
import BonusGames from "~/components/Tournaments/BonusGames";
import FootballGames from "~/components/Tournaments/FootballGames.vue";
import FreeGames from "~/components/Tournaments/FreeGames.vue";
import LuxuryGames from "~/components/Tournaments/LuxuryGames";
import Public from '~/components/Tournaments/Public.vue';
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
    Public
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
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
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
