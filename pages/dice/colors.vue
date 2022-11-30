<template>
  <div class="row">
    <section
      class="col-sm-12"
      style="background-color: #0e171c; min-height: 95vh"
    >
      <div class="row">
        <section
          v-if="!isMatchPrestart"
          class="container-fluid"
          id="instructionDiv"
        >
          <div class="row">
            <div class="col-sm-12 col-md-1 col-lg-1 col-xl-2"></div>
            <div
              class="col-sm-12 col-md-10 col-lg-10 col-xl-8 d-flex flex-column align-items-center justify-content-center pt-4"
            >
              <div
                class="instructionBackground text-center position-relative bg-dark"
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
                    onclick="hideInstructionDiv()"
                  >
                    <span><i class="fa fa-info"></i></span>
                  </button>
                </div>
                <div
                  class="bg-sv-primary text-sv-primary curvedTop d-flex align-items-center justify-content-center"
                  style="height: 15%"
                >
                  Instructions
                </div>
                <div class="text-center small pb-4">
                  <div class="text-white text-capitalize p-2">
                    Select a coloured dice, stake an amount, then click on
                    "play" to shuffle. If the colour outcome matches your
                    selection, your stake will be multiplied by THREE.
                  </div>
                  <div class="lead text-sv-primary text-white font-weight-bold">
                    Click "Start" to begin!
                  </div>
                </div>
              </div>
              <div v-if="!isMatchPrestart" class="mt-2">
                <button
                  class="btn btn-sm rounded-pill btn-outline-light px-3"
                  @click="preStartGame"
                >
                  Start
                </button>
              </div>
            </div>
            <div class="col-sm-12 col-md-1 col-lg-1 col-xl-2"></div>
          </div>
        </section>
        <section v-if="isMatchPrestart" class="col-12 pt-1" id="vsComputer">
          <div
            class="d-flex justify-content-center turnToastStyle w-100"
            style="margin-top: 0%"
          >
            <div
              id="turnToast"
              data-delay="1500"
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
            <div class="col-sm-12 col-md-1 col-lg-1 col-xl-2"></div>
            <div class="col-sm-12 col-md-10 col-lg-10 col-xl-8">
              <div class="mx-4"></div>
              <div v-if="!isMatchStart" id="selectionDiv">
                <div class="text-center">
                  <h4 class="text-white">Select a Dice</h4>
                </div>
                <div class="row mb-4 justify-content-center">
                  <div class="col-sm-12 col-md-1 col-lg-2 col-xl-2"></div>
                  <div class="col-sm-12 col-md-10 col-lg-8 col-xl-8">
                    <div
                      class="d-flex justify-content-around align-items-center mb-3 colouredDiceGroup"
                    >
                      <img
                        @click="selectDice(1, 'cyan')"
                        src="~/assets/images/gameplay/colours/1.png"
                        class="img-fluid"
                        alt="cyan"
                        srcset=""
                        data-id="cyan"
                      />
                      <img
                        @click="selectDice(2, 'magenta')"
                        src="~/assets/images/gameplay/colours/2.png"
                        class="img-fluid"
                        alt="magenta"
                        srcset=""
                        data-id="magenta"
                      />
                      <img
                        @click="selectDice(3, 'yellow')"
                        src="~/assets/images/gameplay/colours/3.png"
                        class="img-fluid"
                        alt="yellow"
                        srcset=""
                        data-id="yellow"
                      />
                    </div>
                    <div
                      class="d-flex justify-content-around align-items-center colouredDiceGroup"
                    >
                      <img
                        @click="selectDice(4, 'orange')"
                        src="~/assets/images/gameplay/colours/4.png"
                        class="img-fluid"
                        alt="orange"
                        srcset=""
                        data-id="orange"
                      />
                      <img
                        @click="selectDice(5, 'purple')"
                        src="~/assets/images/gameplay/colours/5.png"
                        class="img-fluid"
                        alt="purple"
                        srcset=""
                        data-id="purple"
                      />
                      <img
                        @click="selectDice(6, 'green')"
                        src="~/assets/images/gameplay/colours/6.png"
                        class="img-fluid"
                        alt="green"
                        srcset=""
                        data-id="green"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-1 col-lg-2 col-xl-2"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-1 col-lg-1 col-xl-2"></div>
          </div>
        </section>
        <section
          v-if="gameData.selected != null"
          class="col-12"
          id="selectedDiceDiv"
          style="display: block"
        >
          <div class="text-center">
            <div>
              <div class="p-2 bg-sv-primary text-sv-primary border-rounded">
                You selected:
              </div>

              <div class="p-2" id="selectedDiceDisplay">
                <img
                  :src="selectedDice"
                  class="selectedDiceDisplay"
                  :alt="dice_alt"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="col-12">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
            <div class="col-sm-12 text-center col-md-6 col-lg-6 col-xl-6">
              <div
                id="feedback"
                v-html="feedback"
                class="text-white font-weight-bold text-center"
                style="font-size: 1.3rem"
              ></div>
              <span
                class="text-white text-sv-warning font-weight-bold text-center"
                v-if="timeToTap"
                >Tap the cup twice to throw</span
              >
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
          </div>
          <div class="row">
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
        <section class="container-fluid">
          <div class="row text-white">
            <div class="col-md-4 col-lg-4 col-xl-4 col-3 lead">
              <div class="lead text-center text-white" id="diceValue1"></div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 col-6 text-center my-auto">
              <div
                id="dieContainer"
                class="justify-content-center flex-column align-items-center"
                style="display: none"
              >
                <div class="bg-sv-primary py-2 px-4 mb-3 mx-4">Result:</div>
                <img
                  id="dice"
                  class="resultDice"
                  :src="resultDice"
                  style="display: none; margin: 0 auto"
                />
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 col-3 lead">
              <div class="lead text-center text-white"></div>
            </div>
          </div>
        </section>
        <section class="col-12 bg-footer py-1">
          <div
            v-if="timeToTap"
            class="d-flex justify-content-center"
            id="animated-cup-div"
          >
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
                    v-model="gameData.amount"
                    id="betAmountInput"
                  />
                </div>
              </div>
            </div>
            <div v-if="!timeToTap" class="col-12 px-0" id="stakeSection">
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
      </div>
    </section>
    <win-modal></win-modal>
    <loss-modal></loss-modal>
  </div>
