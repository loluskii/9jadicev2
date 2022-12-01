<template>
  <b-modal size="md" hide-footer id="underOver" title="Under /Over">
    <div class="modal-body">
      <section class="step">
        <h5 class="lead">About The Game</h5>
        <p>
          For Under/Over games, you play alone and your goal is to roll the dice
          and score 7 and above. If your dice result is between 7 and 11, you
          get x2 of your stake, but if your dice result is <strong>12</strong>,
          you get x10 of your stake!
        </p>
      </section>
      <section class="step">
        <h4 class="mb-0">Step 1</h4>
        <p class="mb-1">Select Single game from the games list.</p>
        <img
          src="/images/how-to-play/under-over.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step">
        <h4>Step 2</h4>
        <p class="mb-1">
          On the gameplay page, select or enter amount to stake
        </p>
        <img
          src="/images/how-to-play/step-4.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>

      <section class="step">
        <h4>Step 3</h4>
        <p class="mb-1">Click on the "Play" button to start the games.</p>
        <img
          src="/images/how-to-play/step-3.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step">
        <h4>Step 4</h4>
        <p class="mb-1">Tap on the dice cup twice to roll the dice.</p>
        <img
          src="/images/how-to-play/step-5.svg"
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
  name: "under-over",
};
</script>

<style scoped></style>
