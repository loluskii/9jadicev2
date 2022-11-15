<template>
  <div>
    <main class="container text-white mb-5 tops-auth">
      <section class="row">
        <div class="col-12 mb-2">
          <h4 class="text-center">My Profile</h4>
        </div>
      </section>
      <section class="row mb-3">
        <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10">
          <section class="row mb-5">
            <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <div
                class="d-flex justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-center"
              >
                <!-- @if ($user->avatar == 'img_avatar1.png') -->
                <div v-if="!user.avatar" class="position-relative avatarContainer">
                  <img
                    src=""
                    class="avatar"
                  />
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn editAvatarButton px-2"
                    data-toggle="modal"
                    data-target="#changeAvatar"
                  >
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </div>
                <!-- @else -->
                <div v-else class="position-relative avatarContainer">
                  <img :src="user.avatar" class="avatar" />
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn editAvatarButton px-2"
                    data-toggle="modal"
                    data-target="#changeAvatar"
                  >
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </div>
                <!-- @endif -->
              </div>
            </div>
            <div class="col-sm-12 col-md-7 col-lg-7 col-xl-7">
              <div class="text-md-left text-lg-left text-xl-left text-center">
                <!-- @if ($user->surname || $user->firstname) -->
                <div v-if="user.surname ||  user.firstname" class="py-1">
                  <span
                    ><span class="font-weight-bold">Name:</span>
                    {{ user.firstname }} {{ user.surname }}</span
                  >
                </div>
                <!-- @endif @if ($user->user_data_name) -->
                <div v-if="user.user_data_name" class="py-1">
                  <span
                    ><span class="font-weight-bold">Username:</span>
                    {{ user.user_data_name }}</span
                  >
                </div>
                <!-- @endif @if ($user->email) -->
                <div v-if="user.email" class="py-1">
                  <span
                    ><span class="font-weight-bold">Email:</span>
                    {{ user.email }}</span
                  >
                </div>
                <!-- @endif @if ($user->phone_no) -->
                <div class="py-1">
                  <span
                    ><span class="font-weight-bold">Contact:</span>
                    {{ user.phone_no }}</span
                  >
                </div>
                <!-- @endif -->
              </div>
              <div class="text-md-left text-lg-left text-xl-left text-center">
                <a
                  href="/"
                  class="btn btn-sm bg-sv-primary text-sv-primary mr-2"
                >
                  <span><i class="fa fa-pencil"></i></span> Edit
                </a>
                <a
                  href=""
                  class="btn btn-sm bg-sv-warning"
                >
                  <span><i class="fa fa-pencil"></i></span> Change Password
                </a>
              </div>
            </div>
          </section>
          <section class="row mb-5">
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 mx-auto mb-3">
              <div class="d-flex mb-1">
                <div class="flex-fill">
                  <a
                    href=""
                    class="btn btn-sm btn-block btn-outline-success mr-1"
                    >Deposit Now</a
                  >
                </div>
                <div class="flex-fill">
                  <a
                    href=""
                    class="btn btn-sm btn-block btn-outline-warning ml-1"
                    >Withdraw Now</a
                  >
                </div>
              </div>
              <div class="card bg-dark">
                <div class="card-body p-2">
                  <h5 class="text-center bg-sv-primary text-sv-primary py-2">
                    Referral Details
                  </h5>
                  <div class="d-flex mb-3">
                    <div class="flex-fill">
                      <div>Referral link:</div>
                      <div class="font-weight-bold" id="link">
                        <!-- {{ $user->referral_link }} -->
                      </div>
                    </div>
                    <div>
                      <button
                        class="btn btn-sm btn-outline-success"
                        onclick="copyToClipboard('#link')"
                      >
                        <span class="tooltiptext small" id="myTooltip"
                          >Copy</span
                        >
                      </button>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="flex-fill d-flex">
                      <div>Referral Count:</div>
                      <div class="font-weight-bold ml-1">
                        {{ 0 }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="col-12" style="margin-bottom: 80px">
            <!-- <h4 class="text-center">Upgrade Account</h4>
            @if($isVerified && ($isVerified->verified_passport ?? 0) == 1 ||
            ($isVerified->verified_drivers_license ?? 0) == 1 ||
            ($isVerified->verified_voters_car ?? 0) == 1)
            <div class="alert alert-success">
              Account verified <i class="fa fa-check"></i>
            </div>
            @else -->
            <p class="text-center">
              Please do provide us a means of identification to upgrade your
              account and limits.
            </p>
            <div class="row">
              <div
                class="col-md-4 text-light text-center d-flex align-items-stretch mb-2"
              >
                <div class="card w-100 bg-dark">
                  <div class="card-body">
                    <p class="card-text">National International Passport</p>
                    <div class="text-center">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#passportModalCenter"
                        class="btn btn-success"
                        >Verify</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-md-4 text-light text-center d-flex align-items-stretch mb-2"
              >
                <div class="card w-100 bg-dark">
                  <div class="card-body">
                    <p class="card-text">Nigerian Driver's License</p>
                    <div class="text-center">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#driversLicenseModalCenter"
                        class="btn btn-success"
                        >Verify</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-md-4 text-light text-center d-flex align-items-stretch mb-2"
              >
                <div class="card w-100 bg-dark">
                  <div class="card-body">
                    <p class="card-text">Permanent Voter's Card</p>
                    <div class="text-center">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#pvcModalCenter"
                        class="btn btn-success"
                        >Verify</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- @endif -->
          </div>
        </div>

        <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
      </section>

      <!-- @include("desktop.profile.passport-modal")
      @include("desktop.profile.pvc-modal")
      @include("desktop.profile.drivers-license-modal") -->

      <!-- Change Avatar Modal -->

    </main>
  </div>
</template>

<script>
export default {
  name: "profile",
  layout: "single",
  data(){
    return {

    }
  },
  computed:{
    user(){
          return this.$store.state.auth.user;
      }
  }
};
</script>

<style>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  /* visibility: hidden; */
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.avatar {
  object-fit: contain;
  object-position: top;
  border: 2px solid grey;
  border-radius: 50%;
  height: 90px;
  width: 90px;
}

.avatarContainer {
  width: 90px;
}

.editAvatarButton {
  position: absolute;
  background-color: var(--theme-color-warning-background);
  border-radius: 50%;
  bottom: 0;
  right: 0;
}
</style>
