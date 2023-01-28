<template>
    <v-app class="p-4">
        <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
        <div class="" style="">
            <h2 class="page-title" >Record Audio</h2>
        </div>
        <form enctype="multipart/form-data">
            <div class="row pl-4 pb-2"  >
            <div class=" pb-5 mt-5 col-md-6 offset-3"  >
            <div class=" mb-4">
                <!-- <audio-recorder
                    upload-url="this.dynamic_route(service/uploadaudio')"
                    :attempts="10"
                    :time="2000"
                    :headers="headers"
                    :before-recording="callback"
                    :pause-recording="callback"
                    :after-recording="callback"
                    :select-record="callback"
                    :before-upload="callback"
                    :successful-upload="callback"
                    :failed-upload="callback" /> -->
                    <div class="my-5">
                        <v-file-input
                            accept="audio/wav"
                            placeholder="Pick an audio"
                            prepend-icon="mdi-music-note-plus"
                            label="Upload audio"
                            v-model="form.audio_file"
                        ></v-file-input>
                    </div>
              
            </div>
            <div class="mx-auto" style="width:fit-content;">
            <button class="btn btn-primary t mb-5" type="button" @click="Upload()">Upload</button>
            </div>
        </div>
        </div>
        </form>
  
        
        
        <!-- <div class="record pt-5 mt-5" style="border-bottom: 2px solid lightgray;">
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
         -->
        <!-- V Dialog End -->
    </v-app>
</template>
<script>
import VueElementLoading from 'vue-element-loading'
// import AudioRecorder from 'vue-audio-recorder'
export default {
    
    data(){
        return {
            form:{},
            loading :false
        }
    },
    components: {
        VueElementLoading
        // "audio-recorder" : AudioRecorder
    },
    computed:{
        
    },
    mounted() {
        
    },
    methods: {
        Upload(){
            this.loading = true;
            let reader = new FileReader();
            reader.readAsDataURL(this.form.audio_file);
            reader.onloadend = () => {
                let audioData = {
                    audioData: reader.result
                };
                this.$api
                .post(this.dynamic_route("service/uploadaudio"), audioData)
                .then((res) => {
                    console.log(1234); ;
                    console.log(res.data);
                    this.loading = false;
                    // this.summary = res.data.summary.summarizedtext
                })
            }
        }
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
.ar{
    width: 100% !important;
    }
svg {
    vertical-align:inherit !important;
    }
    .ar-recorder__duration{
        font-size: 35px;
        font-weight: 900;
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>