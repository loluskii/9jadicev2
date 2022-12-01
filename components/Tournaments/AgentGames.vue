<template>
  <div>
    <div class="row">
      <div class="col-12 p-0">
        <div class="d-flex flex-column small py-1 topic-bg">
          <div class="d-flex px-1">
            <div class="d-flex align-items-center">
              <div class="font-weight-bold text-capitalize">Agent Games</div>
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
          <div
              v-for="(game, index) in agent_games"
              :key="index"
              class="small py-1 listBackground"
            >
              <span
                class="ml-1 prizeToFirstText px-1 rounded bg-sv-warning text-white"
                style="font-size: 8px"
                >₦{{ calculateWinnings(game) }} to 1st</span
              >
              <div class="d-flex justify-content-between text-white px-1">
                <div
                  class="d-flex justify-content-between align-items-center flex-fill mr-3"
                >
                  <div class="d-flex flex-column">
                    <div class="d-flex align-items-center">
                      <small
                        class="font-weight-bold text-uppercase tournamentTitle"
                        >{{ game.name }}</small
                      >
                      <!-- <span class="small ml-2"
                      ><i class="fa fa-check-circle text-info"></i
                    ></span> -->
                    </div>
                    <div class="tournamentGameListInfoText">
                      <div>
                        <span>{{ getGameTime(game) }}</span>
                        <span v-html="getGameStatus(game)"></span>
                      </div>
                      <div class="bg-secondary text-white rounded px-1">
                        Multiple entries allowed
                      </div>
                    </div>
                  </div>
                  <span>
                    <button
                      class="btn btn-sm text-dark btn-light info-button"
                      @click="loadData(game.id)"
                      v-b-modal="'game_' + game.reference_id + '_agent'"
                    >
                      <i class="fa fa-info cursorPointer"></i>
                    </button>
                  </span>
                </div>

                <div class="d-flex">
                  <div class="bg-sv-primary p-1 rounded-left listOption">
                    <div>
                      <div class="text-center">
                        {{ game.no_of_players_joined }}
                      </div>
                      <div class="listBorderTop text-center">
                        {{ roundPlayers(game.no_of_players) }}
                      </div>
                    </div>
                  </div>
                  <div class="bg-sv-primary p-1 rounded-0 listOption">
                    ₦{{ formatNumber(game.stake) }}
                  </div>
                  <div class="bg-sv-primary p-1 rounded-right small listOption">
                    <div
                      v-if="
                        $moment(currentDate).format() >
                        $moment(game.end_date).format()
                      "
                    >
                      <span class="badge badge-danger px-1">Ended</span>
                    </div>
                    <div
                      v-else-if="
                        game.no_of_players_joined >= game.no_of_players
                      "
                    >
                      <span class="ml-1 badge badge-danger px-1">Sold Out</span
                      >'
                    </div>
                    <div
                      v-else-if="game.no_of_players_joined < game.no_of_players"
                    >
                      <button
                        id="join_button"
                        @click="showJoinConfirmation(game)"
                        class="btn btn-sm btn-success rounded-pill shadow py-0 px-2 text-white"
                      >
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <info-modal
                :game="game"
                :leaderboard="leaderboard"
                :paytable="paytable"
                :type="'agent'"
              ></info-modal>
              <join-confirmation :game="game" v-if="$auth.loggedIn"></join-confirmation>
            </div>
        </div>
      </div>
      <div class="col-12 p-0" id="verifiedGamesViewMore">
        <div v-if="agent_games.length" class="text-center my-1">
          <a
            class="btn-sm rounded-pill bg-outline-sv-white btn-light-outline text-white py-0 px-4 small"
          >
            <small>View more </small>
          </a>
        </div>
        <div v-else class="p-0 text-center" id="freeGamesList">
          <div class="text-white text-center font-italic">No game available.</div>
        </div>
      </div>
    </div>
    <login-modal v-if="!$auth.loggedIn"></login-modal>
  </div>
</template>

<script>
import InfoModal from "../Modals/InfoModal.vue";
import JoinConfirmation from '../Modals/JoinConfirmation.vue';
import LoginModal from "../Modals/LoginModal.vue";
export default {
  name: "",
  components: { InfoModal, LoginModal, JoinConfirmation },
  data() {
    return {
      agent_games: [],
      leaderboard: [],
      paytable: [],
      loading: false,
      currentDate: new Date(),
    };
  },

  methods: {
    showCreateTournament() {
      if (this.$auth.loggedIn) {
        this.$bvModal.show("createTournament");
      } else {
        this.$router.push("/auth/login");
      }
    },
    getAgentGames() {
      this.loading = true;
      this.$axios.get("/tournaments?category=4&take=10").then((res) => {
        this.agent_games = res.data.data;
        this.loading = false;
      });
    },

    loadData(id) {
      this.$axios.get(`/tournaments/${id}/tournament-pay-stat`).then((res) => {
        this.paytable = res.data.data;
        this.$axios
          .get(`/tournaments/${id}/leaderboard?count=10`)
          .then((res2) => {
            this.leaderboard = res2.data.data;
          });
      });
    },
    showJoinConfirmation(game){
      if (this.$auth.loggedIn) {
        this.$bvModal.show(`joinConfirmation_${game.id}`);
      } else {
        this.$router.push("/auth/login");
      }
    }


    // getPaytable(){
    //   this.$axios.get(`/tournaments/${this.game.id}/tournament-pay-stat`).then((res) => {})
    // },
  },

  mounted() {
    this.getAgentGames();
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

#create-tournament-pills li.nav-item a.nav-link {
  background: grey;
  color: #000000;
  padding: 3px 10px;
}

.b-skeleton-text {
  height: 1rem;
  /* margin-bottom: 0; */
  border-radius: 0.25rem;
}
</style>
