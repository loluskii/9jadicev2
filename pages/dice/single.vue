<template>
  <div class="row">
    <section
      class="col-sm-12"
      style="background-color: #0e171c; min-height: 95vh"
    >
      <main id="main" class="row">
        <section class="col-12 pt-1" id="vsComputer">
          <div class="d-flex justify-content-center turnToastStyle w-100">
            <div id="turnToast" data-delay="1500" class="toast text-white mt-3 w-100">
              <div class="toast-header bg-sv-primary justify-content-center text-sv-primary font-weight-bold" id="toast-header"></div>
              <div class="toast-body bg-dark">
                <div id="toast-body" class="text-center"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-2 col-lg-1 col-xl-3"></div>
            <div class="col-sm-12 col-md-8 col-lg-10 col-xl-6">
              <div class="mx-4">

                <div class="pointsBackground">
                  <div class="h4 text-center">
                    <span class="text-capitalize wBold text-break">escobar</span>
                  </div>
                  <div class="d-flex justify-content-center wBold">
                    <div class="col-5 p-0 text-center">
                      <div class="small">
                        <span>Throw: </span>
                        <span id="playerThrowCountDisplay"></span>
                      </div>
                      <div class="lead text-center wBold text-dark bg-sv-warning" id="player-score-output">0</div>
                      <div class="text-uppercase wBold small px-2 py-1">
                        <span>You</span>
                      </div>
                    </div>
                    <div class="col-2 p-0 text-center">
                      <div class="mb-2">vs</div>
                    </div>
                    <div class="col-5 p-0 text-center">
                      <div class="small">
                        <span>Throw: </span>
                        <span id="computerThrowCountDisplay"></span>
                      </div>
                      <div class="lead text-center wBold text-dark bg-sv-warning" id="computer-score-output">0</div>
                      <div class="text-uppercase wBold small px-2 py-1">
                        <span>House</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-4">
                <div class="instructionBackground text-center position-relative bg-dark" id="instructionDiv">
                  <div style="position: absolute; right: 0; top: 0; margin-right: 7px; margin-top: -20px;">
                    <button class="btn bg-sv-primary rounded-pill px-3 shadow" id="hideInstructionButton" onclick="hideInstructionDiv()">
                      <span><i class="fa fa-info"></i></span>
                    </button>
                  </div>
                  <div class="bg-sv-primary curvedTop d-flex align-items-center justify-content-center" style="height: 25%">Information</div>
                  <div class="py-2 mb-3">
                    <div style="font-size: 14px;" class="text-white">
                      <div>Play against the house. <br />Player with the highest score after 5 throws each, wins.</div>
                      <div class="lead font-weight-bold">Scroll up to play!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-1 col-xl-3"></div>
          </div>
        </section>
        <section class="col-12 diceDiv">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-xl-4 col-3 lead">
              <div class="lead text-center text-white" id="diceValue1"></div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 col-6 text-center my-auto">
              <div class="row text-center">
                <div class="col-6 px-0">
                  <div id="die1container">
                    <img
                      id="die-1"
                      class="diceSize"
                      src="~/assets/images/gameplay/gameplay-assets/dices/1.png"
                    />
                  </div>
                </div>
                <div class="col-6 px-0">
                  <div id="die2container">
                    <img
                      id="die-2"
                      class="diceSize"
                      src="~/assets/images/gameplay/gameplay-assets/dices/2.png"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 px-0">
                  <div id="die3container">
                    <img
                      id="die-3"
                      class="diceSize"
                      src="~/assets/images/gameplay/gameplay-assets/dices/3.png"
                    />
                  </div>
                </div>
                <div class="col-6 px-0">
                  <div id="die4container">
                    <img
                      id="die-4"
                      class="diceSize"
                      src="~/assets/images/gameplay/gameplay-assets/dices/4.png"
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
        <section class="col-12">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div id="feedback" class="text-white font-weight-bold text-center" style="font-size: 1.3rem;"></div>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <input id="number1" type="number" value="2" style="display: none;" />
            </div>
          </div>
        </section>
        <section class="col-12 bg-footer py-1">
          <div class="d-flex justify-content-center" id="animated-cup-div">
            <div id="animated-cup" class="text-center">
              <a onclick="rollDiceFromCup();">

                <img src="~/assets/images/gameplay/gameplay-assets/dice-cup.png" draggable="false" alt="dice-cup" id="animated-cup-img" class="mx-auto" />

              </a>
            </div>
          </div>
          <div class="row justify-content-between align-items-center bg-dark">
            <div class="col-12 p-1" id="amount-container">
              <div class="d-flex justify-content-center">
                <div class="d-flex flex-column text-white text-center align-items-center">
                  <div class="small text-uppercase">Total Stake</div>
                  <input class="bg-sv-warning font-weight-bold text-white font-weight-bold text-center form-control border-0 outline-none d-inline py-0 w-50" type="number" style="height: 25px;" oninput="editStake()" id="betAmountList" />
                </div>
              </div>
            </div>
            <div class="col-12 px-0" id="stakeSection">
              <div class="d-flex justify-content-center align-items-center mb-1 px-3">
                <div class="mr-2">
                  <button class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold addStakeButtonActive" onclick="addStake(100)">+100</button>
                </div>
                <div class="mr-1">
                  <button class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold" onclick="addStake(200)">+200</button>
                </div>
                <div class="ml-1">
                  <button class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold" onclick="addStake(500)">+500</button>
                </div>
                <div class="ml-2">
                  <button class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold" onclick="addStake(1000)">+1000</button>
                </div>
              </div>

              <div class="d-flex justify-content-center">
              <div class="flex-fill">
                <button type="button" id="clearButton" class="btn py-0 customStartButton btn-block rounded-0 bg-danger zoom text-white"  onclick="clearSelectedStake();">
                  <span>Clear</span>
                </button>
              </div>
                <div class="flex-fill">
                <button type="button" id="startButton" class="btn py-0 customStartButton btn-block rounded-0 zoom" onclick="validateForm(); return false;">
                  <span><i class="fa fa-play"></i></span>
                  <span>Play</span>
                </button>
              <button type="button" style="display:none;" id="restartButton" class="btn customStartButton btn-block zoom"  onclick="document.querySelector('#restartButton').style.display='none'; restart();">RESTART</button>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: "single",
  layout: "game",
};
</script>

<style scoped>
@import url("~/assets/css/dice/diceGamePlay.css");

@import url("~/assets/css/dice/single/single.css");

main#main {
  margin-top: 100px;
}
</style>
