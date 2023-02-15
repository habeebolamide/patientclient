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
                  <th width="1%" class="text-left">S/N</th>
                  <th width="2%" class="text-left">Uploaded Text</th>
                  <th width="10%" class="text-left">Summarized Text</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(t, index) in text.data" :key="index">
                  <td width="1%">{{ index + 1 }}</td>
                  <td width="50%">
                    <span v-if="readMoreActivated !== index">{{ t.textuploaded.slice(0, 200)}}   </span>
                    <a class="" v-if="readMoreActivated !== index" @click="activateReadMore(index)" href="#">
                      Read more...
                    </a>

                    <span v-if="readMoreActivated === index" v-html="t.textuploaded"></span>
                    <a class="" v-if="readMoreActivated === index" @click="deactivateReadMore" href="#">
                      Read less...
                    </a>
                    <!-- {{  t.textuploaded }} -->
                  </td>
                  <td width="30%">
                    <span v-if="readMore !== index">{{ t.summarizedtext.slice(0, 50)}}   </span>
                    <a class="" v-if="readMore !== index" @click="activate(index)" href="#">
                      Read more...
                    </a>

                    <span v-if="readMore === index" v-html="t.summarizedtext "></span>
                    <a class="" v-if="readMore === index" @click="deactivate" href="#">
                      Read less...
                    </a>
                    <!-- {{ t.summarizedtext }} -->
                  
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <div class="col-md-12">
             <laravelVuePagination :data="text" @pagination-change-page="getText" />
          </div>
        </div>
      </v-container>
    </v-card>
  </v-app>
</template>
  <script>
import VueElementLoading from "vue-element-loading";
import laravelVuePagination from 'laravel-vue-pagination'
import Papa from 'papaparse';
export default {
  props: ["my_model"],
  components: { VueElementLoading,laravelVuePagination },
  data() {
    return {
      text: {},
      textcsv: [],
      readMoreActivated: null,
      readMore: null
    };
  },

  computed: {},
  methods: {
    closeMe() {
      this.$bvModal.hide("create");
    },

    getText(page=1) {
      this.loading = true;
      this.$api
        .get(this.dynamic_route(`service/textexcerpt/gettext?page=${page}`))
        .then((res) => {
          this.loading = false;
          this.text = res.data;
        });
    },

    activateReadMore(index) {
    this.readMoreActivated = index
  },
  deactivateReadMore() {
    this.readMoreActivated = null
  },
  activate(index) {
    this.readMore = index
  },
  deactivate() {
    this.readMore = null
  },
  getTextcsv() {
      this.loading = true;
      this.$api
        .get(this.dynamic_route("service/textexcerpt/getcsvtext"))
        .then((res) => {
          // return console.log(res.data);
          this.loading = false;
          this.textcsv = res.data;
        });
    },
  exportToCsv() {
      const csv = Papa.unparse(this.textcsv);
      // return console.log(csv);
      const link = document.createElement('a');
      link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
      link.download = 'data.csv';
      link.click();
    },
  },
  mounted() {
    this.getText();
    this.getTextcsv()
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