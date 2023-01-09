<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
      class="mx-2"
      color="blue darken-1" 
      text
      v-bind="attrs" v-on="on"> Edit Service </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Service</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <div class="">
            <form @submit.prevent="UpdateService">
              <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
              <div>
                <v-text-field
                  label="Service Name"
                  :rules="rules"
                  hide-details="auto"
                  v-model="form.service_name"
                ></v-text-field>
                <v-text-field
                  label="Description "
                  hide-details="auto"
                  :rules="rules"
                  v-model="form.description"
                  class="mt-5"
                ></v-text-field>
                    <v-select
                      :items="items"
                      label="Status"
                      v-model="form.status"
                      class="mt-5"
                    ></v-select>
              </div>
              <div class="d-block text-right mt-4">
                <v-btn color="blue darken-1" text @click="closeMe()">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="UpdateService()">
                  Update Service
                </v-btn>
              </div>
            </form>
          </div>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
  <!-- <div class="">
  
  </div> -->
</template>
<script>
import VueElementLoading from "vue-element-loading";
export default {
  props: {
    my_modal: Object,
    currentservice: Object,
  },
  data() {
    return {
      errors: null,
      loading: false,
      items: ['active', 'inactive'],
      form:this.currentservice,
      dialog: false,
      rules: [
        (value) => !!value || "Required.",
      ],
      
    };
  },

  components: {
    VueElementLoading,
  },
  methods: {
    UpdateService() {
      this.loading = true;
      this.$api
        .put(this.dynamic_route("services/" + this.form.id), this.form)
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            this.loading = false;
          this.closeMe();
          this.$emit("edit-service");
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
          }else if (!res.data.status) {
            console.log(res);
            this.loading = false;
          this.closeMe();
          this.$emit("edit-service");
          return  this.$toast.error(res.data.message, {
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
        .catch((err) => {
          this.loading = true;
          this.closeMe()
        });
    },
    closeMe() {
      this.dialog = !this.dialog;
    },
  },
  mounted() {
    // console.log(this.currentservice);
  },
};
</script>