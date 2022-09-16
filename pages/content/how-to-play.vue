<template>
  <div class="container">
    <main id=" pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12 py-2">
                    <h4 class="text-uppercase text-center text-white">How to Play</h4>
                </div>
            </div>
        </div>




        <div class="container">
            <div class="row mb-2">
                <div class="col box1">
                    <iframe width="100%" height="686" src="https://www.youtube.com/embed/zcgDktceuMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div class="row mb-2">
                <div class="col box1" @click="showTournamentModal">
                    <div class="p-0">
                        <img src="~/assets/images/how-to-play/tournament.jpg" class="how-to-play1"
                            srcset="">
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-6 mb-2 mb-sm-0 pr-sm-0 box2" @click="showOddEvenModal">
                    <div class="p-0">
                        <img src="~/assets/images/how-to-play/odd-even.jpg" class="how-to-play img-fluid"
                            srcset="">
                    </div>
                </div>
                <div class="col-md-6 box3" @click="showVersusModal">
                    <div class="p-0">
                        <img src="~/assets/images/how-to-play/versus-computer.jpg"
                            class="how-to-play img-fluid" srcset="">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-2 mb-sm-0 pr-sm-0 box4" @click="showMegaTenModal">
                    <div class="p-0">
                        <img src="~/assets/images/how-to-play/mega-ten.jpg" class="how-to-play img-fluid"
                            srcset="">
                    </div>
                </div>
                <div class="col-md-6 mb-sm-0 mb-5 box5" @click="showUnderOverModal">
                    <div class="p-0">
                        <img src="~/assets/images/how-to-play/under-over.jpg" class="how-to-play img-fluid"
                            srcset="">
                    </div>
                </div>
            </div>
        </div>

        <!--Tournament Games Modal -->
        <tournament></tournament>
        <!--Tournament Games Modal Ends -->

        <!--OddEven Games Modal -->
        <odd-even></odd-even>
        <!--OddEven Games Modal Ends -->

        <!--Versus Games Modal -->
        <versus></versus>
        <!--Versus Games Modal Ends -->

        <!--Mega 10 Games Modal -->
        <mega-ten></mega-ten>
        <!--Mega 10 Games Modal Ends -->

        <!--Under/Even Games Modal -->
        <under-over></under-over>
        <!--Under/Even Games Modal Ends -->
    </main>
  </div>
</template>

<script>
import OddEven from '~/components/Modals/content/OddEven';
import Tournament from '~/components/Modals/content/Tournament';
import Versus from '~/components/Modals/content/Versus';
import MegaTen from '~/components/Modals/content/MegaTen';
import UnderOver from '~/components/Modals/content/UnderOver';
export default {
  name: "how-to-play",
  layout: "single",
  components: {OddEven, Tournament, Versus, MegaTen, UnderOver},
  data(){
    return {

    }
  },
  methods: {
    showOddEvenModal(){
      this.$bvModal.show("oddEven");
    },
    

    showTournamentModal(){
      this.$bvModal.show("Tournament");
    },
    showVersusModal(){
      this.$bvModal.show("versusComputer");
    },
    showMegaTenModal(){
      this.$bvModal.show("megaTen");
    },
    showUnderOverModal(){
      this.$bvModal.show("underOver");
    }
  }
};
</script>

<style type="text/css">
.card-image {
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  border-radius: 6px;
  height: 200px;
  /*width: 95% !important;*/
}

.how-to-play1 {
  width: 100%;
  height: 370px;
  object-fit: cover;
}

.how-to-play {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.disabled {
  display: none;
}

@media screen and (max-width: 576px) {
  .card-image {
    background-repeat: no-repeat !important;
    background-size: 100% 100% !important;
    border-radius: 6px;
    height: 90px;
    /*width: 95% !important;*/
  }

  .how-to-play1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .how-to-play {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
