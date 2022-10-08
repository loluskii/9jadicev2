<template>
  <div class="row d-md-none d-lg-none d-block mt-2">
    <div class="col-12 p-0">
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
                  <small class="font-weight-bold text-uppercase tournamentTitle"
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
</template>

<script>
export default {};
</script>
<style scoped>
.modal-content {
  background-color: black !important;
  color: white !important;
}

.tops {
  padding-top: 100px;
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
