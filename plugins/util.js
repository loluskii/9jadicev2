import Vue from "vue";
// import store from '../store/index'
Vue.mixin({
  data() {
    return {
      game_status: {
        live: false,
      },
      // audio.play();
      // audio.src: "/audio/mobile/games/dice/shake-cup.mp3";

    };
  },
  methods: {
    numberFormat(number) {
      return parseFloat(number).toLocaleString();
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
    calculateWinnings(tournament) {
      var totalStake;
      var winningStake;
      var stake;
      stake = tournament.stake;
      totalStake = stake * tournament.no_of_players;
      winningStake = totalStake - totalStake * 0.1;
      var no_of_players = tournament.no_of_players;
      var no_of_players_joined = tournament.no_of_players_joined ?? 0;
      var amountWon = 0;
      if (no_of_players <= 5) {
        amountWon = 1 * winningStake;
      } else if (no_of_players >= 6 && no_of_players <= 10) {
        amountWon = 0.6 * winningStake;
      } else if (no_of_players >= 11 && no_of_players <= 20) {
        amountWon = 0.5 * winningStake;
      } else if (no_of_players >= 21 && no_of_players <= 30) {
        amountWon = 0.45 * winningStake;
      } else if (no_of_players >= 31 && no_of_players <= 50) {
        amountWon = 0.4 * winningStake;
      } else if (no_of_players >= 51 && no_of_players <= 100) {
        amountWon = 0.4 * winningStake;
      } else if (no_of_players >= 101 && no_of_players <= 250) {
        amountWon = 0.23 * winningStake;
      } else if (no_of_players >= 251 && no_of_players <= 750) {
        amountWon = 0.222 * winningStake;
      } else if (no_of_players >= 751 && no_of_players <= 2500) {
        amountWon = 0.24 * winningStake;
      } else if (no_of_players >= 2501 && no_of_players <= 7500) {
        amountWon = 0.1222 * winningStake;
      } else if (no_of_players >= 7501 && no_of_players <= 15000) {
        amountWon = 0.1 * winningStake;
      } else if (no_of_players >= 15001 && no_of_players <= 35000) {
        amountWon = 0.1 * winningStake;
      } else if (no_of_players >= 35001 && no_of_players <= 70000) {
        amountWon = 0.08 * winningStake;
      } else if (no_of_players >= 70001 && no_of_players <= 150000) {
        amountWon = 0.105 * winningStake;
      } else if (no_of_players >= 150001 && no_of_players <= 250000) {
        amountWon = 0.105 * winningStake;
      } else if (no_of_players >= 250001 && no_of_players <= 750000) {
        amountWon = 0.19 * winningStake;
      } else if (no_of_players >= 750001 && no_of_players <= 1500000) {
        amountWon = 0.09 * winningStake;
      } else if (no_of_players >= 1500001 && no_of_players <= 2500000) {
        amountWon = 0.186 * winningStake;
      } else if (no_of_players >= 2500001 && no_of_players <= 3500000) {
        amountWon = 0.08 * winningStake;
      } else if (no_of_players >= 3500001 && no_of_players <= 4500000) {
        amountWon = 0.07 * winningStake;
      } else {
        amountWon = 0.07 * winningStake;
      }
      return this.numberFormat(amountWon);
    },
    getGameStatus(game) {
      let currentDate = new Date();
      const noOfPlayers = game.no_of_players;
      const endTime = game.end_date;
      const noOfJoinedPlayers = game.no_of_players_joined ?? 0;

      if (
        this.$moment(currentDate).format() < this.$moment(endTime).format() &&
        noOfJoinedPlayers < noOfPlayers
      ) {
        return `<span class="ml-1 badge badge-success px-1">
        <i class="fa fa-circle text-white">&nbsp;Live</i>
      </span>`;
      } else if (
        this.$moment(currentDate).format() > this.$moment(endTime).format()
      ) {
        return '<span class="ml-1 badge badge-danger px-1">Ended</span>';
      } else if (noOfJoinedPlayers >= noOfPlayers) {
        return '<span class="ml-1 badge badge-danger px-1">Sold Out</span>';
      }
    },
    getGameTime(game) {
      let currentDate = new Date();
      if (
        this.$moment(currentDate).format() >
        this.$moment(game.end_date).format()
      ) {
        return "Ended " + this.$moment(game.end_date).fromNow();
      } else {
        return "Ends in " + this.$moment(game.end_date).fromNow();
      }
    },
    getDuration(date) {
      return this.$moment(date).fromNow();
    },
    formatDate(date) {
      return this.$moment(date).format("ll");
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },


  },
  mounted(){
    console.log('entering...')
  }

  //gameplay




});
