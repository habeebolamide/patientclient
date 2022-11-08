<template>
    <div>
      <div class="card">
        <div class="card-header">
          <div
              class="
                font-size-lg
                text-capitalize
                font-weight-normal
              "
            >
              <i class="header-icon fa fa-header mr-3 text-muted opacity-6"></i>
              Package Manager
            </div>
          <div class="float-right text-capitalize actions-icon-btn">
            <b-dropdown
              toggle-class="btn-icon btn-icon-only"
              variant="link"
              right
            >
              <span slot="button-content">
                  <i class="fa fa-th"></i>
              </span>
              <div>
                <button
                  type="button"
                  tabindex="0"
                  class="dropdown-item"
                  @click="$bvModal.show('creates-package')"
                >
                  <i class="pe-7s-note icon-gradient bg-grow-early mr-2"></i>
                  <span>Create Package</span>
                </button>
              </div>
            </b-dropdown>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <!-- <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table> -->
  
              <div class="table-responsive">
                <table class="table table-bordered table-hover" v-if="packages !=''">
                  <thead>
                    <tr>
                      <td>S/N</td>
                      <td>Package Name</td>
                      <td>Package Price</td>
                      <td>Service Name</td>
                      <td>Status</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(p, i) in packages" :key="i">
                      <td>{{ i + 1 }}</td>
                      <td>{{ p.package_name }}</td>
                      <td>{{ p.package_price }}</td>
                      <td>{{ 2}}</td>
                      <td>
                        <span class="badge text-capitalize py-2 px-2" :class="{'bg-success': p.status == 'active',
                                           'bg-danger': p.status == 'inactive'}">
                                           {{p.status}}
                         </span>
                      </td>
                      <td>
                        <div class=" text-capitalize actions-icon-btn">
                          <b-dropdown
                            toggle-class="btn-icon btn-icon-only"
                            variant="link"
                            right
                          >
                            <span slot="button-content">
                              <i class="fa fa-th"></i>
                            </span>
                            <div>
                              <button
                                type="button"
                                tabindex="0"
                                class="dropdown-item"
                                @click="
                                setCurrent(p);
                                $bvModal.show('edit-package')
                                "
                              >
                                <i
                                  class="
                                    pe-7s-note
                                    icon-gradient
                                    bg-grow-early
                                    mr-2
                                  "
                                ></i>
                                <span>Edit Package</span>
                              </button>
                              <button
                              type="button"
                              tabindex="0"
                              class="dropdown-item"
                              @click="
                              deleteCurrent(p.id);                              "
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
                            </button>
                            </div>
                          </b-dropdown>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="alert text-center font-weight-bold alert-info" v-if="packages == ''">No Record Found</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-modal
        id="creates-package"
        size="md"
        hide-footer
        title="Create Package"
      >
      <CreatePackage
            :my_modal="this.$bvModal"
            @package="fetchData()"
          />
      </b-modal>
      <b-modal
        id="edit-package"
        size="md"
        hide-footer
        title="Edit Package"
      >
      <EditPackage
            :my_modal="this.$bvModal"
            :package="current"
            @package-updated="fetchData"
          />
      </b-modal>
    </div>
  </template>
  <script>
  import Widget from "@/components/Widget/Widget";
  import CreatePackage from "./Partials/Create.vue";
  import EditPackage from "./Partials/Edit.vue";
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
        packages:{},
        current:{}
      };
    },
    components:{
        CreatePackage,
        EditPackage
    },
    computed: {},
    methods: {
        fetchData(page=1) {
            
          this.$api
        .get(this.dynamic_route("pacakges"))
        .then((res) => {
          this.packages = res.data.packages;
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
        });
            
        },
        setCurrent(data) {
          this.current = data;
        },
        deleteCurrent(id){
          this.$api
        .delete(this.dynamic_route("pacakges/"+id))
        .then((res) => {
          this.$toast.success(res.data.message, {
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
          this.fetchData();
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
        });
        }
    },
    mounted() {
      this.fetchData();
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
    /* background-image: linear-gradient(135deg, #f27233 0%, #f27233 100%) !important; */
  }
  </style>