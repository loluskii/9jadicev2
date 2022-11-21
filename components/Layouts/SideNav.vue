<template>
  <section :class="this.$store.state.right_open ? 'rightnav-active' : ''" style="z-index: 1031;" id="rightnav" class="rightnav overflow-auto pt-0">
    <a

      id="closeRightNav"
      class="rightnav-closebtn rightNavTopTextColor"
      @click="toggle_right"
    >
      <span><i class="fa fa-close"></i></span>
    </a>
    <div id="balance-info" class="bg-sv-primary">
      <section class="ml-3 pr-2 py-4 rightNavTopTextColor small">
        <div class="d-flex align-items-center">
          <nuxt-link to="/my-profile">
            <img
              style="
                height: 50px;
                width: 50px;
                border: 2.5px solid #ffffff;
                border-radius: 50%;
              "
              :src="user.avatar"
            />
          </nuxt-link>
          <div class="d-flex flex-column ml-2">
            <nuxt-link to="/my-profile">
              <span
                class="lead font-weight-bold text-capitalize text-sv-primary"
                >{{ user.user_data_name }}</span
              >
            </nuxt-link>
            <span class="small">USER ID: {{ user.username }}</span>
            <span class="small text-uppercase">
              <span>Balance</span>
              <span class="font-weight-bold">&#8358; {{ formatNumber(user.balance) }}</span>
            </span>
            <span class="small">COMMISSION: ₦{{user.commission_balance}}</span>
          </div>
        </div>
      </section>
      <div class="container-fluid">
        <div
          class="row mx-2 mb-2 d-flex align-items-center"
          id="deposit-withdraw"
        >
          <div
            class="btn bg-sv-warning rounded-pill cursorPointer text-white py-1 col-4 mb-2 d-inline-block"
          >
            <nuxt-link to="/make-deposit" class="text-decoration-none">
              <span class="small text-white">Deposit</span>
            </nuxt-link>
          </div>

          <div class="btn bg-light text-dark rounded-pill py-1 col-4 mb-2">
            <nuxt-link to="/Withdraw" class="text-decoration-none">
              <span class="small text-dark">Withdraw</span>
            </nuxt-link>
          </div>

          <div class="btn btn-danger text-white rounded-pill py-1 col-4 mb-2">
            <nuxt-link to="/content/how-to-play" class="text-decoration-none">
              <span class="small text-white">How to play</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div id="other-options">
      <ul class="list-unstyled">
        <li>
          <nuxt-link to="/content/affiliates" class="text-warning"
            ><span class="mr-3"><i class="fa fa-users"></i></span>Affiliates</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/blog"
            ><span class="mr-3"><i class="fa fa-newspaper-o"></i></span>Blog</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/discussions"
            ><span class="mr-3"><i class="fa fa-comments"></i></span
            >Discussions</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/settled-bets"
            ><span class="mr-3"><i class="fa fa-list"></i></span>My Bet
            History</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/my-profile"
            ><span class="mr-3"><i class="fa fa-user"></i></span>Profile</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/messages"
            class="d-flex justify-content-between align-items-center"
          >
            <span>
              <span class="mr-3"
                ><i class="fa fa-comments-o text-white"></i></span
              >Messages
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/change-password"
            ><span class="mr-3"><i class="fa fa-lock"></i></span>Change
            Password</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/my-cards"
            ><span class="mr-3"><i class="fa fa-credit-card"></i></span>Card
            Management</nuxt-link
          >
        </li>

        <li>
          <nuxt-link to="/my-transfers"
            ><span class="mr-3"><i class="fa fa-align-left"></i></span>My
            Transfers</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/my-withdrawals"
            ><span class="mr-3"><i class="fa fa-align-left"></i></span>My
            Withdrawals</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/my-tokens"
            ><span class="mr-3"><i class="fa fa-money"></i></span>My Tokens</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/dice-commission"
            ><span class="mr-3"><i class="fa fa-align-left"></i></span>My
            Commissions</nuxt-link
          >
        </li>

        <li>
          <nuxt-link to="/my-transactions"
            ><span class="mr-3"><i class="fa fa-clock-o"></i></span>Transaction
            History</nuxt-link
          >
        </li>

        <li>
          <a
            data-toggle="collapse"
            href="#colorCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="colorCollapse"
            ><span class="mr-4"><i class="fa fa-tint"></i></span>Select Colour
            Theme</a
          >
        </li>
        <div class="collapse py-2 ml-4" id="colorCollapse">
          <div class="d-flex colorSwatches" id="colorSwatches">
            <span
              style="background-color: #067a23; color: #ffffff; cursor: pointer"
              data-cup="green"
              id="colorSwatch0"
              data-logo="logo-green"
            ></span
            ><span
              style="background-color: #fee600; color: #000000; cursor: pointer"
              data-cup="yellow"
              id="colorSwatch1"
              data-logo="logo-white"
            ></span
            ><span
              style="background-color: #f4c2c2; color: #000000; cursor: pointer"
              data-cup="pink"
              id="colorSwatch2"
              data-logo="logo-white"
            ></span
            ><span
              style="background-color: #00adef; color: #ffffff; cursor: pointer"
              data-cup="blue"
              id="colorSwatch3"
              data-logo="logo-white"
            ></span>
          </div>
        </div>
        <li>
          <nuxt-link to="https://dice.ng/promo"
            ><span class="mr-3"><i class="fa fa-briefcase"></i></span
            >Promotion</nuxt-link
          >
        </li>

        <li>
          <nuxt-link to="https://dice.ng/contact">
            <span class="mr-3">
              <i class="fa fa-phone"></i>
            </span>
            Contact Us
          </nuxt-link>
        </li>
        <li>
          <a
            class="text-decoration-none text-white cursorPointer"
            data-toggle="modal"
            data-target="#reviewModal"
          >
            <span class="mr-3"><i class="fa fa-comment"></i></span>Drop a review
          </a>
        </li>
        <li class="d-flex align-items-center">
          <span class="mr-3">
            <i class="fa fa-cog"></i>
          </span>

        </li>
        <li>
          <button class="btn btn-link text-decoration-none text-white" @click="logout" id="logout-list"
            ><span class="mr-3"
              ><i class="fa fa-power-off text-sv-warning"></i></span
            >Log Out</button
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "right-nav",
  data(){
    return{

    }
  },
  computed:{
    user(){
      return this.$store.state.auth.user;
    }
  },
  methods:{
    toggle_right() {
        this.$store.commit('right_menu', "toggle");
    },
    async logout() {
        await this.$auth.logout();
        this.$auth.$storage.removeCookie('auth.user',true)
        this.toggle_right()
    },
  }
};
</script>

<style></style>
