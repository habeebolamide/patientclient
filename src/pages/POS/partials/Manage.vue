<template>
    <v-app class="p-4 mx-0">
        <v-card>
      <v-container>
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
      </v-container>
        </v-card>
        <audio src=""></audio>
    </v-app>
</template>
<script>
    
import VueElementLoading from 'vue-element-loading'
import axios from 'axios'
import { mapState,mapActions } from 'vuex';

export default {
    props:['my_model'],
    components:{VueElementLoading },
    data() {
        return {
           pos:{}
        }
    },
  
    computed:{
        
    },
    methods:{
        

        closeMe() {
            this.$bvModal.hide("create");
        },
        
       getPos(){
        this.loading = true;
      this.$api
        .get(this.dynamic_route("service/pos/getpos"))
        .then((res) => {
            // return console.log(res.data);
          this.loading =  false
            let a = res.data;
            let b = JSON.parse(a);
            this.pos = b
           return console.log(this.pos);
        })
       }

    },
    mounted(){
        this.getPos()
    }
}
</script>
<style>
    .modal-body {
       background: white !important;
    }

    ._body {
        height:auto !important;
    }
    .modal-body {
        background: #FFF !important;
    }
    .custom-bg {
        background: #ec570db8 !important;
        color:white !important;
    }
    li{
  display: inline;
}
</style>