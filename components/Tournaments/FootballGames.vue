<template>
  <div class="row mt-2">
    <div class="col-12 p-0">
      <div class="d-flex flex-column small py-1 topic-bg">
        <div class="d-flex px-1">
          <div class="d-flex align-items-center">
            <div class="font-weight-bold text-capitalize">Football Games</div>
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
      <div class="p-0" id="premierLeagueGamesList">
        <div class="text-center text-white font-italic">No game available.</div>
      </div>
    </div>
    <div class="col-12 mb-3 d-none" id="premierLeagueViewMore"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {

    };
  },
  created(){

  }
};
</script>

<style scoped>
.modal-content {
  background-color: black !important;
  color: white !important;
}

.tops {
  padding-top: 100px;
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
</style>

