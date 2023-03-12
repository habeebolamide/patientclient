<template>
  <v-app class="p-4">
    <VueElementLoading
      :active="loading"
      spinner="line-scale"
      color="var(--primary)"
    />
    <div class="" style="">
      <h2 class="page-title">Record Audio</h2>
    </div>
    <form enctype="multipart/form-data">
      <div class="row pl-4 pb-2">
        <!-- <div class="col-md-6">
          <button type="button" class="btn btn-warning" @click="startRecording" :disabled="recording">Record</button>
         <button class="btn btn-danger ml-4" @click="stopRecording" :disabled="!recording">Stop</button>
          :headers="headers"
                    :before-recording="callback"
                    :pause-recording="callback"
                    :after-recording="callback"
                    :select-record="callback"
                    :before-upload="callback" 
                    
                    :successful-upload="shout(1)"
                    :failed-upload="shout(0)"
          <audio-recorder
                    upload-url="http://hypelbase_backend.test/api/v1/service/uploadaudio"
                    :attempts="10"
                    :time="2000" 
                    />
        </div> -->
        <div class="pb-5 mt-5 col-md-6 offset-3">
          <div class="mb-4">
            <div class="my-5">
              <v-file-input
                accept="audio/wav,audio/ogg,audio/mp3"
                placeholder="Pick an audio"
                prepend-icon="mdi-music-note-plus"
                label="Upload audio"
                @change="onFileChange($event)"
              ></v-file-input>
            </div>
          </div>
          <div class="mx-auto" style="width: fit-content">
            <button
              class="btn btn-primary t mb-5"
              type="button"
              @click="Upload()"
            >
              Upload
            </button>
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
    <div style="margin-top: 80px">
      <v-textarea ref="textarea" outlined name="input-7-4" label="Field" :value="text" v-if="text != ''">
        <template v-slot:append-outer>
          <button
            class="btn btn-primary btn-lg mt-5"
            @click="getKeyword()"
            type="button"
          >
            <span id="output_url">
              <p> Get KeyWords </p>
            </span>
          </button>
        </template>
      </v-textarea>
      <div ref="display" id="display" class="display-text"></div>
      <div class="row">
        <div class="col-md-4">
          <Barchart v-if="this.sentiment.length != 0" :sentiments = "this.sentiment" :key="refreshKey"/>
        </div>
      </div>
      <!-- <Bar /> -->
      <!-- <Bar :data="data" :options="options" /> -->
    </div>
    <!-- V Dialog End -->
  </v-app>
</template>
<script>
    import VueElementLoading from "vue-element-loading";
    import Barchart from "../../Charts/chart";
    // import AudioRecorder from 'vue-audio-recorder'
    export default {
      data() {
        return {
          recording: false,
          stream: null,
          mediaRecorder: null,
          form: {},
          loading: false,
          text: "",
          filename:{},
          keywords: [],
          files:{},
          id : "",
          modifiedText : "",
          sentiment : [],
          current : {},
          refreshKey: 0,
          pos:{}
        };
      },
      components: {
        VueElementLoading,
        Barchart,
        //  AudioRecorder
      },
      computed: {

      },
      mounted() {},
      methods: {
        callback (data) {
            console.debug(data)
        },
        Upload() {
          this.loading = true;
          let currentObj = this;
          const config = {
            headers: {
            'content-type': 'multipart/form-data',
            }
          }
          const formData = new FormData();
          formData.append("audio_file", this.files);
          this.$api
            .post(this.dynamic_route("service/uploadaudio"), formData, config)
            .then((res) => {
              this.loading = false;
              this.text = res.data.audio.text
              this.id =  res.data.audio.id;
              this.getSentiment()
            });
        },
        onFileChange(e) {
          this.files = e;
        },
        getKeyword() {
        this.loading = true;
        let text = this.text;
        this.$api
          .post(this.dynamic_route("service/getkeyword"), {
            text: encodeURIComponent(text),
            id:this.id
          })
          .then((res) => {
            this.loading = false;
            this.keywords.push(res.data.data.keywords) ;
            this.highlightKeywords();
            // this.POS()
            // this.summary = res.data.summary.summarizedtext
          })
          .finally(() => {
          })
        },
        POS() {
          this.loading = true;
          this.$api
            .post(this.dynamic_route("service/pos"), this.keywords)
            .then((res) => {
              this.loading = false;
              this.pos = res.data.res;
            });
        },
        getSentiment() {
        this.loading = true;
        let text = this.text;
        this.$api
          .post(this.dynamic_route("service/sentiment"), {
            text: encodeURIComponent(text),
            id:this.id
          })
          .then((res) => {
            this.loading = false;
            this.sentiment[0] = res.data.data.sentiments.negative.replace('%', '')
            this.sentiment[1] = res.data.data.sentiments.neutral.replace('%', '')
            this.sentiment[2] = res.data.data.sentiments.positive.replace('%', '')
            this.refreshKey += 1
          }).finally(() => {
              this.loading = false
          })
        },
        highlightKeywords() {
      const textarea = this.$refs.textarea;
      const div = document.getElementById("display");
      const text = textarea.value;
      const keywords = this.keywords;
      let modifiedText = text;
      keywords.forEach(keyword => {
        keyword.forEach(key => {
          const regex = new RegExp("(" + key + ")", "g");
          modifiedText = modifiedText.replace(regex, `<span onclick="getPOS('${key}')" class = "text-danger">${key}</span>`);
        });
      });
      div.innerHTML = modifiedText;
        },
        // startRecording() {
        // navigator.mediaDevices.getUserMedia({ audio: true })
        // .then(micStream => {
        //   const audioContext = new AudioContext();
        //   const source = audioContext.createMediaStreamSource(micStream);
        //   const audioDestination = audioContext.createMediaStreamDestination();
        //   source.connect(audioDestination);

        //   this.mediaRecorder = new MediaRecorder(audioDestination.stream);
        //   const chunks = [];

        //   this.mediaRecorder.addEventListener("dataavailable", event => {
        //     chunks.push(event.data);
        //   });

        //   this.mediaRecorder.addEventListener("stop", () => {
        //     const blob = new Blob(chunks, { type: "audio/webm" });
        //     const formData = new FormData();
        //     formData.append("audio", blob, "recording.webm");
        //     // fetch("https://example.com/service/uploadaudio", {
        //     //   method: "POST",
        //     //   body: formData
        //     // })
        //     this.$api
        //     .post(this.dynamic_route("service/uploadaudio/recordedaudio"), formData)
        //       .then(response => console.log("Audio sent successfully:", response))
        //       .catch(error => console.error("Error sending audio:", error));
        //   });

        //   this.stream = micStream;
        //   this.recording = true;
        //   this.mediaRecorder.start();
        // })
        // .catch(err => console.error("Error accessing microphone:", err));
        // },
        stopRecording() {
        if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
        this.mediaRecorder.stop();
        this.stream.getTracks().forEach(track => track.stop());
        this.recording = false;
      }
        },
      },
    };
   
</script>
<!--  -->
<style scoped>
.modal-body {
  background: white !important;
}
.custom-btn {
  color: #ffffff;
  background-color: #ec570d !important;
  /* background-image: linear-gradient(135deg, #f27233 0%, #f27233 100%) !important; */
}
.ar {
  width: 100% !important;
}
svg {
  vertical-align: inherit !important;
}
.ar-recorder__duration {
  font-size: 35px;
  font-weight: 900;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>