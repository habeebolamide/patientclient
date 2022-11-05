<template>
    <v-app class="p-4">
        <div class="pb-3" style="border-bottom: 2px solid lightgrey">
            <h2 class="page-title mb-0">Transcript</h2>
        </div>
            <div class=" mt-5   " >

                <v-file-input
                    clearable
                    accept="text/pdf"
                    placeholder="Pick a Document"
                    prepend-icon="mdi-cloud-upload"
                    label="Upload Text Docs"
                >
                <template v-slot:append-outer>
                    <button class=" btn btn-primary btn-lg" type="button">Go</button>   
                </template>
                </v-file-input>
                
                    <div  style="margin-top:80px"  >
                    <v-textarea outlined name="input-7-4" label="Field"
                        value="">
                    </v-textarea>
                    
                </div>
            </div> 

    </v-app>
</template>
<script>

import VueElementLoading from 'vue-element-loading'
import laravelVuePagination from 'laravel-vue-pagination'
import { mapState,mapActions } from 'vuex';

export default {
    
    data(){
        return {
            

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

.custom-select {

}
</style>
