<template>

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
    // async registerUser(){
    //   $('#registerBtn').text('Please wait...').attr('disabled');
    //   await this.$auth.loginWith('local', { data:this.formData })
    //   .then(async (res) => {
    //     const data = res.data.data.user
    //     this.$auth.setUser(data)
    //     // this.$auth.$storage.setUniversal('user', data, true)
    //     this.$router.push('/')
    //   }).catch( (error) => {
    //       $('#loginBtn').text('Login').attr('disabled', false);
    //       this.error = true;
    //       console.log(error)
    //   })
    // }
  },
};
</script>

<style scoped>

</style>
