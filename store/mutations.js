let mutations = {
  right_menu(state, option) {
    if (option == "toggle") {
      state.right_open = !state.right_open;
    }
  },

  setBetlist(state, payload){
    state.betlist = payload
  },
  setRecordID(state, payload){
    state.record_id = payload
  }
};

export default mutations
