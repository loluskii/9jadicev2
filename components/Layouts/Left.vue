<template>
  <div>
    <div class="row">
      <div
        class="col-sm-12 col-md-12 col-lg-5 col-xl-5 d-lg-block d-xl-block d-md-block d-none"
      >
        <a>
          <img
            src="~/assets/images/banners/left-banner.png"
            class="img-fluid"
            style="width: 100%; height: 590px"
            alt="left-banner"
          />
        </a>
      </div>
      <div
        class="col-sm-12 col-md-12 col-lg-7 col-xl-7 d-lg-block d-xl-block d-md-none d-none"
      >
        <div class="my-2">
          <a
            href=""
            class="btn btn-block text-decoration-none btn-sm bg-sv-warning d-flex align-items-center justify-content-between text-white"
          >
            <span class="d-flex">
              <span class="mr-1"><i class="fa fa-user"></i></span>
              <span class="small">Register Now</span>
            </span>
            <span>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </span>
          </a>
          <a
            href="https://www.instagram.com/dice.ngofficial/"
            style="background-color: #9635bf"
            class="btn btn-block text-decoration-none btn-sm d-flex align-items-center"
          >
            <span class="d-flex">
              <span class="mr-1"
                ><i class="fa fa-instagram text-white"></i
              ></span>
            </span>
            <span class="small text-white">&#x40;dice.ngofficial</span>
          </a>
          <a
            href="https://twitter.com/dicengofficial"
            style="background-color: rgba(29, 161, 242, 1)"
            class="btn btn-block text-decoration-none btn-sm d-flex align-items-center"
          >
            <span class="d-flex">
              <span class="mr-1"><i class="fa fa-twitter text-white"></i></span>
            </span>
            <span class="small text-white">&#x40;dicengofficial</span>
          </a>
        </div>
        <div class="mb-2">
          <a href="">
            <img
              src="~/assets/images/banners/adverts/luxury.png"
              class="img-fluid"
              alt="luxury-card"
            />
          </a>
        </div>
        <a href="">
          <img
            src="~/assets/images/banners/adverts/biggest-prizes.png"
            class="img-fluid mb-3"
            alt="biggest-prizes-games-card"
          />
        </a>
      </div>
    </div>
    <div class="row d-lg-block d-xl-block d-none">
      <div class="col-12">
        <div class="row d-md-block d-lg-block d-xl-block d-none">
          <div class="col-12">
            <img
              src="~/assets/images/banners/dice-your-way.png"
              class="img-fluid"
              alt="dice-your-way-to-billions"
            />
          </div>
        </div>
        <div class="row d-md-block d-lg-block d-xl-block d-none">
          <div class="col-12">
            <a href="">
              <img
                src="~/assets/images/banners/contact-us.png"
                class="img-fluid"
                alt="contact-us-img"
              />
            </a>
          </div>
        </div>
        <div class="row d-none">
          <div class="col-12">
            <div class="carousel-inner">
              <div
                class=""
                style="background: url('~assets/images/banners/testimonials-bg.png'); background-size: 100% 100%; background-repeat: no-repeat; height: 205px;"
              >
                <div class="row h-100">
                  <div class="col-5"></div>
                  <div class="col-7 text-white small my-auto">
                    <div class="font-weight-bold text-sv-warning text-white">
                      No Review Yet
                    </div>
                    <div class="pr-3">
                      <a
                        class="text-decoration-none text-white btn btn-success btn-sm mt-1"
                        data-toggle="modal"
                        data-target="#reviewModal"
                      >
                        <span class="mr-3"><i class="fa fa-comment"></i></span
                        >Drop a review
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left'
};
</script>

<style scoped></style>
