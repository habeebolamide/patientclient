<template>
  <div>
    <VueElementLoading
      :active="loading"
      spinner="line-scale"
      color="var(--primary)"
    />
    <!-- <button class="mx-2 buy-btn" fab small text color="#3f50b5" @click="log()">
        Suscribe
      </button> -->
    <v-card>
      <v-card-text>
        <div v-if="!paid" id="paypal-button-container"></div>
        <div v-else id="confirmation">Order complete!</div>
      </v-card-text>
    </v-card>
  </div>
</template>
  <script>
import { loadScript } from "@paypal/paypal-js";
import VueElementLoading from "vue-element-loading";

export default {
  name: "Checkout-Payment",
  props: {},
  components: { VueElementLoading },
  beforeCreate: function () {
    this.loading = true;
    loadScript({ "client-id": CLIENT_ID }).then((paypal) => {
      paypal
        .Buttons({
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        })
        .render("#paypal-button-container");
      this.loading = false;
    });
  },
  data() {
    return {
      paid: false,
      dialog: false,
      transaction_res: {},
      status: "",
      reference_id: {},
      payment_id:{},
      loading: false,
      cartTotal: {
        type: Number,
        default: 0.01,
      },
    };
  },
  methods: {
    log() {
      const data = this.$route.params.transres;
      // return console.log(data.createsub);
      this.cartTotal = data.createsub.amount;
      this.reference_id = data.createsub.transaction_reference;
      this.transaction_res = data.createsub;
    },

    createOrder(data, actions) {
      console.log(this.currentpackage);
      console.log("Creating order...");
      return actions.order.create({
        // purchase_units: [
        //   {
        //     reference_id : this.package.transaction_reference,
        //     amount: {
        //       value: this.cartTotal,
        //       reference_id: this.reference_id
        //     },
        //   },
        // ],
        purchase_units: [
          {
            amount: {
              value: this.cartTotal,
            },
            reference_id: this.reference_id, // replace with your reference ID
          },
        ],
      });
    },
    onApprove(data, actions) {
      console.log("Order approved...");
      this.status = "success";
      return actions.order.capture().then((res) => {
        this.payment_id = res.id
        // console.log("res");
        // console.log(res.id);
        this.paid = true;
        this.Subscribe();
        this.checkStatus()
        // this.redir(this)
      });
    },
    redir($this) {
      setTimeout(function () {
        $this.$router.push("/app/my-packages");
        console.log("Order complete!");
      }, 3000);
    },
    checkStatus(){
      let payment_id = this.payment_id
      this.$api
        .get(this.dynamic_route(`transaction/payments/${payment_id}`)).then((res) => {
          console.log(res);
        })
    },
    Subscribe() {
      let packageservice = this.transaction_res.package_id;
      this.$api
        .post(this.dynamic_route(`subscribe/store/${packageservice}`))
        .then((res) => {
          if (res.data.status) {
            this.$toast.success(res.data.message, {
              position: "top-right",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: "button",
              icon: true,
              rtl: false,
            });
            this.changeStatus();
          } else {
            console.log(res.data.message);
            this.$toast.error(res.data.message, {
              position: "top-right",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          }
        });
    },
    changeStatus() {
      // return console.log(this.package.id);
      console.log("abeg naaaaaaabrvkurvbwive");
      let transaction = this.transaction_res.id;
      this.$api
        .put(this.dynamic_route(`transaction/updatestatus/${transaction}`), {
          status: this.status,
        })
        .then((res) => {
          console.log("hi");
          // window.location.href = "/app/my-packages";
        });
    },
    beforeDestroy() {
      if (this.paypalButton) {
        this.paypalButton.close();
      }
    },
  },
  mounted() {
    this.log();
    // const paypalButton = paypal.Buttons({
    //     createOrder: function(data, actions) {
    //         return actions.order.create({
    //             purchase_units: [{
    //             amount: {
    //                 value: '0.01',
    //                 currency_code: 'USD'
    //             },
    //             description: 'Your order description here'
    //             }]
    //         });
    //     },
    //     onApprove: function(data, actions) {
    //         return actions.order.capture().then(function(details) {
    //             // Show a success message to the buyer
    //             alert('Transaction completed by ' + details.payer.name.given_name + '!');
    //         });
    //     }

    // });

    // paypalButton.render(this.$refs.paypalButtonContainer);
  },
};
const CLIENT_ID =
  "AUAMS6qH6XppC1QEe38lP6HAt4vDVeg_ug7iytDGuo_8ic4hx2NIIy8VIgh6EsNQkhS0n5XT07FVSRxB";
</script>
  
  <style scoped>
.buy-btn {
  display: inline-block;
  padding: 12px 35px;
  border-radius: 50px;
  color: #47b2e4;
  transition: none;
  font-size: 16px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
  border: 1px solid #47b2e4;
}

.buy-btn:hover {
  background: #47b2e4;
  color: #fff;
}

.buy-btn {
  background: #47b2e4;
  color: #fff;
}

.buy-btn:hover {
  background: #23a3df;
}
#paypal-button-container {
  margin: 30px 0;
}

#confirmation {
  color: green;
  margin-top: 1em;
  font-size: 2em;
}
</style>
  