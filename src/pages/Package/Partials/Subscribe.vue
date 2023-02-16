<template>
    <div>
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
  import { loadScript } from '@paypal/paypal-js';
  
  export default {
    name: 'Checkout-Payment',
    props: {
    //   cartTotal: {
    //     type: Number,
    //     default: 0.01,
    //   },
    },
   beforeCreate: function() {
      loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
        paypal
          .Buttons({
            createOrder: this.createOrder,
            onApprove: this.onApprove,
          })
          .render('#paypal-button-container');
      });
    },
    data() {
      return {
        paid: false,
        dialog: false,
        package:{},
        cartTotal: {
        type: Number,
        default: 0.01,
      },
      };
    },
    methods: {
    log(){
        const data =  this.$route.params.packages
        // return console.log(data.package_price);
        this.cartTotal = data.package_price
        this.package = data
    },
    Subscribe() {
      let packageservice = this.package.id;
      // return console.log(packageservice.id);
      // return console.log(packageservice);;
      this.$swal({
        icon: "warning",
        title: "Subscribe ",
        text: "Are you sure you want to subscribe to this package?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes !",
        cancelButtonText: "No, Exit!",
        cancelButtonColor: "#d92550",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$api.post(this.dynamic_route(`subscribe/store/${packageservice}`))
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
            }else{
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

           
          })
        }
      });
    },
      createOrder: function(data, actions) {
        console.log(this.currentpackage);
        console.log('Creating order...');
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.cartTotal,
              },
            },
          ],
        });
      },
      onApprove: function(data, actions) {
        console.log('Order approved...');
        return actions.order.capture().then(() => {
          this.paid = true;
          console.log('Order complete!');
          // this.Subscribe()
        });
      },
      beforeDestroy() {
        if (this.paypalButton) {
        this.paypalButton.close();
        }
       },
    },
    mounted(){
        this.log()
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

    }
  };
  const CLIENT_ID = 'Ae3i9kI0WS99xEnGBCLnYas7T_xU1DixWHC-zk_-bPO2jSlClA3B68UZVqRs9c2LI40Zi8LMKXphTT8t';
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
  