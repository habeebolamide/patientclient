<template>
    <v-app class="p-4">
        <h2 class="page-title mb-0">Settings</h2>
        <!-- <small>Order listing</small> -->
        <b-row class="mt-4">
            <b-col>
                <Widget
                title=""
                customHeader
                >
                    <h5 class="d-inline-block">Manage  <span class='fw-semi-bold'>Settings</span></h5>
                    
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
                                <div class="row bg-isnfo">
                                    <div class="border-right col-md-9 col-12">
                                        <v-row>
                                            <v-col
                                                cols="12"
                                                
                                                md="6"
                                                >
                                                <v-text-field
                                                    label="Name"
                                                    placeholder="Placeholder"
                                                    outlined
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                
                                                md="6"
                                                >
                                                <v-text-field
                                                    label="Display Name"
                                                    placeholder="Placeholder"
                                                    outlined
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                
                                                md="12"
                                                >
                                                <v-text-field
                                                    label="Email"
                                                    placeholder="Placeholder"
                                                    outlined
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                
                                                md="6"
                                                >
                                                <v-text-field
                                                    label="Role"
                                                    placeholder="Placeholder"
                                                    outlined
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                
                                                md="6"
                                                >
                                                <v-text-field
                                                    label="Address "
                                                    placeholder="Placeholder"
                                                    outlined
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                            cols="12"
                                            sm="12"
                                            
                                            >
                                            <v-textarea
                                                outlined
                                                name="input-7-4"
                                                label="Bio. "
                                                value="Lorem ipsum dolor sit amt"
                                            ></v-textarea>

                                         </v-col>
                                         <v-col
                                            cols="12"
                                            sm="6"
                                            class="text-center"

                                            
                                            >
                                           <button class="btn btn-lg btn-block btn-outline-danger">Cancel</button>

                                         </v-col>
                                         <v-col
                                            cols="12"
                                            sm="6"
                                            class="text-center"
                                            
                                            >
                                           <button class="btn btn-lg btn-block btn-outline-success">Save</button>

                                         </v-col>

                                        </v-row>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                      
                    </div>
                    <!-- <div
                        v-else
                        class="col-md-12 alert alert-info text-center"
                    >
                        <p>No record found</p>
                    </div> -->
                    <div class="col-md-12">
                        <laravelVuePagination :data="properties" @pagination-change-page="fetchData" />
                    </div>
                </Widget>
            </b-col>
        </b-row>

        <!-- Modals -->
        <b-modal size="lg" style="background:white" title="Create Property" id="create" hide-footer>
            <create :my_model="$bvModal" :auth_token="authToken" @submitted="fetchData()"  />
        </b-modal>
        <b-modal size="lg" style="background:white" title="View Property" id="view" hide-footer>
            <viewModal :my_model="$bvModal" :data="current" />
        </b-modal>
        <b-modal size="lg" style="background:white" title="Edit Property" id="edit" hide-footer>
            <edit :my_model="$bvModal" :data="current" :auth_token="authToken" @updated="fetchData()"  />
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
                Delete property
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
                    @click="deleteProperty(del_id);openConfirm2=false"


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
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'
import laravelVuePagination from 'laravel-vue-pagination'
import { mapState,mapActions } from 'vuex';

export default {
    components:{Widget,create,edit,viewModal,VueElementLoading,laravelVuePagination},
    data(){
        return {
            status_id:0,
            del_id:0,
            dynamic_status:'',
            openConfirm:false,
            openConfirm2:false,
            dialog:false,
            current:{},
            properties: { data: [] },
            filters: {},
            loading: false,
            isDialogVisible: false,
            closeOnContentClick: true,
            authToken:'',

        }
    },
    computed:{
    },
    mounted() {
        
    },
    methods: {
        pass_current(data) {
        this.current = data
        },
        fetchData(page=1) {
        this.loading = true
        axios
            .post(this.dynamic_route('/properties/all?page'+page), {
            filters: this.filters,
            },{
                headers:{
                    authorization: `Bearer ${this.authToken}`
                }
            })
            .then(res => {
            this.loading = false
            this.properties = res.data.data
            this.loading = false
            })
            .catch(err => {
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    return this.logoutUser();
                }
            // eslint-disable-next-line no-console
            })
            .finally(() => {
            this.loading = false
            })
        },
        toggle_status(id, status) {
        this.loading = true
        axios
            .put(this.dynamic_route(`/properties/toggle-status/${id}`), { id, status }, {
                headers:{
                    authorization: `Bearer ${this.authToken}`

                }
            })
            .then(() => {
            this.fetchData()
            this.$toast.success('Status updated successfully!', {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: 'button',
                icon: true,
                rtl: false,
            })
            })
            .catch((err) => {
            this.loading = false;
            if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    return this.logoutUser();
                }
            this.$toast.error('An error occurred please try again!', {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: 'button',
                icon: true,
                rtl: false,
            })
            })
            .finally(() => {
            this.loading = false
            })
        },
        deleteProperty(id) {
        this.loading = true
        axios
            .delete(this.dynamic_route(`/properties/${id}`), {
                headers:{
                    authorization: `Bearer ${this.authToken}`

                }
            })
            .then(() => {
            this.fetchData()
            this.$toast.success('Deleted successfully!', {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: 'button',
                icon: true,
                rtl: false,
            })
            })
            .catch(err => {
            this.loading = false;
            if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                return this.logoutUser();
            }
            if (err.response.status == 500) {
                return this.$toast.error('Unable to delete property  it has been used in many places!', {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: 'button',
                icon: true,
                rtl: false,
                })
            }
            })
            .finally(() => {
            this.loading = false
            })
        },
        linkPage() {
            this.$router.push({name: 'CreateProduct'})
        }
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