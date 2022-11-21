let mutations = {
  right_menu(state, option) {
    if (option == "toggle") {
      state.right_open = !state.right_open;
    }
    // if (state.right_open) {
    //   document.getElementById("rightnav").classList.add("rightnav-active");
    // } else {
    //   document.getElementById("rightnav").classList.remove("rightnav-active");
    // }
  },

  setBetlist(state, payload){
    state.betlist = payload
  },

  setRecordID(state, payload){
    state.record_id = payload
  }
};

export default mutations
