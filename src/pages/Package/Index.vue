<template>
  <div>
    <v-card class="mx-auto">
      <v-container>
        <v-card-title>
          <div class="font-size-lg text-capitalize font-weight-normal">
            <i class="fi flaticon-audio mr-3 text-muted opacity-6"></i>
            Package Manager
          </div>
          <v-spacer></v-spacer>
          <div data-app>
            <CreatePackage @creates-package="getPackages()" />
          </div>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold">
          <div class="row">
            <div class="col-md-12">
              <v-simple-table v-if="packages != ''">
                <thead>
                  <tr>
                    <th class="text-left">S/N</th>
                    <th class="text-left">Package Name</th>
                    <th class="text-left">Package Price</th>
                    <!-- <th class="text-left">Service Name</th> -->
                    <th class="text-left">Status</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p, i) in packages" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ p.package_name }}</td>
                    <td><sup>$</sup>{{ p.package_price }}</td>
                    <!-- <td>{{}}</td> -->
                    <td>
                      <span
                        class="badge text-capitalize py-2 px-2"
                        :class="{
                          'bg-success': p.status == 'active',
                          'bg-danger': p.status == 'inactive',
                        }"
                      >
                        {{ p.status }}
                      </span>
                    </td>
                    <td>
                      <div class="text-capitalize actions-icon-btn">
                        <b-dropdown
                          toggle-class="btn-icon btn-icon-only"
                          variant="link"
                          right
                        >
                          <span slot="button-content">
                            <i class="fa fa-th"></i>
                          </span>
                          <div>
                            <EditPackage
                              :package="p"
                              @edit-package="getPackages()"
                            />
                            <v-btn
                              type="button"
                              tabindex="0"
                              text
                              @click="deleteCurrent(p.id)"
                            >
                              <i
                                class="
                                  pe-7s-note
                                  icon-gradient
                                  bg-grow-early
                                  mr-2
                                "
                              ></i>
                              <span>Delete Package</span>
                            </v-btn>
                            <AttachService
                              @attach-service="getPackages()"
                              :package="p"
                            />
                          </div>
                        </b-dropdown>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
              <div class="alert alert-primary text-center" role="alert" v-else>
                <h4>No Record Found !!!</h4>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-card>
    <!-- <b-modal id="creates-package" size="md" hide-footer title="Create Package">
     
    </b-modal> -->
    <b-modal id="edit-package" size="md" hide-footer title="Edit Package">
    </b-modal>
  </div>
</template>
<script>
    import Widget from "@/components/Widget/Widget";
    import CreatePackage from "./Partials/Create.vue";
    import EditPackage from "./Partials/Edit.vue";
    import AttachService from "./Partials/AttachService.vue";
    import axios from "axios";
    import VueElementLoading from "vue-element-loading";
    import { mapState, mapActions } from "vuex";
    export default {
      data() {
        return {
          headers: [
            {
              text: "Name",
              align: "start",
              sortable: false,
              value: "name",
            },
            { text: "File", value: "file" },
            { text: "Duration", value: "duration" },
            { text: "Timestamp", value: "timestamp" },
          ],
          data: [],
          packages: {},
          current: {},
        };
      },
      components: {
        CreatePackage,
        EditPackage,
        AttachService,
      },
      computed: {},
      methods: {
        getPackages() {
          this.$api
            .get(this.dynamic_route("pacakges"))
            .then((res) => {
              this.packages = res.data.packages;
            })
            .catch((err) => {})
            .finally(() => {
              this.loading = false;
              this.text = "";
            });
        },
        setCurrent(data) {
          this.current = data;
        },
        deleteCurrent(id) {
          this.$api
            .delete(this.dynamic_route("pacakges/" + id))
            .then((res) => {
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
                rtl: false,
              });
              this.getPackages();
            })
            .catch((err) => {})
            .finally(() => {
              this.loading = false;
            });
        },
      },
      mounted() {
        this.getPackages();
      },
    };
</script>

  <style scoped>
.modal-body {
  background: white !important;
}
.custom-btn {
  color: #ffffff;
  background-color: #ec570d !important;
}
.dropdown-toggle::after {
  font-family: "Line Awesome Free", sans-serif;
  content: none !important;
  border: none;
  width: auto;
  height: auto;
  vertical-align: baseline;
  opacity: 0.8;
  font-size: 85%;
  font-weight: 600;
}
</style>