<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'main-layout',
  methods:{
    refresh_user(){
      this.$auth.fetchUser()
    }
  },
  mounted(){
    this.refresh_user();
  }
}
</script>

<style scoped>

</style>
