<template>
  <b-modal
    centered
    hide-header
    hide-footer
    content-class="bg-sv-primary curvedEdge"
    body-class="p-0 bg-dark curvedEdge"
    id="publicTournamentInfo"
    title="Create Tournament"
    title-class="text-uppercase font-weight-bold"
  >
    <div class="container-fluid">
      <div
        class="row bg-sv-primary p-2"
        style="border-radius: 18px 18px 0 0; height: 115px"
      >
        <div class="col-12 d-flex justify-content-between align-items-center">
          <div>
            <img
              style="height: 25px"
              src="https://dice.ng/images/mobile/logo-white.png"
            />
          </div>
          <div
            class="text-uppercase text-sv-primary text-center font-weight-bold mb-2"
            id="tournamentName"
          >
            Sure Game
          </div>
          <button
            type="button"
            class="btn rounded-circle p-2 text-sv-primary"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fa fa-times"></i></span>
          </button>
        </div>
        <div
          class="col-12 d-flex justify-content-between align-items-center small font-weight-bold text-sv-primary px-2 pt-2 pb-3"
          id="matchInfo"
        >
          <div class="small">
            <div>October 8th 2022</div>
            <div>11:26:15 pm</div>
          </div>
          <div class="flex-fill small px-2">
            <div id="infojoin81817">6 of 5,000</div>
            <div class="text-uppercase d-flex align-items-center small">
              <div id="percent81817" class="text-nowrap mr-1">0.12% full</div>
              <div class="progress w-100" style="height: 5px">
                <div
                  id="progress81817"
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: 0.12%"
                  aria-valuenow="0.12"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="small text-right">
            <div>Guaranteed to first</div>
            <div>₦31,500</div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" style="margin-top: -13px">
        <div
          class="nav justify-content-between font-weight-bold"
          id="public-info-modal-tabs"
          role="tablist"
        >
          <a
            class="btn btn-light btn-sm border-0 rounded-0 active flex-fill py-1 mr1"
            id="nav-overview"
            data-toggle="tab"
            href="#overviewTab"
            role="tab"
            aria-controls="nav-overview"
            aria-selected="true"
            ><small>Overview</small></a
          >
          <a
            class="btn btn-light btn-sm border-0 rounded-0 flex-fill py-1 mr1"
            id="nav-rules"
            data-toggle="tab"
            href="#rulesTab"
            role="tab"
            aria-controls="nav-rules"
            aria-selected="false"
            ><small>Rules</small></a
          >

          <a
            class="btn btn-light btn-sm border-0 rounded-0 flex-fill py-1 mr1"
            id="nav-leaderboard"
            data-toggle="tab"
            href="#leaderboardTab"
            role="tab"
            aria-controls="nav-leaderboard"
            aria-selected="false"
            ><small>Leaderboard</small></a
          >
          <a
            class="btn btn-light btn-sm border-0 rounded-0 flex-fill py-1"
            id="nav-paytable"
            data-toggle="tab"
            href="#paytableTab"
            role="tab"
            aria-controls="nav-paytable"
            aria-selected="false"
            ><small>Paytable</small></a
          >
          <a
            class="btn btn-light btn-sm border-0 rounded-0 flex-fill py-1"
            id="nav-live-payout"
            data-toggle="tab"
            href="#livePayoutTab"
            role="tab"
            aria-controls="nav-payout"
            aria-selected="false"
            ><small>Payouts</small></a
          >
        </div>
      </div>
      <div class="tab-content row px-3 pb-2 d-block" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="overviewTab"
          role="tabpanel"
          aria-labelledby="overview-tab"
        >
          <div class="d-flex justify-content-between border-bottom py-2">
            <span id="prizeText">Stake</span>
            <span id="prizeID">100</span>
          </div>
          <div class="d-flex justify-content-between border-bottom py-2">
            <span>Creator</span>
            <span id="creatorID">larry</span>
          </div>
          <div
            style="display: none"
            class="justify-content-between border-bottom py-2"
            id="privateAgentGameCodeDisplay"
          >
            <span id="startText">Game Code</span>
            <span id="privateAgentGameCode"></span>
          </div>
          <div class="d-flex justify-content-between border-bottom py-2">
            <span id="startText">Start Time</span>
            <span>
              <span><i class="fa fa-clock-o"></i></span>
              <span id="startID">3 days ago</span>
            </span>
          </div>
          <div class="d-flex justify-content-between border-bottom py-2">
            <span id="endText">Ends Time</span>
            <span>
              <span><i class="fa fa-clock-o"></i></span>
              <span id="endID">in 3 days</span>
            </span>
          </div>
          <div
            class="d-flex justify-content-between border-bottom py-2"
            style="overflow-x: auto"
          >
            <span>Players</span>
            <span id="playerCount">6/5,000</span>
          </div>
          <div
            id="specialErrorInfoFeedback"
            class="text-center text-danger small"
          ></div>
        </div>
        <div
          class="tab-pane fade pt-2 pb-3"
          id="rulesTab"
          role="tabpanel"
          aria-labelledby="rules-tab"
        >
          <div>
            NOTE: A service charge of 10% of the total amount accummulated for
            this game will be deducted.
          </div>
          <ol class="p-2">
            <li>Create a Tournament or Join an existing Tournament.</li>
            <li>Pay the Entry Fee.</li>
            <li>Go to game page to play and earn your point.</li>
            <li>
              To play the game, tap the dice cup twice to roll the dice and
              accumulate your points.
            </li>
            <li>Check your position on the leaderboard.</li>
            <li>Claim your prizes!</li>
          </ol>
        </div>

        <div
          class="tab-pane fade"
          id="leaderboardTab"
          role="tabpanel"
          aria-labelledby="leaderboard-tab"
        >
          <div class="px-2 py-1 btn btn-sm btn-block rounded-0 text-white">
            <small>Shows the current position of players per ticket.</small>
          </div>
          <div class="d-flex justify-content-between border-bottom py-2">
            <span class="font-weight-bold">Player</span>
            <!--  <span class="font-weight-bold">Winnings</span> -->

            <span class="font-weight-bold">Points</span>
          </div>
          <div id="leaderboard-body">
            <div>
              <div
                class="d-flex justify-content-between bg-dark text-white px-1 py-2 topBar mb-1"
              >
                <span>1. Michael44 #1</span>
                <span>4936</span>
              </div>

              <div
                class="d-flex justify-content-between bg-dark text-white px-1 py-2 topBar mb-1"
              >
                <span>2. Happy201 #2</span>
                <span>4694</span>
              </div>

              <div
                class="d-flex justify-content-between bg-dark text-white px-1 py-2 topBar mb-1"
              >
                <span>3. Happy201 #1</span>
                <span>4591</span>
              </div>

              <div
                class="d-flex justify-content-between bg-dark text-white px-1 py-2 topBar mb-1"
              >
                <span>4. Akeemadejaresegun #2</span>
                <span>4407</span>
              </div>

              <div
                class="d-flex justify-content-between bg-dark text-white px-1 py-2 topBar mb-1"
              >
                <span>5. larry #1</span>
                <span>3621</span>
              </div>

              <div
                class="d-flex justify-content-between bg-dark text-white px-1 py-2 topBar mb-1"
              >
                <span>6. Akeemadejaresegun #1</span>
                <span>0</span>
              </div>
              <div class="text-center mb-2">
                <a
                  href="https://dice.ng/legend/syPcDikknA/leaderboard"
                  class="btn bg-sv-warning btn-sm text-white"
                  >View leaderboard</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane text-black fade"
          id="paytableTab"
          role="tabpanel"
          aria-labelledby="paytable-tab"
        >
          <div class="px-2 py-1 btn btn-sm btn-block rounded-0 text-white">
            <small>Payouts when tickets are completely sold out.</small>
          </div>
          <div id="tablePay" style="height: 300px; overflow-y: auto">
            <div class="d-flex justify-content-between p-2 text-white">
              <div>1st</div>
              <div class="font-weight-bold">₦54,990</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>2nd</div>
              <div class="font-weight-bold">₦30,015</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>3rd</div>
              <div class="font-weight-bold">₦19,980</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>4th</div>
              <div class="font-weight-bold">₦14,490</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>5th</div>
              <div class="font-weight-bold">₦9,990</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>6th</div>
              <div class="font-weight-bold">₦8,010</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>7th - 8th</div>
              <div class="font-weight-bold">₦4,995</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>9th - 10th</div>
              <div class="font-weight-bold">₦2,993</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>11th - 15th</div>
              <div class="font-weight-bold">₦1,998</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>16th - 20th</div>
              <div class="font-weight-bold">₦1,404</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>21th - 30th</div>
              <div class="font-weight-bold">₦999</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>31th - 40th</div>
              <div class="font-weight-bold">₦801</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>41th - 50th</div>
              <div class="font-weight-bold">₦599</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>51th -75th</div>
              <div class="font-weight-bold">₦520</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>76th - 100th</div>
              <div class="font-weight-bold">₦461</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>101st -150th</div>
              <div class="font-weight-bold">₦360</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>151st -250th</div>
              <div class="font-weight-bold">₦300</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>251st - 450th</div>
              <div class="font-weight-bold">₦250</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>451st - 850th</div>
              <div class="font-weight-bold">₦210</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>851st - 1200th</div>
              <div class="font-weight-bold">₦140</div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane text-black fade"
          id="livePayoutTab"
          role="tabpanel"
          aria-labelledby="live-payout-tab"
        >
          <div class="px-2 py-1 btn btn-sm btn-block rounded-0 text-white">
            <small>Payouts based on current ticket/tickets sold.</small>
          </div>
          <div id="livePayoutList" style="height: 300px; overflow-y: auto">
            <div class="d-flex justify-content-between p-2 text-white">
              <div>1st</div>
              <div class="font-weight-bold">₦324</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>2nd</div>
              <div class="font-weight-bold">₦135</div>
            </div>
            <div class="d-flex justify-content-between p-2 text-white">
              <div>3rd</div>
              <div class="font-weight-bold">₦81</div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div id="infoModalFeedback"></div>
          <div id="joinDiv" class="py-3 d-flex justify-content-center">
            <div class="d-flex">
              <button
                id="join_button"
                class="btn btn-sm bg-sv-primary text-sv-primary px-3"
                style="font-size: 12px"
                onclick='openSpecialConfirmationModal({"id":81817,"name":"Sure Game","category_id":3,"duration":6,"duration_type":"day","slug":"sure-game","reference_id":"syPcDikknA","end_date":"2022-10-11 16:08:45","stake":100,"status":"started","no_of_players":5000,"no_of_players_joined":6,"time_started":"2022-10-05 16:08:45","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":"larry","verfication":1},"api_leaderboard":[],"leaderboard_length":6,"api_userrecords":[],"freetournament":null})'
              >
                Join
              </button>
              <div id="legendInfoModal"></div>
              <button
                class="btn btn-sm bg-sv-warning text-white mx-1 px-1"
                style="font-size: 12px"
                onclick='shareWithFriends({"id":81817,"name":"Sure Game","category_id":3,"duration":6,"duration_type":"day","slug":"sure-game","reference_id":"syPcDikknA","end_date":"2022-10-11 16:08:45","stake":100,"status":"started","no_of_players":5000,"no_of_players_joined":6,"time_started":"2022-10-05 16:08:45","club_color":null,"club_jesery":null,"hot":0,"creator":{"user_data_name":"larry","verfication":1},"api_leaderboard":[],"leaderboard_length":6,"api_userrecords":[],"freetournament":null})'
              >
                <span>Share Game<i class="fa fa-share ml-2"></i></span>
              </button>
              <a
                href="https://dice.ng/legend/info/sure-game/syPcDikknA"
                class="btn btn-sm btn-primary mr-1 px-1"
              >
                <span class="text-white" style="font-size: 12px"
                  >Info Page</span
                >
              </a>
              <a
                href="https://dice.ng/tournament/81817/discussions"
                class="btn btn-sm bg-sv-primary text-sv-primary mr-1 px-1"
              >
                <span style="font-size: 12px"
                  >Discuss<i class="fa fa-comments ml-2"></i
                ></span>
              </a>
            </div>
          </div>
          <div
            id="shareOptions"
            class="text-center"
            style="display: none"
          ></div>
          <div id="shareOptions2" class="text-center"></div>
          <div id="playSlider" class="">
            <div id="joinedGamesDiv">
              <div class="small text-center mb-2">My active games:</div>
              <div
                class="d-flex flex-nowrap hideScrollbar py-3"
                style="overflow-x: scroll"
              >
                <span style="position: absolute; right: 0; margin-right: 5px">
                  <i class="fa fa-caret-right fa-2x text-white"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {};
</script>

<style></style>
