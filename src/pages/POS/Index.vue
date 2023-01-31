<template>
  <v-app class="p-4">
    <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
    <div class="pb-3" style="border-bottom: 2px solid lightgrey">
      <h2 class="page-title mb-0">POS</h2>
    </div>
    <div class="mt-5">
      <form>
        <v-textarea
          placeholder="Input Text"
          v-model="form.text"
          label="Upload Text"
        >
          <template v-slot:append-outer>
            <button class="btn btn-primary btn-lg mt-5" @click="POS()" type="button">Go</button>
          </template>
        </v-textarea>

        <!-- <div style="margin-top: 80px">
          <v-textarea outlined name="input-7-4" label="Field" :value="summary">
            
          </v-textarea>
        </div> -->

        <v-card class="mx-auto" v-if="this.pos != ''">
      <v-container>
        <v-card-text class="text-h5 font-weight-bold">
          <div class="row">
            <div class="col-md-12">
              <v-simple-table>
                <thead>
                  <tr>
                    <th class="text-left">Part Speech </th>
                    <th class="text-left">Words</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(p, i) in pos" :key="i">
                        <td>{{ i }}</td>
                        <td>
                          <h6>
                            <ul>
                              <li  v-for="(ps, i) in p" :key="i" class="li">
                                <span>{{ ps }},</span>
                            </li>
                            </ul>
                          </h6>
                        </td>
                    </tr>
                </tbody>
              </v-simple-table>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-card>
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
        pos:"",
        loading:false
    };
  },
  components: {
    VueElementLoading,
  },
  computed: {},
  mounted() {},
  methods: {
    POS(){
        this.loading = true;
      this.$api
        .post(this.dynamic_route("service/pos"), this.form)
        .then((res) => {
          this.loading =  false
          // return console.log(res);
            this.pos = res.data.res
           return console.log(this.pos);
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
li{
  display: inline;
}
.custom-select {
}
</style>
