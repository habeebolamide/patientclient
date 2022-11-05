<template>
    <v-app class="px-0 mx-0">
        <div class="_body">
            
            <form action="" @submit.prevent="save">
               
                <div>
                       <div class="card border-0 px-0" style="height:auto">
                    
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
                                        <!-- <small v-if="errorMessage.count" class="text-danger">{{errorMessage.count[0]}}</small> -->
                                        <v-text-field
                                            class="my-0"
                                            type="text"
                                            label="Search for user's name, phone, email*"
                                            :rules="nameRules"
                                            v-model="form.user"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                        class="text-right"
                                    >
                                        <button v-if="form.user" @click="searchUser" type="button" class="btn btn-info ">Search</button>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                        class=""
                                    >
                                       <div class="card" v-if="found">
                                            <div class="card-body">
                                                <ul class="ul list-unstyled px-0">
                                                    <li class="d-flex justify-content-between mb-2 ">
                                                        <strong>Name</strong>
                                                        <span>{{userData.name}}</span>
                                                    </li>
                                                    <li class="d-flex justify-content-between mb-2 ">
                                                        <strong>Username</strong>
                                                        <span>{{userData.username}}</span>
                                                    </li>
                                                    <li class="d-flex justify-content-between mb-2 ">
                                                        <strong>Phone</strong>
                                                        <span>{{userData.phone}}</span>
                                                    </li>
                                                    <li class="d-flex justify-content-between mb-2 ">
                                                        <strong>Email</strong>
                                                        <span>{{userData.email}}</span>
                                                    </li>
                                                    <li class="d-flex justify-content-between mb-2 ">
                                                        <strong>Status</strong>
                                                        <span>
                                                            <span class="badge" :class="{
                                                                'badge-success': userData.status =='active',
                                                                'badge-danger': userData.status =='inactive',
                                                            }">
                                                                {{userData.status}}
                                                            </span>    
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                       </div>
                                       <div class="alert alert-danger" v-if="found==false">
                                        <p>Could not find reference to the given Id</p>
                                       </div>
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
                            :disabled="found==false"
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
            
            form:{},
            found:null,
            errorImage:false,
            errorMessage:{},
            userData:{},
        }
    },
    
    computed:{
        
    },
    methods:{
        
        closeMe() {
            this.$bvModal.hide("attach_user");
        },
        searchUser() {
            this.$api.get(this.dynamic_route('/customers/search-user/'+ this.form.user))
            .then((response) => {
                this.loading = false
                this.userData=response.data.data
                this.found=true;

            })
            .catch((err) => {
                if(err.response.data.errors) {
                    this.errorMessage=err.response.data.errors
                }

                if(err.response.data.message =='User not found') {

                    this.found=false;
                    this.userData={}
                }
            })
            .finally(() => {
                NProgress.done()

            })
        },
        
        save() {
            
            this.$api.post(this.dynamic_route(`/coupon/attach-coupon-to-user/${this.data.id}/${this.userData.id}`),{})
            .then(() => {
                this.userData={};
                this.form={}
                this.closeMe()
                this.$emit('attached')
                this.$toast.success('Coupon Attached successfully!', {
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

                this.$toast.error('Something went wrong while attaching coupon!', {
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