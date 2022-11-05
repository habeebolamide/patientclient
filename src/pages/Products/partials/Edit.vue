<template>
    <v-app class="p-4">
        <div >
            <form action="" @submit.prevent="update">
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
                    <div class="row">
                        <div class="col-lg-4 col-md-12"
                            lg="4"
                            md="12"
                            >
                            <v-text-field
                                required
                                v-model="form.product_name"
                                label="Name"
                                outlined
                                clearable
                            ></v-text-field>
                        </div>
                        <div class="col-lg-4 col-md-12"
                        lg="4"
                        md="12"
                        
                        >
                            <v-text-field
                                required
                                v-model="form.product_slug"
                                label="Slug"
                                placehold="Enter product slug"
                                outlined
                                clearable
                            ></v-text-field>
                        </div>
                        <div class="col-lg-4 col-md-12"
                            lg="4"
                            md="12"
                            
                            >
                            <v-select
                            outlined
                                :items="['active', 'inactive']"
                                v-model="form.status"
                                label="Status"
                                
                            ></v-select>
                        </div>

                    </div>
                    <div class="row" >
                        <div class="col-lg-4 col-md-12"
                            lg="4"
                            md="12"
                        >
                            <small v-if="errorMessage.nested_sub_category_id" class="text-danger">{{errorMessage.nested_sub_category_id[0]}}</small>
    
                            <v-select
                            outlined
                                v-model="form.nested_sub_category_id"
                                label="Nested Sub categories*"
                                :items="nested_sub_categories"
                                item-text="full_name"
                                item-value="id"
                                :rules="nameRules"
                            ></v-select>
                            
                        </div>
                        <div class="col-lg-4 col-md-12"
                            lg="4"
                            md="12"
                        >
                            <small v-if="errorMessage.quantity" class="text-danger">{{errorMessage.quantity[0]}}</small>
    
                            <v-text-field
                            outlined
                            label="Quantity*"
                            :rules="nameRules"
                            type="number"
                            v-model="form.product_quantity.quantity"
                            required
                            ></v-text-field>
                        </div>
                        <div class="col-lg-4 col-md-12"
                            lg="4"
                            md="12"
                        >
                            <small v-if="errorMessage.product_disease_id" class="text-danger">{{errorMessage.product_disease_id[0]}}</small>
    
                            <v-select
                            outlined
                            label="Product disease*"
                            :rules="nameRules"
                            :items="product_disease"
                            item-text="disease_name"
                            item-value="id"
                            v-model="form.product_disease_id"
                            required
                            ></v-select>
                        </div>

                    </div >
                   <div class="row" >
                       <div class="col-lg-4 col-md-12"
                           lg="4"
                           md="12"
                           
                       >
                           <small v-if="errorMessage.is_variant" class="text-danger">{{errorMessage.is_variant[0]}}</small>
   
                           <v-select
                           outlined
                           label="Is Variant*"
                           :rules="nameRules"
                           :items="['yes', 'no']"
                           v-model="form.is_variant"
                           required
                           ></v-select>
                       </div>
                       <div class="col-lg-4 col-md-12"
                           lg="4"
                           md="12"
                           
                       >
                           <small v-if="errorMessage.price" class="text-danger">{{errorMessage.price[0]}}</small>
   
                           <v-text-field
                           label="Price*"
                           :rules="nameRules"
                           type="number"
                           v-model="form.price"
                           outlined
                           required
                           ></v-text-field>
                       </div>
                       <div class="col-lg-4 col-md-12"
                           lg="4"
                           md="12"
                           
                       >
                           <small v-if="errorMessage.content" class="text-danger">{{errorMessage.content[0]}}</small>
   
                           <v-text-field
                           label="Content*"
                           :rules="nameRules"
                           v-model="form.content"
                           outlined
                           required
                           ></v-text-field>
                       </div>

                   </div >
                   <div class="row" >
                       <div class="col-lg-4 col-md-12"
                           lg="4"
                           md="12"
                          
                       >
                           <small v-if="errorMessage.discount" class="text-danger">{{errorMessage.discount[0]}}</small>
   
                           <v-text-field
                           label="Discount*"
                           :rules="nameRules"
                           outlined
                           type="number"
                           v-model="form.discount"
                           required
                           ></v-text-field>
                       </div>
                       <div class="col-lg-4 col-md-12"
                           lg="4"
                           md="12"
                          
                       >
                           <small v-if="errorMessage.keyword" class="text-danger">{{errorMessage.keyword[0]}}</small>
   
                           <v-text-field
                           label="Keyword*"
                           outlined
                           :rules="nameRules"
                           v-model="form.keyword"
                           required
                           ></v-text-field>
                       </div>
                       <div class="col-lg-4 col-md-12"
                           lg="4"
                           md="12"
                          
                       >
                           <small v-if="errorMessage.model" class="text-danger">{{errorMessage.model[0]}}</small>
   
                           <v-text-field
                           label="Model*"
                           outlined
                           :rules="nameRules"
                           v-model="form.model"
                           required
                           ></v-text-field>
                       </div>
                    
                   </div >
                   <div class="row" >
                       <div class="col-lg-6 col-md-12"
                           lg="6"
                           md="6"
                           
                       >
                           <small v-if="errorMessage.youtube_id" class="text-danger">{{errorMessage.youtube_id[0]}}</small>
   
                           <v-text-field
                           label="Youtube Id*"
                           outlined
                           :rules="nameRules"
                           v-model="form.youtube_id"
                           required
                           ></v-text-field>
                       </div>
                       <div class="col-lg-6 col-md-12"
                           lg="6"
                           sm="12"
                           md="6"
                           
                       >
                           <small v-if="errorMessage.measurement" class="text-danger">{{errorMessage.measurement[0]}}</small>
   
                           <v-text-field
                           outlined
                           label="Measurement*"
                           :rules="nameRules"
                           v-model="form.measurement"
                           required
                           ></v-text-field>
                       </div>

                   </div >
                    <div class="col-12 p-0 control_margin"
                    lg="12"
                    sm="12"
                    style="margin-bottom:100px"
                    >
                    
                    <quillEditor
                        v-model="form.description"
                        ref="myQuillEditor"
                        :options="editorOption"
                        style="height:300px"
                        required
                            
                    />
    
                    </div>
                    <div class="col-12"
                        >
                        <button type="submit" class="btn btn-block btn-lg btn-primary">UPDATE</button>
                        <button type="button" @click="closeMe" class="btn btn-block btn-lg btn-outline-success">CANCEL</button>
    
                    </div>
                </v-card-text>
                <!-- <v-card-actions style="margin-top:100px">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="closeMe()"
                    >
                        Close
                    </v-btn>
                    <button
                        class="btn btn-primary"
                        type="submit"
                    >
                        Update
                    </button>
                </v-card-actions> -->
    
            </form>
        </div>

    </v-app>
</template>
<script>
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

import { mapState,mapActions } from 'vuex';

export default {
    props:['my_model', 'data'],
    components:{ quillEditor,VueElementLoading },
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
    computed:{
        ...mapState('modules_data',['sub_categories', 'nested_sub_categories', 'product_disease'])

    },
    watch: {
        "form.description"() {
            this.delta = this.$refs.myQuillEditor.quill.getContents()
        }
    },
    mounted() {
        
    },
    methods:{
        ...mapActions('modules_data', ['getSubCategories', 'getNestedSubCategories', 'getProductDisease']),

        closeMe() {
            this.$bvModal.hide("edit");
        },
        update() {
            this.form.quantity= this.form.product_quantity.quantity
            this.$api
            .patch(this.dynamic_route('/product/' + this.form.id), this.form)
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