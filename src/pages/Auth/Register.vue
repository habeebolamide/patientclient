<template>
  <v-app>
    <div class="auth-page">
      <div class="login-wrapper">
        <div class="card col-md-4 mx-auto">
          <div class="">
            <div class="">
              <div class="mx-auto pl-md-8 register-form">
                <b-link :to="'/'"
                  ><div class="text-center mt-7 mb-3">
                    <!-- <img src="/img/building1.png" alt="" width="110">  -->
                  </div></b-link
                >
                <v-form
                  ref="form"
                  lazy-validation
                  @submit.prevent="login"
                  v-model="valid"
                >
                  <VueElementLoading
                    :active="loading"
                    spinner="bar-fade-scale"
                    color="var(--primary)"
                    text="Loading.."
                    duration="0.6"
                  />
                  <v-text-field
                    v-model="form.name"
                    :rules="nameRules"
                    :counter="255"
                    label="Full name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.username"
                    :counter="255"
                    :rules="usernameRules"
                    label="Username"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.email"
                    :counter="255"
                    :rules="emailRules"
                    label="Email"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.phone"
                    :counter="255"
                    :rules="phoneRules"
                    label="Phone Number"
                    type="number"
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

                  <v-text-field
                    v-model="form.password_confirmation"
                    :rules="passwordRules"
                    label="Confirm Password"
                    type="password"
                    v-if="!showPassword2"
                    required
                  >
                    <v-icon
                      slot="append"
                      style="cursor: pointer"
                      @click="togglePassword2"
                    >
                      mdi-eye-outline
                    </v-icon>
                  </v-text-field>
                  <v-text-field
                    v-model="form.password_confirmation"
                    :rules="cPasswordRules"
                    label="Confirm Password"
                    type="text"
                    required
                    v-if="showPassword2"
                  >
                    <v-icon
                      slot="append"
                      style="cursor: pointer"
                      @click="togglePassword2"
                    >
                      mdi-eye-off-outline
                    </v-icon>
                  </v-text-field>
                  <b-button
                    block
                    :disabled="!valid"
                    type="submit"
                    class="a mt-2 btn-lg btn-primary"
                    >Create Account</b-button
                  >
                </v-form>
                <p class="widget-auth-info text-center py-2">
                  Already have an account?
                  <router-link to="/login">Sign in</router-link>
                </p>
                <!-- <p class="widget-auth-info text-center py-2">
                  <router-link  to="/">Visit Site</router-link>
                </p> -->
                <!-- <p class="float-right mt-2">

                </p> -->
              </div>
            </div>
            <!-- <div class="col-md-8 set text-center d-lg-block d-none">
              <img src="/img/reg_asset.png" alt="">
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
import Widget from "@/components/Widget/Widget";
import axios from "axios";
import VueElementLoading from "vue-element-loading";

export default {
  name: "LoginPage",
  components: { Widget, VueElementLoading },
  data() {
    return {
      valid: false,
      errorMessage: null,
      form: {},
      nameRules: [(v) => !!v || "Full name is required"],
      usernameRules: [(v) => !!v || "Username is required"],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Password should be at least 8 characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone Number is required",
        (v) =>
          (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999999999999) ||
          "Password should be numbers",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      cPasswordRules: {
        // v => form.password != form.password_confirmation || 'E-mail is required'
      },
      loading: false,
      showPassword: false,
      showPassword2: false,
    };
  },
  methods: {
    login() {
      if (Object.keys(this.form).length != 6) {
        return this.$toast.error("All fields are required!", {
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
      } else if (this.form.password.length < 8) {
        return this.$toast.error("Password must be at least 8 characters!", {
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
      } else if (this.form.password !== this.form.password_confirmation) {
        return this.$toast.error("Password do not match!", {
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
      this.loading = true;
      axios
        .post(this.dynamic_auth_route("register"), this.form)
        .then((res) => {
          this.loading = false;
          this.$toast.success("Registration successful!", {
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
          if (res.data.data.token) {
            var data = {
              auth_token: res.data.data.token,
              auth_user: res.data.data.user,
            };
            localStorage.setItem("auth_user", JSON.stringify(data.auth_user));
            for (let index = 0; index < 200; index++) {
              localStorage.setItem(
                this.generateTokens(7),
                JSON.stringify(this.generateTokens(42))
              );
            }
            localStorage.setItem("2@39$*8", data.auth_token);

            localStorage.setItem("0$oR*2w", this.generateTokens(30));
            localStorage.setItem("||xm2Nw", this.generateTokens(43));
            location.href = "/app/dashboard";
          }
        })
        .catch((err) => {
          this.loading = false;
          if (err.response.status == 401) {
            this.$toast.error("Unauthorized!", {
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
          } else if (err.response.status == 405) {
            return this.$toast.error(err.response.data.email[0], {
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
          this.$toast.error("An error occurred, please try again!", {
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
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    generateTokens(length) {
      var result = "";
      var characters =
        "856ABC|DEFGHIJKLMNOPQ|R3STUVWXYZa|bcdefg|lmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    togglePassword2() {
      this.showPassword2 = !this.showPassword2;
    },
  },
  created() {
    if (window.localStorage.getItem("auth_token") != null) {
      this.$router.push("/app/dashboard");
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
  background-image: url("/img/vuesax-login-bg.jpg");
  padding-top: 5vh !important;
}
.login-wrapper {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
  padding-right: 100px;
}
.custom-btn {
  color: #ffffff;
  background-color: #ec570d;
  /* background-image: linear-gradient(135deg, #243a9c 0%, #1F2667 100%) !important; */
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
  min-height: 576px;
  object-fit: cover;
  max-width: 73%;
  max-height: 529px;
  width: 100%;
}

@media screen and (max-width: 798px) {
  .login-wrapper {
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }
  .register-form {
    padding: 10px;
  }
}
</style>
