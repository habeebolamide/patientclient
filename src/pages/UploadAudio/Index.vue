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
    <form>
      <div class="row pl-4 pb-2">
        <div class="pb-5 mt-5 col-md-6 offset-3">
          <div class="mb-4">
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
                accept="audio/wav,audio/ogg,audio/mp3"
                placeholder="Pick an audio"
                prepend-icon="mdi-music-note-plus"
                label="Upload audio"
                v-model="form.audio_file"
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
      <v-textarea ref="textarea" outlined name="input-7-4" label="Field" :value="text">
        <template v-slot:append-outer>
          <button
            class="btn btn-primary btn-lg mt-5"
            @click="getKeyword()"
            type="button"
          >
            <span id="output_url">
              <span> Get KeyWords </span>
            </span>
          </button>
        </template>
      </v-textarea>
      <div ref="display" v-html="modifiedText" class="display-text"></div>
      <!-- <Bar /> -->
        <Barchart v-if="sentiment != ''" :sentiments = "this.sentiment" :key="refreshKey"/>
      <!-- <Bar :data="data" :options="options" /> -->
    </div>
    <!-- V Dialog End -->
  </v-app>
</template>
<script>
import VueElementLoading from "vue-element-loading";
import Barchart from "../Charts/chart.js";
export default {
  data() {
    return {
      form: {},
      loading: false,
      text: "",
      keywords: [],
      modifiedText : "",
      sentiment : [],
      current : {},
      refreshKey: 0
    };
  },
  components: {
    VueElementLoading,
    Barchart
    // "audio-recorder" : AudioRecorder
  },
  computed: {

  },
  mounted() {},
  methods: {
    Upload() {
      this.loading = true;
      const formData = new FormData();
      formData.append("audio_file", this.form.audio_file);
      this.$api
        .post(this.dynamic_route("service/uploadaudio"), formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.loading = false;
          this.text = res.data.data.text
          this.getSentiment()
        });
    },
    getKeyword() {
    this.loading = true;
    let text = this.text;
    this.$api
      .post(this.dynamic_route("service/getkeyword"), {
        text: encodeURIComponent(text),
      })
      .then((res) => {
        // console.log(res.data.data.keywords);
        this.loading = false;
        this.keywords.push(res.data.data.keywords) ;
        this.highlightKeywords();
        // this.summary = res.data.summary.summarizedtext
      });
  },
  getSentiment() {
    this.loading = true;
    let text = this.text;
    this.$api
      .post(this.dynamic_route("service/sentiment"), {
        text: encodeURIComponent(text),
      })
      .then((res) => {
        this.loading = false;
        this.sentiment[0] = res.data.data.sentiments.negative.replace('%', '')
        this.sentiment[1] = res.data.data.sentiments.neutral.replace('%', '')
        this.sentiment[2] = res.data.data.sentiments.positive.replace('%', '')
        this.refreshKey += 1
      })
  },
  setCurrent() {
      this.current =this.sentiment;
      // console.log(this.current);
    },
  highlightKeywords() {
  const textarea = this.$refs.textarea;
  const text = textarea.value;
  const keywords = this.keywords;
  let modifiedText = text;
  keywords.forEach(keyword => {
    keyword.forEach(key => {
      const regex = new RegExp("(" + key + ")", "g");
      modifiedText = modifiedText.replace(regex, `<p style="color: red;">${key}</p>`);
    });
  });
  textarea.innerHTML = modifiedText;
  console.log(textarea.innerHTML);
},
  },
};
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