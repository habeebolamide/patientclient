<template>
    <v-app class="p-4">
        <h2 class="page-title"> Coupon</h2>
        <b-row>
            <b-col>
                <Widget
                title=""
                customHeader
                >
                    <h5 class="d-inline-block">  <span class='fw-semi-bold'>Generate and manage Coupon</span></h5>
                    <v-btn
                        depressed
                        color="primary"
                        class="float-right btn-lg custom-btn"
                        @click="$bvModal.show('create')"
                    >
                        <i class="mdi mdi-plus-circle"></i> Generate Coupon
                    </v-btn>
                    <VueElementLoading
                        :active="loading"
                        spinner="bar-fade-scale"
                        color="var(--primary)"
                        text="Loading.."
                        duration="0.6"
                    />
                    <div class="mt-3" >
                        <div class="card">
                            <div class="card-body">
                                <v-row class="bg-isnfo">
                                    
                                    <v-col
                                        cols="12"
                                        
                                        md="3"
                                        >
                                        <v-text-field
                                            v-model="filters.name"

                                            label="Coupon"
                                            placeholder="Placeholder"
                                            outlined
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="3"
                                    >
                                        <v-select
                                            v-model="filters.status"

                                            :items="['active', 'inactive']"
                                            label="Status"
                                            outlined
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="2"
                                        class="text-center pt-5"
                                        >
                                        
                                      <button class="btn-lg btn-block btn btn-outline-success" type="button" @click="fetchData">Filter</button>
                                    </v-col>

                                </v-row>
                            </div>
                        </div>
                        
                        <div class="table-responsive mt-4" v-if="coupon.data.length">
                            <table class="table table-hover table-sm mb-0 requests-table">
                                <thead>
                                    <tr>
                                        <th class="hidden-sm-down">#</th>
                                        <th class="hidden-sm-down"> Coupon</th>
                                        <th class="hidden-sm-down">Description</th>
                                        <th class="hidden-sm-down">Percent</th>
                                        <th class="hidden-sm-down">No of usage</th>
                                        <th class="hidden-sm-down">Total used</th>
                                        
                                        <th class="hidden-sm-down">Status </th>
                                        <th class="hidden-sm-down">Expires At</th>
                                        
                                        <th class="hidden-sm-down text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(cp, i) in coupon.data" :key="i">
                                    <tr>
                                        <td>{{i + 1}}</td>
                                        <td>
                                           {{cp.coupon}}
                                           
                                        </td>
                                        <td>
                                           {{cp.description}}
                                        </td>
                                        <td>
                                            {{cp.percent}}
                                        </td>
                                        <td>
                                            {{cp.no_of_usage}}
                                        </td>
                                        <td>
                                            {{cp.total_used}}
                                        </td>
                                        <td>
                                            <span class="badge" :class="{
                                                'badge-info': cp.status=='active',
                                                'badge-danger': cp.status=='inactive',
                                            }"> 
                                                {{cp.status}}
                                            </span>
                                        </td>
                                        
                                        <td>
                                           {{cp.expires_at}}
                                        </td>
                                        <td class="text-center" style="font-size: 18px">
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
                                                        v-if="cp.user_id ==null"
                                                        @click="$bvModal.show('attach_user');current=cp"
                                                        
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Attach user
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title
                                                        style="cursor:pointer"
                                                        @click="$bvModal.show('edit');current=cp"
                                                        
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Edit
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <!-- <v-list-item>
                                                        <v-list-item-title
                                                        style="cursor:pointer"
                                                        @click="openConfirm2=true;del_id=cp.id"
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Delete
                                                        </v-list-item-title>
                                                    </v-list-item> -->
                                                    
                                                </v-list>
                                            </v-menu>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            v-else
                            class="col-md-12 alert mt-5 alert-info text-center"
                        >
                            <p>No record found</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <laravelVuePagination :data="coupon" @pagination-change-page="fetchData" />
                    </div>
                </Widget>
            </b-col>
        </b-row>

        
        <b-modal   style="background:white" title="Create Coupon" id="create" hide-footer>
            <create :my_model="$bvModal"    @created="fetchData()"  />
        </b-modal>
        <b-modal   style="background:white" title="Attach  Coupon to user" id="attach_user" hide-footer>
            <attachCoupon :my_model="$bvModal" :data="current"    @attached="fetchData()"  />
        </b-modal>
        <b-modal   style="background:white" title="Edit coupon" id="edit" hide-footer>
            <edit :my_model="$bvModal" :data="current"   @updated="fetchData()"  />
        </b-modal>
        
        <!-- Modals end -->
        <!-- V Dialog -->
        <v-dialog
            v-model="openConfirm"
            max-width="390"
        >
            <v-card>
                <v-card-title class="text-h5">
                Change property status to {{dynamic_status}}
                </v-card-title>

                <v-card-text>
                Are you sure you want to perform this operation ?
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color=" darken-1"
                    text
                    @click="openConfirm = false"
                >
                    No, exit
                </v-btn>

                <v-btn
                    color="primary darken-1"
                    text
                    @click="toggle_status(status_id, dynamic_status);openConfirm=false"

                >
                    Yes, continue
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="openConfirm2"
            max-width="390"
        >
            <v-card>
                <v-card-title class="text-h5">
                Delete Coupon
                </v-card-title>

                <v-card-text>
                Are you sure you want to perform this operation ?
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color=" darken-1"
                    text
                    @click="openConfirm2 = false"
                >
                    No, exit
                </v-btn>

                <v-btn
                    color="primary darken-1"
                    text
                    @click="deleteData(del_id);openConfirm2=false"


                >
                    Yes, continue
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- V Dialog End -->
    </v-app>
</template>
<script>
import Widget from '@/components/Widget/Widget';
import create from "./partials/Create.vue"
import viewModal from "./partials/View.vue"

import edit from "./partials/Edit.vue"
import attachCoupon from "./partials/attachCoupon.vue"
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'
import laravelVuePagination from 'laravel-vue-pagination'
import { mapState,mapActions } from 'vuex';

export default {
    components:{Widget,create,edit,attachCoupon,viewModal,VueElementLoading,laravelVuePagination},
    data(){
        return {
            status_id:0,
            del_id:0,
            dynamic_status:'',
            openConfirm:false,
            openConfirm2:false,
            dialog:false,
            current:{},
            coupon: {data:[]},
            filters: {},
            loading: false,
            isDialogVisible: false,
            closeOnContentClick: true,

        }
    },
    computed:{
        
    },
    mounted() {
        
    },
    methods: {
        
        pass_current(data) {
            this.current = data
            this.$router.red
        },
        fetchData(page=1) {
            
            this.$api.post(this.dynamic_route('/coupon/all'), {filters: this.filters})
            .then(res => {
                this.coupon=res.data.data
            }).catch(err => {
                

            }).finally(() => {
                NProgress.done()
            })
            
        },
        toggle_status(id, status) {
       
            
        },
        deleteData(id) {
            this.$api
            .delete(this.dynamic_route('/coupon/'+id))
            .then(res => {
                this.$toasted.success('Deleted successfully!', {
                    action: {
                    text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                    }
                })
               this.fetchData()
                
            })
            .catch(err => {
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    // return this.logoutUser();
                }
                // eslint-disable-next-line no-console
            })
            .finally(() => {
                NProgress.done()

            })
            
        },
        
    },
   
}
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