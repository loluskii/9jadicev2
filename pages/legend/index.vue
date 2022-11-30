<template>
  <div>
    <div class="row">
      <div class="position-absolute w-100 text-center" id="scrollUpIndicator"
        style="bottom: 0px; left: 0px; margin-bottom: 10%; z-index: 5; display: none;">
        <img src="https://dice.ng/images/mobile/games/dice/gameplay-assets/arrow-up-anim.gif" class="img-fluid">
      </div>

      <div class="alert alert-warning alert-dismissible fade show infoAlertTop" role="alert">
        <div id="infoAlertTopBody">Alert Body</div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <section class="col-12">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
          <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div id="turnToast" class="toast text-white mt-3"
              style="z-index: 999; position: absolute; top: 90px; width: 90%;" data-delay="1200">
              <div class="toast-header bg-sv-primary justify-content-center text-white font-weight-bold"
                id="toast-header"></div>
              <div class="toast-body bg-dark">
                <div id="toast-body" class="text-center"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
        </div>
      </section>
      <section class="col-12" id="vsComputer">
        <div class="row mt-2">
          <div class="col-5 p-1 ">
            <div class="btn btn-block py-1 bg-sv-warning mb-1">
              <div class="text-center text-uppercase font-weight-bold text-white"
                style="font-size: 0.8rem;word-wrap: break-word;">{{ tournament.name }}</div>
            </div>


          </div>
          <div class="col-5 p-1 d-flex align-content-stretch">
            <nuxt-link
              :to="{name:'legend-tournamentid-leaderboard', params: {tournamentid:tournament.id}}"
              class="btn btn-block py-1 px-0 btn-dark mb-1 text-decoration-none text-dark">
              <div class="text-center text-uppercase font-weight-bold text-white"
                style="font-size: 0.7rem;word-wrap: break-word;">View Leaderboard</div>
          </nuxt-link>
          </div>
          <div class="col-2 p-1">
            <a class="btn btn-sm btn-danger btn-block" data-toggle="modal" data-target="#quit">
              <span style="font-size: 0.8rem;"><i class="fa fa-times small text-white"></i></span>
            </a>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-sm-12 col-md-1 col-lg-1 col-xl-3"></div>
          <div class="col-sm-12 col-md-10 col-lg-10 col-xl-6">
            <div class="d-flex justify-content-center">
              <div v-if="showInstruction" class="instructionBackground text-center position-relative bg-dark" id="instructionDiv"
                style="display: block;">
                <div style="position: absolute; right: 0; top: 0; margin-right: 7px; margin-top: -20px;">
                  <button @click="toggleInstructionDiv" class="btn bg-sv-primary rounded-pill px-3 shadow">
                    <span><i class="fa fa-info text-sv-primary"></i></span>
                  </button>
                </div>
                <div
                  class="bg-sv-primary curvedTop text-sv-primary d-flex align-items-center justify-content-center py-3"
                  style="height: 25%">Information</div>
                <div class="py-2 mb-3">
                  <div style="font-size: 14px;" class="text-white">Tap on the dice cup or the play button below to
                    begin.
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-1 col-lg-1 col-xl-3"></div>
        </div>
      </section>


      <section class="container-fluid" id="generateScoreDiv" style="display: none;">
        <div class="row">
          <div class="col-12 p-1">
            <div class="d-flex pb-2" id="generateScoresInfoDiv">





            </div>
            <div id="scoreBoardTableDiv" style="max-height: 180px; overflow-y: auto;"></div>
          </div>

          <div id="generateScoresFeedback" class="text-center text-sv-warning"></div>


        </div>
      </section>
      <section class="col-12">
        <div class="row">
          <div class="col-12 position-relative">
            <div class="position-absolute" style="left:0; margin-left: 33%; margin-top: 4%;">
              <div class="flex-fill align-items-center justify-content-center" style="display: none;"
                id="totalOutputDiv">
                <div class="small text-white mr-2">Total</div>
                <div class="customAmountDiv d-inline text-center small" id="generatedTotalScore"></div>
              </div>
              <div id="diceThrowInstruction" class="text-center text-warning mt-2"></div>
            </div>
            <div class="position-absolute text-center w-100" style="left:0; margin-top: 30%;">
              <div id="score1" class="font-weight-bold text-black"></div>

            </div>
            <img v-if="animated_dice" class="img-fluid border-0" src="~/assets/images/gameplay/gameplay-assets/dice-roll-anim.gif" style="margin-top: -30px;" id="diceRollGif">
          </div>
        </div>
      </section>
      <section class="col-12">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div id="feedback" class="text-white font-weight-bold text-center" style="font-size: 1.2rem;"></div>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
        </div>
      </section>

      <div class="col-12 curvedTop" id="chatRoomDiv">

        <div class="row bg-sv-primary curvedTop">
          <div class="col d-flex justify-content-between align-items-center">
            <div class="font-weight-bold text-sv-primary">Chats</div>
            <div>
              <button class="btn btn-sm" onclick="hideChatRoom()">
                <span><i class="fa fa-times text-sv-primary"></i></span>
              </button>
              <button class="btn btn-sm" id="openOnlinePlayersButton">
                <span><i class="fa fa-circle text-success"></i></span>
              </button>
              <button class="btn btn-sm" id="closeOnlinePlayersButton" style="display: none;">
                <span><i class="fa fa-arrow-right text-danger"></i></span>
              </button>
            </div>
          </div>
        </div>
        <div class="row h-100 chatRoomDivChatSection">
          <div class="col-12 border-right bg-dark h-100 p-0 text-dark position-relative">
            <div class="p-1 float-left innerChatDivStyle" id="chatSectionDiv">
              <div class="overflow-auto h-100" id="chatRoomSection">
                <ul id="messages" class="list-unstyled text-dark small">
                </ul>
              </div>
            </div>
            <div id="onlinePlayersDiv" class="float-right innerChatDivStyle">
              <div class="text-center justify-content-center bg-dark">
                <span class="small mr-1 text-white">Online</span>
                <span><i class="fa fa-circle text-success"></i></span>
              </div>
              <ul id="users" class="list-unstyled overflow-auto text-white small">
              </ul>
            </div>
            <div class="clearfix"></div>
            <div>
              <form>
                <div class="row">
                  <div class="col-12">
                    <div id="quotedMessageBox" class="mx-1"></div>
                  </div>
                  <div class="col-12">
                    <div class="d-flex px-1">
                      <input type="hidden" id="quotedMessageId" value="" name="">
                      <input id="message" class="form-control bg-dark text-white form-control-sm mr-1" type="text"
                        placeholder="Your text here" name="">
                      <button id="send" type="submit" class="btn btn-sm bg-sv-primary text-sv-primary">Send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      <section class="col-12 bg-footer-legend pt-2">
        <div class="row justify-content-center" id="animated-cup-div">

          <div id="animated-cup" class="text-center">
            <a @click.prevent="playNormalGame">
              <img src="~/assets/images/gameplay/gameplay-assets/dice-cup-green.png" draggable="false"
                alt="dice-cup" id="animated-cup-img" class="mx-auto">
            </a>
          </div>

        </div>
        <div class="row bg-footer-legend-size">
          <div class="col-12">
            <div class="row justify-content-center align-items-center">

              <div id="playButtonsDiv">
                <div class="d-flex align-items-center small mb-5">

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
    <div class=" d-flex flex-column align-items-center button-float-action-left">
      <button v-b-modal="'instructionModal_' +tournament.reference_id" class="btn rounded bg-sv-primary p-0 fab-child d-inline fab-child-active">
        <span class="text-sv-primary">
          <i class="fa fa-info iconRoundCircleWhite"></i>
        </span>
      </button>
      <instruction-modal v-if="tournament.id" :game="tournament"></instruction-modal>
      <button class="btn rounded bg-sv-warning fab-child text-white fab-child-active" onclick="toggleSound()">
        <span id="volumeUp"><i class="fa fa-volume-up fa-lg"></i></span>
        <span id="volumeDown" style="display: none;"><i class="fa fa-volume-down text-dark fa-lg"></i></span>
      </button>
    </div>
    <div class=" d-flex flex-column align-items-center button-float-action-right mr-0">
      <button class="btn btn-danger rounded p-1 my-2 fab-child d-inline position-relative fab-child-active" id="showChatRoomButton">
        <span id="notificationsCount" class="badge badge-danger text-white" style="position: absolute; right: 0; margin-top: -7px;">0</span>
        <div class="d-flex justify-content-center">
          <div><i class="fa fa-comment fa-lg text-white"></i></div>
        </div>
      </button>
      <button @click.prevent="turboMode" class="btn bg-sv-primary rounded p-1 mb-1 fab-child text-white fab-child-active" id="turboModeButton">
        <div class="d-flex justify-content-center">
          <span><i class="fa fa-play fa-lg text-sv-primary"></i></span>
        </div>
      </button>
    </div>
    <throw-limit-modal v-if="gameDataResponse" :tournament_id="tournament.id" :end_date="tournament.end_date" :tournament="tournament" :score="gameDataResponse.data.score"></throw-limit-modal>
  </div>
