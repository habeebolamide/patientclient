<template>
    <v-app class="p-4">
        <div class="" style="">
            <h2 class="page-title" >Record Audio</h2>
        </div>

        <div class="row pl-4 pb-2"  >
            <div class=" pb-5 mt-5 col-md-6 offset-3"  >
            <div class=" mb-4">
                <v-file-input
                
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an audio"
                    prepend-icon="mdi-music-note-plus"
                    label="Upload audio"
                ></v-file-input>
            </div>
            <div class="mx-auto" style="width:fit-content;">
            <button class="btn btn-primary t mb-5" type="button">Upload</button>
            </div>
        </div>
        </div>

        <div class="record pt-5 mt-5" style="border-bottom: 2px solid lightgray;">
            <h2>Recordings</h2>
        </div>

        <div class="mt-5 pb-1"  >
            <v-data-table
                dense
                :headers="headers"
                :items="data"
                item-key="name"
                class="elevation-1"
            ></v-data-table>
        </div>
        
        <!-- V Dialog End -->
    </v-app>
</template>
<script>
import Widget from '@/components/Widget/Widget';

import viewModal from "./partials/View.vue"
import RelatedOrders from "./partials/RelatedOrders.vue"

import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

import { mapState,mapActions } from 'vuex';


export default {
    
    data(){
        return {
            headers: [
                {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'File', value: 'file' },
                { text: 'Duration', value: 'duration' },
                { text: 'Timestamp', value: 'timestamp' }
            ],
            data:[]

        }
    },
    computed:{
        
    },
    mounted() {
        
    },
    methods: {
        
    },
   
}
</script>
<style scoped>
   .modal-body {
       background: white !important;
   }
   .custom-btn {
  color: #ffffff;
  background-color: #ec570d !important;
  /* background-image: linear-gradient(135deg, #f27233 0%, #f27233 100%) !important; */
}
</style>