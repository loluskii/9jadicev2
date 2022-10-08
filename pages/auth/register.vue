<template>
  <div class="container">
    <div class="row">
      <section class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></section>
      <section class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-white mt-5">
        <div class="text-center mb-3"></div>
        <div class="d-flex justify-content-between mb-2 align-items-center">
          <nuxt-link to="/">
            <img
              src="~/assets/images/logos/logo.png"
              style="height: 35px"
              alt="sv-logo"
            />
          </nuxt-link>
          <h5 class="text-capitalize">Create an Account</h5>
        </div>
        <form @submit.prevent="registerUser">
          <div class="form-group">
            <label class="regUsername">Username</label>
            <input
              type="text"
              class="form-control text-white bg-transparent font-weight-bold"
              name="user_data_name"
              v-model="formData.username"
              required
            />
            <div v-if="formData.username == ''" class="small text-sv-warning">
              Username can not be left empty.
            </div>
          </div>
          <div class="form-group">
            <label class="regEmail">Email Address</label>
            <input
              type="email"
              class="form-control text-white font-weight-bold bg-transparent"
              id="regEmail"
              name="email"
              v-model="formData.email"
            />
          </div>
          <div class="form-group">
            <label class="regContactNo">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              class="form-control text-white font-weight-bold bg-transparent"
              minlength="11"
              name="phone_no"
              v-model="formData.phone_no"
            />
          </div>
          <div class="form-group">
            <label for="regPassword">Password</label>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control bg-transparent text-white border-right-0 font-weight-bold"
                id="regPassword"
                name="password"
                v-model="formData.password"
                required
              />

            </div>
          </div>
          <div class="form-group mb-3">
            <label for="regPassword">Confirm Password</label>
            <div class="input-group">
              <input
                type="password"
                class="form-control bg-transparent text-white border-right-0 font-weight-bold"
                id="cPassword"
                name="password_confirmation"
                required
              />

            </div>
          </div>
          <div class="form-group">
            <label class="regPromoCode">Promo Code (Optional)</label>
            <input
              type="text"
              class="form-control text-white font-weight-bold bg-transparent"
              name="promo_code"
              v-model="formData.promo_code"
            />
          </div>
          <div class="text-center mt-2">
            <input
              type="checkbox"
              class="text-white font-weight-bold"
              name="term"
              id="agreeToTerms"
              v-model="age_limit"
              required
            />
            <small  style="font-size: 12px">I am at least 18 years of age and I have read, accepted and agreed to the  <a class="text-sv-primary" style="color: #067a23;" href="https://9jadice.test/terms-and-conditions">Terms and Conditions</a>, rules, privacy policy, cookies policy and policies relating to age verification.</small>
          </div>

          <div class="text-center mt-2">
            <button
              :class='{"disabled": (age_limit == false)}'
              type="submit"
              id="registerBtn"
              name="register"
              class="btn btn-block bg-sv-primary px-4 text-white"
              style="background-color: #067a23"
            >
              Register
            </button>
          </div>
        </form>
        <div class="d-flex justify-content-center align-items-center">
            Already have an account ?
            <nuxt-link to="/auth/login" class="btn btn-sm text-sv-primary" style="color: #067a23;">Sign in here</nuxt-link><br>
        </div>
      </section>
      <section class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  layout: "main",
  data() {
    return {
      age_limit: false,
      formData: {
        username: "",
        password: "",
        email: "",
        phone_number: "",
        password: "",
        promo_code: ""
      },
    };
  },
  methods: {
    registerUser() {
      alert("You submitted your form");
    },
  },
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
  background-color: #008d5a !important;
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
