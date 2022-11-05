<template>
  <v-app>
    <div class="auth-page">
      <div class="login-wrapper">
        <div class="card mx-auto col-md-6">
          <div class="">
            <div class="">
              <div class="mx-auto py-5 mt-md-4 pl-md-8 login-form">
                <b-link :to="'/'"><div class="text-center mt-10 mb-7">
                  <!-- <img src="/img/logo.png" alt="" width="120">  -->
                </div></b-link>
                <v-form v-model="valid" @submit.prevent="login">
                  <VueElementLoading
                        :active="loading"
                        spinner="bar-fade-scale"
                        color="var(--primary)"
                        text="Loading.."
                        duration="0.6"
                    />
                  <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                    {{errorMessage}}
                  </b-alert>
                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="Email"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    v-if="!showPassword"
                    required
                  >
                    <v-icon
                      slot="append"
                      style="cursor: pointer"
                      @click="togglePassword"
                    >
                      mdi-eye-outline
                    </v-icon>
                  </v-text-field>
                  <v-text-field
                    v-model="form.password"
                    :rules="passwordRules"
                    label="Password"
                    type="text"
                    required
                    v-if="showPassword"
                  >
                    <v-icon
                      slot="append"
                      style="cursor: pointer"
                      @click="togglePassword"
                    >
                      mdi-eye-off-outline
                    </v-icon>
                  </v-text-field>
                  <button  :disabled="!valid" type="submit" class="btn-block btn auth-btn mt-3 btn-lg btn-primary">Login</button>
                  <router-link style="color: brown !important" class="d-block mt-1 text-right" to="/forgot-password">Forgot Password ?</router-link>
                  
                </v-form>
                <p class="widget-auth-info text-center py-2">
                  Don't have an account? <router-link  to="/register">Sign up</router-link>
                  <!-- <router-link class="btn btn-sm btn-warning text-white"  to="/">Visit Site</router-link> -->
                </p>
                <div class="pt-5 pb-5 d-none d-lg-block">
                </div>
              </div>
            </div>
            <!-- <div class="col-md-8 set text-center d-lg-block d-none">
              <img style="width:100%" src="/img/login-img2.png" alt="">
            </div> -->
          </div>
        </div>
      </div>
      <!-- <footer class="auth-footer">
        2019 &copy; Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
      </footer> -->
    </div>
  </v-app>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import VueElementLoading from 'vue-element-loading'
import axios from 'axios'

export default {
  name: 'LoginPage',
  components: { VueElementLoading,Widget },
  data() {
    return {
      valid: false,
      errorMessage: null,
      form:{},
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password should be at least 8 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      loading: false,
      showPassword: false,
    };
  },
  methods: {
    login() {
     
      if(Object.keys(this.form).length < 2) {
        return this.$toast.error('All fields are required!', {
          position: 'top-center',
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: true,
          rtl: false,
        });
      } else {
        this.loading=true;
        axios.post(this.dynamic_auth_route('/login'), this.form)
        .then(res => {
          this.loading=false;
          this.$toast.success('Login successful!', {
              position: 'top-center',
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: 'button',
              icon: true,
              rtl: false,
            });
            
            if(res.data.data.token) {
              var data = {
                auth_token : res.data.data.token,
                auth_user : res.data.data.user
              };
              localStorage.setItem('auth_info',JSON.stringify(data));
              
              location.href='/app/dashboard';
            }
        }).catch(err => {
          this.loading=false;
          if(err.response.status == 400)  {
            this.errorMessage=err.response.data.message
            return this.$toast.error('Invalid Credentials!', {
              position: 'top-center',
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
          }
          this.$toast.error('An error occurred, please try again!', {
              position: 'top-center',
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: 'button',
              icon: true,
              rtl: false,
            })
        }).finally(() =>{
          this.loading=false;
        })
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
  created() {
    if (window.localStorage.getItem('authenticated') === 'true') {
      this.$router.push('/app/dashboard');
    }
  },
};
</script>
<style scoped>
.card {
  border-radius: 0 !important;
  border: none !important;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 40%);
}
.auth-page {
  background-image: url('/img/vuesax-login-bg.jpg');
  padding-top: 10vh !important;
}
.login-wrapper {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
  padding-right: 100px;
}
.custom-btn {
  color: #ffffff;
  background-color: #ec570d;
  /* background-image: linear-gradient(135deg, #f27233 0%, #f27233 100%) !important; */
}
.widget-auth-info {
  color: #000000 !important;
  /* font-weight: 500; */
  margin-top: 20px;
  border-top: 1px solid rgb(213, 216, 222);
}
.set {
  width: 100px;
  height: 400px;
}
.set img {
  min-height: 508px;
  object-fit: cover;
  max-width: 77%;
  max-height: 504px;
  width: 100%;
}
@media screen and (max-width: 798px) {
  .login-wrapper {
    width: 100%;
    padding-left: 12px;
    padding-top: 50px;
    padding-right: 12px;
  }
  .login-form {
    padding: 10px;
  }
}
</style>
