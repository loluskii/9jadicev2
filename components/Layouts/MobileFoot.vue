<!-- Please remove this file from your project -->
<template>
  <div class="">
    <div class="container-fluid">
      <section
        class="row text-center justify-content-between fixed-bottom"

      >
        <div class="col-lg-6 mx-auto col-sm-12 py-2" style="background-color: #1d2124">
          <div class="row">
            <div class="small" style="width: 20%">
              <a
                href=""
                id="sidenav-toggler"
                class="d-flex flex-column card-link text-center text-white"
              >
                <span><i class="fa fa-home footer-icon"></i></span>
                <span class="small">Menu</span>
              </a>
            </div>
            <div  style="width: 20%" v-if="$auth.loggedIn" class="small">
              <a
                href=""
                class="d-flex flex-column card-link text-center text-white"
              >
                <span class="position-relative">
                  <!-- @if ($betNotifications > 0)
              <span
                class="badge badge-danger position-absolute"
                style="right: 0; margin-right: 20px"
              >
                {{ 1 }}
              </span>
              @endif -->
                  <i class="fa fa-bars footer-icon"></i>
                </span>
                <span class="small text-nowrap">My Bets</span>
              </a>
            </div>
            <div  style="width: 20%" v-if="$auth.loggedIn" class="small">
              <a
                href=""
                class="d-flex flex-column align-items-center card-link text-center text-white"
              >
                <div class="text-center">
                  <img
                    src="~/assets/images/logos/logo-favicon.png"
                    style="height: 20px"
                  />
                </div>
                <span class="small">Connect</span>
              </a>
            </div>
            <div  style="width: 20%" class="small">
              <a
                href=""
                class="d-flex flex-column card-link text-center text-white"
              >
                <span><i class="fa fa-money footer-icon"></i></span>
                <span class="small">Deposit</span>
              </a>
            </div>
            <div v-if="!$auth.loggedIn" class="col-2 small">
              <a
                href=""
                class="d-flex flex-column card-link text-center text-white"
              >
                <span><i class="fa fa-user footer-icon"></i></span>
                <span class="small text-nowrap">Sign Up</span>
              </a>
            </div>
            <div v-if="!$auth.loggedIn" class="col-2 small">
              <a
                href=""
                class="d-flex flex-column card-link text-center text-white"
              >
                <span><i class="fa fa-question footer-icon"></i></span>
                <span class="small">How To</span>
              </a>
            </div>
            <div style="width: 20%" v-if="$auth.loggedIn" class="small">
              <a
                href=""
                class="d-flex flex-column card-link text-center text-white"
              >
                <span class="position-relative">
                  <i class="fa fa-question footer-icon"></i>
                </span>
                <span class="small">How To</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-foot",
  data() {
    return {};
  },
  methods: {},
};
</script>
