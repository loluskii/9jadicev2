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
            <div class="row py-1">
              <div class="col-6 pl-0 pr-1">
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
              </div>
              <div class="col-6 px-0 d-flex">
                <button
                  type="button"
                  id="filterButton"
                  class="btn btn-sm btn-block px-3 bg-sv-primary createTournamentText cursorPointer mx-1 filterButton"
                  data-toggle="modal"
                  data-target="#publicFilterModal"
                >
                  <span class="small align-items-center">
                    <i class="fa fa-filter mr-1"></i>
                    <span>Filter</span>
                  </span>
                </button>
                <button
                  type="button"
                  id="showSearchBarButton"
                  class="btn btn-sm px-3 bg-sv-primary createTournamentText cursorPointer showSearchBarButton"
                >
                  <span class="small"><i class="fa fa-search"></i></span>
                </button>
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
                <div id="verifiedGamesList">
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
                          onclick='openInfoModal({"id":81762,"name":"Mr Funny","category_id":3,"duration":6,"duration_type":"day","slug":"mr-funny","reference_id":"OONUinPaJ2","end_date":"2022-09-04 09:05:15","stake":100,"status":"started","no_of_players":50000,"no_of_players_joined":3,"time_started":"2022-08-29 09:05:15","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":"larry","verfication":1},"api_leaderboard":[],"leaderboard_length":3,"api_userrecords":[],"freetournament":null});'
                          class="d-flex flex-column"
                        >
                          <div class="d-flex align-items-center">
                            <small
                              class="font-weight-bold text-uppercase tournamentTitle"
                              >Mr Funny</small
                            >
                            <span class="small ml-2"
                              ><i class="fa fa-check-circle text-info"></i
                            ></span>
                          </div>
                          <div class="tournamentGameListInfoText">
                            <div>
                              <span>Ends in 5 days</span>

                              <span class="ml-1 badge badge-success px-1">
                                <i class="fa fa-circle text-white"
                                  >&nbsp;Live</i
                                >
                              </span>
                            </div>
                            <div class="bg-secondary text-white rounded px-1">
                              Multiple entries allowed
                            </div>
                          </div>
                        </div>
                        <span>
                          <button
                            class="btn btn-sm btn-light px-1 py-0 rounded-pill text-dark"
                          >
                            <i class="fa fa-info cursorPointer"></i>
                          </button>
                        </span>
                      </div>

                      <div class="d-flex">
                        <div class="bg-sv-primary p-1 rounded-left listOption">
                          <div>
                            <div id="join81762" class="text-center">3</div>
                            <div class="listBorderTop text-center">50K</div>
                          </div>
                        </div>
                        <div class="bg-sv-primary p-1 rounded-0 listOption">
                          ₦100
                        </div>
                        <div
                          class="bg-sv-primary p-1 rounded-right small listOption"
                        >
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
              <div class="col-12 p-0" id="verifiedGamesViewMore">
                <div class="text-center my-1">
                  <a
                    href="https://dice.ng/verified-games-list"
                    class="btn-sm rounded-pill bg-outline-sv-white btn-light-outline text-white py-0 px-4 small"
                  >
                    <small>View more </small>
                  </a>
                </div>
              </div>
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
                <div class="p-0" id="stateGamesList">
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
                          onclick='openInfoModal({"id":81762,"name":"Mr Funny","category_id":3,"duration":6,"duration_type":"day","slug":"mr-funny","reference_id":"OONUinPaJ2","end_date":"2022-09-04 09:05:15","stake":100,"status":"started","no_of_players":50000,"no_of_players_joined":3,"time_started":"2022-08-29 09:05:15","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":"larry","verfication":1},"api_leaderboard":[],"leaderboard_length":3,"api_userrecords":[],"freetournament":null});'
                          class="d-flex flex-column"
                        >
                          <div class="d-flex align-items-center">
                            <small
                              class="font-weight-bold text-uppercase tournamentTitle"
                              >Mr Funny</small
                            >
                            <span class="small ml-2"
                              ><i class="fa fa-check-circle text-info"></i
                            ></span>
                          </div>
                          <div class="tournamentGameListInfoText">
                            <div>
                              <span>Ends in 5 days</span>

                              <span class="ml-1 badge badge-success px-1">
                                <i class="fa fa-circle text-white"
                                  >&nbsp;Live</i
                                >
                              </span>
                            </div>
                            <div class="bg-secondary text-white rounded px-1">
                              Multiple entries allowed
                            </div>
                          </div>
                        </div>
                        <span>
                          <button
                            class="btn btn-sm btn-light px-1 py-0 rounded-pill text-dark"
                            onclick='openInfoModal({"id":81762,"name":"Mr Funny","category_id":3,"duration":6,"duration_type":"day","slug":"mr-funny","reference_id":"OONUinPaJ2","end_date":"2022-09-04 09:05:15","stake":100,"status":"started","no_of_players":50000,"no_of_players_joined":3,"time_started":"2022-08-29 09:05:15","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":"larry","verfication":1},"api_leaderboard":[],"leaderboard_length":3,"api_userrecords":[],"freetournament":null})'
                          >
                            <i class="fa fa-info cursorPointer"></i>
                          </button>
                        </span>
                      </div>

                      <div class="d-flex">
                        <div class="bg-sv-primary p-1 rounded-left listOption">
                          <div>
                            <div id="join81762" class="text-center">3</div>
                            <div class="listBorderTop text-center">50K</div>
                          </div>
                        </div>
                        <div class="bg-sv-primary p-1 rounded-0 listOption">
                          ₦100
                        </div>
                        <div
                          class="bg-sv-primary p-1 rounded-right small listOption"
                        >
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
              <div class="col-12" id="stateGamesViewMore">
                <div class="text-center my-1">
                  <a
                    href="https://dice.ng/verified-games-list"
                    class="btn-sm rounded-pill bg-outline-sv-white btn-light-outline text-white py-0 px-4 small"
                  >
                    <small>View more </small>
                  </a>
                </div>
              </div>
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
                <div class="p-0" id="biggestPrizesList">
                  <div class="small py-1 listBackground">
                    <span
                      class="ml-1 prizeToFirstText px-1 rounded bg-sv-warning text-white"
                      style="font-size: 8px"
                      >₦109,980 to 1st</span
                    >
                    <div class="d-flex justify-content-between text-white px-1">
                      <div
                        class="d-flex justify-content-between align-items-center flex-fill mr-3"
                      >
                        <div
                          onclick='openInfoModal({"id":81760,"name":"Big Dice","category_id":6,"duration":1,"duration_type":"week","slug":"big-dice","reference_id":"1nkZr7ewhC","end_date":"2022-09-02 12:09:43","stake":200,"status":"started","no_of_players":5000,"no_of_players_joined":2,"time_started":"2022-08-26 12:09:43","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":2,"api_userrecords":[],"freetournament":null});'
                          class="d-flex flex-column"
                        >
                          <div class="d-flex align-items-center">
                            <span
                              class="font-weight-bold text-uppercase tournamentTitle small"
                              >Big Dice</span
                            >
                          </div>
                          <div class="tournamentGameListInfoText">
                            <div>
                              <span>Ends in 3 days</span>

                              <span class="ml-1 badge badge-success px-1">
                                <i class="fa fa-circle text-white"
                                  >&nbsp;Live</i
                                >
                              </span>
                            </div>
                            <div class="bg-secondary text-white rounded px-1">
                              Multiple entries allowed
                            </div>
                          </div>
                        </div>
                        <span>
                          <button
                            class="btn btn-sm btn-light px-1 py-0 rounded-pill text-dark"
                            onclick='openInfoModal({"id":81760,"name":"Big Dice","category_id":6,"duration":1,"duration_type":"week","slug":"big-dice","reference_id":"1nkZr7ewhC","end_date":"2022-09-02 12:09:43","stake":200,"status":"started","no_of_players":5000,"no_of_players_joined":2,"time_started":"2022-08-26 12:09:43","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":null,"verfication":null},"api_leaderboard":[],"leaderboard_length":2,"api_userrecords":[],"freetournament":null})'
                          >
                            <i class="fa fa-info cursorPointer"></i>
                          </button>
                        </span>
                      </div>

                      <div class="d-flex">
                        <div class="bg-sv-primary p-1 rounded-left listOption">
                          <div>
                            <div id="join81760" class="text-center">2</div>
                            <div class="listBorderTop text-center">5K</div>
                          </div>
                        </div>
                        <div class="bg-sv-primary p-1 rounded-0 listOption">
                          ₦200
                        </div>
                        <div
                          class="bg-sv-primary p-1 rounded-right small listOption"
                        >
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
              <div class="col-12" id="biggestPrizesGamesViewMore">
                <div class="text-center my-1">
                  <a
                    href="https://dice.ng/verified-games-list"
                    class="btn-sm rounded-pill bg-outline-sv-white btn-light-outline text-white py-0 px-4 small"
                  >
                    <small>View more </small>
                  </a>
                </div>
              </div>
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
                <div class="p-0" id="premierLeagueGamesList">
                  <div class="text-center text-white font-italic">No game available.</div>
                </div>
              </div>
              <div class="col-12 mb-3 d-none" id="premierLeagueViewMore"></div>
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
                <div class="p-0" id="luxuryGamesList">
                  <div class="text-center text-white font-italic">No game available.</div>
                </div>
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
                <div class="p-0" id="bonusGamesList">
                  <div class="text-center text-white font-italic">No game available.</div>
                </div>
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
          </b-tab>
          <b-tab
            title="Public"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
            ><b-card-text>Tab contents 2</b-card-text></b-tab
          >
          <b-tab
            title="Partners"
            title-link-class="btn btn-sm border-0 rounded-pill py-0 px-2 mx-2 tournament-type-btn cursorPointer small"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
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
                      <div id="publicGamesList"></div>
                      <div id="specialGamesViewMore"></div>
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
  </div>
</template>

<script>
import searchFilter from "../components/search-filter.vue";
export default {
  components: { searchFilter },
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
