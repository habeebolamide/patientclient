<template>
     <v-dialog v-model="dialog" persistent max-width="600px">

        <template v-slot:activator="{ on, attrs }">
            <button href="#" @click="toggleDialog()" class="buy-btn" v-bind="attrs" v-on="on">
                <StripeElements
                    :stripe-key="stripeKey"
                    :instance-options="instanceOptions"
                    :elements-options="elementsOptions"
                    #default="{ elements }"
                    ref="elms"
                >
                    <StripeElement
                    type="card"
                    :elements="elements"
                    :options="cardOptions"
                    ref="card"
                    />
                </StripeElements>
                Subscribe
            </button>
        </template>
        <v-card>
      <v-card-title>
        <span class="text-h5">Create Package</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <div class="">
            <form>
              <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
              <v-container>
                <v-row>
                <StripeElements
                    :stripe-key="stripeKey"
                    :instance-options="instanceOptions"
                    :elements-options="elementsOptions"
                    #default="{ elements }"
                    ref="elms"
                >
                    <StripeElement
                    type="card"
                    :elements="elements"
                    :options="cardOptions"
                    ref="card"
                    />
                </StripeElements>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeMe()">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="createPackage()">
                  Subscribe
                </v-btn>
              </v-card-actions>
            </form>
          </div>
        </v-container>
      </v-card-text>
      
    </v-card>
    </v-dialog >
  </template>
  
  <script>
  import { StripeElements, StripeElement } from 'vue-stripe-elements-plus'
  import VueElementLoading from "vue-element-loading";
  export default {
    name: 'PaymentSimple',
  
    components: {
      StripeElements,
      StripeElement,
      VueElementLoading
    },
  
    data () {
      return {
        dialog : false,
        loading : false,
        stripeKey: 'pk_test_51MZvYPKxuxxNDGX7im6ZjXskmm4WV4QubFO4n72jjbmCv0Zi6Wow8IXrlnr1yJFja6oAq00TTgqXUxgVQ176f8h400YfbdnYvk', // test key, don't hardcode
        instanceOptions: {
          // https://stripe.com/docs/js/initializing#init_stripe_js-options
        },
        elementsOptions: {
          // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
        },
        cardOptions: {
          // reactive
          // remember about Vue 2 reactivity limitations when dealing with options
          value: {
            postalCode: ''
          }
          // https://stripe.com/docs/stripe.js#element-options
        }
      }
    },
  
    methods: {
      pay () {
        // ref in template
        const groupComponent = this.$refs.elms
        const cardComponent = this.$refs.card
        // Get stripe element
        const cardElement = cardComponent.stripeElement
  
        // Access instance methods, e.g. createToken()
        groupComponent.instance.createToken(cardElement).then(result => {
          // Handle result.error or result.token
        })
      },
      toggleDialog(){
        this.dialog = true
      },
      Subscribe(data) {
      let packageservice = data.id;
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
      closeMe() {
        this.dialog = !this.dialog;
        },
        async submit () {
      // Get the Stripe instance
      const stripe = await loadStripe(this.stripeOptions.publishableKey)

      // Get the payment token from the Stripe Elements instance
      const { token, error } = await stripe.createToken(this.$refs.stripeElements.getElement())

      if (error) {
        // Handle the error
        console.error(error)
      } else {
        // Send the payment token to your server to charge the customer
        // ...
    }
    }
    }
  }
  </script>
  <style scoped>
  .services .buy-btn {
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
  
  .services .buy-btn:hover {
    background: #47b2e4;
    color: #fff;
  }
  </style>