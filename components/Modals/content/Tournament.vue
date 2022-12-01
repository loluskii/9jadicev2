<template>
  <b-modal size="md" hide-footer id="Tournament" title="Tournament Games">
    <div class="modal-body">
      <section class="step">
        <h5>About the Game</h5>
        <p>
          Tournament is a type of game on Dice.ng. In a tournament game, a
          player has the option to create a new game, or join an existing game.
          After creating a game or joining an existing game, you place your
          stake and roll the dice. A game becomes sold out, when the game you
          created or joined is filled. Once it's filled, if you're among those
          who won, check your game status to know how much you've won, then you
          can request for your payout.
        </p>
      </section>
      <section class="step mb-3">
        <h4 class="mb-0">Step 1</h4>
        <p class="mb-1">
          Make sure you are logged in, you can also create an account
          <nuxt-link
            class="text-sv-warning text-decoration-none"
            to="/auth/login"
          >
            here</nuxt-link
          >
          if you don't have an account yet
        </p>
        <img
          src="/images/how-to-play/login.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step mb-3">
        <h4>Step 2</h4>
        <p class="mb-1">
          Select any game from any available category of games (e.g Verified,
          Biggest prizes, Luxury, State, Premier League, Bonus, Free).
        </p>
        <!-- <img src="/images/how-to-play/categories.svg" class="img-fluid"
                                alt="" srcset=""> -->
      </section>
      <section class="step mb-3">
        <h4>Step 3</h4>
        <p class="mb-1">
          (You can also create a game by clicking on the 'Create Tournament'
          button, fill all fields and click 'create'.)
        </p>
        <img
          src="/images/how-to-play/create.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step mb-3">
        <h4>Step 4</h4>
        <p class="mb-1">
          Click on the 'Join' button and you'll get redirected to the gameplay
          page.
        </p>
        <img
          src="/images/how-to-play/join.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </section>
      <section class="step mb-3">
        <h4>Step 5</h4>
        <p class="mb-1">
          On the gameplay page, tap on the dice cup or play button to roll your
          way into billions!
        </p>
        <img
          src="/images/how-to-play/dice-cup.svg"
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
  name: "tournament",
};
</script>

<style scoped></style>
