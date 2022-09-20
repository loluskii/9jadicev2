<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
      <div class="col-sm-12 col-md-10 col-lg-8 col-xl-6">
        <header class="container-fluid fixed-top bg-black">
          <nav
            class="row bg-9jaluck align-items-center px-2 text-uppercase font-weight-light customNavbar py-2 small"
          >
            <div
              class="col-md-6 px-0 col-lg-6 col-12 d-flex mx-auto justify-content-between align-items-center"
            >
              <a class="" href="">
                <img
                  src="~/assets/images/logos/logo.png"
                  class="img-fluid"
                  style="height: 30px"
                  id="brand-logo"
                />
              </a>

              <div id="login-company" class="">
                <div id="login-signup-div" class="d-flex align-items-center">
                  <a
                    href=""
                    class="text-decoration-none btn btn-sm bg-sv-warning text-white mr-1 px-2"
                    style="font-size:smaller"
                  >
                    <small>Guest</small>
                  </a>

                  <a
                    href=""
                    class="text-decoration-none btn btn-sm btn-outline-light text-white mr-1 px-2"
                    style="font-size:smaller"
                  >
                    <small>Login</small>
                  </a>
                  <button class="btn btn-sm bg-sv-warning text-white" style="font-size:smaller">
                    <a
                      href=""
                      class="text-decoration-none text-white text-uppercase"
                    >
                      <small>SIGN UP</small>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div class="col-md-6 px-sm-2 px-0 col-lg-6 col-12 mx-auto">
            <!-- Games List -->
            <div class="row justify-content-center">
              <div class="col-12 p-0 topGamesList">
                <div
                  class="text-capitalize text-nowrap hideScrollbar topGamesList-left"
                >
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm text-white activeGameTypeButton rounded-0 d-flex flex-column justify-content-center"
                    href=""
                  >
                    <span>
                      <img
                        src="~/assets/images/games/tournament/tournament.png"
                        style="height: 20px"
                        alt="tournament-icon"
                        class="mb-1"
                      />
                    </span>
                    <span class="gameTopTitle gameTopTitleActive"
                      >Tournament</span
                    >
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm text-white border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                    href=""
                  >
                    <span class="newBadge">New</span>
                    <span>
                      <img
                        src="~/assets/images/games/lotto/dice-lotto.png"
                        style="height: 22px"
                        alt="dice-lotto-icon"
                        class="mb-0"
                      />
                    </span>
                    <span class="gameTopTitle">Dice lotto</span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm text-white border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                    href=""
                  >
                    <span class="newBadge">New</span>
                    <span>
                      <img
                        src="~/assets/images/games/color/dice-colour.png"
                        style="height: 20px"
                        alt="dice-colours-icon"
                        class="mb-1"
                      />
                    </span>
                    <span class="gameTopTitle">Colours</span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center text-white"
                    href=""
                  >
                    <span>
                      <img
                        src="~/assets/images/games/single/single.png"
                        style="height: 20px"
                        alt="single-icon"
                        class="mb-1"
                      />
                    </span>
                    <span class="gameTopTitle">Single</span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center"
                    href=""
                  >
                    <span>
                      <img
                        src="~/assets/images/games/under-over/under-over.png"
                        style="height: 20px"
                        alt="tournament-icon"
                        class="mb-1"
                      />
                    </span>
                    <span class="gameTopTitle">Under/Over</span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center"
                    href=""
                  >
                    <span>
                      <img
                        src="~/assets/images/games/odd-even/odd-even.png"
                        style="height: 20px"
                        alt="odd-even-icon"
                        class="mb-1"
                      />
                    </span>
                    <span class="gameTopTitle">Odd/Even</span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                    href=""
                  >
                    <span>
                      <img
                        src="~/assets/images/games/mega-ten/mega-ten.png"
                        style="height: 20px"
                        alt="mega-ten-icon"
                        class="mb-1"
                      />
                    </span>
                    <span class="gameTopTitle">Mega Ten</span>
                  </a>
                  <!-- <a
                    onclick="callLoader()"
                    class="btn btn-sm d-none text-white border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                    style="visibility: hidden"
                  >
                    <span>
                      <img
                        src="~/assets/images/games/mega-ten/mega-ten.png"
                        style="height: 20px"
                        alt="mega-ten-icon"
                        class="mb-1"
                      />
                    </span>
                    <span class="gameTopTitle">Mega Ten</span>
                  </a> -->
                  <a
                    @click="openAllGamesList"
                    class="btn btn-sm p-1 btn-dark more_menu_btn border-0 rounded-0 d-flex flex-column justify-content-center text-white"
                  >
                    <span>
                      <i
                        id="allGamesSlideDirection"
                        class="fa fa-ellipsis-v mb-2"
                        style="padding-bottom: 1px"
                      ></i>
                    </span>
                    <span class="gameTopTitle">More</span>
                  </a>
                </div>
              </div>
              <div class="col-12 p-0" style="display: none" id="allGamesList">
                <div class="topGamesList-left">
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
                    href=""
                  >
                    <span class="mb-1 gameTopTitle">Under/Over</span>
                    <span>
                      <img
                        src="~/assets/images/games/under-over/under-over.png"
                        style="height: 20px"
                        alt="tournament-icon"
                      />
                    </span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
                    href=""
                  >
                    <span class="mb-1 gameTopTitle">Odd/Even</span>
                    <span>
                      <img
                        src="~/assets/images/games/odd-even/odd-even.png"
                        style="height: 20px"
                        alt="odd-even-icon"
                      />
                    </span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                    href=""
                  >
                    <span class="mb-1 gameTopTitle">Mega Ten</span>
                    <span>
                      <img
                        src="~/assets/images/games/mega-ten/mega-ten.png"
                        style="height: 20px"
                        alt="mega-ten-icon"
                      />
                    </span>
                  </a>
                  <a
                    onclick="callLoader()"
                    class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                    href=""
                    style="visibility: hidden"
                  >
                    <span class="mb-1 gameTopTitle">Mega Ten</span>
                    <span>
                      <img src="" style="height: 20px" alt="mega-ten-icon" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <!-- Games List -->
          </div>
        </header>

        <!-- Games List -->
        <div class="d-none row justify-content-center mt-5">
          <div class="col-12 p-0 topGamesList">
            <div
              class="text-capitalize text-nowrap hideScrollbar topGamesList-left"
            >
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white activeGameTypeButton rounded-0 d-flex flex-column justify-content-center"
                href=""
              >
                <span>
                  <img
                    src="~/assets/images/games/tournament/tournament.png"
                    style="height: 20px"
                    alt="tournament-icon"
                    class="mb-1"
                  />
                </span>
                <span class="gameTopTitle gameTopTitleActive">Tournament</span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                href=""
              >
                <span class="newBadge">New</span>
                <span>
                  <img
                    src="~/assets/images/games/lotto/dice-lotto.png"
                    style="height: 22px"
                    alt="dice-lotto-icon"
                    class="mb-0"
                  />
                </span>
                <span class="gameTopTitle">Dice lotto</span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                href=""
              >
                <span class="newBadge">New</span>
                <span>
                  <img
                    src="~/assets/images/games/color/dice-colour.png"
                    style="height: 20px"
                    alt="dice-colours-icon"
                    class="mb-1"
                  />
                </span>
                <span class="gameTopTitle">Colours</span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center text-white"
                href=""
              >
                <span>
                  <img
                    src="~/assets/images/games/single/single.png"
                    style="height: 20px"
                    alt="single-icon"
                    class="mb-1"
                  />
                </span>
                <span class="gameTopTitle">Single</span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center"
                href=""
              >
                <span>
                  <img
                    src="~/assets/images/games/under-over/under-over.png"
                    style="height: 20px"
                    alt="tournament-icon"
                    class="mb-1"
                  />
                </span>
                <span class="gameTopTitle">Under/Over</span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center"
                href=""
              >
                <span>
                  <img
                    src="~/assets/images/games/odd-even/odd-even.png"
                    style="height: 20px"
                    alt="odd-even-icon"
                    class="mb-1"
                  />
                </span>
                <span class="gameTopTitle">Odd/Even</span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                href=""
              >
                <span>
                  <img
                    src="~/assets/images/games/mega-ten/mega-ten.png"
                    style="height: 20px"
                    alt="mega-ten-icon"
                    class="mb-1"
                  />
                </span>
                <span class="gameTopTitle">Mega Ten</span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm text-white border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                style="visibility: hidden"
              >
                <span>
                  <img
                    src="~/assets/images/games/mega-ten/mega-ten.png"
                    style="height: 20px"
                    alt="mega-ten-icon"
                    class="mb-1"
                  />
                </span>
                <span class="gameTopTitle">Mega Ten</span>
              </a>
              <a
                @click="openAllGamesList"
                class="btn btn-sm p-1 more_menu_btn border-0 rounded-0 d-flex flex-column justify-content-center text-white"
              >
                <span>
                  <i
                    id="allGamesSlideDirection"
                    class="fa fa-ellipsis-v mb-2"
                    style="padding-bottom: 1px"
                  ></i>
                </span>
                <span class="gameTopTitle">More</span>
              </a>
            </div>
          </div>
          <div class="col-12 p-0" style="display: none" id="allGamesList">
            <div class="topGamesList-left">
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
                href=""
              >
                <span class="mb-1 gameTopTitle">Under/Over</span>
                <span>
                  <img
                    src="~/assets/images/games/under-over/under-over.png"
                    style="height: 20px"
                    alt="tournament-icon"
                  />
                </span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
                href=""
              >
                <span class="mb-1 gameTopTitle">Odd/Even</span>
                <span>
                  <img
                    src="~/assets/images/games/odd-even/odd-even.png"
                    style="height: 20px"
                    alt="odd-even-icon"
                  />
                </span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                href=""
              >
                <span class="mb-1 gameTopTitle">Mega Ten</span>
                <span>
                  <img
                    src="~/assets/images/games/mega-ten/mega-ten.png"
                    style="height: 20px"
                    alt="mega-ten-icon"
                  />
                </span>
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
                href=""
                style="visibility: hidden"
              >
                <span class="mb-1 gameTopTitle">Mega Ten</span>
                <span>
                  <img src="" style="height: 20px" alt="mega-ten-icon" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- Games List -->
      </div>
      <div class="col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      isAllGamesListActive: false,
    };
  },
  methods: {
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

<style scoped>
.goog-te-banner-frame.skiptranslate {
  display: none !important;
}
body {
  top: 0px !important;
}
.tops{
  padding-top: 130px;
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

.topGamesList-left > a > span.newBadge {
  position: absolute;
  bottom: 36px;
  right: 14px;
  font-size: 8px;
  border-radius: 2px;
  background-color: #ff0000;
  padding-left: 2px;
  padding-right: 2px;
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
