<template>
  <v-app class="p-4 mx-0">
    <v-card>
      <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
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
                  <th width="10%" class="text-left">S/N</th>
                  <th width="45%" class="text-left">Uploaded Text</th>
                  <th width="45%" class="text-left">Paraphrase</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(t, index) in text.data" :key="index">
                  <td width="1%">{{ index + 1 }}</td>
                  <td width="30%">
                    <span v-if="readMoreActivated !== index"
                      >{{ t.text.slice(0, 100) }}
                    </span>
                    <a
                      class=""
                      v-if="readMoreActivated !== index"
                      @click="activateReadMore(index)"
                      href="#"
                    >
                      Read more...
                    </a>

                    <span
                      v-if="readMoreActivated === index"
                      v-html="t.text"
                    ></span>
                    <a
                      class=""
                      v-if="readMoreActivated === index"
                      @click="deactivateReadMore"
                      href="#"
                    >
                      Read less...
                    </a>
                    <!-- {{  t.text }} -->
                  </td>
                  <td widgh="50%">
                    <span v-if="readMore !== index"
                      >{{ t.paraphrase.slice(0, 50) }}
                    </span>
                    <a
                      class=""
                      v-if="readMore !== index"
                      @click="activate(index)"
                      href="#"
                    >
                      Read more...
                    </a>

                    <span
                      v-if="readMore === index"
                      v-html="t.paraphrase"
                    ></span>
                    <a
                      class=""
                      v-if="readMore === index"
                      @click="deactivate"
                      href="#"
                    >
                      Read less...
                    </a>
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
      textcsv: {},
      readMoreActivated: null,
      readMore: null,
      loading: false,
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
        .get(this.dynamic_route(`service/paraphrase/getparaphrase?page=${page}`))
        .then((res) => {
          this.loading = false;
          this.text = res.data;
        });
    },
    getTextcsv() {
      this.loading = true;
      this.$api
        .get(this.dynamic_route("service/paraphrase/getcsvtext"))
        .then((res) => {
          // return console.log(res.data);
          this.loading = false;
          this.textcsv = res.data;
        });
    },
    activateReadMore(index) {
      this.readMoreActivated = index;
    },
    deactivateReadMore() {
      this.readMoreActivated = null;
    },
    activate(index) {
      this.readMore = index;
    },
    deactivate() {
      this.readMore = null;
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