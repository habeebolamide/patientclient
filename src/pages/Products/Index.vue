<template>
    <v-app class="p-4">
        <h2 class="page-title">Products</h2>
        <b-row>
            <b-col>
                <Widget
                title=""
                customHeader
                >
                    <h5 class="d-inline-block">Manage  <span class='fw-semi-bold'>Products</span></h5>
                    <v-btn
                        depressed
                        color="primary"
                        class="float-right btn-lg custom-btn"
                        @click="linkPage"
                    >
                        <i class="mdi mdi-plus-circle"></i> New Product
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
                                        <v-select
                                            :items="nested_sub_categories"
                                            v-model="filters.nested_sub_category_id"
                                            item-text="full_name"
                                            item-value="id"
                                            label="Nested Sub category"
                                            outlined
                                        ></v-select>
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
                                        
                                        md="3"
                                        >
                                        <v-text-field
                                            v-model="filters.name"

                                            label="Name"
                                            placeholder="Placeholder"
                                            outlined
                                        ></v-text-field>
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
                        
                        <div class="table-responsive mt-4" v-if="products.data.length">
                            <table class="table table-hover table-sm mb-0 requests-table">
                                <thead>
                                    <tr>
                                        <th class="hidden-sm-down">#</th>
                                        <th class="hidden-sm-down"> Name</th>
                                        <th class="hidden-sm-down">Slug name</th>
                                        <th class="hidden-sm-down">Quantity</th>
                                        <th class="hidden-sm-down">Variant</th>
                                        <th class="hidden-sm-down">Price </th>
                                        <th class="hidden-sm-down">Discount</th>
                                        <th class="hidden-sm-down">Stock</th>
                                        
                                        <th class="hidden-sm-down">Status</th>
                                        <th class="hidden-sm-down text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(pr, i) in products.data" :key="i">
                                    <tr>
                                        <td>{{i + 1}}</td>
                                        <td>
                                           {{pr.product_name}}
                                           <p>Nested Sub category <span class="badge badge-warning">{{pr.nested_sub_category && pr.nested_sub_category.name}}</span></p>
                                        </td>
                                        <td>
                                           {{pr.product_slug}}
                                        </td>
                                        <td>
                                            {{pr.product_quantity.quantity}}
                                        </td>
                                        <td>
                                           {{pr.is_variant}}
                                        </td>
                                        <td>
                                            {{Number(pr.price).toLocaleString()}}
                                        </td>
                                        <td>
                                            {{pr.discount}}

                                        </td>
                                        <td>
                                            <span  v-if="Number(pr.product_quantity.quantity) > 0" class="badge badge-info">IN STOCK</span>
                                            <span  v-else class="badge badge-danger">OUT OF STOCK</span>
                                        </td>
                                        <td>
                                            <span class="badge" :class="{
                                                'badge-info': pr.status=='active',
                                                'badge-danger': pr.status=='inactive',
                                            }"> 
                                                {{pr.status}}
                                            </span>
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
                                                        @click="$bvModal.show('attach_image');current=pr"
                                                        
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Manage Images
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title
                                                        style="cursor:pointer"
                                                        @click="$bvModal.show('edit');current=pr"
                                                        
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Edit
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title
                                                        style="cursor:pointer"
                                                        @click="openConfirm2=true;del_id=pr.id"
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Delete
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    
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
                        <laravelVuePagination :data="products" @pagination-change-page="fetchData" />
                    </div>
                </Widget>
            </b-col>
        </b-row>

        
        <b-modal size="xl"  style="background:white" :title="`Edit ${current.product_name} product`" id="edit" hide-footer>
            <edit :my_model="$bvModal" :data="current"   @updated="fetchData()"  />
        </b-modal>
        <b-modal size="lg"  style="background:white" :title="`Attach image to  ${current.product_name} product`" id="attach_image" hide-footer>
            <attachImage :my_model="$bvModal" :data="current"   @updated="fetchData()"  />
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
                Delete Product
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
import attachImage from "./partials/attachImage.vue"
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'
import laravelVuePagination from 'laravel-vue-pagination'
import { mapState,mapActions } from 'vuex';

export default {
    components:{
        Widget,create,edit,viewModal,VueElementLoading,
        laravelVuePagination,
        attachImage
    },
    data(){
        return {
            status_id:0,
            del_id:0,
            dynamic_status:'',
            openConfirm:false,
            openConfirm2:false,
            dialog:false,
            current:{},
            products: {data:[]},
            filters: {},
            loading: false,
            isDialogVisible: false,
            closeOnContentClick: true,

        }
    },
    computed:{
        ...mapState('modules_data',['sub_categories', 'nested_sub_categories', 'product_disease'])
    },
    mounted() {
        
    },
    methods: {
        ...mapActions('modules_data', ['getNestedSubCategories']),
        pass_current(data) {
            this.current = data
        },
        fetchData(page=1) {
            
            this.$api.post(this.dynamic_route('/product/admin/all'), {...this.filters})
            .then(res => {
                this.products=res.data.data
            }).catch(err => {
                

            }).finally(() => {
                NProgress.done()
            })
            
        },
        toggle_status(id, status) {
       
            
        },
        deleteData(id) {
            this.$api
            .delete(this.dynamic_route('/product/'+id))
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