<template>
    <v-app class="p-0">
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
                    <div class="card">
                        <div class="card-header">
                            Uploaded images
                        </div>
                        <div class="card-body">
                            <div class="card mb-3">
                                <div class="card-body shadow-sm">
                                    <div class="row" v-if="data.picture.length">
                                        <div class="col-md-4 mb-2 upload_images" v-for="(im, i) in data.picture" :key="i">
                                            <span style="cursor:pointer" class="mdi mdi-close"></span>
                                            <img class="border" :src="im.picture" style="width:100%" />
        
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <p v-if="src">New Image</p>
                            <div class="new_img">
                                <img :src="src" style="width:100%" />
                            </div>
                        </div>
                        <div class="card-footer">
                            <input style="visibility:hidden" ref="file" type="file" @change="handleImage" />
                           <button @click="openFile" type="button" class="btn btn-lg btn-block border btn-outline-success">Upload image</button>
                        </div>
                    </div>
                    <div class="col-12 p-0 text-right mt-4"
                        >
                        <button type="button" @click="closeMe" class="mr-5 btn btn-lg  btn-outline-success">CANCEL</button>
                        <button type="submit" class="btn btn-lg  btn-primary">UPDATE</button>
    
                    </div>
                </v-card-text>
                    
    
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
            errorMessage:{},
            src:"",
            encodedImage:"",
        }
    },
    computed:{

    },
    watch: {
        "form.description"() {
            this.delta = this.$refs.myQuillEditor.quill.getContents()
        }
    },
    mounted() {
        
    },
    methods:{
        openFile() {
            this.$refs.file.click();
        },
        handleImage(e) {
            const file = e.target.files[0];
            this.src = URL.createObjectURL(file);
            let reader = new FileReader();
            reader.onloadend = (e) => {
                let photo = e.target;
                this.encodedImage = photo.result;
            };
            reader.readAsDataURL(file);
        },
        closeMe() {
            this.$bvModal.hide("attach_image");
        },
        update() {
            
            let payload= {
                picture: this.encodedImage
            }
            
            this.$api
            .post(this.dynamic_route('/product/pictures/product-pics/' + this.form.id), payload)
            .then(res => {
                
               this.closeMe()
               this.$toasted.success('Image Uploaded successfully!', {
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
    /* .upload_images:first-child {
        text-align: right !important;
    } */

    @media screen and (max-width: 920px) {
        .control_margin {
            margin-bottom: 200px !important;
        }
    }

</style>