<template>
  <main class="container">
    <div class="row">
      <section class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></section>
      <section class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-white mt-5">
        <div class="text-center mb-3"></div>
        <div class="d-flex justify-content-between align-items-center">
          <nuxt-link to="/">
            <img
              src="~/assets/images/logos/logo.png"
              style="height: 35px"
              alt="sv-logo"
            />
          </nuxt-link>
          <h4 class="text-capitalize">Sign In</h4>
        </div>
        <form autocomplete="off">
          <span
            class="invalid-feedback pt-3"
            style="display: block"
            role="alert"
            v-if="error"
          >
            <strong>{{ message }}</strong>
          </span>
          <div class="form-group">
            <label for="phone" class="text-white small">Username / Email</label>
            <input
              type="text"
              class="form-control  text-white"
              id="logContactNo"
              name="user_data_name"
              style="background-color: transparent"
              required
            />
          </div>

          <div class="form-group">
            <label for="logPassword" class="text-white">Password / PIN</label>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control  border-right-0 text-white"
                id="logPassword"
                name="password"
                style="background-color: transparent"
                required
              />
              <span
                class="input-group-text bg-transparent border-left-0 roundedLeftNone"
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

          <div class="text-danger" id="logFeedback"></div>
          <div
            class="form-group d-flex justify-content-center align-items-center mb-2"
          >
            <button
              type="submit"
              value="Login"
              id="loginBtn"
              name="login"
              class="btn bg-sv-primary rounded-pill px-4 text-white mr-2"
            >
              Login
            </button>



          </div>
        </form>
        <div
          class="d-flex justify-content-between align-items-center text-uppercase"
        >
          <nuxt-link to="/register" class="btn btn-sm text-white"
            ><small>Register</small></nuxt-link
          >
          <a class="btn btn-sm text-white" href=""
            ><small>Forgot Password</small></a
          >
        </div>
      </section>
      <section class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></section>
    </div>
  </main>
</template>

<script>
export default {
  name: "login",
  layout: "main"
};
</script>

<style scoped>
    main.container {
      margin-top: 20vh !important;
    }
    body {
      /* background-image: url('../images/green.jpg');
      opacity: 0.5; */
      margin: 0;
      padding: 0;
    }
    .bg-9jaluck2 {
      background-color: #008D5A !important;
    }
    .bg-sv-primary {
    		background-color: #067a23;
		}
		.bg-sv-warning {
			background-color: #ed8d0e;
		}
    .roundedPillLeft {
      border-bottom-left-radius: 18.5px;
      border-top-left-radius: 18.5px;
    }
    .roundedPillRight {
      border-bottom-right-radius: 18.5px;
      border-top-right-radius: 18.5px;
    }
    .roundedLeftNone {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  </style>
