<template>
  <div>
        <form action="" @submit.prevent="createPackage()">
                <VueElementLoading
                    :active="loading"
                    spinner="line-scale"
                    color="var(--primary)"
                />

            <div class="row">
                <div class="col-md-12 mb-3">
                    <v-text-field
                    label="Package Name"
                    hide-details="auto"
                    v-model="form.package_name"
                    ></v-text-field>
                </div>
                <div class="col-md-12 mb-3">
                <v-text-field
                label="Package Price"
                hide-details="auto"
                v-model="form.package_price"
                ></v-text-field>
                </div>
              
            </div>
            <div class="d-block text-right card-footer">
                <button type="button" class="mr-2 btn btn-link btn-sm" @click="closeMe()">
                    Cancel
                </button>
                <button type="submit" class="btn btn-primary btn-sm">
                    Create Package
                </button>
            </div>
        </form>
  </div>
</template>
<script>
import Widget from "@/components/Widget/Widget";
import VueElementLoading from "vue-element-loading";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    my_modal: Object,
  },
  data: () => ({
    errors: null,
    loading: false,
    form: {},
    // items: ['active','inactive'],
  }),
  components: {
    VueElementLoading,
  },
  methods: {
    createPackage(){
          this.loading = "true"
             this.$api.post(this.dynamic_route("pacakges"), this.form)
              .then((res) => {
                console.log(this.form);
                if (res.data.status == "true") {
                this.loading = false;
                this.$emit("creates-package");
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
                  rtl: false
            });
                }else{
                  this.closeMe();
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
                  rtl: false
            });
                }
        })
        .catch((err) => {
          this.loading = false;
          this.$toast.error(err.data.message, {
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
    closeMe() {
      this.my_modal.hide("creates-package");
    },
  },
  mounted() {},
};
</script>