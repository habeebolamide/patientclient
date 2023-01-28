<template>
    <v-app class="p-4">
        <form action="">
            <!-- <v-card-title>
                <span class="text-h5">Create Property</span>
            </v-card-title> -->
            <div class="card">
            <div class="card-body">
                <v-row v-if="data.orders.length">

                    <v-col
                        cols="12"
                        sm="12"
                        md="6"
                        v-for="(or, i) in data.orders" :key="i"
                    >
                      
                    <div class=" card">
                        <div class="card-body">
                            <p class="d-flex justify-content-between"># ORDER {{i+1}} <span>Created at {{or.created_at}}</span></p>
                            <table class="border-0 table table-responsive-sm table-hover">
                                <tbody>
                                    <tr>
                                        <th>Product Name</th>
                                        <td>{{or.products.product_name}}</td>
                                    </tr>
                                    <tr>
                                        <th>Quantity</th>
                                        <td>{{or.quantity}}</td>
                                    </tr>
                                    <tr>
                                        <th>Total price</th>
                                        <td>{{Number(or.amount).toLocaleString()}}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>
                                            <span class="badge" :class="{
                                                'badge-warning': or.status =='pending',
                                                'badge-info': or.status =='processing',
                                                'badge-success': or.status =='completed',
                                            }">
                                                {{or.status.toUpperCase()}}
                                           </span>  
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </v-col>
                    
                </v-row>
                <div v-else class="alert alert-danger">
                    <h5>No order(s) Found for this User</h5>
                </div>
            </div>
            </div>
            <v-card-actions style="margin-top:100px">
                <v-spacer></v-spacer>
                <button
                    class="btn btn-primary"
                    type='button'
                    @click="closeMe()"
                >
                    Cancel
                </button>
            </v-card-actions>

        </form>
    </v-app>
</template>
<script>
export default {
    props:['my_model', 'data'],
    data() {
        return {
            form:this.data
        }
    },
    methods:{
        
        closeMe() {
            this.$bvModal.hide("view");
        },
    }
}
</script>
<style>
     .v-application--wrap {
        min-height: 2% !important;
    }

    tr {
        border: 0 !important;
    }
</style>