</template>

<script>
import InstructionModal from '~/components/Modals/gameplay/InstructionModal.vue';
  import ThrowLimitModal from "~/components/Modals/gameplay/ThrowLimitModal.vue";
  // import GameLayout from "../../layouts"
  export default {
    components: { ThrowLimitModal, InstructionModal },
    name: "tournament",
    layout: "legend",
    middleware: "auth",
    data() {
      return {
        reference_id: "",
        showInstruction: true,
        tournament: {},
        isCupShaking: false,
        isMatchStarted: false,
        count: 1,
        isTurboModeBegin: false,
        isNormalModeBegin: true,
        // audio: new Audio('~/assets/images/gameplay/gameplay-assets/shake-cup.mp3'),
        gameDataResponse: "",
        animated_dice: false,
      };
    },
    computed: {
      recordId() {
        return this.$store.state.record_id;
      },
      cup_shake(){
        return this.$store.state.cup_shake
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler(to) {
          // react to route changes...
          document.title = "Legend Game | DiceNG"
          this.reference_id = to.params.refid; //this.baseConverter(to.params.game_id, 36, 10);
          this.getTournamentByRef();
        },
      },
    },
    methods: {
      async playNormalGame() {
        const beep = new Audio(this.cup_shake)
        if (this.count == 1) {
          beep.play()
          this.isCupShaking = true;
          document.getElementById("totalOutputDiv").style.display = "flex";
          document.getElementById("feedback").innerHTML = "";
          document.getElementById("score1").innerHTML = "";
          document.getElementById("generatedTotalScore").innerHTML = "";
          this.cupShakeAnimation("#animated-cup", "tada"); //add animation class to cup container
          document.getElementById("diceThrowInstruction").innerHTML =
            "rolling...";

          this.gameDataResponse = await this.recordTurbo(
            this.tournament.id,
            this.recordId
          );

          document.getElementById("diceThrowInstruction").innerHTML =
            "tap again to throw";

          if (this.gameDataResponse) {
            this.count++;
          }
        } else if (this.count == 2) {
          beep.pause();
          console.log(this.gameDataResponse);
          document.getElementById("diceThrowInstruction").innerHTML = "";
          document
            .querySelector("#animated-cup")
            .remove("animated", "tada", "infinite");
          document.getElementById("generatedTotalScore").innerHTML =
            this.gameDataResponse.data.score;
          document.getElementById(
            "score1"
          ).innerHTML = `<span style="font-size: 13px">${this.gameDataResponse.data.score}</span>`;
          this.showAnimatedDice();

          setTimeout(() => this.showThrowLimitModal(), 1500);
        }
      },

      async turboMode() {
        this.isCupShaking = true;
        document.getElementById("totalOutputDiv").style.display = "flex";
        document.getElementById("feedback").innerHTML = "";
        document.getElementById("generatedTotalScore").innerHTML = "";
        // sound.currentTime = 0; // Rewind audio timing to isStart
        // sound.play(); // Play the cup shaking audio
        this.cupShakeAnimation("#animated-cup", "tada"); //add animation class to cup container
        document.getElementById("diceThrowInstruction").innerHTML = "rolling...";

        this.gameDataResponse = await this.recordTurbo(
          this.tournament.id,
          this.recordId
        );

        document.getElementById("diceThrowInstruction").innerHTML =
          "tap again to throw";

        if (this.gameDataResponse) {
          document.getElementById("diceThrowInstruction").innerHTML = "";
          // sound.pause();
          // sound.currentTime = 0;
          document
            .querySelector("#animated-cup")
            .remove("animated", "tada", "infinite");
          document.getElementById("generatedTotalScore").innerHTML =
            this.gameDataResponse.data.score;
          document.getElementById(
            "score1"
          ).innerHTML = `<span style="font-size: 13px">${this.gameDataResponse.data.score}</span>`;
          this.showAnimatedDice();
          setTimeout(() => this.showThrowLimitModal(), 1500);
        }
      },

      async recordTurbo(tournament_id, recordId) {
        return this.$axios
          .post(`/tournaments/${tournament_id}/${recordId}/roll`)
          .then((res) => {
            return res.data;
          })
          .catch((response) => {
            document.getElementById("infoAlertTopBody").innerHTML =
              "throw Exceeded!!!";
            // infoAlertTop(2000);
          });
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

      getTournamentByRef() {
        this.$axios.get("/tournaments/" + this.reference_id).then((res) => {
          this.tournament = res.data.data;
        });
      },

      showAnimatedDice() {
        this.animated_dice = true;
      },

      showThrowLimitModal() {
        this.$bvModal.show("throwLimitModal");
      },

      toggleInstructionDiv(){
        this.showInstruction = false;
      },

      toggleInstructionModal(){
        this.$bvModal.show('instructionModal');
      }
    },

    mounted() { },
  };
</script>

<style>
  @import url("~/assets/css/dice/diceGamePlay.css");

  @import url("~/assets/css/dice/legend/game.css");



  .notification {
    /*text-decoration: none;*/
    position: relative;
    /*position: absolute;*/
    /*display: inline-block;*/
  }

  .notification:hover {
    background: red;
    border-radius: 50%;
  }

  .notification .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 5px 10px;
    border-radius: 50%;
    background: red;
    color: white;
  }

  .chatMessageBox {
    padding: 0.25rem 0.6rem;
    margin-bottom: 3px;
    position: relative;
    color: #000;
  }

  .quoteMessageBox {
    padding: 0.25rem 0.6rem;
    margin-bottom: 3px;
    background-color: grey;
    border-radius: 7px;
    display: flex;
    position: relative;
    color: #fff;
  }

  .closeButton {
    position: absolute;
    right: 0;
    top: 0;
  }

  .chatMessageMe {
    border-radius: 7px 0 7px 7px;
    background-color: #DCF8C6;
    max-width: 80%;
    margin-right: 2px;
    float: right;
  }

  .chatMessageYou {
    border-radius: 0 7px 7px 7px;
    background-color: #d2d6de;
    max-width: 80%;
    margin-left: 2px;
    float: left;
    text-align: left;
  }

  .chatMessageReplyMe {
    background: lightgrey;
    padding: 0.25rem !important;
    border-radius: 3px;
    color: #000;
  }

  .chatMessageReplyYou {
    background: #DCF8C6;
    padding: 0.25rem !important;
    border-radius: 3px;
    color: #000;
  }

  .w85px {
    width: 85px;
  }

  .chatAvatar {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 1px solid #ffffff;
  }

  .onlineUsersList {
    background-color: #DCF8C6;
    padding: 0.15rem 0.25rem;
    color: #000000;
    margin-bottom: 3px;
    border-radius: 3px;
    text-align: left;
  }

  .chatReplyIcon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 10px;
    margin-right: 3px;
  }

  #score1 {
    font-weight: bold;
    /*-ms-transform: rotate(-25deg) !important;*/
    /*-webkit-transform: rotate(-25deg) !important;*/
    /*transform: rotate(-45deg) !important;*/
    /*margin-left: 8px;*/
  }

  #score2 {
    font-weight: bold;
    -ms-transform: rotate(-39deg) !important;
    -webkit-transform: rotate(-39deg) !important;
    transform: rotate(-39deg) !important;
    margin-left: 35px !important;
    margin-top: 10px;
  }

  .fadedBlackBg {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
