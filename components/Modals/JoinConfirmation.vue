<template>
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    id="joinConfirmationModal"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content curvedEdge">
        <div class="modal-body p-0 bg-dark curvedEdge">
          <div class="container-fluid">
            <div
              class="row justify-content-between align-items-center bg-sv-primary p-2 customModalTop"
            >
              <div>
                <img
                  style="height: 25px"
                  src="~/assets/images/logos/logo-white.png"
                />
              </div>
              <div
                class="text-uppercase text-center text-sv-primary font-weight-bold mb-2"
                id="tournament_name"
              ></div>

            </div>
            <div class="row my-2 text-white">
              <div class="col-12 text-center">
                <div class="h5">Are you sure you want to join this game?</div>
                <div id="gameDetailsConfirmation">
                  <div
                    class="d-flex justify-content-center bg-black lead font-weight-bold p-2"
                  >
                    <div class="text-sv-warning mr-3">Stake:</div>
                    <div>Free</div>
                  </div>
                </div>
                <div id="confirmationFeedback"></div>
                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                  id="confirmationButtonsDiv"
                >
                  <div>
                    <div id="confirmationFeedback"></div>
                    <div class="d-flex align-items-center">
                      <div class="mr-3">
                        <button
                          class="btn bg-sv-primary text-white px-4"
                          id="joinSpecialTournamentButton"
                          onclick="joinSpecialTournament(${tournament.id}, ${tournament.stake})"
                        >
                          Yes
                        </button>
                      </div>
                      <div>
                        <button
                          class="btn btn-danger btn-sm px-3"
                          data-dismiss="modal"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
