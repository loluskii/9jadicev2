<template>
  <div class="row">
    <section
      class="col-sm-12"
      style="background-color: #0e171c; min-height: 95vh"
    >
      <main class="position-relative mb-2" id="main">
        <section class="container-fluid pt-1" id="vsComputer">
          
          <div class="row">
            <div class="col-sm-12 col-md-2 col-lg-1 col-xl-3"></div>
            <div class="col-sm-12 col-md-8 col-lg-10 col-xl-6">
              <div class="mx-4 mb-4">
                <div class="pointsBackground">
                  <div class="h4 text-center">
                    <span class="text-capitalize wBold text-break">{{
                      user.user_data_name
                    }}</span>
                  </div>
                  <div class="d-flex justify-content-center wBold">
                    <div class="col-5 p-0 text-center">
                      <div
                        class="lead text-center wBold bg-sv-warning text-dark"
                        id="selected-display"
                        v-html="player_choice"
                      ></div>
                      <div class="text-uppercase wBold small px-2 py-1">
                        selected
                      </div>
                    </div>
                    <div class="col-2 text-center">vs</div>
                    <div class="col-5 p-0 text-center">
                      <div
                        class="lead text-center wBold bg-sv-warning text-dark"
                        id="result-display"
                        v-html="result"
                      ></div>
                      <div class="text-uppercase wBold small px-2 py-1">
                        result
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div
                  class="instructionBackground text-center position-relative bg-dark"
                  id="instructionDiv"
                  v-if="instructionDiv"
                >
                  <div
                    style="
                      position: absolute;
                      right: 0;
                      top: 0;
                      margin-right: 7px;
                      margin-top: -20px;
                    "
                  >
                    <button
                      class="btn bg-sv-primary rounded-pill px-3 shadow"
                      id="hideInstructionButton"
                    >
                      <span><i class="fa fa-info"></i></span>
                    </button>
                  </div>
                  <div
                    class="bg-sv-primary curvedTop d-flex align-items-center justify-content-center"
                    style="height: 25%"
                  >
                    Information
                  </div>
                  <div class="py-2 mb-3">
                    <div style="font-size: 14px" class="text-white">
                      Predict the outcome of your next throw by selecting either
                      ODD or EVEN, if your prediction is correct, you win.
                    </div>
                    <div class="lead font-weight-bold text-white">
                      Scroll up to play!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-1 col-xl-3"></div>
          </div>
        </section>
        <section class="container-fluid">
          <!--stakesDiv displays just the stake options (odd/even and over/under section)-->
          <div class="row" id="stakesDiv" v-if="!isMatchBegin">
            <div class="col-12">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
                  <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1">
                    <div class="row">
                      <div class="col-3"></div>
                      <div
                        class="col-6 p-2 betSelectionArea"
                        id="betSelectionArea"
                      >
                        <div class="d-flex flex-column">
                          <button
                            class="btn font-weight-bold btn-oddEven text-dark mb-2"
                            @click="selectOddOrEven('odd', $event)"
                          >
                            ODD
                          </button>
                          <button
                            class="btn font-weight-bold btn-oddEven text-dark"
                            @click="selectOddOrEven('even', $event)"
                          >
                            EVEN
                          </button>
                        </div>
                      </div>
                      <div class="col-3"></div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid diceDiv">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-xl-4 col-3 lead">
              <div
                class="lead text-center text-white"
                v-html="result_dice"
              ></div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 col-6 text-center my-auto">
              <div class="row text-center">
                <div class="col-6 px-0">
                  <div id="die1container">
                    <img
                      ref="die1"
                      id="die-1"
                      class="diceSize"
                      :src="dice1Image"
                    />
                  </div>
                </div>
                <div class="col-6 px-0">
                  <!-- <div id="die2container">
                    <img
                      id="die-2"
                      class="diceSize"
                      src="/images/gameplay/gameplay-assets/dices/2.png"
                    />
                  </div> -->
                </div>
              </div>
              <div class="row">
                <div class="col-6 px-0">
                  <!-- <div id="die3container">
                    <img
                      id="die-3"
                      class="diceSize"
                      src="/images/gameplay/gameplay-assets/dices/3.png"
                    />
                  </div> -->
                </div>
                <div class="col-6 px-0">
                  <div id="die4container">
                    <img
                      ref="die4"
                      id="die-4"
                      class="diceSize"
                      :src="dice2Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 col-3 lead">
              <div class="lead text-center text-white" id="diceValue2"></div>
            </div>
          </div>
        </section>
        <section class="container-fluid">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
            <div class="col-sm-12 col-md-6 col-lg-6 text-center col-xl-6">
              <div
                id="feedback"
                class="text-white font-weight-bold text-center"
                style="font-size: 1.3rem"
                v-html="feedback"
              ></div>
              <span
                class="text-white font-weight-bold text-center small"
                v-if="timeToTap"
                >Tap the cup twice to throw</span
              >
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
          </div>
          <div class="row mt-5">
            <div class="col-12 text-center">
              <input
                id="number1"
                type="number"
                value="2"
                style="display: none"
              />
            </div>
          </div>
        </section>
        <section class="container-fluid bg-footer" style="z-index: 5">
          <div
            v-if="timeToTap"
            class="d-flex justify-content-center"
            id="animated-cup-div"
          >
            <div id="animated-cup" class="text-center">
              <a @click="shakeCup">
                <img
                  src="/images/gameplay/gameplay-assets/dice-cup.png"
                  draggable="false"
                  alt="dice-cup"
                  id="animated-cup-img"
                  class="mx-auto"
                />
              </a>
            </div>
          </div>

          <div class="row justify-content-between align-items-center bg-dark">
            <div class="col-12 p-1" id="amount-container">
              <div class="d-flex justify-content-center">
                <div
                  class="d-flex flex-column text-white text-center align-items-center"
                >
                  <div class="small text-uppercase">Total Stake</div>
                  <input
                    class="bg-sv-warning font-weight-bold text-white font-weight-bold text-center form-control border-0 outline-none d-inline py-0 w-50"
                    type="number"
                    style="height: 25px"
                    value="100"
                    v-model="gameData.amount"
                    id="betAmountList"
                  />
                </div>
              </div>
            </div>
            <div v-if="!isMatchBegin" class="col-12 px-0" id="stakeSection">
              <div
                class="d-flex justify-content-center align-items-center mb-1 px-3"
              >
                <div class="mr-2">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold addStakeButtonActive"
                    @click="addStake(100)"
                  >
                    +100
                  </button>
                </div>
                <div class="mr-1">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold"
                    @click="addStake(200)"
                  >
                    +200
                  </button>
                </div>
                <div class="ml-1">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold"
                    @click="addStake(500)"
                  >
                    +500
                  </button>
                </div>
                <div class="ml-2">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold"
                    @click="addStake(1000)"
                  >
                    +1000
                  </button>
                </div>
              </div>

              <div class="d-flex justify-content-center">
                <div class="flex-fill">
                  <button
                    type="button"
                    id="clearButton"
                    @click="clearStake"
                    class="btn py-0 customStartButton btn-block rounded-0 bg-danger zoom text-white"
                  >
                    <span>Clear</span>
                  </button>
                </div>
                <div class="flex-fill">
                  <button
                    type="button"
                    id="startButton"
                    class="btn py-0 customStartButton btn-block rounded-0 zoom"
                    @click="startGame"
                  >
                    <span><i class="fa fa-play"></i></span>
                    <span>Play</span>
                  </button>
                  <button
                    type="button"
                    style="display: none"
                    id="restartButton"
                    class="btn customStartButton btn-block zoom"
                  >
                    RESTART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- FAB -->
      <div class="d-flex flex-column align-items-center button-float-action">
        <button
          class="btn customFabToggleButton fab-child d-inline"
          data-toggle="modal"
          data-target="#quit"
        >
          <span><i class="fa fa-times"></i></span>
        </button>
        <button
          class="btn customFabToggleButton fab-child d-inline"
          @click="gameStartInfo()"
        >
          <span><i class="fa fa-info"></i></span>
        </button>
        <button
          class="btn customFabToggleButton fab-child"
          @click="toggleSound()"
        >
          <span id="volumeUp"><i class="fa fa-volume-up"></i></span>
          <span id="volumeDown"
            ><i class="fa fa-volume-down text-danger"></i
          ></span>
        </button>
        <button
          class="btn customFabToggleButton shadow"
          @click="toggleFabOptions()"
        >
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </section>
    <winner-modal
      :game_type="gameData.game_id"
      v-if="gameDataResponse != null"
      :data="gameDataResponse"
    ></winner-modal>
  </div>
