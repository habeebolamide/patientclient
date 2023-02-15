<template>
  <v-dialog v-model="dialog" persistent max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        style="float: right"
        class="mx-2"
        @click="getAudio()"
        small
        color="#3f50b5"
        v-bind="attrs"
        v-on="on"
        outlined
      >
        <span>Export Text</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Export Text</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <!-- <div class ="row">
                    <div class="col" v-for="(a,i) in audio" :key="i" @dblclick="Export(a)">
                      <span v-if="readMoreActivated !== i">{{ a.text.slice(0, 200)}}   </span>
                    <a class="" v-if="readMoreActivated !== i" @click="activateReadMore(i)" href="#">
                      Read more...
                    </a>

                    <span v-if="readMoreActivated === i" v-html="a.text "></span>
                    <a class="" v-if="readMoreActivated === i" @click="deactivateReadMore" href="#">
                      Read less...
                    </a>
                </div>
                </div> -->
          <v-simple-table>
            <thead>
              <tr>
                <th width="1%" class="text-center">S/N</th>
                <th width="10%" class="text-center">Text</th>
                <th width="4%" class="text-center">Keywords</th>
                <th width="2%" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in audio.data" :key="i">
                <td>{{ i + 1 }}</td>
                <!-- <td>{{ p.audio_file }}</td> -->
                <td>
                  <span v-if="readMoreActivated !== i"
                    >{{ a.text.slice(0, 200) }}
                  </span>
                  <a
                    class=""
                    v-if="readMoreActivated !== i"
                    @click="activateReadMore(i)"
                    href="#"
                  >
                    Read more...
                  </a>

                  <span v-if="readMoreActivated === i" v-html="a.text"></span>
                  <a
                    class=""
                    v-if="readMoreActivated === i"
                    @click="deactivateReadMore"
                    href="#"
                  >
                    Read less...
                  </a>
                  <!-- <span>{{ a.text }}</span> -->
                </td>
                <td>
                  {{ a.keywords }}
                </td>
                <td>
                  <v-btn
                    style="float: right"
                    class="mx-2"
                    small
                    @click="Export(a)"
                    color="#3f50b5"
                    outlined
                  >
                    <span>Export Text</span>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeMe()"> Close </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
  <style scoped>
</style>
  <script>
import Widget from "@/components/Widget/Widget";
import VueElementLoading from "vue-element-loading";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    text: String,
  },
  data() {
    return {
      errors: null,
      loading: false,
      form: {},
      dialog: false,
      audio: {},
      filters:{},
      currentPage: 1,
      pageCount: 5,
      readMoreActivated: null,
    };
  },
  components: {
    VueElementLoading,
  },
  methods: {
    getAudio() {
      this.loading = true;
      this.$api
        .get(this.dynamic_route("service/uploadaudio/getaudio"))
        .then((res) => {
          this.loading = false;
          this.audio = res.data;
          this.page = res.data.last_page;
          // console.log(res.data);
        });
    },
    getPaginatedSession(filters = null, url = null) {
      this.loading = true;
      let uri = url
        ? url
        : this.dynamic_route("service/uploadaudio/getaudio");
      axios
        .post(uri, { filters: filters })
        .then((response) => {
          this.logs = response.data.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getNextPage(k) {
      this.getPaginatedSession(this.filters, k);
    },
    Export(data) {
      this.$emit("export-text", data);
      this.closeMe();
    },
    changePage(page) {
      this.currentPage = page;
      // Trigger any necessary data updates here
    },
    activateReadMore(index) {
      this.readMoreActivated = index;
    },
    deactivateReadMore() {
      this.readMoreActivated = null;
    },
    closeMe() {
      this.dialog = !this.dialog;
    },
  },
  mounted() {},
};
</script>