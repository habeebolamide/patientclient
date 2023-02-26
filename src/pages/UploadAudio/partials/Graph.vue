<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab small  color="#3f50b5" v-bind="attrs" v-on="on" outlined @click="getSentiment()">
            <v-icon dark> mdi-eye </v-icon>
        </v-btn>
      </template>
      <v-card>
        <VueElementLoading
                :active="loading"
                spinner="line-scale"
                color="var(--primary)"
              />
        <v-card-title>
          <span class="text-h5">Show Graph</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div class="row">
                <div class="col-md-12">
                    <Barchart v-if="this.show" :sentiments = "this.sentiment" :key="refreshKey"/>
                </div>
            </div>
            <div class="">
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeMe()">
                    Close
                  </v-btn>
                </v-card-actions>
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
<script>
    import Barchart from "../../Charts/chart";
    import VueElementLoading from "vue-element-loading";
    export default {
        components: {
            Barchart,
            VueElementLoading
        },
        props :{
            sentiments : Array | Object
        },
        data(){
            return{
                dialog:false,
                sentiment :[],
                refreshKey :0,
                show :false,
                loading:true
            }
        },
        methods: {
            closeMe() {
                this.dialog = !this.dialog;
            },
            getSentiment() {
              console.log(this.sentiment);
                this.loading = true;
                this.sentiment[0] = this.sentiments.data.sentiments.negative.replace('%', '')
                this.sentiment[1] = this.sentiments.data.sentiments.neutral.replace('%', '')
                this.sentiment[2] = this.sentiments.data.sentiments.positive.replace('%', '')
                this.refreshKey += 1
                
                this.showGraph(this);
            },
            showGraph($this){
                setTimeout(function(){
                    $this.show = true;
                    $this.loading = false;
                }, 500)
            }
        },
        mounted(){
        }
    }
</script>  