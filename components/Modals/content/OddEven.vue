<template>
  <b-modal size="md" hide-footer id="oddEven" title="Odd/Even">
    <div class="modal-body">
      <section class="step">
        <h5>About the Game</h5>
        <p>
          Odd/even games bring out the genie in you. For odd/even games, all you
          need to do is predict the outcome of your next game. If your total
          dice number will be <strong>ODD or EVEN</strong>. If your prediction
          is correct, you win!
        </p>
      </section>
      <section class="step mb-3">
        <h4>Step 1</h4>
        <p class="mb-1">
          Select Odd/Even game. On the gameplay page, predict your next outcome
          by selecting either ODD or EVEN.
        </p>
        <img
          src="~/assets/images/how-to-play/step-2.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step mb-3">
        <h4>Step 2</h4>
        <p class="mb-1">Select or enter amount to stake</p>
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
  name: "odd-even",
};
</script>

<style scoped></style>
