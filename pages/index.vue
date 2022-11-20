<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div
          class="row flex-nowrap d-flex py-1 mt-0 hideScrollbar"
          style="overflow-x: auto"
        >
          <div class="col-12 p-0">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              img-height="480"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                img-src="~/assets/images/banners/tg.png"
              ></b-carousel-slide>

              <b-carousel-slide
                img-src="~/assets/images/banners/lotg.jpg"
              ></b-carousel-slide>

              <b-carousel-slide
                img-src="~/assets/images/banners/lod.jpg"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
        <b-tabs
          small
          nav-class="bg-sv-primary w-100 justify-content-around py-1"
          active-nav-item-class="active-tournament-type-btn"
          nav-wrapper-class="row"
          pills
        >
          <b-tab
            title="Premium"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
            active
          >
            <verified-games></verified-games>
            <!-- {{-- STATE GAMES --}} -->
            <state-games></state-games>
            <!-- {{-- BIGGEST PRIZES GAMES --}} -->
            <biggest-prize></biggest-prize>
            <!-- {{-- PREMIER LEAGUES GAMES --}} -->
            <football-games></football-games>
            <!-- {{-- LUXURY GAMES --}} -->
            <luxury-games></luxury-games>
            <!-- {{-- BONUS GAMES --}} -->
            <bonus-games></bonus-games>
            <!-- {{-- FREE GAMES --}} -->
            <free-games></free-games>
            <!-- {{-- GAMES LIST END --}} -->
          </b-tab>
          <b-tab
            title="Public"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
            >
            <public></public>
          </b-tab>
          <b-tab
            title="Partners"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
            >
            <agent-games></agent-games>
          </b-tab>
          <b-tab
            title="Ends in 10 mins"
            id="endsInTenMinutesButton"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 pl-1 mr-2 tournament-type-btn cursorPointer small d-flex align-items-center mr-2"
          >
            <template #title>
              <span class="notificationAnimation mr-1"></span> Ends in 10 mins
            </template>
            <b-card-text>Tab contents 4</b-card-text>
          </b-tab>
        </b-tabs>

        <state-games></state-games>






        <div class="row justify-content-center py-1 bg-sv-primary d-none">
          <div class="col-sm-12 nav d-flex justify-content-around p-0">
            <a
              class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer active-tournament-type-btn small"
              id="premiumButton"
            >
              <span class="small">Premium</span>
            </a>
            <a
              class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
              id="specialButton"
            >
              <span class="small">Public</span>
            </a>
            <a
              class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
              id="partnersButton"
            >
              <span class="small">Partners</span>
            </a>
            <a
              class="btn btn-sm border-0 rounded-pill py-0 pl-1 mr-2 tournament-type-btn cursorPointer small d-flex align-items-center mr-2"
              id="endsInTenMinutesButton"
            >
              <span class="notificationAnimation mr-1"></span>
              <span class="small">Ends in 10mins</span>
            </a>
          </div>
        </div>
        <div class="tab-content d-none">
          <div class="tab-pane active" id="premiumTournament">
            <div class="row">
              <div class="col-12 p-0">
                <div class="d-flex justify-content-between py-1 pb-0">
                  <button
                    id="specialSubsection"
                    class="btn btn-sm btn-block bg-sv-primary createTournamentText"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    <span class="small"
                      ><i class="fa fa-plus text-sv-warning"></i>&nbsp;Create
                      Tournament</span
                    >
                  </button>
                  <search-filter></search-filter>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        Verified Games
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
                <div id="verifiedGamesList"></div>
              </div>
              <div class="col-12 p-0" id="verifiedGamesViewMore"></div>
            </div>
            <!-- {{-- STATE GAMES --}} -->
            <div class="row d-md-none d-lg-none d-block mt-2">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        State Games
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
                <div class="p-0" id="stateGamesList"></div>
              </div>
              <div class="col-12" id="stateGamesViewMore"></div>
            </div>
            <!-- {{-- BIGGEST PRIZES GAMES --}} -->
            <div class="row mt-2">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        Biggest Prizes
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
                <div class="p-0" id="biggestPrizesList"></div>
              </div>
              <div class="col-12" id="biggestPrizesGamesViewMore"></div>
            </div>
            <!-- {{-- PREMIER LEAGUES GAMES --}} -->
            <div class="row mt-2">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        Football Games
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
                <div class="p-0" id="premierLeagueGamesList"></div>
              </div>
              <div class="col-12 mb-3" id="premierLeagueViewMore"></div>
            </div>
            <!-- {{-- LUXURY GAMES --}} -->
            <div class="row mt-2">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        Luxury Games
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
                <div class="p-0" id="luxuryGamesList"></div>
              </div>
              <div class="col-12" id="luxuryGamesViewMore"></div>
            </div>
            <!-- {{-- BONUS GAMES --}} -->
            <div class="row mt-2">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        Bonus Games
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
                <div class="p-0" id="bonusGamesList"></div>
              </div>
              <div class="col-12" id="bonusGamesViewMore"></div>
            </div>
            <!-- {{-- FREE GAMES --}} -->
            <div class="row mt-2">
              <div class="col-12 p-0">
                <div class="d-flex flex-column small py-1 topic-bg">
                  <div class="d-flex px-1">
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold text-capitalize">
                        Free Games
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
                <div class="p-0" id="freeGamesList"></div>
              </div>
              <div class="col-12" id="freeGamesViewMore"></div>
            </div>
            <!-- {{-- GAMES LIST END --}} -->
          </div>
          <div class="row tab-pane fade pb-2" id="specialTournament">
            <!-- @auth -->
            <div class="col-12 p-0 d-none">
              <div class="d-flex justify-content-between py-1 pb-0">
                <button
                  id="specialSubsection"
                  class="btn btn-sm btn-block bg-sv-primary createTournamentText mr-2"
                  onclick="launchCreateSpecialTournamentModal(3)"
                >
                  <span class="small"
                    ><i class="fa fa-plus text-sv-warning"></i>&nbsp;Create
                    Tournament</span
                  >
                </button>
                <search-filter></search-filter>
              </div>
            </div>
            <!-- @endauth -->
            <div class="col-12">
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
                      <div id="specialGamesViewMore">
                        <button v-b-modal.modal-1>vvvvvv</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="partnersTournament">
            <div class="row">
              <!-- @auth
              <div class="col-12 p-0">
                <div class="d-flex justify-content-between py-1 pb-0">
                  @if (Auth::user()->role_id == 5 || Auth::user()->role_id ==
                  10)
                  <button
                    id="specialSubsection"
                    class="btn btn-sm btn-block bg-sv-primary createTournamentText mr-2"
                    onclick="launchCreatePartnersTournamentModal()"
                  >
                    <span class="small"
                      ><i class="fa fa-plus text-sv-warning"></i>&nbsp;Create
                      Tournament</span
                    >
                  </button>
                  @else
                  <button
                    id="specialSubsection"
                    class="btn btn-sm btn-block bg-sv-primary createTournamentText mr-2"
                    onclick="launchVerificationModal('Agents', 'Partners')"
                  >
                    <span class="small"
                      ><i class="fa fa-plus text-sv-warning"></i>&nbsp;Create
                      Tournament</span
                    >
                  </button>
                  @endif
                  @include( 'desktop.components.welcome.search-filter' )
                </div>
              </div>
              @endauth -->
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
                  <div id="agentGamesList"></div>
                  <div id="agentGamesViewMore"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="endsInTenMinutesTournament">
            <div class="row mt-2">
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
                <div id="endsInTenMinutesGamesList"></div>
              </div>
              <div class="col-12 p-0" id="endsInTenMinutesGamesViewMore"></div>
            </div>
          </div>
          <div class="row tab-pane fade pb-2" id="privateTournament">
            <div class="col-12 px-1 py-0">
              <div class="d-flex justify-content-between py-1">
                <button
                  id="privateSubsection"
                  class="btn btn-sm btn-block bg-sv-primary text-white mr-2"
                  onclick="categoryID = 2; "
                  data-toggle="modal"
                  data-target="#createPrivateTournamentModal"
                >
                  <span class="small"
                    ><i class="fa fa-plus text-sv-warning"></i>&nbsp; Create
                    Tournament
                  </span>
                </button>
                <div class="input-group flex-fill pl-4">
                  <div class="input-group-prepend">
                    <span class="mt-1"
                      ><i class="fa fa-search text-white"></i
                    ></span>
                  </div>
                  <input
                    type="search"
                    class="form-control form-control-sm rounded-pill privateSearchInput bg-transparent border-secondary"
                    style="margin-left: -25px"
                    id="privateSearchInput"
                    placeholder="Search"
                    name=""
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="tab-content col-12 p-0">
                  <div class="tab-pane" id="special-all">
                    <div
                      class="d-flex justify-content-between align-items-end px-1"
                    >
                      <div
                        class="text-sv-warning font-weight-bold text-capitalize small"
                      >
                        Private Games
                      </div>
                    </div>
                    <div
                      class="d-flex flex-column small py-0"
                      style="background-color: #000000"
                    >
                      <div class="d-flex text-white px-1">
                        <div class="d-flex align-items-center">
                          <div class="font-weight-bold text-uppercase">
                            Name
                          </div>
                        </div>
                        <div class="d-flex ml-auto">
                          <div class="px-2 rounded listOptionTitle2">
                            <div class="text-capitalize small d-flex">
                              <span style="margin-right: 0.2rem"
                                ><i class="fa fa-user"></i
                              ></span>
                              <span>Players</span>
                            </div>
                          </div>
                          <div class="px-2 rounded listOptionTitle2">
                            <small class="text-capitalize">Amount</small>
                          </div>
                          <div class="px-2 py-1 rounded listOptionTitle2">
                            <small class="text-capitalize">Status</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="privateGamesList"></div>
                    <div id="privateGamesViewMore"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
    </div>
    <div class="d-none">
      <div class="row d-md-block d-lg-block d-none mt-2 mb-3">
        <div class="col-12 px-1">
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
          <div class="p-0" id="stateGamesList2"></div>
        </div>
        <div class="col-12" id="stateGamesViewMore2"></div>
      </div>
    </div>

    <throw-limit-modal></throw-limit-modal>
  </div>
