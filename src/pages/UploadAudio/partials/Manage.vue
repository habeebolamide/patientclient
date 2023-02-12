<template>
  <v-app class="p-4 mx-0">
    <v-card>
      <v-card-title>
        <v-btn
        class="mx-2"
        @click="exportToCsv()"
        small
        color="#3f50b5"
        outlined
      >
        <span>Export To Csv</span>
      </v-btn>
      </v-card-title>
      <v-container>
        <div class="row">
          <div class="col-md-12">
            <v-simple-table>
              <thead>
                <tr>
                  <th width ="1%" class="text-left">S/N</th>
                  <th width ="2%" class="text-left">Audio</th>
                  <th width ="10%" class="text-left">Text</th>
                  <th width ="4%" class="text-left">Keywords</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(a, i) in audio" :key="i">
                  <td>{{ i+1 }}</td>
                  <!-- <td>{{ p.audio_file }}</td> -->
                  <td>
                    <audio controls class="mt-3">
                      <source :src="a.audio_file" >
                    </audio>
                  </td>
                  <td>
                    <span v-if="readMoreActivated !== i">{{ a.text.slice(0, 100)}}   </span>
                    <a class="" v-if="readMoreActivated !== i" @click="activateReadMore(i)" href="#">
                      Read more...
                    </a>

                    <span v-if="readMoreActivated === i" v-html="a.text "></span>
                    <a class="" v-if="readMoreActivated === i" @click="deactivateReadMore" href="#">
                      Read less...
                    </a>
                    <!-- <span>{{ a.text }}</span> -->
                  </td>
                  <td>
                   {{ a.keywords }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </div>
      </v-container>
    </v-card>
    <audio src=""></audio>
  </v-app>
</template>
<script>
import VueElementLoading from "vue-element-loading";
import Papa from 'papaparse';
export default {
  props: ["my_model"],
  components: { VueElementLoading },
  data() {
    return {
      audio: {},
      audiocsv: [],
      readMoreActivated: null
    };
  },

  computed: {
  },
  methods: {
    closeMe() {
      this.$bvModal.hide("create");
    },
    getAudio() {
      this.loading = true;
      this.$api
        .get(this.dynamic_route("service/uploadaudio/getaudio"))
        .then((res) => {
          this.loading = false;
          this.audio = res.data;
        });
    },
    
    activateReadMore(index) {
    this.readMoreActivated = index
    },
    deactivateReadMore() {
    this.readMoreActivated = null
    },
    getAudiocsv() {
      this.loading = true;
      this.$api
        .get(this.dynamic_route("service/uploadaudio/getcsvaudio"))
        .then((res) => {
          // return console.log(res.data);
          this.loading = false;
          this.audiocsv = res.data;
        });
    },
  exportToCsv() {
      const csv = Papa.unparse(this.audiocsv);
      // return console.log(csv);
      const link = document.createElement('a');
      link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
      link.download = 'data.csv';
      link.click();
    },
  },
  mounted() {
    this.getAudio();
    this.getAudiocsv();
  },
};
</script>
<style>
.modal-body {
  background: white !important;
}

._body {
  height: auto !important;
}
.modal-body {
  background: #fff !important;
}
.custom-bg {
  background: #ec570db8 !important;
  color: white !important;
}
li {
  display: inline;
}
</style>