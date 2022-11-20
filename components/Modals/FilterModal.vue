<template>
<b-modal centered hide-header hide-footer content-class="bg-sv-primary curvedEdge" body-class="p-0 bg-black curvedEdge"
    id="filterModal" title-class="text-uppercase font-weight-bold">
    <div class="container-fluid">
        <div class="row justify-content-between align-items-center bg-sv-primary p-2 customModalTop">
            <div>
                <nuxt-link to="/"><img style="height: 25px;" src="~/assets/images/logos/logo-white.png"></nuxt-link>
            </div>
            <div class="text-uppercase text-center font-weight-bold">
                <span>Filter</span>
            </div>
            <button type="button" class="btn rounded-circle p-2" @click="closeModal('filterModal')" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-times text-white"></i></span>
            </button>
        </div>
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="" class="mb-4 text-white">
                    <input type="hidden" name="_token" value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol">                                    <div class="row mt-2">

                        <div class="col-md-4 col-lg-4 col-xl-4 col-4">
                            <label class="" for="term">
                                <input type="checkbox" name="latest"> Latest
                            </label>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 col-4">
                            <label class="" for="term">
                                <input type="checkbox" name="joined"> Joined
                            </label>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 col-4">
                            <label class="" for="term">
                                <input type="checkbox" name="available"> Available
                            </label>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 col-4">
                            <label class="" for="term">
                                <input type="checkbox" name="ended"> Ended
                            </label>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 col-4">
                            <label class="" for="term">
                                <input type="checkbox" name="premium"> Premium
                            </label>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4 col-4">
                            <label class="" for="term">
                                <input type="checkbox" name="public"> Public
                            </label>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-6">
                            <label for="">No. Of Players</label>
                            <input type="number" placeholder="No. Of Players" class="form-control form-control-sm bg-transparent text-white" name="no_of_players">
                        </div>

                        <div class="col-6">
                            <label for="">Stake</label>
                            <input type="number" placeholder="Amount" class="form-control form-control-sm bg-transparent text-white" name="amount">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-block bg-sv-primary text-sv-primary">Apply</button>
                </form>
            </div>
        </div>
    </div>

  </b-modal>
</template>

<script>
export default {
  name: 'filter-modal',
  data(){
    return {
      filterData: {
        type: '',
        no_of_players: '',
        stake: ''
      }
    }
  },
  methods:{
    close(){

    }
  }
}
</script>

<style>

</style>



