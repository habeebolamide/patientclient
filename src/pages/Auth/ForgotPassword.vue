<template>
  <v-app>
    <div class="auth-page">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <img
              src="/remove.png"
              alt=""
              class="img-fluid mb-5 center"
              width="40%"
            />
            <div class="card" v-if="sent == false">
              <div class="container">
                <div class="login-form py-5">
                  <h1
                    class="text-center"
                    style="font-weight: bold; color: #3f86ca"
                  >
                    Forgot Password
                  </h1>
                  <p
                    class="text-center mb-5"
                    style="color: #4a5568; text-align: center !important"
                  >
                    Enter your email to reset your password
                  </p>
                  <form @submit.prevent="resetPassword" class="pt-4">
                    <VueElementLoading
                      :active="loading"
                      spinner="bar-fade-scale"
                      color="var(--primary)"
                      text="Loading.."
                      duration="0.6"
                    />
                    <b-alert
                      class="alert-sm"
                      variant="danger"
                      :show="!!errorMessage"
                    >
                      {{ errorMessage }}
                    </b-alert>
                    <p style="color: #4a5568; font-weight: 700">Email</p>
                    <input
                      v-model="form.email"
                      :rules="emailRules"
                      label="Email"
                      class="form-control mb-5"
                      type="email"
                      required
                    />

                    <button
                      type="submit"
                      class="btn-block btn auth-btn btn-lg btn-primary"
                    >
                      RESET PASSWORD
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="card" v-if="sent == true && token == false">
              <div class="container">
                <div class="login-form py-5">
                  <h1
                    class="text-center"
                    style="font-weight: bold; color: #3f86ca"
                  >
                  Validate Token
                  </h1>
                  <p
                    class="text-center mb-5"
                    style="color: #4a5568; text-align: center !important"
                  >
                    Enter the OTP sent to your mail
                  </p>
                  <form @submit.prevent="verifyToken" class="pt-4">
                    <VueElementLoading
                      :active="loading"
                      spinner="bar-fade-scale"
                      color="var(--primary)"
                      text="Loading.."
                      duration="0.6"
                    />
                    <b-alert
                      class="alert-sm"
                      variant="danger"
                      :show="!!errorMessage"
                    >
                      {{ errorMessage }}
                    </b-alert>
                    <div class="text-center">
                        <input
                          v-model="otp.otp1"
                          class="otp mr-2"
                          type="text"
                          required
                          
                          @keyup="tabChange(1)"
                          maxlength="1"
                        />
                        <input
                          v-model="otp.otp2"
                          class="otp mr-2"
                          type="text"
                          required
                          
                          @keyup="tabChange(2)"
                          maxlength="1"
                        />
                        <input
                          v-model="otp.otp3"
                          class="otp mr-2"
                          type="text"
                          required
                          
                          @keyup="tabChange(3)"
                          maxlength="1"
                        />
                        <input
                          v-model="otp.otp4"
                          class="otp mr-2"
                          type="text"
                          required
                          
                          @keyup="tabChange(4)"
                          maxlength="1"
                        />
                        <input
                          v-model="otp.otp5"
                          class="otp mr-2"
                          type="text"
                          required
                          
                          @keyup="tabChange(5)"
                          maxlength="1"
                        />
                        <input
                          v-model="otp.otp6"
                          class="otp mr-2"
                          type="text"
                          required
                          
                          @keyup="tabChange(6)"
                          maxlength="1"
                        />
                      </div>

                    <button
                      type="submit"
                      class="btn-block btn auth-btn btn-lg btn-primary"
                    >
                      VERIFY OTP
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="card" v-if="token==true">
              <div class="container">
                <div class="login-form py-5">
                  <h1
                    class="text-center"
                    style="font-weight: bold; color: #3f86ca"
                  >
                  Change Password
                  </h1>
                  <p
                    class="text-center mb-5"
                    style="color: #4a5568; text-align: center !important"
                  >
                  Create a new  password.
                  </p>
                  <form @submit.prevent="changePassword" class="pt-4">
                    <VueElementLoading
                      :active="loading"
                      spinner="bar-fade-scale"
                      color="var(--primary)"
                      text="Loading.."
                      duration="0.6"
                    />
                    <b-alert
                      class="alert-sm"
                      variant="danger"
                      :show="!!errorMessage"
                    >
                      {{ errorMessage }}
                    </b-alert>
                    
                    <p style="color: #4a5568; font-weight: 700">New Password</p>
                    <input
                      v-model="form.password"
                      :rules="passwordRules"
                      label="New Password"
                      class="form-control mb-5"
                      type="password"
                      required
                    />

                    <p style="color: #4a5568; font-weight: 700">Confirm Password</p>
                    <input
                      v-model="form.password_confirmation"
                      :rules="passwordRules"
                      label="New Password"
                      class="form-control mb-5"
                      type="password"
                      required
                    />
                    <button
                      type="submit"
                      class="btn-block btn auth-btn btn-lg btn-primary"
                    >
                      CHANGE PASSWORD
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="others pt-3">
              <p class="pt-5">
                <router-link style="color: black; font-weight: 600" to="/login">
                  Back to login
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="auth-footer">
        2019 &copy; Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
      </footer> -->
  </v-app>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import VueElementLoading from "vue-element-loading";
