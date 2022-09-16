<template>
  <div>
    <div class="row">
      <div
        class="col-sm-12 col-md-12 col-lg-7 col-xl-7 d-lg-block d-xl-block d-md-none d-none"
      >
        <div class="my-2">
          <a
            href=""
            class="btn btn-sm btn-block text-center notificationAnimationBg"
            id="endsInTenMinutesButton2"
          >
            <img
              class="img-fluid mr-2"
              src="~/assets/images/logos/connect-logo.png"
              alt=""
            />
          </a>
          <a
            href=""
            class="btn btn-sm btn-block bg-sv-primary text-sv-primary d-flex align-items-center justify-content-between"
          >
            <span class="small">My Bets</span>
            <span class="badge badge-danger">0</span>
          </a>
        </div>
        <div class="mb-2">
          <a href="">
            <img
              src="~/assets/images/banners/adverts/state.png"
              class="img-fluid"
              alt="state-games-card"
            />
          </a>
        </div>
        <a href="">
          <img
            src="~/assets/images/banners/adverts/free.png"
            class="img-fluid"
            alt="free-games-card"
          />
        </a>
      </div>
      <div
        class="col-sm-12 col-md-12 col-lg-5 col-xl-5 d-lg-block d-xl-block d-md-block d-none"
      >
        <a href="">
          <img src="~/assets/images/banners/right-banner.png" class="img-fluid" style="width: 100%; height: 590px"
          alt="right-banner" />
        </a>
      </div>
    </div>
    <div class="row d-lg-block d-xl-block d-none">
      <!-- @include('desktop.components.welcome.top-10-players') -->
    </div>
  </div>
</template>

<script>
export default {
  name:'right'
};
</script>

<style scoped></style>
