<template>
  <b-modal size="md" hide-footer id="versusComputer" title="Versus Computer">
    <div class="modal-body">
      <section class="step">
        <h5>About The Game</h5>
        <p>
          For a single game, you’re playing against the computer and you both
          have 5 rounds of throw each. Player with the highest point after the
          fifth round wins. Stakes for single games ranges from 100 NGN – 1000
          NGN.
        </p>
      </section>
      <section class="step mb-3">
        <h4 class="mb-0">Step 1</h4>
        <p class="mb-1">Select Single game from the games list.</p>
        <img
          src="~/assets/images/how-to-play/single-1.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step mb-3">
        <h4>Step 2</h4>
        <p class="mb-1">
          On the gameplay page, select or enter amount to stake
        </p>
        <img
          src="~/assets/images/how-to-play/step-4.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>

      <section class="step mb-3">
        <h4>Step 3</h4>
        <p class="mb-1">Click on the "Play" button to start the games.</p>
        <img
          src="~/assets/images/how-to-play/step-3.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step mb-3">
        <h4>Step 4</h4>
        <p class="mb-1">Tap on the dice cup twice to roll the dice.</p>
        <img
          src="~/assets/images/how-to-play/step-5.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "versus-computer",
};
</script>

<style scoped>

</style>
