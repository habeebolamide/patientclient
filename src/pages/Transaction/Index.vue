<template>
  <v-app >
    <Widget
              title="<h5>Transactions <span class='fw-semi-bold'>Overview</span></h5>"
              bodyClass="widget-table-overflow"
              customHeader
          >
          <div class="row">
                      <div class="col-md-4 mt-5 ml-5">
                        <v-select
                        @change="searchData"
                          v-model="filter.status"
                          :items="items"
                          label="Search By Status"
                        ></v-select>
                      </div>
                </div>
              <VueElementLoading
                  :active="loading"
                  spinner="bar-fade-scale"
                  color="var(--primary)"
              />
              <div class="scroll-area-lg" v-if="transactions">
                  <div class="table-responsive mt-4">
                      <table class="table table-hover table-sm mb-0 requests-table-two">
                          <thead>
                              <tr>
                                  <th class="hidden-sm-down">#</th>
                                  <th class="hidden-sm-down">Transaction ID</th>
                                  <th class="hidden-sm-down" width="40%">User Info </th>
                                  <th class="hidden-sm-down">Package</th>
                                  <!-- <th class="hidden-sm-down">Installment Type (%)</th> -->
                                  <th class="hidden-sm-down">Amount</th>
                                  <th class="hidden-sm-down">Date</th>
                                  <th class="hidden-sm-down">Status</th>
                                  <!-- <th class="hidden-sm-down text-center">Action</th> -->
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(transaction, index) in transactions.data" :key="transaction.id">
                                  <td>{{index+1}}</td>
                                  <td class="text-dark">
                                      {{transaction.transaction_reference}}
                                  </td>
                                  <td>
                                      <span class="d-flex pt-2">
                                          <span>
                                              <span class="b-avatar rounded-circle" :class="getRandomBadgeClass()" 
                                                  style="width: 38px; height: 38px; font-weight: 600">
                                                  {{getInitials(transaction.user.name)}}
                                              </span>
                                          </span>
                                          <span class="ml-3">
                                                      <span class="fw-semi-bold">&nbsp; {{transaction.user.name}}</span>
                                              <p>
                                                  <small>
                                                      <span class="text-semi-muted">&nbsp; {{transaction.user.email}}</span>
                                                  </small>    
                                              </p>
                                          </span>
                                      </span>
                                  </td>
                                  <td class="text-dark">
                                      {{transaction.package.package_name}}
                                  </td>
                                  <!-- <td class="text-dark">
                                      {{transaction.installment.name}}
                                  </td> -->
                                  <td class="text-dark text-capitalize">
                                      $ {{Number(transaction.amount).toLocaleString()}}
                                  </td>
                                  <td class="text-dark">
                                      {{transaction.created_at | moment("D MMM, YYYY, h:mm a")}}
                                  </td>
                                  <td class="font-weight-bolder">
                                      <span class="badge badge-pill text-capitalize"
                                          :class="{'badge-light-secondary': transaction.status == 'not completed', 
                                          'badge-light-success': transaction.status == 'success', 
                                          'badge-light-danger': transaction.status == 'declined'}"> 
                                          {{transaction.status}} 
                                      </span>
                                  </td>
                                  <!-- <td class="text-center" style="font-size: 18px">
                                      <v-menu
                                          bottom
                                          origin="center center"
                                          transition="scale-transition"
                                          :close-on-content-click="closeOnContentClick"
                                          left
                                      >
                                          <template #activator="{ on, attrs }">
                                              <v-btn
                                                  color="black"
                                                  icon
                                                  v-bind="attrs"
                                                  v-on="on"
                                              >
                                                  <i class="fa fa-list-ul"></i>
                                              </v-btn>
                                          </template>
  
                                          <v-list>
                                              <v-list-item>
                                                  <v-list-item-title
                                                  style="cursor:pointer"
                                                  >
                                                  <i class="mdi mdi-check-circle-outline mr-1"></i> Check Status
                                                  </v-list-item-title>
                                              </v-list-item>
                                          </v-list>
                                      </v-menu>
                                  </td> -->
                              </tr>
                          </tbody>
                      
                      </table>
                  </div>
                  <laravelVuePagination :data="transactions" @pagination-change-page="getTransaction" />
              </div>
              <div class="alert alert-info text-center m-4" v-else>
                  <b style="font-weight: 600 !important">NO TRANSACTION RECORD</b>
              </div>
          </Widget>
  </v-app>
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
      filter:{},
      loading:false,
      items: [
        'not completed',
        'success',
        'declined',
      ],
    };
  },
  components: {
    laravelVuePagination,
    VueElementLoading,
    Widget
  },
  computed: {},
  methods: {
    getTransaction(page=1) {
      this.loading = true
      this.$api
        .post(this.dynamic_route(`transaction/all?page=${page}`), {filter: this.filter })
        .then((res) => {
          // return console.log(res.data);
          this.loading = false
          this.transactions = res.data.transactions;
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
          this.text = "";
        });
    },
    searchData() {
    this.getTransaction()
  },
    getInitials(fullname) {
      const allNames = fullname.trim().split(' ');
      const initials = allNames.reduce((acc, curr, index) => {
          if(index === 0 || index === allNames.length - 1){
              acc = `${acc}${curr.charAt(0).toUpperCase()}`;
          }
          return acc;
      }, '');
      return initials;
  },
      getRandomBadgeClass() {
  //   const {primary, success, info, danger} = this.appConfig.colors;
    const colors = ['badge-light-info', 'badge-light-primary', 'badge-light-danger', 
                  'badge-light-success', 'badge-light-warning', 'badge-light-secondary'];
    return colors[Math.floor(Math.random() * colors.length)]
  },
    checkStatus(payment_id){
      // return console.log(payment_id);
      this.$api
        .post(this.dynamic_route(`transaction/payments/${payment_id}`), {payment_id:payment_id}).then((res) => {
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