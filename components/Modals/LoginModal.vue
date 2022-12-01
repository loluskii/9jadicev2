<template>
  <b-modal
    centered
    hide-header
    hide-footer
    content-class="bg-sv-primary curvedEdge"
    body-class="p-0 bg-black curvedEdge"
    id="loginModal"
    title="Login"
    title-class="text-uppercase font-weight-bold"
  >
    <div class="container-fluid label-animate">
      <div
        class="row justify-content-between align-items-center bg-sv-primary p-2 customModalTop"
      >
        <div>
          <nuxt-link to="/">
            <img style="height: 25px" src="/images/logos/logo-white.png" />
          </nuxt-link>
        </div>
        <div class="text-uppercase text-center font-weight-bold">
          <span>Sign In</span>
        </div>
        <button
          type="button"
          class="btn rounded-circle p-2"
          @click="close"
          aria-label="Close"
        >
          <span aria-hidden="true"><i class="fa fa-times text-white"></i></span>
        </button>
      </div>
      <div class="row label-animate">
        <div class="col-12 label-animate">
          <form class="label-animate">
            <div class="form-group label-animate">
              <label for="phone" class="text-white">Username / Email</label>
              <input
                type="text"
                class="form-control rounded-pill text-white"
                id="logContactNo"
                name="user_data_name"
                style="background-color: transparent"
                required=""
              />
            </div>
            <div class="form-group label-animate">
              <label for="logPassword" class="text-white">Password / PIN</label>
              <div class="input-group mb-3 label-animate">
                <input
                  type="password"
                  class="form-control roundedPillLeft border-right-0 text-white"
                  id="logPassword"
                  name="password"
                  style="background-color: transparent"
                  required=""
                />
                <span
                  class="input-group-text bg-transparent border-left-0 roundedPillRight roundedLeftNone"
                  id="showP"
                  onclick="showPassword()"
                >
                  <i class="fa fa-eye text-white" id="eyeP"></i>
                  <i
                    class="fa fa-eye-slash text-secondary"
                    id="eyePClose"
                    style="display: none"
                  ></i>
                </span>
              </div>
            </div>
            <div class="text-sv-warning text-center" id="logFeedback"></div>
            <div class="form-group d-flex justify-content-center mb-2">
              <input
                type="button"
                value="Login"
                id="loginBtn"
                name="login"
                class="btn mr-2 bg-sv-primary px-4 text-sv-primary"
                onclick="submitLogin()"
              />
            </div>
          </form>
          <div class="d-flex justify-content-between align-items-center">
            <nuxt-link to="/auth/register" class="btn text-white"
              >Register</nuxt-link
            >
            <a class="text-white" href="">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "login-modal",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$bvModal.hide("loginModal");
    },
  },
};
</script>

<style></style>
