<template>
  <div>
    <main class="container text-white font-weight-bold text-center">
      <h5 class="mb-2 text-center text-uppercase">Withdraw Funds</h5>
      <div class="row">
        <div class="col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
        <div class="col-sm-12 col-md-8 col-lg-6 col-xl-6 mb-5">
          <ul class="nav nav-pills d-flex justify-content-between mb-3" id="pills-tab" role="tablist">
            <li class="nav-item flex-fill mr-1" role="presentation">
              <a class="nav-link text-center rounded-0 active" id="withdraw-to-bank" data-toggle="pill"
                data-target="#withdraw-to-bank-view" type="button" role="tab" aria-controls="withdraw-to-bank"
                aria-selected="true">To Bank</a>
            </li>
            <li class="nav-item flex-fill ml-1" role="presentation">
              <a class="nav-link text-center rounded-0" id="withdraw-to-agent" data-toggle="pill"
                data-target="#withdraw-to-agent-view" type="button" role="tab" aria-controls="withdraw-to-agent"
                aria-selected="false">From Agent</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="withdraw-to-bank-view" role="tabpanel"
              aria-labelledby="pills-home-tab">
              <div v-if="user.balance <= 0" class="alert alert-danger" role="alert">
                Sorry, You have insufficient funds and can not withdraw at the moment.
              </div>
              <form v-else action="" method="POST" class="withdramform" id="my-form">

                <div class=" form-group">
                  <input type="number" class="form-control" name="amount" id="amount"
                    placeholder="Amount to withdraw(Min ₦1000)" required />
                </div>

                <div class="btn-goup col-12 pb-3" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary btn-sm" @click.prevent="clearInput()">Clear</button>
                  <button type="button" class="btn btn-secondary btn-sm" @click.prevent="increment(100)">+100</button>
                  <button type="button" class="btn btn-secondary btn-sm" @click.prevent="increment(200)">+200</button>
                  <button type="button" class="btn btn-secondary btn-sm" @click.prevent="increment(500)">+500</button>
                  <button type="button" class="btn btn-secondary btn-sm" @click.prevent="increment(1000)">+1000</button>
                </div>

                <!-- @if ($prevWithdrawal != null) -->
                <!-- <div class="text-left d-none">
                  <div style="font-size:12px; border-radius:7px; border:none;" class="bg-dark p-3">
                    <div class="row pb-2">
                      <div class="col-4">Account Name:</div>
                      <div class="col-8">{{ $prevWithdrawal->acct_name }}</div>
                    </div>
                    <div class="row pb-2">
                      <div class="col-4">Account Number:</div>
                      <div class="col-8">{{ $prevWithdrawal->acct_no }}</div>
                    </div>
                    <div class="row pb-2">
                      <div class="col-4">Bank Name:</div>
                      <div class="col-8">
                        {{ $prevWithdrawal->bank_name }}
                        {{-- {{($prevWithdrawal->bank_name == 'firstbank') ? 'First Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'fcmb') ? 'First City Monument Bank (FCMB)' : ''}}
                        {{($prevWithdrawal->bank_name == 'access') ? 'Access Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'citibank') ? 'Citi Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'diamond') ? 'Diamond Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'fidelity') ? 'Fidelity Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'ecobank') ? 'Ecobank' : ''}}
                        {{($prevWithdrawal->bank_name == 'fsdh') ? 'FSDH Merchant Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'gtb') ? 'Guarantee Trust Bank (GTB)' : ''}}
                        {{($prevWithdrawal->bank_name == 'heritage') ? 'Heritage Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'Keystone') ? 'Keystone Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'kuda') ? 'Kuda Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'providus') ? 'Providus Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'rand') ? 'Rand Merchant Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'skye') ? 'Polaris Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'stanbic') ? 'Stanbic IBTC Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'standard') ? 'Standard Chartered Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'sterling') ? 'Sterling Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'suntrust') ? 'Suntrust Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'union') ? 'Union Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'uba') ? 'United Bank for Africa (UBA)' : ''}}
                        {{($prevWithdrawal->bank_name == 'unity') ? 'Unity Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'wema') ? 'Wema Bank' : ''}}
                        {{($prevWithdrawal->bank_name == 'zenith') ? 'Zenith Bank' : ''}} --}}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <p>Please <a href="{{ route('contact') }}"> contact us</a> if the above
                          information is incorrect.</p>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- @endif -->

                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-bank"></i>
                      </span>
                    </div>

                    <select name="bank_name" id="bank" class="form-control" required>
                      <option>--Select Bank--</option>
                      <option value="suntrust">Suntrust Bank</option>
                      <option value="union">Union
                        Bank</option>
                      <option value="uba">United
                        Bank for Africa (UBA)</option>
                      <option value="unity">Unity
                        Bank</option>
                      <option value="wema">Wema Bank</option>
                      <option value="zenith">Zenith Bank</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-money"></i>
                      </span>
                    </div>
                    <input type="number" class="form-control" name="acct_no"
                      value="0" required placeholder="Your Account No">
                  </div>
                </div>
                <div class="form-group">
                  <button class="btn btn-block bg-sv-primary text-sv-primary text-uppercase" id="btn-submit"
                    type="submit">Withdraw</button>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="withdraw-to-agent-view" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div v-if="user.balance == 0" class="alert alert-danger" role="alert">
                Sorry, You have insufficient funds and can not withdraw at the moment.
              </div>
              <!-- @elseif(Auth::user()->profile_completed == 0) -->
              <div class="d-none alert alert-danger d-flex align-items-center" role="alert">
                <div class="mr-2">
                  <span><i class="fa fa-caution"></i></span>
                </div>
                <div>
                  You Need To <a href="" class="alert-link"> Complete Your
                    Profile</a> To Be Able To Withdraw Funds.<br />
                  <a href="" class="btn bg-dark text-white small mt-2">Edit
                    Profile Here</a>
                </div>
              </div>
              <form v-if="user.balance > 0" action="" id="my-form2" method="POST">
                <div class="form-group">
                  <input type="number" class="form-control" name="amount" id="amount"
                    placeholder="Amount to withdraw(Min ₦100)" required />
                </div>
                <div class="form-group">
                  <button id="btn-submit2" class="btn btn-block bg-sv-primary text-sv-primary text-uppercase"
                    type="submit">Generate Payment Code</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-3 col-xl-3"></div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "withdraw",
    layout: "single",
    methods:{
      toBank(){
        
      },
      toAgent(){

      }
    },
    computed:{
      user(){
        return this.$store.state.auth.user;
      }
    }
  }
</script>

<style>

</style>
