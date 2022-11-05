<template>
    <v-app class="p-4 mx-0">
        <div class="_body">
            
            <form action="" @submit.prevent="save">
               
                <div>
                       <div class="card border-0" style="height:auto">
                    
                        <div class="card-body">
                            <VueElementLoading
                            :active="loading"
                            spinner="bar-fade-scale"
                            color="var(--primary)"
                            text="Loading.."
                            duration="0.6"
                          />
                            <!-- <v-card-title>
                                <span class="text-h5">Create Property</span>
                            </v-card-title> -->
                            <v-card-text >
                            <v-container class="px-0">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                    >
                                    <small v-if="errorMessage.count" class="text-danger">{{errorMessage.count[0]}}</small>
                                    <v-text-field
                                    class="my-0"
                                    type="number"
                                    label="How Many Coupons ?*"
                                    :rules="nameRules"
                                    v-model="form.count"
                                    required
                                    ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                    >
                                        <small v-if="errorMessage.no_of_usage" class="text-danger">{{errorMessage.no_of_usage[0]}}</small>
                                        <v-text-field
                                        class="my-0"
                                        type="number"
                                        label="No of Usage *"
                                        :rules="nameRules"
                                        v-model="form.no_of_usage"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                    >
                                        <small v-if="errorMessage.descrisption" class="text-danger">{{errorMessage.description[0]}}</small>

                                        <v-text-field
                                            class="my-0"
                                            label="Description*"
                                            :rules="nameRules"
                                            v-model="form.description"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                    >
                                        <small v-if="errorMessage.percent" class="text-danger">{{errorMessage.percent[0]}}</small>

                                        <v-text-field
                                            v-model="form.percent"
                                            label="Percent*"
                                            type="number"
                                            class="my-0"
                                            required
                                            :rules="nameRules"
                                        ></v-text-field>
                                        
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                    >
                                        <small v-if="errorMessage.expires_at" class="text-danger">{{errorMessage.expires_at[0]}}</small>

                                        <v-text-field
                                        label="Expires_at*"
                                        :rules="nameRules"
                                        type="date"
                                        v-model="form.expires_at"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    
                                </v-row>
                            </v-container>
                            </v-card-text>
                            
                        </div>
                       </div>
        
                    </div>
                <div class="row">
                    <!-- <div class="text-center col-md-4 mb-2">
    
                        <button
                           class="btn btn-outline-secondary btn-lg btn-block"
                            text
                            
                        >
                            Back
                        </button>
                    </div> -->
                    <div class="text-center  col-md-6 mb-2">
                        <button
                            class=" btn-outline-primary btn btn-lg btn-block"
                            text
                            type="button"
                            @click="closeMe"
                            
                        >
                            Cancel
                        </button>
    
                    </div>
                    <div class="text-center  col-md-6 mb-2">
    
                        <button
                            class="btn btn-outline-success  btn-lg btn-block"
                            type="submit"
                            :disabled="errorImage"
                        >
                            Save
                        </button>
                    </div>
                </div>
    
            </form>
        </div>

    </v-app>
</template>
<script>
    
import VueElementLoading from 'vue-element-loading'
import axios from 'axios'
import { mapState,mapActions } from 'vuex';

export default {
    props:['my_model', 'data'],
    components:{ VueElementLoading },
    data() {
        return {
            loading:false,
            dialog_modal:this.dialog,
            nameRules: [
                v => !!v || 'This is a required field',
            ],
            statusRules:[
                v => !!v || 'Status is required',
            ],
            
            form:this.data,
            
            errorImage:false,
            errorMessage:{}
        }
    },
    
    computed:{
        
    },
    methods:{
        
        closeMe() {
            this.$bvModal.hide("edit");
        },
        
        save() {
            
            this.$api.post(this.dynamic_route('/coupon/generate-Coupon'), this.form)
            .then(() => {
                this.loading = false
                this.form={}
                this.closeMe()
                this.$emit('created')
                this.$toast.success('Coupon created successfully!', {
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
                if(err.response.data.errors) {
                    this.errorMessage=err.response.data.errors
                }
            })
            .finally(() => {
                NProgress.done()

            })
        },

    },
    mounted(){
        
        
    }
}
</script>
<style>
    .modal-body {
       background: white !important;
    }

    .v-application--wrap {
        min-height: 2% !important;
    }

    ._body {
        height:auto !important;
    }
    .modal-body {
        background: #FFF !important;
    }
    .custom-bg {
        background: #ec570db8 !important;
        color:white !important;
    }
</style>