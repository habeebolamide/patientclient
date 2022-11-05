<template>
  <div>
    <v-app>
        
        <div class="card">
            <form  >
                <div class="card-body">
                    <div class="alert alert-info">
                        <h5>Below are the list of orders with the same order no.</h5>
                        <p>You can manage thier status at once</p>
                        <p>Order Number <span class="text-warning">{{data[0].order_no}}</span></p>
                    </div>
                    <div class="filter">
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-select
                                v-model="filters.status"
                                :items="filterData"
                                label="Status"
                                outlined
                            ></v-select>
                        </v-col>
                    </div>
                    <div class="data card-body shadow-sm">
                        <div class="table-responsive mt-4">
                            <table class="table table-hover table-sm mb-0 requests-table">
                                <thead>
                                    <tr>
                                        <th class="hidden-sm-down">ID</th>
                                        <th class="hidden-sm-down">DATE</th>
                                        <th class="hidden-sm-down">PRODUCT</th>
                                        <th class="hidden-sm-down">QUANTITY </th>
                                        <th class="hidden-sm-down">AMOUNT</th>
                                        <th class="hidden-sm-down">TOTAL</th>
                                        
                                        <th class="hidden-sm-down text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(order, i) in data" :key="i">
                                        <td>#{{i+1}}</td>
                                        <td>
                                            {{order.created_at}}
                                        </td>
                                        <td>
                                            {{order.products && order.products.product_name}} ->{{order.products.nested_sub_category&& order.products.nested_sub_category.full_name}}
                                        </td>
                                        <td>
                                            {{order.quantity}}
                                        </td>
                                        <td>
                                            {{Number(order.amount).toLocaleString()}}
                                        </td>
                                        <td>
                                            <span class="badge" :class="{
                                                'badge-warning': order.status =='pending',
                                                'badge-info': order.status =='processing',
                                                'badge-success': order.status =='completed',
                                            }">
                                                {{order.status.toUpperCase()}}
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
                                                        @click="relatedOrders(order)"
                                                        
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Manage Related Order
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item 
                                                        v-if="order.status =='pending' || order.status =='processing'"
                                                    >
                                                        <v-list-item-title
                                                        style="cursor:pointer"
                                                        @click="openConfirm=true;dynamic_status='completed';status_id=order.id;"
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Completed
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item 
                                                        v-if="order.status =='pending'"
                                                    >
                                                    
                                                        <v-list-item-title
                                                        style="cursor:pointer"
                                                        @click="openConfirm=true;dynamic_status='processing';status_id=order.id;"
                                                        >
                                                        <i class="mdi mdi-square-edit-outline mr-1"></i> Processing
                                                        </v-list-item-title>
                                                            
                                                    </v-list-item>
                                                    
                                                </v-list>
                                            </v-menu>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <v-col
                cols="12"
                sm="12"
                class="text-center"
                >
                <button type="button" @click="toggle_status(data[0].order_no, filters.status, true)" class="btn btn-block btn-lg btn-outline-info">SAVE CHANGES</button>
                <button type="button" @click="closeMe" class="btn btn-block btn-lg btn-outline-primary">Cancel</button>

                </v-col>
            </form>
        </div>
         <!-- V Dialog -->
         <v-dialog
            v-model="openConfirm"
            max-width="390"
        >
            <v-card>
                <v-card-title class="text-h5">
                Change Order status to {{dynamic_status}}
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
  </div>
</template>

<script>
export default {
    props:['data', 'my_model'],
    data(){
        return {
            filters:{status:null},
            status_id:0,
            del_id:0,
            dynamic_status:'',
            openConfirm:false,
            openConfirm2:false,
            dialog:false,
            isDialogVisible: false,
            closeOnContentClick: true,
            filterData:[],
            dialog:false,
            status_id:0,
            del_id:0,
            dynamic_status:'',
            
        }
    },
    mounted() {
    },
    methods:{
        toggle_status(id, status, bulk=false) {
            let payload ={
                reference:id,
                status
            }
            if(bulk) payload.every_order_no=true;
            else delete payload.every_order_no;
            this.$api.post(this.dynamic_route('/order/admin/change-status'), payload)
            .then(res => {
               this.closeMe()
               this.$emit('submitted')
               this.$toasted.success("Status Updated successful", {
                    action: {
                    text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                    }
                })

            }).catch(err => {
                this.$toasted.error(err.response.data.message, {
                    action: {
                    text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                    }
                })

            }).finally(() => {
                NProgress.done()

            })
            
        },
        closeMe() {
            this.filters.status=null
            this.my_model.hide('related_order')
        },
    }
}
</script>

<style  lang="scss">
    .v-application--wrap {
       min-height: fit-content;
     }
   </style>