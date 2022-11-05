<template>
    <v-app class="p-4">
        <div class="">
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
                <v-card-text class="">
                    <v-col
                        cols="12"
                        sm="12"
                        class=" bgs-info m-0 p-0"
                        >
                        <v-text-field
                            required
                            v-model="form.category_name"
                            label="Name"
                            outlined
                            clearable
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="12"
                    class="m-0 p-0"
                    >
                    <v-text-field
                        required
                        v-model="form.slug"
                        label="Slug"
                        placehold="Enter category slug"
                        outlined
                        clearable
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="12"
                    class="m-0 p-0"
                    >
                    <v-textarea
                        required
                        outlined
                        v-model="form.description"
                        name="input-7-4"
                        label="Description "
                        value="Lorem ipsum dolor sit amt"
                    ></v-textarea>
    
                    </v-col>
                    <v-col
                        cols="12"
                        class="m-0 p-0"
                        >
                        <v-select
                            :items="['active', 'inactive']"
                            v-model="form.status"
                            label="Status"
                            outlined
                        ></v-select>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                        class="text-center m-0 p-0"
                        >
                        <button type="submit" class="btn btn-block btn-lg btn-primary">SAVE</button>
                        <button type="button" @click="closeMe" class="btn btn-block btn-lg btn-outline-success">CANCEL</button>
    
                    </v-col>
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
            loading:false
        }
    },
    // watch: {
    //     "form.description"() {
    //         this.delta = this.$refs.myQuillEditor.quill.getContents()
    //     }
    // },
    methods:{
        closeMe() {
            this.$bvModal.hide("edit");
        },
        update() {
            
            this.$api
            .patch(this.dynamic_route('/category/' + this.form.id), this.form)
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
</style>