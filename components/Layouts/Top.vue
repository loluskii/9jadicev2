<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-1 col-lg-2 col-xl-3"></div>
      <div class="col-sm-12 col-md-10 col-lg-8 col-xl-6">
        <header class="container-fluid p-0">
          <nav
            class="d-none row bg-9jaluck align-items-center text-uppercase font-weight-light customNavbar py-2 small"
          >
            <a class="" href="">
              <img
                src="~/assets/images/logos/logo.png"
                class="img-fluid"
                style="height: 30px"
                id="brand-logo"
              />
            </a>
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
              <nuxt-link
                to="/discussions"
                class="nav-link text-decoration-none text-white"
                >Discussions</nuxt-link
              >
            </div>

            <div
              id="login-company"
              class="d-flex justify-content-end align-items-center flex-grow-1 ml-auto"
            >
              <div id="login-signup-div" class="d-flex align-items-center">
                <a
                  href=""
                  class="text-decoration-none btn btn-sm bg-sv-warning text-white mr-2 px-2"
                >
                  <small>Guest</small>
                </a>

                <a
                  href=""
                  class="text-decoration-none btn btn-sm btn-outline-light text-white mr-2 px-2"
                >
                  <small>Login</small>
                </a>
                <button class="btn btn-sm bg-sv-warning text-white">
                  <a
                    href=""
                    class="text-decoration-none text-white text-uppercase"
                  >
                    <small>SIGN UP</small>
                  </a>
                </button>
              </div>
            </div>
          </nav>
          <div class="row py-2">
            <!-- <div class="col-md-3"></div> -->
            <div class="col-md-8 p-0">
              <nuxt-link to="/">
                <img
                  src="~/assets/images/logos/logo.png"
                  class="img-fluid"
                  style="height: 35px"
                  id="brand-logo"
                />
              </nuxt-link>
              <div class="d-none align-items-center">
                <nuxt-link
                  to="/"
                  class="nav-link text-decoration-none text-white"
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
                <nuxt-link
                  to="/discussions"
                  class="nav-link text-decoration-none text-white"
                  >Discussions</nuxt-link
                >
              </div>
            </div>
            <div class="col-md-4 p-0 m-0">
              <div
                id="login-company"
                class="d-flex justify-content-end align-items-center flex-grow-1 ml-auto"
              >
                <div id="login-signup-div" class="d-flex align-items-center">
                  <!-- <a
                    href=""
                    class="text-decoration-none btn btn-sm bg-sv-warning text-white mr-2 px-2"
                  >
                    <small>Guest</small>
                  </a> -->

                  <a
                    href=""
                    class="text-decoration-none btn btn-sm btn-outline-light text-white mr-2 px-2"
                  >
                    <small>Login</small>
                  </a>
                  <button class="btn btn-sm bg-sv-warning text-white">
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
          </div>
        </header>

        <!-- Games List -->
        <div class="row justify-content-center">
          <div class="col-12 p-0 topGamesList">
            <div class="text-capitalize topGamesList-left">
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center bg-sv-primary"
                href=""
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
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                href=""
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
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
                href=""
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
              </a>
              <a
                onclick="callLoader()"
                class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-white"
                href=""
              >
                <span class="mb-1 gameTopTitle">Single</span>
                <span>
                  <img
                    src="~/assets/images/games/single/single.png"
                    style="height: 20px"
                    alt="single-icon"
                  />
                </span>
              </a>
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
        <section data-v-1ad9e7d2="" class="d-none feature-menu p1 feature-stick">
          <div
            data-v-1ad9e7d2=""
            class="icons-wrapper top-menu-items d-flex justify-content-between"
          >
            <div
              data-v-1ad9e7d2=""
              class="feature-icon-item-wrapper text-center active"
            >
              <a
                data-v-1ad9e7d2=""
                href="/"
                aria-current="page"
                class="router-link-exact-active router-link-active"
                ><img
                  data-v-1ad9e7d2=""
                  src="https://storage.spotika.co.ke/spotika-media/img/icon/home.png"
                  class="menu-icon-svg"
                /><!---->
                <br data-v-1ad9e7d2="" /><span
                  data-v-1ad9e7d2=""
                  class="text-blue txt"
                  >Home</span
                ></a
              ><!----><!---->
            </div>
            <div
              data-v-1ad9e7d2=""
              class="feature-icon-item-wrapper text-center"
            >
              <a data-v-1ad9e7d2="" href="/live" class=""
                ><img
                  data-v-1ad9e7d2=""
                  src="https://storage.googleapis.com/spotika-media/img/icon/Live-Icons.png"
                  class="menu-icon-svg"
                /><sup data-v-1ad9e7d2=""
                  ><span data-v-1ad9e7d2="" class="custom-badge">NEW</span></sup
                >
                <br data-v-1ad9e7d2="" /><span
                  data-v-1ad9e7d2=""
                  class="text-blue txt"
                  >Live</span
                ></a
              ><!----><!---->
            </div>
            <div
              data-v-1ad9e7d2=""
              class="feature-icon-item-wrapper text-center"
            >
              <a data-v-1ad9e7d2="" href="/jackpots" class=""
                ><img
                  data-v-1ad9e7d2=""
                  src="https://storage.spotika.co.ke/spotika-media/img/icon/jp.png"
                  class="menu-icon-svg"
                /><!---->
                <br data-v-1ad9e7d2="" /><span
                  data-v-1ad9e7d2=""
                  class="text-blue txt"
                  >Jackpots</span
                ></a
              ><!----><!---->
            </div>
            <div
              data-v-1ad9e7d2=""
              class="feature-icon-item-wrapper text-center"
            >
              <a data-v-1ad9e7d2="" href="/spotika-fasta" class=""
                ><img
                  data-v-1ad9e7d2=""
                  src="https://storage.spotika.co.ke/spotika-media/img/icon/spotika_fasta.png"
                  class="menu-icon-svg"
                /><sup data-v-1ad9e7d2=""
                  ><span data-v-1ad9e7d2="" class="custom-badge">NEW</span></sup
                >
                <br data-v-1ad9e7d2="" /><span
                  data-v-1ad9e7d2=""
                  class="text-blue txt"
                  >Spotika Fasta</span
                ></a
              ><!----><!---->
            </div>
            <div
              data-v-1ad9e7d2=""
              class="feature-icon-item-wrapper text-center"
            >
              <a data-v-1ad9e7d2="" href="/quickpesa" class=""
                ><img
                  data-v-1ad9e7d2=""
                  src="https://storage.spotika.co.ke/spotika-media/img/icon/Quickpesa-Icons.png"
                  class="menu-icon-svg"
                /><sup data-v-1ad9e7d2=""
                  ><span data-v-1ad9e7d2="" class="custom-badge">NEW</span></sup
                >
                <br data-v-1ad9e7d2="" /><span
                  data-v-1ad9e7d2=""
                  class="text-blue txt"
                  >Quickpesa</span
                ></a
              ><!----><!---->
            </div>
            <div
              data-v-1ad9e7d2=""
              class="feature-icon-item-wrapper text-center"
            >
              <!----><a data-v-1ad9e7d2=""
                ><img
                  data-v-1ad9e7d2=""
                  src="https://storage.spotika.co.ke/spotika-media/svg/comet.svg"
                  class="menu-icon-svg"
                /><sup data-v-1ad9e7d2=""
                  ><span data-v-1ad9e7d2="" class="custom-badge">NEW</span></sup
                >
                <br data-v-1ad9e7d2="" /><span
                  data-v-1ad9e7d2=""
                  class="text-blue txt"
                  >Comet</span
                ></a
              ><!---->
            </div>
            <div
              data-v-1ad9e7d2=""
              class="feature-icon-item-wrapper text-center"
            >
              <a data-v-1ad9e7d2="" href="/virtuals" class=""
                ><img
                  data-v-1ad9e7d2=""
                  src="https://storage.spotika.co.ke/spotika-media/img/icon/virtuals.png"
                  class="menu-icon-svg"
                /><sup data-v-1ad9e7d2=""
                  ><span data-v-1ad9e7d2="" class="custom-badge">NEW</span></sup
                >
                <br data-v-1ad9e7d2="" /><span
                  data-v-1ad9e7d2=""
                  class="text-blue txt"
                  >Virtuals</span
                ></a
              ><!----><!---->
            </div>
          </div>
        </section>
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
.feature-menu {
    overflow-y: hidden;
    overflow-x: auto;
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
</style>