import axios from "axios";

export default {
  name: "LoginPage",
  components: { VueElementLoading, Widget },
  data() {
    return {
      errorMessage: null,
      form: {},
      otp: {},
      tok: "",
      token: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      password: [(v) => !!v || "Password field is required"],
      loading: false,
      message: "",
      sent: false,
      password: {},
    };
  },
  methods: {
    resetPassword() {
      if (Object.keys(this.form).length < 1) {
        return this.$toast.error("Email field is required!", {
          position: "top-center",
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
      } else {
        this.loading = true;
        axios
          .post(this.dynamic_auth_route("forgot-password"), this.form)
          .then((res) => {
            this.sent = true;
            this.message = res.data.message;
            this.loading = false;
            this.$toast.success(res.data.data.message, {
              position: "top-center",
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
            // this.$router.push('/reset');
          })
          .catch((err) => {
            this.loading = false;
            this.$toast.error(err.response.data.data.message, {
              position: "top-center",
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
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    verifyToken() {
      this.loading = true;
      let payload = {
        token:
          this.otp.otp1 +
          this.otp.otp2 +
          this.otp.otp3 +
          this.otp.otp4 +
          this.otp.otp5 +
          this.otp.otp6,
        email: this.form.email,
      };
      axios
        .post(this.dynamic_auth_route("verify-token"), payload)
        .then((res) => {
          this.token = true;
          this.tok = res.data.code;
          this.message = res.data.message;
          this.loading = false;
          this.$toast.success(res.data.message, {
            position: "top-center",
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
          // this.$router.push('/login');
        })
        .catch((err) => {
          this.loading = false;
          if (err.response.status == 404) {
            return this.$toast.error(err.response.data.message, {
              position: "top-center",
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
          } else if (err.response.status == 422) {
            this.$toast.error(err.response.data.error, {
              position: "top-center",
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
          this.$toast.error(err.response.data.message, {
            position: "top-center",
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
        })
        .finally(() => {
          this.loading = false;
        });
    },
    changePassword() {
      let payload = {
        token: this.tok,
        email: this.form.email,
        password: this.password.password,
      };
      this.loading = true;
      axios
        .post(this.dynamic_auth_route("change-password"), payload)
        .then((res) => {
          this.message = res.data.message;
          this.$toast.success(res.data.message, {
            position: "top-center",
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
          this.$router.push("/login");
        })
        .catch((err) => {
          this.loading = false;
          if (err.response.status == 404) {
            return this.$toast.error(err.response.data.message, {
              position: "top-center",
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
          this.$toast.error(err.response.data.message, {
            position: "top-center",
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
        })
        .finally(() => {
          this.loading = false;
        });
    },
    tabChange(val) {
      let ele = document.querySelectorAll("input");
      if (ele[val - 1].value != "") {
        ele[val].focus();
      } else if (ele[val - 1].value == "") {
        ele[val - 2].focus();
      }
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 0 !important;
  border: none !important;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 40%);
  border-radius: 25px 25px 25px 0px !important;
  height: auto;
  font-family: "Rubik";
  /* width: ; */
}
input {
  padding-top: 28px !important;
  padding-bottom: 28px !important;
  border: none;
  background: #e8f0fe !important;
}
.card h1 {
  font-family: "Rubik";
  font-size: 25px !important;
}
.auth-page {
  background-image: url("/img/vuesax-login-bg.jpg");
  padding-top: 15px !important;
}
.otp {
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid black;
  }
.auth-btn {
  margin-top: 35px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  font-family: "Rubik";
  font-weight: 700;
  border-radius: 10px 10px 10px 0px !important;
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
.others {
  font-family: "Rubik";
  font-size: 14px !important;
  font-weight: 500 !important;
  text-align: center;
  color: #000000 !important;
}

.others p router-link {
  color: #000000 !important;
}
.widget-auth-info {
  color: #000000 !important;
  /* font-weight: 500; */
  margin-top: 20px;
  border-top: 1px solid rgb(213, 216, 222);
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
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
