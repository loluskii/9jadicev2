<template>
  <div class="container">
    <section
      class="wow bounceInDown mb-5 d-none d-md-block d-lg-block d-xl-block"
      style="z-index: -1"
    >
      <aside class="w-100 mt-2 text-center">
        <img
          src="~/assets/images/affiliates/hero.jpeg"
          class="img-fluid affiliate-img-height wow bounceInDown"
          data-wow-duration="1s"
        />
      </aside>
    </section>

    <section
      class="container my-1 d-block d-md-none d-lg-none d-xl-none wow bounceInUp bg-white text-center"
      data-wow-duration="1s"
      data-wow-delay="2s"
      ata-wow-offset="5"
    >
      <aside>
        <img
          src="~/assets/images/affiliates/hero-mobile.png"
          style="height: 400px; width: 70%"
        />
      </aside>
      <section
        class="bg-dark py-3"
        style="
          background: url(~/assets/images/affiliates/bg-mobile.png);
          height: 60%;
        "
      >
        <aside>
          <div>
            <span
              class="text-uppercase font-weight-bold text-white"
              style="font-size: small"
              >dice.ng partners program</span
            >
          </div>
          <div>
            <div
              class="text-capitalize px-5"
              style="color: #ec7f00; font-size: small"
            >
              Earn commission with the Nigeria’s bigest dice tournament games
            </div>
          </div>
        </aside>
        <section class="container mt-3">
          <aside
            class="d-flex justify-content-between align-items-center bg-white shadow p-1 mt-2"
            style="border-radius: 10px"
          >
            <div class="flex-fill mr-2">
              <img
                src="~/assets/images/affiliates/verified-user-icon.png"
                height="40px"
                class=""
              />
            </div>
            <div class="text-left bg-white flex-fill">
              <div
                class="font-weight-bold text-uppercase green font-weight-bold"
                style="font-size: small"
              >
                celebrity partners
              </div>
              <nuxt-link
                to=""
                style="font-size: small"
                class="text-muted"
                >Click here to get started on the program.</nuxt-link
              >
            </div>
          </aside>

          <aside
            class="d-flex justify-content-between align-items-center bg-white shadow p-1 mt-2"
            style="border-radius: 10px"
          >
            <div class="flex-fill mr-2">
              <img
                src="~/assets/images/affiliates/verified-icon-mobile.png"
                height="40px"
                class=""
              />
            </div>
            <div class="text-left bg-white flex-fill">
              <div
                class="font-weight-bold text-uppercase green font-weight-bold"
                style="font-size: small"
              >
                verified partners
              </div>
              <nuxt-link
                to=""
                style="font-size: small"
                class="text-muted"
                >Click here to get started as a verified player.</nuxt-link
              >
            </div>
          </aside>

          <aside
            class="d-flex justify-content-between align-items-center bg-white shadow p-1 mt-2"
            style="border-radius: 10px"
          >
            <div class="flex-fill mr-2">
              <img
                src="~/assets/images/affiliates/agent-icon-mobile.png"
                height="40px"
                class=""
              />
            </div>
            <div class="text-left bg-white flex-fill">
              <div
                class="font-weight-bold text-uppercase green font-weight-bold"
                style="font-size: small"
              >
                agent partners
              </div>
              <nuxt-link
                to=""
                style="font-size: small"
                class="text-muted"
                >Click here to get started as an agent partner.</nuxt-link
              >
            </div>
          </aside>
        </section>
      </section>
    </section>

    <section
      class="container my-5 d-none d-md-block d-lg-block d-xl-block wow bounceInUp"
      data-wow-duration="1s"
      data-wow-delay="2s"
      ata-wow-offset="5"
    >
      <div class="row justify-content-around">
        <aside
          class="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center p-3 bg-light shadow wow slideIn my-2 my-md-0 my-lg-0 my-xl-0"
        >
          <div
            class="rounded rounded-circle circles d-flex align-items-center justify-content-center mx-auto shadow wow flipInY"
            data-wow-iteration="infinite"
            data-wow-duration="8s"
          >
            <img
              src="~/assets/images/affiliates/celeb-icon.jpg"
              alt="celebrity icon"
              class="img-fluid"
            />
          </div>
          <div class="my-3 text-muted">
            <div class="text-dark font-weight-bold text-uppercase">
              celebrity partner
            </div>
            <div class="px-5">
              Click here to get started as a celebrity partner.
            </div>
          </div>
          <nuxt-link to="/content/affiliates/celebrity">
            <button
              class="btn btn-md btn-color border-0 shadow-sm text-uppercase my-2 font-weight-bold"
            >
              get started
            </button>
          </nuxt-link>
        </aside>

        <aside
          class="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center p-3 bg-light shadow my-2 my-md-0 my-lg-0 my-xl-0"
        >
          <div
            class="rounded rounded-circle circles d-flex align-items-center justify-content-center mx-auto shadow wow flipInY"
            data-wow-iteration="infinite"
            data-wow-duration="10s"
          >
            <img
              src="~/assets/images/affiliates/verified-icon.jpg"
              alt="verified user icon"
              class="img-fluid"
            />
          </div>
          <div class="my-3 text-muted">
            <div class="text-dark font-weight-bold text-uppercase">
              verified partner
            </div>
            <div class="px-5">
              Click here to get started as a verified partner.
            </div>
          </div>
          <nuxt-link to="/content/affiliates/verified">
            <button
              class="btn btn-md btn-color border-0 shadow-sm text-uppercase my-2 font-weight-bold"
            >
              get started
            </button>
          </nuxt-link>
        </aside>

        <aside
          class="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center p-3 bg-light shadow border-right my-2 my-md-5 my-lg-0 my-xl-0"
        >
          <div
            class="rounded rounded-circle circles d-flex align-items-center justify-content-center mx-auto shadow wow flipInY"
            data-wow-iteration="infinite"
            data-wow-duration="8s"
          >
            <img
              src="~/assets/images/affiliates/agent-icon.jpg"
              alt="agent icon"
              class="img-fluid"
              data-wow-duration="2s"
            />
          </div>
          <div class="my-3 text-muted">
            <div class="text-dark font-weight-bold text-uppercase">
              agent partner
            </div>
            <div class="px-5">
              Click here to get started as an agent partner.
            </div>
          </div>
          <nuxt-link to="/content/affiliates/agents">
            <button
              class="btn btn-md btn-color border-0 shadow-sm text-uppercase my-2 font-weight-bold"
            >
              get started
            </button>
          </nuxt-link>
        </aside>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "affiliates",
  layout: 'single'
};
</script>

<style
>
.nav-link {
  font-size: 1.1em;
}

.btn-color {
  transition: 1s all;
  color: rgb(5, 10, 1);
  background-image: linear-gradient(
    to top,
    rgb(4, 121, 38) 1%,
    #a2dfdf 100%,
    #6bcec6 100%,
    #a2dfda 100%
  );
}
.btn-color:hover {
  background-image: linear-gradient(
    to top,
    #a2dfda 0%,
    #6bcec6 100%,
    rgb(4, 121, 38) 100%,
    rgb(4, 121, 38) 100%
  );
  color: rgb(5, 10, 1, 0.8);
}
.circles {
  width: 140px;
  height: 140px;
}
.icons {
  font-size: 4em;
  color: rgb(4, 121, 38);
}
.text-style {
  font-size: 2em;
  color: rgb(4, 121, 38);
  text-shadow: 1px 1px 1px rgb(1, 63, 29);
}
.green {
  color: #097225;
}

@media screen and (max-width: 767px) {
  .text-style {
    font-size: 1.4em;
  }
}
</style>
