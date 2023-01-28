<template>
  
  <v-app class="p-4">
    <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
    <div class="pb-3" style="border-bottom: 2px solid lightgrey">
      <h2 class="page-title mb-0">Paraphrase</h2>
    </div>
    <div class="mt-5">
      <form>
        <v-textarea
          placeholder="Input Text"
          v-model="form.text"
          label="Upload Text"
        >
          <template v-slot:append-outer>
            <button class="btn btn-primary btn-lg mt-5" @click="Paraphrase()" type="button">Go</button>
          </template>
        </v-textarea>

        <div style="margin-top: 80px">
          <v-textarea outlined name="input-7-4" label="Field" :value="paraphrase">
            
          </v-textarea>
        </div>
      </form>
    </div>
  </v-app>
</template>
<script>
import VueElementLoading from "vue-element-loading";

export default {
  data() {
    return {
        form:{},
        paraphrase:"",
        loading:false
    };
  },
  components: {
    VueElementLoading,
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
