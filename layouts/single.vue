<template>
  <div class="container small">
    <header class="container-fluid">
      <nav class="row bg-9jaluck align-items-center text-uppercase font-weight-light customNavbar py-2 small">
        <nuxt-link class="" to="/">
          <img src="~/assets/images/logos/logo.png" class="img-fluid" style="height: 30px" id="brand-logo" />
        </nuxt-link>
        <div class="d-none d-lg-flex align-items-center">
              <nuxt-link to="/" class="nav-link text-decoration-none text-white"
                >Home</nuxt-link>
              <nuxt-link to="/content/how-to-play" class="nav-link text-decoration-none text-white">
                How to play
              </nuxt-link>
              <nuxt-link to="/content/promos" class="nav-link text-decoration-none text-white"
                >PROMOS</nuxt-link
              >
              <nuxt-link to="/content/affliates" class="nav-link text-decoration-none text-white"
                >Affiliates</nuxt-link
              >
              <nuxt-link to="/content/blog" class="nav-link text-decoration-none text-white"
                >Blog</nuxt-link
              >
              <nuxt-link to="/content/discussions" class="nav-link text-decoration-none text-white"
                >Discussions</nuxt-link
              >
        </div>
        <div id="login-company" class="d-flex justify-content-end align-items-center flex-grow-1 ml-auto">

          <div id="login-signup-div" class="d-flex align-items-center">
            <nuxt-link to=""
              class="text-decoration-none btn btn-sm bg-sv-warning text-white mr-2 px-2">
              <small>Guest</small>
            </nuxt-link>

            <nuxt-link to="/auth/login"
              class="text-decoration-none btn btn-sm btn-outline-light text-white mr-2 px-2">
              <small>Login</small>
            </nuxt-link>

            <button class="btn btn-sm bg-sv-warning text-white">
              <nuxt-link to="/auth/register" class="text-decoration-none text-white text-uppercase">
                <small>Register</small>
              </nuxt-link>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <nuxt />

    <div class="mt-5">
      <MenuFooter />
    </div>
  </div>
</template>

<script>
import MenuFooter from '../components/Layouts/MobileFoot'
  export default {
    name: "single",
    components:{MenuFooter}
  }
</script>

<style src="~/assets/css/navbar.css" scoped>

</style>
<style scoped>

</style>
