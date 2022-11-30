import getters from '../store/getters';
import mutations from '../store/mutations';
import actions from '../store/actions';


export const state = () => ({
  right_open: false,
  record_id: null,
  betlist: [],
  cup_shake: require('~/assets/images/gameplay/gameplay-assets/shake-cup.mp3').default,
  dice_roll_anim: '/dice-roll-anim.gif'
})



