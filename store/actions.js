import axios from '~/plugins/axios'


let actions = {
  getBets({commit}, data){
    this.$axios.get(`/bet-list/my-bets?status=${data.status}&start_date=${data.start_date}&end_date=${data.end_date}`)
      .then((res) => {
        commit('setBetlist',res.data.data);
      })
  }
}


export default actions
