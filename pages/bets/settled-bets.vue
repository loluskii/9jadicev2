<template>
  <div>
    <div class="row">
      <div class="col-12">
        <ul
          class="nav nav-pills d-flex justify-content-between"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item flex-fill" role="presentation">
            <a class="nav-link text-center" href="https://dice.ng/active-bets">
              Pending
            </a>
          </li>
          <li class="nav-item flex-fill mx-1" role="presentation">
            <a class="nav-link text-center active" href="https://dice.ng/settled-bets"
              >Settled</a
            >
          </li>
          <li class="nav-item flex-fill" role="presentation">
            <span
              class="badge badge-danger position-absolute"
              style="right: 0; margin-right: 17px"
            >
              0
            </span>

            <a
              class="nav-link text-center"
              href="https://dice.ng/unclaimed-bets"
              >Unclaimed</a
            >
          </li>
        </ul>
      </div>
    </div>

    <section class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="mb-3 mt-3">
          <form class="bg-dark px-3 py-1">
            <div class="row align-items-end">
              <div class="col-md-4 col-lg-4 col-xl-3 col-6 mb-2">
                <label for="start_date"><strong class="text-white">Start Date</strong></label>
                <input
                  type="date"
                  class="form-control form-control-sm"
                  name="start_date"
                  value=""
                  required=""
                  v-model="formData.start_date"
                />
              </div>
              <div class="col-md-4 col-lg-4 col-xl-3 col-6 mb-2">
                <label for="start_date"><strong class="text-white">End Date</strong></label>
                <input
                  type="date"
                  class="form-control form-control-sm"
                  name="end_date"
                  value=""
                  required=""
                  v-model="formData.end_date"
                />
              </div>
              <div class="col-md-4 col-lg-4 col-xl-3 col-12 mb-2">
                <button
                  @click.prevent="getBets"
                  class="btn btn-block btn-sm bg-sv-primary text-sv-primary"
                >
                  Filter
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="text-white text-center font-italic">
          <single-bet :betlist="bets"></single-bet>
        </div>
        <div class="d-flex flex-nowrap overflow-auto"></div>
      </div>
    </section>
  </div>
</template>

<script>
import singleBet from '~/components/Bets/single-bet.vue';
export default {
  components: { singleBet },
  name: "unclaimed-bets",
  layout: "single",
  middleware: 'auth',
  data(){
    return {
      formData: {
        status: 'settled',
        start_date: '',
        end_date: '',
      }
    }
  },
  computed:{
    bets(){
      return this.$store.state.betlist;
    }
  },
  methods:{
    getBets(){
      this.$store.dispatch('getBets',this.formData);
    }
  }
};
</script>

<style></style>
