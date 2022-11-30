<template>
  <div>
    <div class="container pb-2" style="margin-bottom: 7rem">
      <div class="row">
        <div class="col-12">
          <h5 class="mb-4 text-uppercase text-center text-white">
            Deposit Funds
          </h5>
        </div>
      </div>

      <div class="card">
        <div class="card-header p-1">
          <div class="d-flex small paymentTableHeader">
            <div class="paymentTableMethod font-weight-bold">Method</div>
            <div class="paymentTableDescription font-weight-bold">
              Description
            </div>

            <div class="paymentTableButtonDiv font-weight-bold"></div>
          </div>
        </div>
      </div>

      <div class="accordion mb-5" id="accordionExample">
        <div class="card">
          <div class="card-header py-2 px-1" id="headingOne">
            <div class="d-flex small paymentTableHeader">
              <div class="paymentTableMethod">
                <img
                  src="https://dice.ng/images/desktop/payments/woven.jpeg"
                  style="height: 48px"
                />
              </div>
              <div class="paymentTableDescription">
                Bank Transfer(Woven)
                <div class="text-sv-warning">
                  (Transfer using any bank USSD or other methods into your
                  unique account number.)
                </div>
              </div>

              <div class="paymentTableButtonDiv">
                <button
                  class="btn btn-sm bg-sv-primary text-sv-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <small class="text-white">Deposit</small>
                </button>
              </div>
            </div>
          </div>
          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body text-center p-2">
              <form action="https://dice.ng/generate-account" method="POST">
                <input
                  type="hidden"
                  name="_token"
                  value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol"
                />
                <div
                  class="bg-white d-flex align-items-center justify-content-center rounded logoSize mb-3"
                >
                  <span
                    ><i
                      class="fa fa-university text-dark"
                      style="font-size: 70px"
                    ></i
                  ></span>
                </div>
                <div>
                  Deposit into the account number below and your Dice.ng account
                  will be credited automatically:
                </div>
                <div class="p-2 my-2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <span class="text-sv-warning">ACCOUNT NUMBER:</span>
                      <span class="font-weight-bold" id="account_number">
                        9102067832</span
                      >
                    </div>
                    <!-- <div>
                                                    <button type="button" class="btn btn-sm btn-outline-success" onclick="copyToClipboard('#account_number')">
                                                        <span class="tooltiptext small" id="myTooltip">Copy</span>
                                                    </button>
                                                </div> -->
                  </div>
                  <div class="small my-2">
                    <span class="text-sv-warning">ACCOUNT NAME:</span><br />
                    <span class="font-weight-bold">
                      Lordwingames Play Ltd / Adelore Jesuloluwa</span
                    >
                  </div>
                  <div class="small">
                    <span class="text-sv-warning">BANK NAME:</span><br />
                    <span class="font-weight-bold"> Sparkle Bank</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header py-2 px-1" id="headingOne">
            <div class="d-flex small paymentTableHeader">
              <div class="paymentTableMethod">
                <img
                  src="https://dice.ng/images/desktop/payments/providus.png"
                  style="height: 48px"
                />
              </div>
              <div class="paymentTableDescription">
                Bank Transfer(Providus)
                <div class="text-sv-warning">
                  (Transfer using any bank USSD or other methods into your
                  unique account number.)
                </div>
              </div>
              <div class="paymentTableButtonDiv">
                <button
                  class="btn btn-sm bg-sv-primary text-sv-primary deposit"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <small class="text-white">Deposit</small>
                </button>
              </div>
            </div>
          </div>
          <div
            id="collapseFive"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body text-center p-2">
              <form action="https://dice.ng/generate-account" method="POST">
                <input
                  type="hidden"
                  name="_token"
                  value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol"
                />
                <div
                  class="bg-white d-flex align-items-center justify-content-center rounded logoSize mb-3"
                >
                  <span
                    ><i
                      class="fa fa-university text-dark"
                      style="font-size: 70px"
                    ></i
                  ></span>
                </div>
                <div class="text-center">
                  <div class="mt-2 mb-2">Bank Transfer</div>

                  <button
                    type="submit"
                    name="providus"
                    class="btn bg-sv-primary text-sv-primary"
                  >
                    <span class="small text-white"
                      >Generate Providus Bank Account</span
                    >
                    <span class="ml-1 text-white">⟶</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header py-2 px-1" id="headingTwo">
            <div class="d-flex small paymentTableHeader">
              <div class="paymentTableMethod">
                <img
                  src="https://dice.ng/images/desktop/payments/paystack.png"
                  style="height: 48px"
                />
              </div>
              <div class="paymentTableDescription">Paystack</div>
              <div class="paymentTableButtonDiv">
                <button
                  class="btn btn-sm bg-sv-primary text-sv-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <small>Deposit</small>
                </button>
              </div>
            </div>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <form action="https://dice.ng/make-deposit" method="POST">
                <input
                  type="hidden"
                  name="_token"
                  value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol"
                />
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    name="amount"
                    placeholder="Amount to deposit"
                    required=""
                  />
                </div>

                <select name="select_card" id="" class="form-control select2">
                  <option value="">Select Card</option>
                  <option value="92">mastercard DEBIT **** 5129</option>
                  <option value="516">mastercard DEBIT **** 2209</option>
                </select>
                <input
                  type="hidden"
                  name="email"
                  value="adeloreisaac@gmail.com"
                />
                <input type="hidden" name="quantity" value="1" />
                <input type="hidden" name="currency" value="NGN" />
                <input type="hidden" name="metadata" value="0" />
                <input
                  type="hidden"
                  name="reference"
                  value="JKIGtQYgGNdcMYRqOSYTnymcQ"
                />

                <div class="text-center text-white">
                  <div class="bg-white rounded py-2">
                    <img
                      src="https://dice.ng/images/desktop/payments/paystack.png"
                      alt="paystack-payment"
                      class="logoSize"
                    />
                  </div>
                  <div class="my-2">Paystack</div>
                  <button
                    onclick="callLoader('block'); reloadPage()"
                    type="submit"
                    name="paystack"
                    class="btn bg-sv-primary text-sv-primary"
                  >
                    <span class="small">Deposit Now</span>
                    <span class="ml-1">⟶</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header py-2 px-1" id="headingThree">
            <div class="d-flex small paymentTableHeader">
              <div class="paymentTableMethod">
                <img
                  src="https://dice.ng/images/desktop/payments/flutterwave.png"
                  style="height: 48px"
                />
              </div>
              <div class="paymentTableDescription">Flutterwave</div>
              <div class="paymentTableButtonDiv">
                <button
                  class="btn btn-sm bg-sv-primary text-sv-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <small class="text-white">Deposit</small>
                </button>
              </div>
            </div>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <form action="https://dice.ng/make-deposit" method="POST">
                <input
                  type="hidden"
                  name="_token"
                  value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol"
                />
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    name="amount"
                    placeholder="Amount to deposit"
                    required=""
                  />
                </div>
                <input
                  type="hidden"
                  name="logo"
                  value="https://dice.ng/images/mobile/favicon/favicon_io/favicon-32x32.png"
                />
                <input type="hidden" name="title" value="Dice NG" />

                <div class="text-center text-white">
                  <div class="bg-white rounded py-2">
                    <img
                      src="https://dice.ng/images/desktop/payments/flutterwave.png"
                      alt="flutterwave-payment"
                      class="logoSize"
                    />
                  </div>
                  <div class="my-2">Flutterwave</div>
                  <button
                    type="submit"
                    name="flutterwave"
                    class="btn bg-sv-primary text-sv-primary"
                  >
                    <span class="small text-white">Deposit Now</span>
                    <span class="ml-1 text-white">⟶</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header py-2 px-1" id="headingFour">
            <div class="d-flex small paymentTableHeader">
              <div class="paymentTableMethod">
                <img
                  src="https://dice.ng/images/desktop/payments/opay.png"
                  class="img-fluid"
                  style="height: 32px"
                />
                <img
                  src="https://dice.ng/images/desktop/payments/payment-method-icons/mastercard.png"
                  style="height: 9px"
                />
              </div>
              <div class="paymentTableDescription">Opay</div>
              <div class="paymentTableButtonDiv">
                <button
                  class="btn btn-sm bg-sv-primary text-sv-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <small class="text-white">Deposit</small>
                </button>
              </div>
            </div>
          </div>
          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <form action="https://dice.ng/make-deposit" method="POST">
                <input
                  type="hidden"
                  name="_token"
                  value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol"
                />
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    name="amount"
                    placeholder="Amount to deposit"
                    required=""
                  />
                </div>
                <input
                  type="hidden"
                  name="logo"
                  value="https://dice.ng/images/mobile/favicon/favicon_io/favicon-32x32.png"
                />
                <input type="hidden" name="title" value="Dice NG" />
                <div class="text-center text-white">
                  <div class="bg-white rounded py-2">
                    <img
                      src="https://dice.ng/images/desktop/payments/opay.png"
                      alt="flutterwave-payment"
                      class="logoSize"
                    />
                  </div>
                  <div class="my-2">Opay</div>
                  <button
                    type="submit"
                    name="opay"
                    class="btn bg-sv-primary text-sv-primary"
                  >
                    <span class="small text-white">Deposit Now</span>
                    <span class="ml-1 text-white">⟶</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header py-2 px-1" id="headingThree">
            <div class="d-flex small paymentTableHeader">
              <div class="paymentTableMethod">
                <img
                  src="https://dice.ng/images/desktop/payments/quik.png"
                  style="height: 48px"
                />
              </div>
              <div class="paymentTableDescription mt-2">
                QuickTeller Online Instant Deposit
              </div>
              <div class="paymentTableButtonDiv">
                <button
                  class="btn btn-sm bg-sv-primary text-sv-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseT"
                  aria-expanded="false"
                  aria-controls="collapseT"
                >
                  <small class="text-white">Deposit</small>
                </button>
              </div>
            </div>
          </div>
          <div
            id="collapseT"
            class="collapse"
            aria-labelledby="headingT"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <div class="col-md-6 mx-auto">
                <h5>How to Deposit with QuickTeller</h5>
                <p class="quickteller">
                  1. Visit
                  <a href="https://quickteller.com/dice.ng"
                    >https://quickteller.com/dice.ng
                    <i class="fa fa-link" aria-hidden="true"></i
                  ></a>
                </p>
                <p class="quickteller">
                  2. Enter your <b>DiceNG UserID: 4811048</b> and the amount you
                  wish to deposit, your email and mobile number.
                </p>
                <p class="quickteller">
                  3. Verfiy payment details and click on pay.
                </p>
                <p class="quickteller">
                  4. A payment receipt will be generated and your account will
                  be credited immediately.
                </p>
                <div class="text-center text-white">
                  <a
                    href="https://quickteller.com/diceng"
                    target="_blank"
                    name="quickteller"
                    class="btn bg-sv-primary text-sv-primary"
                  >
                    <span class="small text-white">Deposit Now</span>
                    <span class="ml-1 text-white">⟶</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header py-2 px-1">
            <div class="d-flex small paymentTableHeader">
              <div class="paymentTableMethod">
                <img
                  src="https://dice.ng/images/desktop/payments/cgate.png"
                  style="height: 48px"
                />
              </div>
              <div class="paymentTableDescription mt-2">
                Coral Pay USSD payment
              </div>
              <div class="paymentTableButtonDiv">
                <button
                  class="btn btn-sm bg-sv-primary text-sv-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseCoralPay"
                  aria-expanded="false"
                  aria-controls="collapseCoralPay"
                >
                  <small class="text-white">Deposit</small>
                </button>
              </div>
            </div>
          </div>
          <div
            id="collapseCoralPay"
            class="collapse"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <div class="col-md-6 mx-auto">
                <h5>How to Deposit with Coral Pay</h5>
                <p class="quickteller">
                  To use Coral Pay, enter an amount and select your bank, verify
                  the details and proceed to click the <b>"Pay Now"</b> button,
                  and a USSD code will be generated for you to make payment,
                  after which your account will be credited immediately.
                </p>
                <p class="quickteller">
                  <b>NB : The USSD will be valid for ONLY 5 minutes</b>
                </p>
                <form action="https://dice.ng/coral-pay" method="POST">
                  <input
                    type="hidden"
                    name="_token"
                    value="Cp0ng4zE3Dse1JvW0xqrHan3uyBeiCvBOa9jQMol"
                  />
                  <div class="alert alert-danger" style="display: none"></div>
                  <div
                    class="alert alert-info mt-4"
                    style="display: none"
                  ></div>

                  <div class="form-group">
                    <span>Amount</span>
                    <input
                      type="number"
                      name="amount"
                      id="getAmount"
                      class="form-control"
                      aria-describedby=""
                      placeholder="Enter amount"
                    />
                  </div>
                  <div class="form-group">
                    <span>Bank</span>
                    <select
                      name="bank_code"
                      id="bank_code"
                      class="form-control"
                    >
                      <option value=" ">--Select Bank--</option>
                    </select>
                  </div>
                  <button type="button" class="getUssd btn btn-success">
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deposit",
  layout: "single",
};
</script>

<style>
.logoSize {
  height: 170px;
  /* width: 100%; */
}

p.quickteller {
  font-size: small;
}

.paymentTableMethod {
  width: 27%;
  text-align: center;
}

.paymentTableDescription {
  width: 54%;
}

/* .paymentTableFee {
        width: 17%;
    } */
.paymentTableButtonDiv {
  width: 19%;
}

@media screen and (max-width: 576px) {
  .logoSize {
    height: 130px;
    /* width: 100%; */
  }
}
</style>
