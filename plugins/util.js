import Vue from "vue";
// import store from '../store/index'
Vue.mixin({
  data(){
    return{
      game_status: {
        live: false,
      }
    }
  },
  methods: {
    numberFormat(currency, number) {
      return currency + "" + parseFloat(number).toLocaleString();
    },
    marginCalc(turnover, winnings) {
      let ggr = parseFloat(turnover) - parseFloat(winnings);
      let margin = (parseFloat(ggr) * 100) / turnover;
      return margin.toFixed(2);
    },
    formatNumber(number) {
      const n = number ? number : 0;
      return "" + parseFloat(n).toLocaleString();
    },

    roundPlayers(value) {
      // Nine Zeroes for Billions
      return Math.abs(Number(value)) >= 1.0e9
        ? Math.abs(Number(value)) / 1.0e9 + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(value)) >= 1.0e6
        ? Math.abs(Number(value)) / 1.0e6 + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(value)) >= 1.0e3
        ? Math.abs(Number(value)) / 1.0e3 + "K"
        : Math.abs(Number(value));
    },

    getGameStatus(game){
      let currentDate = new Date();
      const noOfPlayers = game.no_of_players;
      const endTime = game.end_date;
      const noOfJoinedPlayers = game.no_of_players_joined ?? 0

      if(this.$moment(currentDate).format() < this.$moment(endTime).format() && noOfJoinedPlayers < noOfPlayers){
        return `<span class="ml-1 badge badge-success px-1">
        <i class="fa fa-circle text-white">&nbsp;Live</i>
      </span>`
      }else if(this.$moment(currentDate).format() > this.$moment(endTime).format()){
        return '<span class="ml-1 badge badge-danger px-1">Ended</span>'
      }else if(noOfJoinedPlayers >= noOfPlayers){
        return '<span class="ml-1 badge badge-danger px-1">Sold Out</span>'
      }
    },

    displayGameButton(game) {
      let currentDate = new Date();
      const noOfPlayers = game.no_of_players;
      const endTime = game.end_date;
      const api_userrecords = [];
      const noOfJoinedPlayers = game.no_of_players_joined ?? 0

      return ` ${
        api_userrecords.length > 0
            ? `<button class="btn btn-sm rounded-pill btn-success text-white cursorPointer py-0 px-2" onclick="openInfoModal(${JSON.stringify(
                  game
              )
                  .split('"')
                  .join("&quot;")});">Play</button>
        `
            : this.$moment(currentDate).format() > this.$moment(endTime).format()
            ? '<span class="badge badge-danger px-1">Ended</span>'
            : noOfJoinedPlayers >= noOfPlayers
            ? '<span class="ml-1 badge badge-danger px-1">Sold Out</span>'
            : noOfJoinedPlayers < noOfPlayers
            ? `<button id="join_button" class="btn btn-sm btn-success rounded-pill shadow py-0 px-2 text-white" ${
                  this.$auth.loggedIn
                      ? `onclick="openSpecialConfirmationModal(${JSON.stringify(
                            game
                        )
                            .split('"')
                            .join("&quot;")})"`
                      : 'data-toggle="modal" data-target="#loginModal" '
              } >
          Join
        </button>`
            : `<button class="btn btn-sm btn-sv-primary text-sv-primary" onclick="openInfoModal(${JSON.stringify(
                  game
              )
                  .split('"')
                  .join("&quot;")})">Info</button>`
      }`;
    },


    getGameTime(game){
      let currentDate = new Date();
      if(this.$moment(currentDate).format() > this.$moment(game.end_date).format()){
        return 'Ended '+this.$moment(game.end_date).fromNow();
      }else{
        return 'Ends in '+this.$moment(game.end_date).fromNow();
      }
    },

    getDuration(date){
      return this.$moment(date).fromNow();
    },

    formatDate(date, format) {
      return this.$moment(date).format(format);
    },
    getStatus(status) {
      if (status == 1) {
        return "Won";
      } else if (status == 2) {
        return "Lost";
      } else if (status == 3) {
        return "Cancelled";
      } else if (status == 4) {
        return "CUT 2";
      } else if (status == 6) {
        return "Cancelled";
      } else {
        return "Pending";
      }
    },
    setClass(status) {
      if (status == 1) {
        return "text-success";
      } else if (status == 2) {
        return "text-danger";
      } else if (status == 3) {
        return "text-secondary";
      } else if (status == 4) {
        return "text-success";
      } else if (status == 5) {
        return "text-success";
      } else if (status == 6) {
        return "text-danger";
      } else {
        return "text-warning";
      }
    },
  },
});
