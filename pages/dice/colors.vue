<template>
  <div class="row">
    <section
      class="col-sm-12"
      style="background-color: #0e171c; min-height: 95vh"
    >
      <main id="main" class="row">
        <section class="container-fluid" id="instructionDiv">
          <div class="row">
            <div class="col-sm-12 col-md-1 col-lg-1 col-xl-2"></div>
            <div
              class="col-sm-12 col-md-10 col-lg-10 col-xl-8 d-flex flex-column align-items-center justify-content-center pt-4"
            >
              <div
                class="instructionBackground text-center position-relative bg-dark"
              >
                <div style=" position: absolute; right: 0; top: 0; margin-right: 7px; margin-top: -20px;">
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
              <div class="mt-2">
                <button
                  class="btn btn-sm rounded-pill btn-outline-light px-3"
                  onclick="startGame();"
                >
                  Start
                </button>
              </div>
            </div>
            <div class="col-sm-12 col-md-1 col-lg-1 col-xl-2"></div>
          </div>
        </section>
        <section class="col-12 pt-1 d-none" id="vsComputer">
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
              <div class="mx-4">

              </div>
              <div id="selectionDiv">
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
                        onclick="selectDice(1, 'cyan')"
                        src="~/assets/images/gameplay/colours/1.png"
                        class="img-fluid"
                        alt="cyan"
                        srcset=""
                        data-id="cyan"
                      />
                      <img
                        onclick="selectDice(2, 'magenta')"
                        src="~/assets/images/gameplay/colours/2.png"
                        class="img-fluid"
                        alt="magenta"
                        srcset=""
                        data-id="magenta"
                      />
                      <img
                        onclick="selectDice(3, 'yellow')"
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
                        onclick="selectDice(4, 'orange')"
                        src="~/assets/images/gameplay/colours/4.png"
                        class="img-fluid"
                        alt="orange"
                        srcset=""
                        data-id="orange"
                      />
                      <img
                        onclick="selectDice(5, 'purple')"
                        src="~/assets/images/gameplay/colours/5.png"
                        class="img-fluid"
                        alt="purple"
                        srcset=""
                        data-id="purple"
                      />
                      <img
                        onclick="selectDice(6, 'green')"
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
        <section class="col-12 d-none" id="selectedDiceDiv">
          <div class="text-center">
            <div>
              <div class="p-2 bg-sv-primary text-sv-primary border-rounded">
                You selected:
              </div>

              <div class="p-2" id="selectedDiceDisplay"></div>
            </div>
          </div>
        </section>
        <section class="col-12">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div
                id="feedback"
                class="text-white font-weight-bold text-center"
                style="font-size: 1.3rem"
              ></div>
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
                <div class="bg-sv-primary py-2 px-4 mb-3">Result:</div>
                <img
                  id="dice"
                  class="resultDice"
                  src="~/assets/images/gameplay/gameplay-assets/dices/1.png"
                />
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 col-3 lead">
              <div class="lead text-center text-white"></div>
            </div>
          </div>
        </section>
        <section class="col-12 bg-footer py-1">
          <div class="d-flex justify-content-center" id="animated-cup-div">
            <div id="animated-cup" class="text-center">
              <a onclick="rollDiceFromCup();">

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
                    oninput="editStake()"
                    id="betAmountInput"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 px-0" id="stakeSection">
              <div
                class="d-flex justify-content-center align-items-center mb-1 px-3"
              >
                <div class="mr-2">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold addStakeButtonActive"
                    onclick="addStake(100)"
                  >
                    +100
                  </button>
                </div>
                <div class="mr-1">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold"
                    onclick="addStake(200)"
                  >
                    +200
                  </button>
                </div>
                <div class="ml-1">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold"
                    onclick="addStake(500)"
                  >
                    +500
                  </button>
                </div>
                <div class="ml-2">
                  <button
                    class="btn btn-sm btn-block black-bg addStakeButton rounded-pill py-0 font-weight-bold"
                    onclick="addStake(1000)"
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
                    class="btn py-0 customStartButton btn-block rounded-0 bg-danger zoom text-white"
                    onclick="clearSelectedStake();"
                  >
                    <span>Clear</span>
                  </button>
                </div>
                <div class="flex-fill">
                  <button
                    type="button"
                    id="startButton"
                    class="btn py-0 customStartButton btn-block rounded-0 zoom"
                    onclick="validateForm(); return false;"
                  >
                    <span><i class="fa fa-play"></i></span>
                    <span>Play</span>
                  </button>
                  <button
                    type="button"
                    style="display: none"
                    id="restartButton"
                    class="btn customStartButton btn-block zoom"
                    onclick="document.querySelector('#restartButton').style.display='none'; restart();"
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
  </div>
</template>

<script>
export default {
  name: "colors",
  layout: "game",
};
</script>

<style scoped>
@import url("~/assets/css/dice/diceGamePlay.css");

main#main {
  margin-top: 140px;
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
