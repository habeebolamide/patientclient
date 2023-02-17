<template>
  <div>
    <v-card class="mx-auto">
      <v-container>
        <v-card-title>
          <div class="font-size-lg text-capitalize font-weight-normal">
            <i class="fi flaticon-audio mr-3 text-muted opacity-6"></i>
            Transaction Manager
          </div>
          <v-spacer></v-spacer>
          <div data-app>
          </div>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold">
          <div class="row">
            <div class="col-md-12">
              <v-simple-table v-if="transactions != ''">
                <thead>
                  <tr>
                    <th class="text-left">S/N</th>
                    <th class="text-left">Transaction Reference</th>
                    <th class="text-left">Payment Id</th>
                    <th class="text-left">Amount</th>
                    <th class="text-left">Expected Amount</th>
                    <!-- <th class="text-left">Service Name</th> -->
                    <th class="text-left">Status</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(t, i) in transactions.data" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ t.transaction_reference }}</td>
                    <td>{{ t.payment_id }}</td>
                    <td><sup>$</sup>{{ t.amount }}</td>
                    <td><sup>$</sup>{{ t.expected_amount }}</td>
                    <!-- <td>{{}}</td> -->
                    <td>
                      <span
                        class="badge text-capitalize py-2 px-2"
                        :class="{
                          'bg-success': t.status == 'success',
                          'bg-warning': t.status == 'pending',
                          'bg-danger': t.status == 'declined',
                        }"
                      >
                        {{ t.status }}
                      </span>
                    </td>
                    <td>
                      <v-btn v-if="t.status != 'success'" class="mx-2" small  color="#3f50b5" outlined @click="checkStatus( t.transaction_reference)">
                          Check Status
                      </v-btn>
                    </td>
                    <!-- <td>
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
                    </td> -->
                  </tr>
                </tbody>
              </v-simple-table>
              <div class="alert alert-primary text-center" role="alert" v-else>
                <h4>No Record Found !!!</h4>
              </div>
              <div class="col-md-12">
                <laravelVuePagination :data="transactions" @pagination-change-page="getTransaction" />
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-card>
  </div>
</template>
  <script>
import Widget from "@/components/Widget/Widget";
import axios from "axios";
import VueElementLoading from "vue-element-loading";
import { mapState, mapActions } from "vuex";
import laravelVuePagination from 'laravel-vue-pagination'

export default {
  data() {
    return {
      data: [],
      transactions: {},
      current: {},
    };
  },
  components: {
    laravelVuePagination,
    VueElementLoading
  },
  computed: {},
  methods: {
    getTransaction(page=1) {
      this.$api
        .get(this.dynamic_route(`transaction/all?page=${page}`))
        .then((res) => {
          // return console.log(res.data);
          this.transactions = res.data;
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
          this.text = "";
        });
    },
    checkStatus(id){
      this.$api
        .post(this.dynamic_route(`transaction/payments/${id}`), {id:id}).then((res) => {
          console.log(res);
        })
    },
  },
  
  mounted() {
    this.getTransaction();
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