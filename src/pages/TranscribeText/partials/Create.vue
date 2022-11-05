<template>
    <v-app class="p-4 mx-0">
        <div class="_body">
            
            <form action="" @submit.prevent="save">
                <div class="row" style="margin-bottom:100px">
                   <div class="container col-md-8 mx-auto">
                    <div class="card shadow-lg " style="height:auto">
                        <div class="card-header py-3 custom-bg">
                            <h5><strong>Create User</strong></h5>
                        </div>
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
                                        sm="6"
                                        md="6"
                                    >
                                    <small v-if="errorMessage.name" class="text-danger">{{errorMessage.name[0]}}</small>
                                    <v-text-field
                                    class="my-0"
                                    label="Name*"
                                    :rules="nameRules"
                                    v-model="form.name"
                                    
                                    ></v-text-field>
                                    </v-col>
                                   
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <small v-if="errorMessage.email" class="text-danger">{{errorMessage.email[0]}}</small>
                                        
                                        <v-text-field
                                            class="my-0"
                                            label="Email*"
                                            :rules="nameRules"
                                            v-model="form.email"
                                            type="email"
                                            required
                                        ></v-text-field>
                                        <!-- <v-text-field
                                        label="Nested Sub categories*"
                                        :rules="nameRules"
                                        v-model="form.nested_sub_category_id"
                                        required
                                        ></v-text-field> -->
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <small v-if="errorMessage.username" class="text-danger">{{errorMessage.username[0]}}</small>
                                        
                                        <v-text-field
                                            class="my-0"
                                            label="Username*"
                                            :rules="nameRules"
                                            v-model="form.username"
                                            type="text"
                                            required
                                        ></v-text-field>
                                        <!-- <v-text-field
                                        label="Nested Sub categories*"
                                        :rules="nameRules"
                                        v-model="form.nested_sub_category_id"
                                        required
                                        ></v-text-field> -->
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <small v-if="errorMessage.phone" class="text-danger">{{errorMessage.phone[0]}}</small>

                                        <v-text-field
                                        label="Phone*"
                                        :rules="nameRules"
                                        type="number"
                                        v-model="form.phone"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                    >
                                        <small v-if="errorMessage.status" class="text-danger">{{errorMessage.status[0]}}</small>

                                        <v-select
                                            v-model="form.status"
                                            :items="['active', 'inactive']"
                                            label="Status*"
                                            :rules="statusRules"
                                        ></v-select>
                                    </v-col>
                                    
                                </v-row>
                            </v-container>
                            </v-card-text>
                            
                        </div>
                       </div>
                   </div>
                    
                </div>
                <div class="row">
                    <div class="text-center col-md-4 mb-2">
    
                        <button
                           class="btn btn-outline-secondary btn-lg btn-block"
                            text
                            type="button"
                            @click="$router.push({name: 'CustomerListings'})"
                            
                        >
                            Back
                        </button>
                    </div>
                    <div class="text-center  col-md-4 mb-2">
                        <button
                            class=" btn-outline-primary btn btn-lg btn-block"
                            text
                            
                        >
                            Cancel
                        </button>
    
                    </div>
                    <div class="text-center  col-md-4 mb-2">
    
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
    props:['my_model'],
    components:{VueElementLoading },
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
            
            delta: undefined,
            form:{},
            
            errorImage:false,
            errorMessage:{}
        }
    },
    watch: {
        "form.description"() {
            this.delta = this.$refs.myQuillEditor.quill.getContents()
        }
    },
    computed:{
        
    },
    methods:{
        

        closeMe() {
            this.$bvModal.hide("create");
        },
        
        save() {
            
            this.$api.post(this.dynamic_route('/customers'), this.form)
            .then(() => {
                this.loading = false
                this.form={}
                this.$router.push({name:'CustomerListings'})
                this.$toast.success('Added successfully successfully!', {
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