<template>
  <div>
    <v-card 
    class="mx-auto"
    max-height="auto"
    >
      <v-card-title>
        <div class="font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon fi flaticon-audio mr-3 text-muted opacity-6"></i>
          Services Manager
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
                @click="$bvModal.show('creates-service')"
              >
                <i class="pe-7s-note icon-gradient bg-grow-early mr-2"></i>
                <span>Create Service</span>
              </button>
            </div>
          </b-dropdown>
        </div>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
        <div class="row">
          <div class="col-md-12">
            <v-simple-table v-if="services != ''">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Service Name</th>
                    <th>Service Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(service, i) in services" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ service.service_name }}</td>
                    <td>{{ service.description }}</td>
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
                               setCurrent(service);
                              $bvModal.show('edit-service')
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
                              <span>Edit Service</span>
                            </button>
                            <button
                              type="button"
                              tabindex="0"
                              class="dropdown-item"
                              @click="
                              deleteCurrent(service.id);                              "
                            >
                              <i
                                class="
                                  pe-7s-note
                                  icon-gradient
                                  bg-grow-early
                                  mr-2
                                "
                              ></i>
                              <span>Delete Service</span>
                            </button>
                          </div>
                        </b-dropdown>
                      </div>
                    </td>
                  </tr>
                </tbody>
            </v-simple-table>
            <div class="alert alert-primary text-center" role="alert" v-else>
               <h4> No Record Found !!!</h4>
            </div>
          
          </div>
        </div>
      </v-card-text>
    </v-card>
    <b-modal id="creates-service" size="lg" hide-footer title="Create Service">
      <CreateService :my_modal="this.$bvModal" 
      @creates-service = "getServices()" />
    </b-modal>
    <b-modal id="edit-service" size="lg" hide-footer title="Edit Service">
      <EditService :my_modal="this.$bvModal"
      :currentservice="setCurrentService"
      @edit-service = "getServices()"
      />
    </b-modal>
  </div>
</template>
<script>
import Widget from "@/components/Widget/Widget";
import CreateService from "./Partials/Create.vue";
import EditService from "./Partials/Edit.vue";
import axios from "axios";
import VueElementLoading from "vue-element-loading";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "S/N",
          align: "start",
          sortable: false,
          value: "",
        },
        { text: "Package Name", value: "" },
        { text: "Package Description", value: "" },
      ],
      services: {},
      data: [],
      setCurrentService:{}
    };
  },
  components: {
    CreateService,
    EditService
  },
  computed: {},
  methods: {
    getServices() {
      this.$api
        .get(this.dynamic_route("services"))
        .then((res) => {
          this.services = res.data.services;
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
          this.text = "";
        });
    },
    deleteCurrent(id){
          this.$api
        .delete(this.dynamic_route("services/"+id))
        .then((res) => {
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
          this.getServices();
        })
        .catch((err) => {
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
        })
        .finally(() => {
          this.loading = false;
        });
        },
    setCurrent(data) {
            this.setCurrentService = data;
       },
  },
  mounted() {
    this.getServices();
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