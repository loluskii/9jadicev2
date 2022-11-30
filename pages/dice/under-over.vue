<template>
  <div class="row">
    <section
      class="col-sm-12"
      style="background-color: #0e171c; min-height: 95vh"
    >
      <main class="row">
        <section class="container-fluid pt-1" id="vsComputer">
          <div class="d-flex justify-content-center turnToastStyle w-100">
            <div
              id="turnToast"
              data-delay="1200"
              class="toast text-white mt-3 w-100"
            >
              <div
                class="toast-header bg-sv-primary justify-content-center text-sv-primary font-weight-bold"
                id="toast-header"
              ></div>
              <div class="toast-body bg-dark">
                <div id="toast-body" class="text-center"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-2 col-lg-1 col-xl-3"></div>
            <div class="col-sm-12 col-md-8 col-lg-10 col-xl-6">
              <div class="mx-4 mb-4">
                <div class="pointsBackground">
                  <div class="h4 text-center">
                    <span class="text-capitalize wBold text-break"
                      >{{ user.user_data_name }}</span
                    >
                  </div>
                  <div class="d-flex justify-content-center wBold">
                    <div class="col-3 p-0 text-center"></div>
                    <div class="col-6 text-center">
                      <div
                        class="lead text-center wBold bg-sv-warning text-dark"
                      >
                        <span v-html="result">...</span>
                      </div>
                      <div class="text-uppercase wBold small px-2 py-1">
                        RESULT
                      </div>
                    </div>
                    <div class="col-3 p-0 text-center"></div>
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
                    style="height: 20%"
                  >
                    Paytable
                  </div>
                  <div class="text-center small pb-4">
                    <table class="table table-sm mb-0 text-white">
                      <thead>
                        <tr>
                          <th>Result</th>
                          <th>To win</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>7 - 11</td>
                          <td>Stake X 2</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>Stake X 10</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="lead text-white font-weight-bold">
                      Scroll up to play!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-1 col-xl-3"></div>
          </div>
        </section>
        <section class="container-fluid diceDiv">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-xl-4 col-3 lead">
              <div v-html="result_score" class="lead text-center text-white" id="diceValue1"></div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 col-6 text-center my-auto">
              <div class="row text-center">
                <div class="col-6 px-0">
                  <div id="die1container">
                    <img
                      id="die-1"
                      class="diceSize"
                      :src="dice1Image"
                      ref="die1"
                    />
                  </div>
                </div>
                <div class="col-6 px-0">
                  <!-- <div id="die2container">
                    <img
                      id="die-2"
                      class="diceSize"
                      src="~/assets/images/gameplay/gameplay-assets/dices/2.png"
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
                      src="~/assets/images/gameplay/gameplay-assets/dices/3.png"
                    />
                  </div> -->
                </div>
                <div class="col-6 px-0">
                  <div id="die4container">
                    <img
                      id="die-4"
                      ref="die4"
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
            <div class="col-sm-12 text-center col-md-6 col-lg-6 col-xl-6">
              <div
                id="feedback"
                class="text-white font-weight-bold text-center"
                style="font-size: 1.3rem"
                v-html="feedback"
              ></div>
              <span
                class="text-white font-weight-bold text-center"
                v-if="timeToTap"
                >Tap on the dice cup twice to throw</span
              >
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
          </div>
        </section>
        <section class="container-fluid bg-footer py-1">
          <div v-if="timeToTap" class="d-flex justify-content-center" id="animated-cup-div">
            <div id="animated-cup" class="text-center">
              <a @click="shakeCup">
                <img
                  src="~/assets/images/gameplay/gameplay-assets/dice-cup.png"
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
                    id="betAmountList"
                    v-model="gameData.amount"
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
                    @click="$nuxt.$emit('refresh_under_over')"
                  >
                    RESTART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
    <winner-modal :game_type="gameData.game_id" v-if="gameDataResponse != null" :data="gameDataResponse"></winner-modal>
  </div>
</template>

<script>
import WinnerModal from "~/components/Modals/gameplay/WinnerModal.vue";
export default{
  name: "under-over",
  middleware: "auth",
  components: { WinnerModal },
  layout: "game",
    data() {
    return {
      result: "...",
      result_score: null,
      gameData: {
        game_id: 7,
        amount: 100,
        no_of_dice: 6,
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
      return require(`~/assets/images/gameplay/gameplay-assets/dices/${this.dice1}.png`);
    },
    dice2Image() {
      return require(`~/assets/images/gameplay/gameplay-assets/dices/${this.dice2}.png`);
    },
  },
  methods: {
    
    clearStake() {
      this.gameData.amount = 0;
    },
    async startGame() {
      this.feedback = "Starting Game...";
      this.isMatchBegin = true;
      this.gameDataResponse = await this.$axios
        .post("/games/under-over/roll", this.gameData)
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
      const beep = new Audio(this.cup_shake);
      if (this.count == 1) {
        beep.play();
        this.isCupShaking = true;
        // sound.currentTime = 0; // Rewind audio timing to isStart
        // sound.play(); // Play the cup shaking audio
        this.cupShakeAnimation("#animated-cup-img", "tada"); //add animation class to cup container
        this.count++;
      } else if (this.count == 2) {
        // sound.pause();
        // sound.currentTime = 0;
        this.timeToTap = false;
        let result =
          parseInt(this.gameDataResponse.dice.dice1) +
          parseInt(this.gameDataResponse.dice.dice2);
        if (result < 7) {
          this.result = "GAME LOST";
        } else {
          this.result = "GAME WON";
        }
        document
          .querySelector("#animated-cup")
          .remove("animated", "tada", "infinite");
        this.result_score =  this.dice1 + ", " + this.dice2;
        this.$refs.die1.style.display = "block"
        this.$refs.die4.style.display = "block"
        setTimeout(() => this.showResult(), 1500);
      }
    },
    showResult() {
      this.$bvModal.show("winnerModal");
    },
  },
  mounted(){
    this.$nuxt.$on('refresh_under_over', () => {
      this.result= "...";
      this.gameData.amount= 100;
      this.gameDataResponse= null;
      this.isMatchBegin= false;
      this.feedback= "";
      this.instructionDiv= true;
      this.timeToTap= false;
      this.count= 1;
      this.isCupShaking= false;
      this.dice1= 1;
      this.dice2= 2;
      this.result_score = null
      this.$refs.die1.style.display = "none"
      this.$refs.die4.style.display = "none"
    });
  }
};
</script>

<style scoped>
@import url("~/assets/css/dice/diceGamePlay.css");

@import url("~/assets/css/dice/under-over/underOver.css");
</style>
