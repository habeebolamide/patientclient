<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-2" fab small  color="#3f50b5" v-bind="attrs" v-on="on" outlined>
        <v-icon dark> mdi-format-list-bulleted-square </v-icon>
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
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Package Name"
                      v-model="form.package_name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Price"
                      type="text"
                      v-model="form.package_price"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      :items="items"
                      label="Status"
                      v-model="form.status"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeMe()">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="createPackage()">
                  Create Package
                </v-btn>
              </v-card-actions>
            </form>
          </div>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import Widget from "@/components/Widget/Widget";
import VueElementLoading from "vue-element-loading";
import { mapState, mapActions } from "vuex";

export default {
  props: {
  },
  data: () => ({
    errors: null,
    loading: false,
    form: {},
    dialog: false,
    items: ['active', 'inactive'],
    rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
  }),
  components: {
    VueElementLoading,
  },
  methods: {
    createPackage() {
      this.loading = true;
      this.$api
        .post(this.dynamic_route("pacakges"), this.form)
        .then((res) => {
          if (res.status == 201) {
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
              rtl: false,
            });
            this.form={}
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
      this.dialog = !this.dialog;
    },
  },
  mounted() {},
};
</script>