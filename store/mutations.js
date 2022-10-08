let mutations = {
  right_menu(state, option) {
    if (option == "toggle") {
      state.right_menu = !state.right_menu;
    }
    if (state.right_menu) {
      document.getElementById("rightnav").classList.add("rightnav-active");
    } else {
      document.getElementById("rightnav").classList.remove("rightnav-active");
    }
  },
};

export default mutations
