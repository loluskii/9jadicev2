<template>
  <div>
    <header class="container-fluid">
      <nav class="row bg-9jaluck align-items-center text-uppercase font-weight-light customNavbar py-2 small">
        <nuxt-link class="" to="/">
          <img src="~/assets/images/logos/logo.png" class="img-fluid" style="height: 30px" id="brand-logo" />
        </nuxt-link>
        <div class="d-none d-lg-flex align-items-center">
          <nuxt-link to="/" class="nav-link text-decoration-none text-white">Home</nuxt-link>
          <nuxt-link to="/how-to-play" class="nav-link text-decoration-none text-white">
            How to play
          </nuxt-link>
          <nuxt-link to="/promos" class="nav-link text-decoration-none text-white">PROMOS</nuxt-link>
          <nuxt-link to="/affliates" class="nav-link text-decoration-none text-white">Affiliates</nuxt-link>
          <nuxt-link to="/blog" class="nav-link text-decoration-none text-white">Blog</nuxt-link>
          <nuxt-link to="/discussions" class="nav-link text-decoration-none text-white">Discussions</nuxt-link>
        </div>

        <div id="login-company" class="d-flex justify-content-end align-items-center flex-grow-1 ml-auto">
          <div v-if="!$auth.loggedIn" id="login-signup-div" class="d-flex align-items-center">
            <!-- <nuxt-link
              to="/"
              class="text-decoration-none btn btn-sm bg-sv-warning text-white mr-2 px-2"
            >
              <small>Guest</small>
            </nuxt-link> -->

            <nuxt-link to="/auth/login" class="text-decoration-none btn btn-sm btn-outline-light text-white mr-2 px-2">
              <small>Login</small>
            </nuxt-link>
            <button class="btn btn-sm bg-sv-warning text-white">
              <nuxt-link to="/auth/register" class="text-decoration-none text-white text-uppercase">
                <small>SIGN UP</small>
              </nuxt-link>
            </button>
          </div>
          <div v-else class="d-flex align-items-center">
            <div class="d-flex flex-column small text-white text-right mr-1">
              <span class="text-capitalize text-white-50">
                Welcome, <span>{{user.user_data_name}}</span>
                <!-- {{ substr(Auth::user()->user_data_name, 0, 10) }} -->
                <span v-if="user.user_status_role_id == 1 || user.user_status_role_id == 2" class="small">
                  <i class="fa fa-check-circle text-info"></i>
                </span>
              </span>
              <span id="balanceSpanId" class="font-weight-bold">&#8358; {{ formatNumber(user.balance) }} </span>
              <span> Bonus: &#8358;{{ formatNumber(user.bonus) }} </span>
              <!-- <button @click="logout">logout</button> -->
            </div>
            <div class="position-relative">
              <button class="btn bg-sv-primary rightNavTopTextColor btn-sm dropdown-toggle" type="button"
                id="sidenav-toggler"  @click="toggle_right">
                <span><i class="fa fa-user"></i></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="row">
      <div class="col-12 p-0 nav d-flex flex-nowrap hideScrollbar" style="overflow-x: auto">

        <a onclick="callLoader()"
          class="btn btn-sm btn-dark border-0 rounded-0 flex-fill px-2 py-2 mr-1 d-flex flex-column justify-content-center "
          href="https://dice.ng/dice">
          <span class="mb-1 small">Tournament</span>
          <span>
            <img src="https://dice.ng/images/desktop/games/tournament.png" style="height: 25px" alt="tournament-icon">
          </span>
        </a>

        <a onclick="callLoader()"
          class="btn btn-sm btn-dark border-0 rounded-0 flex-fill px-2 py-2 mr-1 d-flex flex-column justify-content-center "
          href="https://dice.ng/dice/versus-computer">
          <span class="mb-1 small">Single</span>
          <span>
            <img src="https://dice.ng/images/desktop/games/single.png" style="height: 25px" alt="single-icon">
          </span>
        </a>
        <a onclick="callLoader()"
          class="btn btn-sm btn-dark border-0 rounded-0 flex-fill px-2 py-2 mr-1 d-flex flex-column justify-content-center text-nowrap "
          href="https://dice.ng/dice/odd-even">
          <span class="mb-1 small">Odd / Even</span>
          <span>
            <img src="https://dice.ng/images/desktop/games/odd-even.png" style="height: 25px" alt="odd-even-icon">
          </span>
        </a>
        <a onclick="callLoader()"
          class="btn btn-sm btn-dark border-0 rounded-0 flex-fill text-nowrap px-2 py-2 mr-1 d-flex flex-column justify-content-center "
          href="https://dice.ng/dice/mega-ten">
          <span class="mb-1 small">Mega Ten</span>
          <span>
            <img src="https://dice.ng/images/desktop/games/mega-ten.png" style="height: 25px" alt="mega-ten-icon">
          </span>
        </a>
        <a onclick="callLoader()"
          class="btn btn-sm btn-dark border-0 rounded-0 flex-fill px-2 py-2 d-flex flex-column justify-content-center "
          href="https://dice.ng/dice/under-over">
          <span class="mb-1 small">Under/Over</span>
          <span>
            <img src="https://dice.ng/images/desktop/games/under-over.png" style="height: 25px" alt="under-over-icon">
          </span>
        </a>
      </div>

    </div>
    <side-nav v-if="$auth.loggedIn"></side-nav>
  </div>
</template>

<script>
import SideNav from './SideNav.vue';
  export default {
    name: "game-top",
    components:{ SideNav },
    computed: {
      user(){
          return this.$store.state.auth.user;
      }
    },
    methods:{
      toggle_right() {
        console.log('sdfdsdsd')
        this.$store.commit('right_menu', "toggle");
      },
    }
  }
</script>

<style>

</style>