</template>

<script>
import ThrowLimitModal from '~/components/Modals/gameplay/ThrowLimitModal.vue';
import Slider from "~/components/Slider";
import AgentGames from '~/components/Tournaments/AgentGames.vue';
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
    ThrowLimitModal,
    Public,
    AgentGames,
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

    showJoinConfirmationModal(){
      this.$bvModal.show("joinConfirmationModal");
    },
  },
};
</script>
<style scoped>
.modal-content {
  background-color: black !important;
  color: white !important;
}

.info-button {
    height: 20px;
    width: 20px;
    padding: 0;
    align-items: center;
    align-content: center;
    border-radius: 50rem;
    display: flex;
    justify-content: center;
}

.topic-bg {
  background: #b7bac4;
  /*border: 1px solid #ed8d0e;
        color: #ed8d0e;*/
}

.nav-link {
  padding: 0;
}

.tournament-type-btn {
  font-size: 5px;
  font-weight: 400;
}

.categoryContainer {
  /*background-color: #348CA4;*/
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
.publicSearchInput,
.privateSearchInput,
.specialSearchInput {
  padding-left: 30px;
  color: white;
}
.publicSearchInput:focus,
.privateSearchInput:focus,
.specialSearchInput:focus {
  padding-left: 30px;
  color: white;
}
.publicSearchInput::placeholder,
.privateSearchInput::placeholder,
.specialSearchInput::placeholder {
  /*padding-left: 30px;*/
  color: grey;
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
