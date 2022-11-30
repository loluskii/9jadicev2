<template>
  <div class="row">
    <div class="col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
    <div class="col-sm-12 col-md-10 col-lg-8 col-xl-6">
      <header class="container-fluid">
        <nav
          class="row bg-9jaluck align-items-center text-uppercase font-weight-light customNavbar py-2 small"
        >
          <nuxt-link class="" to="/">
            <img
              src="~/assets/images/logos/logo.png"
              class="img-fluid"
              style="height: 30px"
              id="brand-logo"
            />
          </nuxt-link>
          <div class="d-none d-lg-flex align-items-center">
            <nuxt-link to="/" class="nav-link text-decoration-none text-white"
              >Home</nuxt-link
            >
            <nuxt-link
              to="/how-to-play"
              class="nav-link text-decoration-none text-white"
            >
              How to play
            </nuxt-link>
            <nuxt-link
              to="/promos"
              class="nav-link text-decoration-none text-white"
              >PROMOS</nuxt-link
            >
            <nuxt-link
              to="/affliates"
              class="nav-link text-decoration-none text-white"
              >Affiliates</nuxt-link
            >
            <nuxt-link
              to="/blog"
              class="nav-link text-decoration-none text-white"
              >Blog</nuxt-link
            >
            <!-- <nuxt-link
              to="/discussions"
              class="nav-link text-decoration-none text-white"
              >Discussions</nuxt-link
            > -->
          </div>

          <div
            id="login-company"
            class="d-flex justify-content-end align-items-center flex-grow-1 ml-auto"
          >
            <div
              v-if="!$auth.loggedIn"
              id="login-signup-div"
              class="d-flex align-items-center"
            >
              <!-- <nuxt-link
                  to="/"
                  class="text-decoration-none btn btn-sm bg-sv-warning text-white mr-2 px-2"
                >
                  <small>Guest</small>
                </nuxt-link> -->

              <nuxt-link
                to="/auth/login"
                class="text-decoration-none btn btn-sm btn-outline-light text-white mr-2 px-2"
              >
                <small>Login</small>
              </nuxt-link>
              <button class="btn btn-sm bg-sv-warning text-white">
                <nuxt-link
                  to="/auth/register"
                  class="text-decoration-none text-white text-uppercase"
                >
                  <small>SIGN UP</small>
                </nuxt-link>
              </button>
            </div>
            <div v-else class="d-flex align-items-center">
              <div class="small d-flex flex-column text-white text-right mr-1">
                <span class="text-capitalize text-white-50">
                  Welcome, <span>{{ user.user_data_name }}</span>
                  <!-- {{ substr(Auth::user()->user_data_name, 0, 10) }} -->
                  <span
                    v-if="
                      user.user_status_role_id == 1 ||
                      user.user_status_role_id == 2
                    "
                    class="small"
                  >
                    <i class="fa fa-check-circle text-info"></i>
                  </span>
                </span>
                <span id="balanceSpanId" class="font-weight-bold"
                  >&#8358; {{ formatNumber(user.balance) }}
                </span>
                <span> Bonus: &#8358;{{ formatNumber(user.bonus) }} </span>
                <!-- <button @click="logout">logout</button> -->
              </div>
              <div class="position-relative">
                <button
                  class="btn bg-sv-primary rightNavTopTextColor btn-sm dropdown-toggle"
                  type="button"
                  id="sidenav-toggler"
                  @click="toggle_right"
                >
                  <span><i class="fa fa-user"></i></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="row justify-content-center">
          <div class="col-12 p-0 topGamesList">
            <div class="text-capitalize topGamesList-left">
              <nuxt-link
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center bg-sv-primary"
                to="/"
              >
                <span class="mb-1 gameTopTitle gameTopTitleActive"
                  >Tournament</span
                >
                <span>
                  <img
                    src="~/assets/images/games/tournament/tournament.png"
                    style="height: 20px"
                    alt="tournament-icon"
                  />
                </span>
              </nuxt-link>
              <nuxt-link
                class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                to="/"
              >
                <span class="newBadge">New</span>
                <span class="mb-1 gameTopTitle">Dice lotto</span>
                <span>
                  <img
                    src="~/assets/images/games/lotto/dice-lotto.png"
                    style="height: 20px"
                    alt="dice-lotto-icon"
                  />
                </span>
              </nuxt-link>
              <nuxt-link
                class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                to="/dice/colors"
              >
                <span class="newBadge">New</span>
                <span class="mb-1 gameTopTitle">Colours</span>
                <span>
                  <img
                    src="~/assets/images/games/color/dice-colour.png"
                    style="height: 20px"
                    alt="dice-colours-icon"
                  />
                </span>
              </nuxt-link>
              <nuxt-link
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-white"
                to="/dice/single"
              >
                <span class="mb-1 gameTopTitle">Single</span>
                <span>
                  <img
                    src="~/assets/images/games/single/single.png"
                    style="height: 20px"
                    alt="single-icon"
                  />
                </span>
              </nuxt-link>
            </div>
            <div class="topGamesList-right">
              <a
                @click="openAllGamesList"
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-white"
              >
                <span class="gameTopTitle">All</span>
                <span>
                  <i
                    id="allGamesSlideDirection"
                    class="fa fa-caret-down fa-2x newGamesNotification"
                  ></i>
                </span>
              </a>
            </div>
          </div>
          <div class="col-12 p-0" style="display: none" id="allGamesList">
            <div class="topGamesList-left">
              <nuxt-link
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
                to="/dice/under-over"
              >
                <span class="mb-1 gameTopTitle">Under/Over</span>
                <span>
                  <img
                    src="~/assets/images/games/under-over/under-over.png"
                    style="height: 20px"
                    alt="tournament-icon"
                  />
                </span>
              </nuxt-link>

              <nuxt-link
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
                to="/dice/odd-even"
              >
                <span class="mb-1 gameTopTitle">Odd/Even</span>
                <span>
                  <img
                    src="~/assets/images/games/odd-even/odd-even.png"
                    style="height: 20px"
                    alt="odd-even-icon"
                  />
                </span>
              </nuxt-link>

              <nuxt-link
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                to="/dice/mega-ten"
              >
                <span class="mb-1 gameTopTitle">Mega Ten</span>
                <span>
                  <img
                    src="~/assets/images/games/mega-ten/mega-ten.png"
                    style="height: 20px"
                    alt="mega-ten-icon"
                  />
                </span>
              </nuxt-link>

              <nuxt-link to=""  class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap" style="visibility: hidden;" >
                <span class="mb-1 gameTopTitle">Mega Ten</span>
                <span>
                    <img src="" style="height: 20px" alt="mega-ten-icon" />
                </span>
              </nuxt-link>
            </div>
          </div>
      </div>
    </div>
      <side-nav v-if="$auth.loggedIn"></side-nav>
    <div class="col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
  </div>
</template>

<script>
import Games from "../Games.vue";
import SideNav from "./SideNav.vue";
export default {
  components: { Games, SideNav },
  layout: "single",
  name: "top",
  data() {
    return {
      isAllGamesListActive: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    toggle_right() {
      this.$store.commit("right_menu", "toggle");
    },
    openAllGamesList() {
      if (this.isAllGamesListActive === true) {
        this.isAllGamesListActive = false;
        $("#allGamesList").slideUp();
        $("#allGamesSlideDirection").removeClass("fa-caret-up");
        $("#allGamesSlideDirection").addClass("fa-caret-down");
        // document.getElementById('allGamesList').style.display = 'none';
      } else if (this.isAllGamesListActive == false) {
        this.isAllGamesListActive = true;
        $("#allGamesList").slideDown();
        $("#allGamesSlideDirection").removeClass("fa-caret-down");
        $("#allGamesSlideDirection").addClass("fa-caret-up");
        document.getElementById("allGamesList").style.display = "flex";
      }
    },
  },
};
</script>

<style scoped>
@import url("~/assets/css/navbar.css");
</style>

<style>
.goog-te-banner-frame.skiptranslate {
  display: none !important;
}
body {
  top: 0px !important;
}
</style>
