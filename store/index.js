import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const state = () => ({
  right_open: false,
  record_id: null,
  betlist: [],
  cup_shake: "/images/gameplay/gameplay-assets/shake-cup.mp3",
  dice_roll_anim: "/dice-roll-anim.gif",
});
