/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <v-app class="p-4">
    <h2 class="page-title">Profile Page</h2>
    <b-row>
      <b-col cols="12" sm="12" md="4">
        <Widget
          title=""
          customHeader
          class="text-center"
          style="position: relative"
        >
          <!-- <h5 class="d-inline-block">Manage  <span class='fw-semi-bold'>Your Profile</span></h5> -->
          <VueElementLoading
            :active="loading"
            spinner="bar-fade-scale"
            color="var(--primary)"
            text="Loading.."
            duration="0.6"
          />
          <div class="preview"></div>
          <div class="body pt-3 pb-3">
            <div>
              <img
                class="avatar"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                style="width: 100%"
                alt=""
              />
            </div>
            <div class="profile_content">
              <h4 class="">
                {{ form.lname }} {{ form.fname }} {{ form.mname }}
              </h4>
              <span class="d-block my-2">{{ form.user_type.name }}</span>
              <small class="mb-3">{{ form.email }}</small>
              <!-- <button
                class="mt-5 p-2 btn btn-block btn-primary"
                :disabled="disableEdit"
                @click="$bvModal.show('change-password')"
              >
                Change Password
              </button> -->
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    type="button"
                    tabindex="0"
                    text
                    color="white"
                    :disabled="disableEdit"
                    v-bind="attrs"
                    v-on="on"
                    class="mt-3 btn-primary btn-block"
                  >
                    <span> Change Password</span>
                  </v-btn>
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
                            :active="loading1"
                            spinner="line-scale"
                            color="var(--primary)"
                          />
                          <b-alert
                          class="alert-sm"
                          variant="danger"
                          :show="!!errorMessage"
                        >
                          {{ errorMessage }}
                        </b-alert>
                          <v-container>
                            <v-row>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="authInfo.oldpassword"
                                  :append-icon="
                                    show1 ? 'mdi-eye' : 'mdi-eye-off'
                                  "
                                  :rules="[rules.required, rules.min]"
                                  :type="show1 ? 'text' : 'password'"
                                  name="input-10-1"
                                  label="Old Password"
                                  hint="At least 8 characters"
                                  counter
                                  @click:append="show1 = !show1"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="authInfo.newpassword"
                                  :append-icon="
                                    show2 ? 'mdi-eye' : 'mdi-eye-off'
                                  "
                                  :rules="[rules.required, rules.min]"
                                  :type="show2 ? 'text' : 'password'"
                                  name="input-10-1"
                                  label="New Password"
                                  hint="At least 8 characters"
                                  counter
                                  @click:append="show2 = !show2"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="authInfo.confirm"
                                  :append-icon="
                                    show3 ? 'mdi-eye' : 'mdi-eye-off'
                                  "
                                  :rules="[rules.required, rules.min]"
                                  :type="show3 ? 'text' : 'password'"
                                  name="input-10-1"
                                  label="Confirm New Password"
                                  hint="At least 8 characters"
                                  counter
                                  @click:append="show3 = !show3"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="closeMe()"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="changePassword()"
                            >
                              Update Password
                            </v-btn>
                          </v-card-actions>
                        </form>
                      </div>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </Widget>
      </b-col>
      <b-col cols="12" sm="12" md="8">
        <Widget title="" customHeader>
          <!-- <h5 class="d-inline-block">Manage  <span class='fw-semi-bold'>Your Profile</span></h5> -->
          <VueElementLoading
            :active="loading"
            spinner="bar-fade-scale"
            color="var(--primary)"
            text="Loading.."
            duration="0.6"
          />
          <p class="text-muted font-weight-light">
            Hi, {{ form.username }}
            <span class="text text-danger ml-md-5" v-if="disableEdit"
              >Please Click on the edit info button to enable edit 👉</span
            >
            <button
              class="float-right btn btn-primary"
              type="submit"
              v-if="disableEdit"
              @click="enableEdit"
            >
              Edit info
            </button>
            <button
              class="float-right btn btn-primary"
              type="submit"
              v-else
              @click="enableEdit"
            >
              Disable Fields
            </button>
          </p>
          <V-form class="mt-4" @submit.prevent="editUserInfo()">
            <v-row>
              <v-col cols="12" sm="12" md="12" class="mb-2">
                <v-text-field
                  label="Full name*"
                  v-model="form.name"
                  :disabled="disableEdit"
                  :rules="nameRule"
                  required
                ></v-text-field>
              </v-col>
              <!--  -->
              <v-col cols="12" sm="12" md="4" class="mb-2">
                <v-text-field
                  label="User name*"
                  v-model="form.username"
                  :rules="nameRule"
                  :disabled="disableEdit"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4" class="mb-2">
                <v-text-field
                  label="Email*"
                  v-model="form.email"
                  :rules="nameRule"
                  :disabled="disableEdit"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4" class="mb-2">
                <v-text-field
                  label="Phone*"
                  v-model="form.phone"
                  :rules="nameRule"
                  :disabled="disableEdit"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <button
                :disabled="disableEdit"
                class="btn btn-primary"
                type="submit"
              >
                Save
              </button>
            </v-card-actions>
          </V-form>
        </Widget>
      </b-col>
    </b-row>
    <b-modal id="change-password" title="Change Password" size="md" hide-footer>
      <div class="alert alert-danger" v-if="errors.length">
        <ul>
          <li v-for="(err, i) in errors" :key="i">{{ err.error }}</li>
        </ul>
      </div>
      <form @submit.prevent="changePassword">
        <VueElementLoading
          :active="changePassLoading"
          spinner="bar-fade-scale"
          color="var(--primary)"
          text="Loading.."
          duration="0.6"
        />
      </form>
    </b-modal>
  </v-app>
