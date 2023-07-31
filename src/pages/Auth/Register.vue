<template>
  <v-app>
    <div class="auth-page">
      <div class="container">
        <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <img src="/remove.png" alt="" class="img-fluid mb-5 center" width="40%">
          <div class="card">
            <div class="container">
              <div class="login-form py-5">
              <h1 class="text-center" style="font-weight: bold; color: #3f86ca">
                Create a Secure Account
              </h1>
              <p
                class="text-center mb-3"
                style="color: #4a5568; text-align: center !important"
              >
                Welcome To Hypelbase
              </p>
              <form @submit.prevent="login" class="pt-4">
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
                <div class="row">
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">FirstName</p>
                    <input
                      v-model="form.firstname"
                      label="Name"
                      class="form-control mb-3"
                      type="text"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">Lastname</p>
                    <input
                      v-model="form.lastname"
                      label="Name"
                      class="form-control mb-3"
                      type="text"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">Username</p>
                    <input
                      v-model="form.username"
                      label="Username"
                      class="form-control mb-3"
                      type="text"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">Email</p>
                    <input
                      v-model="form.email"
                      label="Email"
                      class="form-control mb-3"
                      type="email"
                      required
                />
                  </div>
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">DOB</p>
                    <input
                      v-model="form.dob"
                      label="DOB"
                      class="form-control mb-3"
                      type="date"
                      required
                  />
                  </div>
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">Phone</p>
                    <input
                      v-model="form.phone"
                      label="Phone"
                      class="form-control mb-3"
                      type="number"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">Password</p>
                    <input
                      v-model="form.password"
                      :rules="passwordRules"
                      label="Password"
                      type="password"
                      class="form-control mb-3"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <p style="color: #4a5568; font-weight: 700">Confirm Password</p>
                      <input
                        v-model="form.password_confirmation"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        class="form-control"
                        required
                      />
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn-block btn auth-btn btn-lg btn-primary"
                >
                  REGISTER
                </button>
              </form>
            </div>
            </div>
          </div>
          <div class="others pt-3">
            <p class="pt-5">
              <router-link style="color: black; font-weight: 600" to="/login">
                Already have an account? Login
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
      valid: false,
      errorMessage: null,
      form: {},
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Password should be at least 8 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      loading: false,
      showPassword: false,
    };
  },
  methods: {
    login() {
      if (Object.keys(this.form).length < 2) {
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
          if (res.data.status == false) {
            return this.$toast.error(res.data.message, {
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
          this.$toast.success("Account Created Successfully", {
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
            localStorage.setItem("auth_info", JSON.stringify(data));
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
          this.$toast.error(res.data.data.message, {
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
        "ABC|DEFGHIJKLMNOPQ|R3STUVWXYZa|bcdefg|lmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },

  created() {
    if (window.localStorage.getItem("authenticated") === "true") {
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card h1 {
  font-family: "Rubik";
  font-size: 25px !important;
}
.auth-page {
  background-image: url("/img/vuesax-login-bg.jpg");
  background-size: cover;
  height: auto;
  padding-top: 15px !important;
}

.auth-btn {
  margin-top: 35px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  font-family: "Rubik";
  font-weight: 700;
  border-radius: 10px 10px 10px 0px !important;
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
