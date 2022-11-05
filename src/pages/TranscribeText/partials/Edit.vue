<template>
    <v-app class="p-4">
        <div >
            
            <form action="" @submit.prevent="update">
                <div class="row" style="margin-bottom:100px">
                    <div class="col-12">
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
                <div class="col-12"
                        >
                        <button type="submit" class="btn btn-block btn-lg btn-primary">UPDATE</button>
                        <button type="button" @click="closeMe" class="btn btn-block btn-lg btn-outline-success">CANCEL</button>
    
                    </div>
    
            </form>
        </div>

    </v-app>
</template>
<script>
    
import VueElementLoading from 'vue-element-loading'

import { mapState,mapActions } from 'vuex';

export default {
    props:['my_model', 'data'],
    components:{ VueElementLoading },
    data() {
        return {
            form:this.data,
            nameRules: [
                v => !!v || 'Name is required',
            ],
            statusRules:[
                v => !!v || 'Status is required',
            ],
            editorOption: {
                debug: 'info',
                placeholder: 'Contents..',
                readOnly: true,
                theme: 'snow'
            },
            delta: undefined,
            loading:false,
            errorMessage:{}
        }
    },
    
    
    methods:{
        
        closeMe() {
            this.$bvModal.hide("edit");
        },
        update() {
            
            this.$api
            .patch(this.dynamic_route('/customers/' + this.form.id), this.form)
            .then(res => {
                
               this.closeMe()
               this.$toasted.success('Edited successfully!', {
                    action: {
                    text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                    }
                })
               this.$emit('updated')
                
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
    }
    
}
</script>

<style>
    .v-application--wrap {
        min-height: 2% !important;
    }

    @media screen and (max-width: 920px) {
        .control_margin {
            margin-bottom: 200px !important;
        }
    }
</style>