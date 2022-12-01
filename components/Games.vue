<template>
  <div class="row justify-content-center">
    <div class="col-12 p-0 topGamesList">
      <div
        class="text-capitalize text-nowrap hideScrollbar topGamesList-left w-100"
      >
        <nuxt-link
          to=""
          class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center bg-sv-primary"
          href=""
        >
          <span>
            <img
              src="/images/games/tournament/tournament.png"
              style="height: 20px"
              alt="tournament-icon"
              class="mb-1"
            />
          </span>
          <span class="gameTopTitle gameTopTitleActive">Tournament</span>
        </nuxt-link>
        <nuxt-link
          to=""
          class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
          href=""
        >
          <span class="newBadge">New</span>
          <span>
            <img
              src="/images/games/lotto/dice-lotto.png"
              style="height: 22px"
              alt="dice-lotto-icon"
              class="mb-0"
            />
          </span>
          <span class="gameTopTitle">Dice lotto</span>
        </nuxt-link>
        <nuxt-link
          to="/dice/colors"
          class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
          href=""
        >
          <span class="newBadge">New</span>
          <span>
            <img
              src="/images/games/color/dice-colour.png"
              style="height: 20px"
              alt="dice-colours-icon"
              class="mb-1"
            />
          </span>
          <span class="gameTopTitle">Colours</span>
        </nuxt-link>
        <nuxt-link
          to="/dice/single"
          class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
          href=""
        >
          <span>
            <img
              src="/images/games/single/single.png"
              style="height: 20px"
              alt="single-icon"
              class="mb-1"
            />
          </span>
          <span class="gameTopTitle">Single</span>
        </nuxt-link>
        <nuxt-link
          to="/dice/under-over"
          class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
          href=""
        >
          <span>
            <img
              src="/images/games/under-over/under-over.png"
              style="height: 20px"
              alt="tournament-icon"
              class="mb-1"
            />
          </span>
          <span class="gameTopTitle">Under/Over</span>
        </nuxt-link>
        <nuxt-link
          to="/dice/odd-even"
          class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
          href=""
        >
          <span>
            <img
              src="/images/games/odd-even/odd-even.png"
              style="height: 20px"
              alt="odd-even-icon"
              class="mb-1"
            />
          </span>
          <span class="gameTopTitle">Odd/Even</span>
        </nuxt-link>
        <nuxt-link
          to="/dice/mega-ten"
          class="btn btn-sm btn-dark border-0 rounded-0 position-relative d-flex flex-column justify-content-center"
          href=""
        >
          <span>
            <img
              src="/images/games/mega-ten/mega-ten.png"
              style="height: 20px"
              alt="mega-ten-icon"
              class="mb-1"
            />
          </span>
          <span class="gameTopTitle">Mega Ten</span>
        </nuxt-link>
      </div>
    </div>
    <div class="col-12 p-0" style="display: none" id="allGamesList">
      <div class="topGamesList-left">
        <nuxt-link
          to=""
          class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
          href=""
        >
          <span class="mb-1 gameTopTitle">Under/Over</span>
          <span>
            <img
              src="/images/games/under-over/under-over.png"
              style="height: 20px"
              alt="tournament-icon"
            />
          </span>
        </nuxt-link>
        <nuxt-link
          to=""
          class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center"
          href=""
        >
          <span class="mb-1 gameTopTitle">Odd/Even</span>
          <span>
            <img
              src="/images/games/odd-even/odd-even.png"
              style="height: 20px"
              alt="odd-even-icon"
            />
          </span>
        </nuxt-link>
        <nuxt-link
          to=""
          class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
          href=""
        >
          <span class="mb-1 gameTopTitle">Mega Ten</span>
          <span>
            <img
              src="/images/games/mega-ten/mega-ten.png"
              style="height: 20px"
              alt="mega-ten-icon"
            />
          </span>
        </nuxt-link>
        <nuxt-link
          to=""
          class="btn btn-sm btn-dark border-0 rounded-0 d-flex flex-column justify-content-center text-nowrap"
          href=""
          style="visibility: hidden"
        >
          <span class="mb-1 gameTopTitle">Mega Ten</span>
          <span>
            <img src="" style="height: 20px" alt="mega-ten-icon" />
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "games-list",
};
</script>

<style></style>
