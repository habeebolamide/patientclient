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
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Package Name</span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="form.package_name"
              required
            />
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Package Price</span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="form.package_price"
              required
            />
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Package Status</span>
            </div>
            <select
              class="form-control"
              id="status"
              v-model="form.status"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
    <div class="d-block text-right card-footer">
      <button type="button" class="mr-2 btn btn-link btn-sm" @click="closeMe()">
        Cancel
      </button>
      <button type="submit" class="btn btn-primary btn-sm">
        Create Service
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
  }),
  components: {
    VueElementLoading,
  },
  methods: {
    createPackage() {
        // return console.log(this.dynamic_route())
      this.loading = "true";
      this.$api
        .post(this.dynamic_route("pacakges"), this.form)
        .then((res) => {
          this.loading = false;
          this.$emit("package");
          this.closeMe();
          this.$toast.success("Package created successfully!", {
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
        .catch((err) => {
          this.loading = false;
        });
    },
    closeMe() {
      this.my_modal.hide("creates-package");
    },
  },
  mounted() {},
};
</script>