<template>
  <div class="row">
    <div class="col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
    <div class="col-sm-12 col-md-10 col-lg-8 col-xl-6">
      <header class="container-fluid bg-black">
        <nav
          class="row bg-9jaluck align-items-center px-2 text-uppercase font-weight-light customNavbar py-2 small"
        >
          <div
            class="col-md-6 px-0 col-lg-6 col-12 d-flex mx-auto justify-content-between align-items-center"
          >
            <a class="" href="">
              <img
                src="/images/logos/logo.png"
                class="img-fluid"
                style="height: 40px"
                id="brand-logo"
              />
            </a>

            <div v-if="!$auth.loggedIn" id="login-company" class="">
              <div id="login-signup-div" class="d-flex align-items-center">
                <a
                  href=""
                  class="text-decoration-none btn btn-sm bg-sv-warning text-white mr-1 px-2"
                >
                  <small>Guest</small>
                </a>

                <nuxt-link
                  to="/auth/login"
                  class="text-decoration-none btn btn-sm btn-outline-light bg-transparent text-white mr-1 px-2"
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
            </div>

            <div v-else class="d-flex align-items-center">
              <div class="d-flex flex-column small text-white text-right mr-1">
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
      <side-nav v-if="$auth.loggedIn"></side-nav>
    </div>
    <div class="col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
  </div>
</template>

<script>
import Games from "../Games.vue";
import SideNav from "./SideNav.vue";
export default {
  components: { Games, SideNav },
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

.feature-menu {
  overflow-y: hidden;
  overflow-x: auto;
  flex: 1 1 0;
  width: 100%;
  margin: auto;
  background-color: var(--darkBackground);
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.menu-icon-svg {
  height: 35px;
}
.feature-icon-item-wrapper .txt {
  font-size: 10px;
  font-weight: 500;
}

@media screen and (max-width: 578px) {
  .topGamesList-left {
    overflow-y: hidden;
    overflow-x: auto;
    width: 100%;
    margin: auto;
  }
  .topGamesList-left > a {
    margin: 1px;
    padding: 5px 15px;
    /* flex: 1 1 0; */
  }

  .more_menu_btn {
    position: sticky;
    right: 0;
    /* background-color: #000; */
    width: 35px;
    /* font-size: 10px; */
    /* top: 75px;
    line-height: 1;
    padding-top: 5px;
    padding-bottom: 7.5px; */
  }
}
</style>
