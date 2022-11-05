<template>
    <v-app class="p-4 mx-0">
        <div class="_body">
            <h2 class="page-title">Create Product</h2>
            <form action="" @submit.prevent="save">
                <div class="row" style="margin-bottom:100px">
                    <div class="col-md-12 mb-2" style="margin-bottom:50px">
                       <div class="card border-0" style="height:auto">
                        <div class="card-header py-3 custom-bg">
                            <h5><strong>General</strong></h5>
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
                                        sm="12"
                                        md="4"
                                    >
                                    <small v-if="errorMessage.product_name" class="text-danger">{{errorMessage.product_name[0]}}</small>
                                    <v-text-field
                                    class="my-0"
                                    label="Name*"
                                    :rules="nameRules"
                                    v-model="form.product_name"
                                    required
                                    ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.status" class="text-danger">{{errorMessage.status[0]}}</small>

                                        <v-select
                                            v-model="form.status"
                                            :items="['active', 'inactive']"
                                            label="Status*"
                                            :rules="statusRules"
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.nested_sub_category_id" class="text-danger">{{errorMessage.nested_sub_category_id[0]}}</small>

                                        <v-select
                                            v-model="form.nested_sub_category_id"
                                            label="Nested Sub categories*"
                                            :items="nested_sub_categories"
                                            item-text="full_name"
                                            item-value="id"
                                            :rules="nameRules"
                                        ></v-select>
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
                                        md="4"
                                    >
                                        <small v-if="errorMessage.quantity" class="text-danger">{{errorMessage.quantity[0]}}</small>

                                        <v-text-field
                                        label="Quantity*"
                                        :rules="nameRules"
                                        type="number"
                                        v-model="form.quantity"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.product_slug" class="text-danger">{{errorMessage.product_slug[0]}}</small>

                                        <v-text-field
                                        label="Slug*"
                                        :rules="nameRules"
                                        v-model="form.product_slug"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.product_disease_id" class="text-danger">{{errorMessage.product_disease_id[0]}}</small>

                                        <v-select
                                        label="Product disease*"
                                        :rules="nameRules"
                                        :items="product_disease"
                                        item-text="disease_name"
                                        item-value="id"
                                        v-model="form.product_disease_id"
                                        required
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.is_variant" class="text-danger">{{errorMessage.is_variant[0]}}</small>

                                        <v-select
                                        label="Is Variant*"
                                        :rules="nameRules"
                                        :items="['yes', 'no']"
                                        v-model="form.is_variant"
                                        required
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.price" class="text-danger">{{errorMessage.price[0]}}</small>

                                        <v-text-field
                                        label="Price*"
                                        :rules="nameRules"
                                        type="number"
                                        v-model="form.price"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.content" class="text-danger">{{errorMessage.content[0]}}</small>

                                        <v-text-field
                                        label="Content*"
                                        :rules="nameRules"
                                        v-model="form.content"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.discount" class="text-danger">{{errorMessage.discount[0]}}</small>

                                        <v-text-field
                                        label="Discount*"
                                        :rules="nameRules"
                                        type="number"
                                        v-model="form.discount"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.keyword" class="text-danger">{{errorMessage.keyword[0]}}</small>

                                        <v-text-field
                                        label="Keyword*"
                                        :rules="nameRules"
                                        v-model="form.keyword"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.model" class="text-danger">{{errorMessage.model[0]}}</small>

                                        <v-text-field
                                        label="Model*"
                                        :rules="nameRules"
                                        v-model="form.model"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.youtube_id" class="text-danger">{{errorMessage.youtube_id[0]}}</small>

                                        <v-text-field
                                        label="Youtube Id*"
                                        :rules="nameRules"
                                        v-model="form.youtube_id"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <small v-if="errorMessage.measurement" class="text-danger">{{errorMessage.measurement[0]}}</small>

                                        <v-text-field
                                        label="Measurement*"
                                        :rules="nameRules"
                                        v-model="form.measurement"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    
                                    <!-- <v-col
                                        cols="12"
                                        sm="4"
                                        md="4"
                                    >
                                    <v-text-field
                                        label="General Price*"
                                        :rules="nameRules"
                                        v-model="form.gprice"
                                        type="number"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                    <v-text-field
                                        label="Product Sale Price*"
                                        :rules="nameRules"
                                        type="number"
                                        v-model="form.psprice"
                                        required
                                        ></v-text-field>
                                    </v-col> -->
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="12"
                                    >
                                        <small v-if="errorMessage.description" class="text-danger">{{errorMessage.description[0]}}</small>

                                    
                                        <quillEditor
                                            v-model="form.description"
                                            ref="myQuillEditor"
                                            :options="editorOption"
                                            style="height:200px"
                                            required
                                                    
                                            />
                                    </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>
                            
                        </div>
                       </div>
        
                    </div>
                    <!-- <div class="col-md-12 mb-2">
                       <div class="card border-0 shadow-sm">
                        <div class="card-header py-3 custom-bg">
                            <h5><strong>Product Image</strong></h5>
                        </div>
                        <div class="card-body">
                            <v-alert
                                outlined
                                type="warning"
                                prominent
                                border="left"
                                >
                                Supported file formats are . {{fileFormats.join("*")}}
                            </v-alert>
                            <v-alert type="error" class="mb-3" v-if="errorImage">
                             Invalid image format uploaded
                            </v-alert>
                            <div class="row">
                                <div class="col-md-4 " v-for="(item, i) in images" :key="i">
                                    <div class="card">
                                        <div class="card-body">
                                            <img :src="item.src" style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <v-file-input
                                show-size
                                counter
                                v-model="files"
                                @change="handleImage"
                                multiple
                                label="File input"
                            ></v-file-input>
                            
                        </div>
                       </div>
        
                    </div> -->
                </div>
                <div class="row">
                    <div class="text-center col-md-4 mb-2">
    
                        <button
                           class="btn btn-outline-secondary btn-lg btn-block"
                            text
                            type="button"
                            @click="$router.push({name: 'ListProducts'})"
                            
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
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';
import VueElementLoading from 'vue-element-loading'
import axios from 'axios'
import { mapState,mapActions } from 'vuex';

export default {
    props:['my_model', 'auth_token'],
    components:{ quillEditor,VueElementLoading },
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
            editorOption: {
                debug: 'info',
                placeholder: 'Contents..',
                readOnly: true,
                theme: 'snow'
            },
            delta: undefined,
            form:{},
            files:[],
            images:[],
            fileFormats:['image/jpg', 'image/png', 'image/jpeg', 'image/gif'],
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
        ...mapState('modules_data',['sub_categories', 'nested_sub_categories', 'product_disease'])
    },
    methods:{
        ...mapActions('modules_data', ['getSubCategories', 'getNestedSubCategories', 'getProductDisease']),

        closeMe() {
            this.$bvModal.hide("create");
        },
        handleImage() {
            console.log(this.files)
            for (let i = 0; i < this.files.length; i++) {
                let validateFile=this.fileFormats.some(el => el == this.files[i].type);
                if(!validateFile) {
                    this.errorImage=true;
                   break;
                }
                
                let obj= {
                    file: this.files[i],
                    src: URL.createObjectURL(this.files[i])
                }
                this.errorImage=false;
                this.images.push(obj)

                
            }
            

        },
        save() {
            
            this.$api.post(this.dynamic_route('/product'), this.form)
            .then(() => {
                this.loading = false
                this.form={}
                this.$router.push({name:'ListProducts'})
                this.$toast.success('Added successfully !', {
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