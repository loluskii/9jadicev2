<template>
  <div>
    <div class="row py-1">
      <div class="col-6 pl-0 pr-1">
        <button id="specialSubsection" @click.prevent="showCreateTournament"  class="btn btn-sm btn-block bg-sv-primary createTournamentText">
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
              <div class="font-weight-bold text-capitalize">Verified Games</div>
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
    <create-tournament></create-tournament>
  </div>
</template>

<script>
import CreateTournament from '../Modals/CreateTournament';
export default {
  name: "",
  components:{CreateTournament},
  data() {
    return {
      verified_games: [],
    };
  },
  methods:{
    showCreateTournament(){
      this.$bvModal.show("createTournament");
    },
    getVerifiedGames(){
      this.$axios.$get(
          'https://dice.ng/verified-games'
        )
        .then((res) => (this.weather = res));
    }
  },

  mounted(){
    this.getVerifiedGames()
  }
};
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

#create-tournament-pills  li.nav-item  a.nav-link {
    background: grey;
    color: #000000;
    padding: 3px 10px;
}
</style>
