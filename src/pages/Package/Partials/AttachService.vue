<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" color="blue darken-1" text v-bind="attrs" v-on="on" @click="getPackageServices">
          Attach Service
        </v-btn>
      </template>

      <v-card>
        <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
        <v-card-title class="text-h5 grey lighten-2">
          Attach Service
        </v-card-title>

        <v-card-text>
          <div class="row">
            <div class="col-md-12">
              <label class="form-check-label" for="flexCheckIndeterminate">
                Services:
              </label>
              <div class="row">
                <div
                class="form-check col-md-4 ml-5 mt-3"
                v-for="( service, index) in packagewithservice"
                :key="index"
              >
                <label
                  v-if="service.status == 'active'"
                  class="form-check-label"
                  :for="'flexCheckIndeterminate'+ index + 1"
                >
                <input
                  class="form-check-input"
                  :id="'flexCheckIndeterminate' + index + 1"
                  type="checkbox"
                  v-model="service.is_attached"
                  :checked="service.is_attached"
                />
                  {{ service.service_name }}
                </label>
              </div>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="
            attachService()"> Attach </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  <script>
import VueElementLoading from "vue-element-loading";
export default {
    props :{
        package : Object
    },
  data() {
    return {
      dialog: false,
      loading:false,
      packagewithservice: [],
      servicepackage :[],
      form:{
      }
    };
  },
  components: {
    VueElementLoading,
  },
  methods: {
    getPackageServices() {
      this.$api
        .get(this.dynamic_route(`services/package_has_service/${this.package.id}`))
        .then((res) => {
          this.packagewithservice = res.data.packagehaservice;
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
          this.loading = false;
          this.text = "";
        });
    },
    attachService(){
      // let data = this.servicepackage; // tags is an array of IDs 
    this.loading = true
        this.$api
        .post(this.dynamic_route(`pacakges/attach-service/${this.form.package_id}`),{data:this.packagewithservice})
        .then((res) => {
            this.loading = false;
            this.closeMe();
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
        })
        .catch((err) => {
            console.log(err);
        })
    },
   
    closeMe(){
        this.dialog = !this.dialog
    }   
  },
  mounted() {
    this.form.package_id = this.package.id
  },
};
</script>