</template>
<script>
import Widget from "@/components/Widget/Widget";
import axios from "axios";
import VueElementLoading from "vue-element-loading";
import { mapState, mapActions } from "vuex";
import countries from "./Countries.json";
export default {
  components: { VueElementLoading, Widget },
  data() {
    return {
      loading: false,
      changePassLoading: false,
      disableEdit: true,
      form: { user_type: {}  },
      authInfo: {
      },
      dialog: false,
      errors: {},
      countries: countries,
      errorMessage:null,
      loading1 :false,
      nameRule: [(v) => !!v || "Field is required"],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {},
  methods: {
    enableEdit() {
      this.disableEdit = !this.disableEdit;
    },
    getUser() {
      this.$api.get(this.dynamic_route("user")).then((res) => {
        this.form = res.data;
      });
    },
    closeMe() {
      this.dialog = !this.dialog;
    },
    changePassword(){
        this.loading1 = true
        this.$api.put(this.dynamic_auth_route("updatePassword"), this.authInfo)
        .then((res) => {
          if (res.data.success == false) {
            this.loading1 = true
            this.$toast.error(res.data.data, {
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
          else if (res.data.success == true){
            this.loading1 = false
            this.dialog = !this.dialog
            this.disableEdit = !this.disableEdit;
            this.$toast.success(res.data.data, {
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
    },
    editUserInfo() {
      this.loading = true;
      this.$api
        .put(this.dynamic_auth_route("updateInfo"), this.form)
        .then((res) => {
          this.loading = false;
          this.disableEdit = !this.disableEdit;
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
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style scoped>
.modal-body {
  background: white !important;
}

.preview {
  width: 100% !important;
  height: 100px !important;
  background: var(--primary);
  margin-bottom: 10px !important;
}
.avatar {
  width: 115px !important;
  height: 115px !important;
  background: lightgray !important;
  border-radius: 50% !important;
  position: absolute;
  top: 19%;
  left: 34%;
  border: 5px solid white;
}
.profile_content {
  margin-top: 60px !important;
}
</style>