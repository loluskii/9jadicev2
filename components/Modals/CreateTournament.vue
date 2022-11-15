<template>
  <b-modal centered hide-header hide-footer content-class="bg-sv-primary curvedEdge" body-class="p-0 bg-dark curvedEdge"
    id="createTournament" title="Create Tournament" title-class="text-uppercase font-weight-bold">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center bg-sv-primary p-2 customModalTop">
        <div>
          <img style="height: 25px" src="~/assets/images/logos/logo-white.png" />
        </div>
        <div class="d-flex flex-column text-uppercase text-center font-weight-bold mb-2">
          <span>Create Tournament</span>
        </div>
        <button type="button" class="btn rounded-circle p-2 text-sv-primary" @click="hideCreateTournament" aria-label="Close">
          <span aria-hidden="true"><i class="fa fa-times text-white"></i></span>
        </button>
      </div>
      <div class="row mb-2" style="margin-top: -13px">
        <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 my-auto">
          <div class="d-flex justify-content-center mb-3">
            <ul class="nav nav-pills" id="create-tournament-pills" role="tablist">
              <li class="nav-item mr-1">
                <a class="nav-link active" @click="showForm" id="nav-form-create-tab" type="button" role="tab" aria-controls="nav-create-form" aria-selected="true">Create Form</a>
              </li>
              <li class="nav-item ml-1">
                <a class="nav-link" @click="hideForm" id="nav-info-tab" data-toggle="pill" data-target="#infoTab" type="button" role="tab"
                  aria-controls="nav-info" aria-selected="false">Game Info</a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="formTab" role="tabpanel">
              <!-- <div style="display: none" class="form-group justify-content-center" id="partnersTypeSelectionDiv">
                <div class="mr-3">
                  <input type="radio" id="publicPartners" value="3" name="partnersType" checked="" />
                  Public
                </div>
                <div class="ml-3">
                  <input type="radio" id="privatePartners" value="2" class="ml-2" name="partnersType" />
                  Private
                </div>
              </div> -->
              <div class="form-group">
                <input type="text" v-model="formData.name" class="form-control bg-dark text-white" id="specialTournamentName" maxlength="15"
                  placeholder="Tournament Name" name="" autofocus="" />
                <small id="specialTournamentNameHint" class="text-white">15 characters max</small>
              </div>
              <div class="form-group">
                <div class="d-flex">
                  <div class="mr-2">
                    <input type="number" v-model="formData.amount" id="specialStakeAmount" oninput="checkSpecialStakeAmount()"
                      class="form-control bg-dark text-white" placeholder="Stake Amount" name="" />
                    <small id="specialStakeAmountHint" class="text-white"></small>
                  </div>
                  <div>
                    <select id="specialNoOfPlayers" v-model="formData.no_of_players" class="form-control bg-dark text-white" name="no_of_players">
                      <option value="" selected="">
                        No. of players allowed
                      </option>
                      <option value="2">2 players</option>
                      <option value="5">5 players</option>
                      <option value="10">10 players</option>
                      <option value="20">20 players</option>
                      <option value="50">50 players</option>
                      <option value="100">100 players</option>
                      <option value="500">500 players</option>
                      <option value="1k">1k players</option>
                      <option value="5k">5k players</option>
                      <option value="10k">10k players</option>
                      <option value="20k">20k players</option>
                      <option value="50k">50k players</option>
                      <option value="100k">100k players</option>
                      <option value="200k">200k players</option>
                      <option value="500k">500k players</option>
                      <option value="1m">1m players</option>
                      <option value="2m">2m players</option>
                      <option value="3m">3m players</option>
                      <option value="4m">4m players</option>
                      <option value="5m">5m players</option>
                    </select>
                    <small id="specialNoOfPlayersHint" class="text-white"></small>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="text-white mb-2">Tournament Duration</div>
                <div class="d-flex">
                  <div class="w-75 mr-2">
                    <select class="form-control bg-dark text-white" v-model="formData.special_duration" id="specialDurationOption"
                      onchange="selectDuration()" name="special_duration">
                      <option value="">Duration</option>
                      <option value="minute">Minute(s)</option>
                      <option value="hour">Hour(s)</option>
                      <option value="day">Day(s)</option>
                      <option value="week">Week(s)</option>
                      <option value="month">Month(s)</option>
                    </select>
                    <small id="specialDurationOptionHint" class="text-white"></small>
                  </div>
                  <div>
                    <input type="number" v-model="formData.special_time" class="form-control bg-dark text-white" id="specialNoOfDuration" placeholder=""
                      name="special_time"/>
                    <small id="specialNoOfDurationHint" class="text-white" style="display: none">In figures, e.g
                      24</small>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <div class="text-danger font-weight-bold mb-2" id="specialErrorFeedback"> </div>
                <button @click.prevent="createTournament" id="create_special_game" class="btn text-uppercase bg-sv-primary text-sv-primary">
                  Create
                </button>
              </div>
            </div>
            <div class="tab-pane text-white fade" id="infoTab" role="tabpanel">
              <div>
                NOTE: A service charge of 10% of the total amount accummulated
                for this game will be deducted.
              </div>
              <ol class="p-2">
                <li>Create a Tournament or Join an existing Tournament.</li>
                <li>
                  Go to game-play page by clicking on the "join", "join again"
                  or "Play game" button.
                </li>
                <li>
                  To play the game, tap the dice cup twice or click on the play
                  (<span><i class="fa fa-play"></i></span>) button once.
                </li>
                <li>
                  After your point is displayed, you can go on and join again or
                  check your position on the leaderboard page.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div id="linkGenerated"></div>
        <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import api from '../../services/apis';
  export default {
    name: "create-tournament",
    data(){
      return{
        formData:{
          name: "",
          amount: '',
          no_of_players: "",
          duration: "",
          special_time: "",
          duration_type: "",
          special_duration: "",
        }
      }
    },
    methods:{
      showForm(){
        $('#nav-info-tab').removeClass('active text-white');
        $('#nav-form-create-tab').addClass('active text-white');
        $('#formTab').addClass('active show');
        $('#infoTab').removeClass('active show');
      },
      hideForm(){
        $('#nav-form-create-tab').removeClass('active text-white');
        $('#nav-info-tab').addClass('active text-white');
        $('#infoTab').addClass('active show');
        $('#formTab').removeClass('active show');
      },
      hideCreateTournament(){
        this.formData = {
          name: "",
          amount: '',
          no_of_players: "",
          duration: "",
          special_time: "",
          duration_type: "",
          special_duration: "",
        }
        this.$bvModal.hide("createTournament");
      },
      createTournament(){
        $('#specialErrorFeedback').html('<span class="alert alert-primary text-dark py-1 font-weight-normal small">Creating tournament...please wait</span>')
        $('#create_special_game').prop("disabled",true);
        this.formData.duration = this.formData.special_time;
        this.formData.duration_type = this.formData.special_duration;
        this.$axios.post("/tournaments/create?category=4",this.formData).then((res) => {
          let game_id = res.data.data.id;
          this.$axios.post(`/tournaments/${game_id}/join`).then((res2)=>{
            let name = res2.data.data.slug;
            let ref = res2.data.data.reference
            let refid = res2.data.data.reference_id

            this.$router.push({name: "legend-name-ref-refid-game", params: {name:name, ref:ref, refid:refid}})
          }).catch(err => {
            $('#create_special_game').prop("disabled",true);
            $('#specialErrorFeedback').html(`<span class="alert alert-danger text-dark py-1 font-weight-normal small">${err.response.data.message}</span>`)
          })
        }).catch(err => {
            $('#create_special_game').prop("disabled",true);
            $('#specialErrorFeedback').html(`<span class="alert alert-danger text-dark py-1 font-weight-normal small">${err.response.data.message}</span>`)
        });
      },

    }
  };
</script>

<style></style>
