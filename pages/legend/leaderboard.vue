<template>
  <div>
    <leaderboard-nav :tournament="tournament"></leaderboard-nav>
    <section class="row text-white pb-3">
      <div class="col-12 px-0" id="leaderboard_body">
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show container-fluid px-0 active" id="pills-leaderboard" role="tabpanel"
            aria-labelledby="pills-leaderboard-tab">
            <div>
              <form action="https://dice.ng/legend/5Ie9pOCyuP/leaderboard" method="GET">
                <input type="hidden" name="_token" value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol">
                <section class="row">
                  <div class="col-12">
                    <div class="d-flex">
                      <input type="search" class="form-control form-control-sm rounded-0"
                        placeholder="Search by username" name="query" min="2" max="20" required="">
                      <button class="btn btn-sm bg-sv-primary text-sv-primary rounded-right px-2" type="submit">
                        <span><i class="fa fa-search"></i></span>
                      </button>
                    </div>
                  </div>
                </section>
              </form>
            </div>
            <section class="d-flex bg-sv-primary text-sv-primary py-1">
              <div style="width: 45px;" class="font-weight-bold mr-2">Pos</div>
              <div class="font-weight-bold ml-2">Name</div>
              <div class="font-weight-bold ml-auto d-flex">

                <div class="ml-2" style="width: 86px">Points</div>
              </div>
            </section>

            <div v-for="(record, index) in leaderboard" :key="index" class="d-flex align-items-center small py-2 px-2 topBar mb-1" >
              <div class="mr-2" style="width: 45px;">

                {{ index+1 }}.
              </div>
              <div :class="record.username === user.user_data_name ? 'text-yellow' : 'text-white'" >{{ record.username }}#{{ record.join_count }}</div>
              <div :class="record.username === user.user_data_name ? 'text-yellow' : 'text-white'" class="ml-auto d-flex">

                <div class="ml-2" style="width: 80px">{{ record.score }}pts</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import LeaderboardNav from '~/components/Layouts/LeaderboardNav.vue'
  export default {
    components: { LeaderboardNav },
    name: "leaderboard",
    layout: "legend",
    data(){
      return {
        leaderboard: [],
        tournament: [],
        user: this.$store.state.auth.user,
      }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                // react to route changes...
                this.tournament_id = to.params.tournamentid; //this.baseConverter(to.params.game_id, 36, 10);
                this.getLeaderboard();
            },
        },
    },
    methods: {
      getLeaderboard(){
        this.$axios.get('/tournaments/' + this.tournament_id +'/leaderboard').then((res) => {
          this.tournament = res.data.data[0].tournament;
          this.leaderboard = res.data.data;
        })
      }
    },
    created() {
      this.$nuxt.$on('refresh_leaderboard', () => {
        this.getLeaderboard()
      })
    },
  }
</script>

<style>
.text-yellow{
  color: yellow;
}
</style>
