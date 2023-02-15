<template>
  
  <v-app class="p-4">
    <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
    <div class="pb-3" style="border-bottom: 2px solid lightgrey">
      <h2 class="page-title mb-0">Paraphrase</h2>
      <Export :text ="this.form.text" @export-text="handleExportText"/>

    </div>
    <div class="mt-5">
      <form>
        <v-textarea
          placeholder="Input Text"
          v-model="form.text"
          label="Upload Text"
          outlined
        >
          <template v-slot:append-outer>
            <button class="btn btn-primary btn-lg mt-5" @click="Paraphrase()" type="button">Go</button>
          </template>
        </v-textarea>

        <div style="margin-top: 80px">
          <v-textarea outlined name="input-7-4" label="Field" :value="paraphrase" v-if="paraphrase != ''">
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
import Export from "../../TextExercpt/partials/Import.vue";

export default {
  data() {
    return {
        form:{
          text : ""
        },
        paraphrase:"",
        loading:false,
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
    Paraphrase(){
        this.loading = true;
      this.$api
        .post(this.dynamic_route("service/paraphrase"), this.form)
        .then((res) => {
            this.loading = false
            this.paraphrase = res.data.paraphrase.paraphrase
        })
    },
    copyContent() {
    const el = document.createElement('textarea');
    el.value =  this.paraphrase;
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
      this.form.text = "hi"
      this.form.text = data.text
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