</template>

<script>
import WinnerModal from "~/components/Modals/gameplay/WinnerModal.vue";
export default {
  components: { WinnerModal },
  name: "megaten",
  layout: "game",
  middleware: "auth",
  data() {
    return {
      player_choice: "...",
      result: "...",
      result_dice: null,
      gameData: {
        game_id: 8,
        amount: 100,
        no_of_dice: 6,
        selected: "",
        game_subtype_id: 3,
      },
      gameDataResponse: null,
      isMatchBegin: false,
      feedback: "",
      instructionDiv: true,
      timeToTap: false,
      count: 1,
      isCupShaking: false,
      dice1: 1,
      dice2: 2,
    };
  },
  computed: {
    dice1Image() {
      return `/images/gameplay/gameplay-assets/dices/${this.dice1}.png`
    },
    dice2Image() {
      return `/images/gameplay/gameplay-assets/dices/${this.dice2}.png`
    },
  },
  methods: {
    selectOddOrEven(type, e) {
      if (type == "odd") {
        this.player_choice = "ODD";
        this.gameData.selected = "1";
        document
          .querySelectorAll(".btn-oddEven")[1]
          .classList.remove("betSelectionAreaActive");
        e.target.classList += " betSelectionAreaActive";
      } else if (type == "even") {
        this.player_choice = "EVEN";
        this.gameData.selected = "2";
        document
          .querySelectorAll(".btn-oddEven")[0]
          .classList.remove("betSelectionAreaActive");
        e.target.classList += " betSelectionAreaActive";
      }
    },
    async startGame() {
      this.feedback = "Starting Game...";
      this.isMatchBegin = true;

      this.gameDataResponse = await this.$axios
        .post("/games/odd-even/roll", this.gameData)
        .then((res) => {
          return res.data.data;
        });
      this.dice1 = this.gameDataResponse.dice.dice1;
      this.dice2 = this.gameDataResponse.dice.dice2;
      this.instructionDiv = false;
      this.feedback = "";
      this.timeToTap = true;
    },
    shakeCup() {
      if (this.count == 1) {
        this.beep.play();
        this.isCupShaking = true;
        this.cupShakeAnimation("#animated-cup-img", "tada"); //add animation class to cup container
        this.count++;
      } else if (this.count == 2) {
        this.beep.pause();
        this.beep.currentTime = 0;
        this.timeToTap = false;
        let result = parseInt(this.dice1) + parseInt(this.dice2);
        if (result % 2 == 0) {
          this.result = "EVEN";
        } else {
          this.result = "ODD";
        }
        document
          .querySelector("#animated-cup")
          .remove("animated", "tada", "infinite");
        this.result_dice = this.dice1 + ", " + this.dice2;
        this.result_dice = null;
        this.$refs.die1.style.display = "block";
        this.$refs.die4.style.display = "block";
        setTimeout(() => this.showResult(), 1500);
      }
    },
    showResult() {
      this.$bvModal.show("winnerModal");
    },
  },
  mounted() {
    this.$nuxt.$on("refresh_odd_even", () => {
      this.gameDataResponse = null;
      this.isMatchBegin = false;
      this.player_choice = "...";
      this.result = "...";
      this.gameData.selected = "";
      this.feedback = "";
      this.instructionDiv = true;
      this.timeToTap = false;
      this.count = 1;
      this.isCupShaking = false;
      this.dice1 = 1;
      this.dice2 = 2;
      this.result_dice = null;
      this.$refs.die1.style.display = "none";
      this.$refs.die4.style.display = "none";
    });
  },
};
</script>

<style scoped>
@import url("~/assets/css/dice/diceGamePlay.css");
@import url("~/assets/css/dice/odd-even/oddEven.css");

.button-float-action {
  margin-bottom: 13rem !important;
}
</style>
