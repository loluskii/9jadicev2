<template>
  <main class="container">
    <div class="row">
      <section class="col-sm-12 col-md-3 col-lg-3 col-xl-3"></section>
      <section class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-white mt-5">
        <div class="text-center mb-3"></div>
        <div class="d-flex justify-content-between mb-5 align-items-center">
          <nuxt-link to="/">
            <img
              src="~/assets/images/logos/logo.png"
              style="height: 35px"
              alt="sv-logo"
            />
          </nuxt-link>
          <h4 class="text-capitalize">Sign In</h4>
        </div>
        <form @submit.prevent="loginUser" autocomplete="off">
          <span
            class="invalid-feedback pb-3"
            style="display: block"
            role="alert"
            v-if="error"
          >
            <strong>There was an issue with your login</strong>
          </span>
          <div class="form-group">
            <label for="phone" class="text-white small">Username / Email</label>
            <input
              type="text"
              class="form-control text-white"
              id="logContactNo"
              name="user_data_name"
              v-model="formData.email"
              style="background-color: transparent"
              required
            />
          </div>

          <div class="form-group">
            <label for="logPassword" class="text-white">Password / PIN</label>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control border-right-0 text-white"
                id="logPassword"
                name="password"
                v-model="formData.password"
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
          <nuxt-link to="/auth/register" class="btn btn-sm text-white"
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
  layout: "main",
  data(){
    return {
      formData: {
        email: 'adeloreisaac@gmail.com',
        password: 'clarioncall123',
      },
      error: false,
    }
  },
  methods:{
    async loginUser(){
      $('#loginBtn').text('Please wait...').attr('disabled');
      await this.$auth.loginWith('local', { data:this.formData })
      .then(async (res) => {
        // const data = res.data.data.user
        // this.$auth.setUser(data)
        // this.$auth.$storage.setUniversal('user', data, true)
        this.$router.push('/')
      }).catch( (error) => {
          $('#loginBtn').text('Login').attr('disabled', false);
          this.error = true;
          console.log(error)
      })
    }
  }

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
