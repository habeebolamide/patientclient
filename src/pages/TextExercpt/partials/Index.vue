<template>
  <v-app class="p-4">
    <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
    <div class="pb-3" style="border-bottom: 2px solid lightgrey">
      <span  class="page-title mb-0 h1">Text Excerpt</span>
      <!-- <v-spacer></v-spacer> -->
      <Export :text ="this.form.textuploaded" @export-text="handleExportText"/>
      <!-- <button class="btn btn-primary btn-lg mt-5" @dblclick="Exp" type="button">Export Text</button> -->
    </div>
    <div class="mt-5">
      <form>
        <v-textarea
          outlined
          placeholder="Input Text"
          v-model="form.textuploaded"
          label="Upload Text"
        >
          <template v-slot:append-outer>
            <button class="btn btn-primary btn-lg mt-5" @click="Summarize()" type="button">Go</button>
          </template>
        </v-textarea>

        <div style="margin-top: 80px">
          <v-textarea outlined name="input-7-4" label="Field" :value="summary" v-if="summary != ''">
            <template v-slot:append-outer>
            <button class="btn btn-primary btn-lg mt-5" @click="copyContent()" type="button">   <span id="output_url">
                        {{ copyTextString }}
                </span></button>
          </template>
          </v-textarea>
        </div>
      </form>
    </div>
  </v-app>
</template>
<script>
import VueElementLoading from "vue-element-loading";
import Export from "./Import.vue";

export default {
  data() {
    return {
        form:{
          textuploaded : ""
        },
        loading :false,
        summary:"",
        copyTextString : "Copy",
    };
  },
  components: {
    VueElementLoading,
    Export
  },
  computed: {},
  mounted() {},
  methods: {
    Summarize(){
        this.loading = true;
      this.$api
        .post(this.dynamic_route("service/textexcerpt"), this.form)
        .then((res) => {
          console.log(this.form);
         this.loading = false;
            this.summary = res.data.summary.summarizedtext
        
        })
    },
    copyContent() {
    const el = document.createElement('textarea');
    el.value =  this.summary;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.copyTextString = "Copied!"
    },
    handleExportText(data){
      this.form.textuploaded = "hi"
      this.form.textuploaded = data.text
      console.log(this.form.textuploaded);
    }
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

.custom-select {
}
</style>