</template>

<script>
import LossModal from '~/components/Modals/gameplay/LossModal.vue';
import WinModal from '~/components/Modals/gameplay/WinModal.vue';
export default {
  components: { WinModal, LossModal },
  name: "colors",
  layout: "game",
  data() {
    return {
      gameData: {
        game_id: 14,
        amount: 100,
        selected: null,
        game_subtype_id: 3,
      },
      gameDataResponse: null,
      isMatchPrestart: false,
      isMatchStart: false,
      feedback: "",
      instructionDiv: true,
      timeToTap: false,
      count: 1,
      isCupShaking: false,
      dice: 1,
      dice_alt: "",
      result_dice: 1,
      result_dice_alt: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    selectedDice() {
      return require(`~/assets/images/gameplay/colours/${this.dice}.png`);
    },
    resultDice() {
      return require(`~/assets/images/gameplay/colours/${this.result_dice}.png`);
    },
    cup_shake() {
      return this.$store.state.cup_shake;
    },
  },
  methods: {
    addStake(value) {
      this.gameData.amount = parseInt(this.gameData.amount) + parseInt(value);
      if (this.gameData.amount > this.user.balance) {
        this.feedback = "Your balance is too low to stake!";
      }
    },
    clearStake() {
      this.gameData.amount = 0;
    },
    preStartGame() {
      this.isMatchPrestart = true;
    },
    async startGame() {
      // if gameData.selected != null
      if (this.gameData.selected == null) {
        this.feedback = "Select a coloured dice";
      } else {
        this.feedback = "Starting Game...";
        this.gameDataResponse = await this.$axios
          .post("/games/color-dice/roll", this.gameData)
          .then((res) => {
            return res.data.data;
          });
        this.result_dice = this.gameDataResponse?.dice;
        this.instructionDiv = false;
        this.isMatchStart = true;
        this.feedback = "";
        this.timeToTap = true;
      }
    },

    selectDice(id, name) {
      this.dice = id;
      this.dice_alt = name;
      this.gameData.selected = id;
    },

    shakeCup() {
      const beep = new Audio(this.cup_shake);
      if (this.count == 1) {
        beep.play();
        this.isCupShaking = true;
        this.cupShakeAnimation("#animated-cup-img", "tada"); //add animation class to cup container
        this.count++;
      } else if (this.count == 2) {
        this.timeToTap = false;
        document.querySelector("#animated-cup").remove("animated", "tada", "infinite");
        var res = document.getElementById("dieContainer");
        res.style.display = "block";
        var res1 = document.getElementById("dice");
        res1.style.display = "block";
        setTimeout(() => this.showResult(), 1500);
      }
    },
    cupShakeAnimation(element, animationName, callback) {
      let node = document.querySelector(element);
      node.classList.add("animated", animationName, "infinite");
      function handleAnimationEnd() {
        // Code to run on animation end
        node.classList.remove("animated", animationName); // remove animated class from cup
        node.classList.remove("infinite"); // remove animated class from cup
        node.removeEventListener("animationend", handleAnimationEnd); // remove event listener from cup
        audio.pause(); // Pause the cup shaking audio
        if (typeof callback === "function") callback; // if last argument is function the call the function
      }
      // window.setInterval(1000);
      node.addEventListener("animationend", handleAnimationEnd); // Add event listener to cup
    },
    showResult() {
      if(this.gameDataResponse?.amount_won != 0){
        this.$bvModal.show("WonModal");
      }else{
        this.$bvModal.show("LossModal");
      }
    },
    hideInstruction() {
      this.instructionDiv = false;
    },
  },
  mounted(){
    this.$nuxt.$on('refresh_colors', () => {
      this.gameData.selected= null;
      this.gameDataResponse= null;
      this.isMatchPrestart= false;
      this.isMatchStart= false;
      this.feedback= "";
      this.instructionDiv= true;
      this.timeToTap= false;
      this.count= 1;
      this.isCupShaking= false;
      this.dice= 1;
      this.dice_alt= "";
      this.result_dice= 1;
      this.result_dice_alt= "";
      document.getElementById("dieContainer").style.display = "none";
      document.getElementById("dice").style.display = "none";
    })
  }
};
</script>

<style scoped>
@import url("~/assets/css/dice/diceGamePlay.css");
html,
body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
span,
div {
  font-family: "Montserrat" !important;
}

.colouredDiceGroup > img {
  width: 4rem;
}
.selectedDiceDisplay {
  /* padding: 5px; */
  width: 50px;
  height: 50px;
  margin: 5px;
  text-align: center;
  color: #fff;
}
.resultDice {
  height: 100px;
  width: 100px;
}
</style>
