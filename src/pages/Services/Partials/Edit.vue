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
                  class="mt-3"
                ></v-text-field>
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

      form: {
        service_name: this.currentservice.service_name,
        description: this.currentservice.description,
      },
      dialog: false,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      
    };
  },

  components: {
    VueElementLoading,
  },
  methods: {
    UpdateService() {
      this.loading = true;
      let id = this.currentservice.id;
      this.$api
        .put(this.dynamic_route("services/" + id), this.form)
        .then(() => {
          this.loading = false;
          this.closeMe();
          this.$emit("edit-service");
          this.$toast.success("Service Updated Successfully!", {
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
          this.loading = true;
          alert(err);
          this.my_modal.show("edit-service");
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