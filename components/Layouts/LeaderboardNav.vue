<template>
  <div>
    <section class="row mt-1">
      <div class="col-12 d-flex px-0">
        <div
          class="bg-sv-warning text-center text-uppercase flex-fill d-flex align-items-center justify-content-center round">
          {{ tournament.name }}
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12 px-0 d-flex align-items-center justify-content-between my-1">
        <div class="h-100">
          <a href="" class="btn btn-light btn-sm text-white mr-1">
            <span><i class="fa fa-arrow-left text-dark"></i></span>
          </a>
        </div>
        <div class="flex-fill">
          <button @click="showJoinConfirmation(tournament)" class="btn btn-sm btn-block bg-sv-primary text-sv-primary">
            Join
          </button>
        </div>
        <!-- <div class="flex-fill ml-1">
          <a href=""
            class="btn btn-sm btn-block bg-sv-primary text-sv-primary">
            <span class="text-white">Info</span>
          </a>
        </div> -->
        <div class="flex-fill mx-1">
          <button @click="$nuxt.$emit('refresh_leaderboard')" class="btn btn-sm btn-block bg-sv-primary text-sv-primary">
            <span><i class="fa fa-refresh"></i></span>
          </button>
        </div>
        <div class="flex-fill">
          <nuxt-link class="btn btn-sm btn-danger btn-block" to="/">Quit</nuxt-link>
        </div>
      </div>
      <div class="col-12 mb-1">
        <!-- @if($tournament->end_date > now()) -->
        <div class="small d-flex align-items-center justify-content-center text-white">
          <span class="notificationAnimation2 mr-1"></span>
          Tournament in progress, position might change...
        </div>
        <!-- @else
        <div>
          <div class="small d-flex align-items-center justify-content-center text-white">
            <span class="endedNotificationAnimation mr-1"></span>
            Tournament Ended.
          </div>
        </div>
        @endif -->
      </div>
    </section>
    <section class="row mb-1">
      <div class="col-12 px-0">
        <ul class="nav nav-pills d-flex justify-content-between small" id="pills-tab" role="tablist">
          <li class="nav-item flex-fill mx-1" role="presentation">
            <a class="nav-link px-1 text-center"
              href="">Leaderboard</a>
          </li>

          <li class="nav-item flex-fill mx-1" role="presentation">
            <a class="nav-link px-1 text-center"
              href="">My Games</a>
          </li>
        </ul>

      </div>
    </section>
    <join-confirmation :game="tournament"></join-confirmation>
    <!-- <info-modal :game="game" :leaderboard="leaderboard" :paytable="paytable"></info-modal> -->
  </div>
</template>

<script>
import JoinConfirmation from '../Modals/JoinConfirmation.vue';
  export default {
  components: { JoinConfirmation },
    name: "leaderboard-nav",
    props: ['tournament'],
    methods: {
      showJoinConfirmation(game){
        if (this.$auth.loggedIn) {
          this.$bvModal.show(`joinConfirmation_${game.id}`);
        } else {
          this.$router.push("/auth/login");
        }
      },

    }
  };
</script>

<style></style>
