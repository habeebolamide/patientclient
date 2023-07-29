<template>
    <v-app class="p-4 mx-0">
    <v-card>
        <VueElementLoading
        :active="loading"
        :text="loading_text"
        spinner="line-scale"
        color="var(--primary)"
        />
      <v-card-title>
       
      </v-card-title>
      <v-container>
        <div class="row">
          <div class="col-md-12">
            <v-simple-table>
              <thead>
                <tr>
                    <th width ="1%">S/N</th>
                    <th width ="10%">Name</th>
                    <th width ="10%">Disease</th>
                    <th width ="10%">View Messages</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(g, index) in groups" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ g.name }}</td>
                    <td>{{ g.disease.name }}</td>
                    <td>
                        <v-btn
                            class="mx-2"
                            @click="ViewMessages(g)"
                            small
                            color="#3f50b5"
                            outlined
                        >
                            <span>View Messages</span>
                        </v-btn>
                    </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <div class="col-md-12">
          </div>
        </div>
      </v-container>
    </v-card>
   
  </v-app>
</template>

<script>
import VueElementLoading from "vue-element-loading";

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "SignIn",
    },
    components:{
        VueElementLoading
    },
    data() {
        return {
            groups: {},
            loading: false,
            auth_token: {},
            loading_text:'',
            currentPage: 1,
            perPage: 10, // Change this to the number of groups per page you want to display
            groupCount: '',
        };
    },

    methods: {
        
        getGroups() {
            this.loading = true
            this.loading_text = 'Fetching Group'
            const config = {
                // headers: {
                //     'Content-Type': 'application/json',
                //     Authorization: `Bearer ${this.auth_token.replace(/"/g, '')}`,
                // },
                params: {
                    page: this.currentPage,
                    perPage: this.perPage,
                },
            };
            this.$api.get(this.dynamic_route('group/patientgroup',config))
            .then((res) => {
                this.groups = res.data.data.groups;
                this.perPage = res.data.data.perPage;
                this.groupCount = res.data.data.groupCount;
            })
            .finally(() => {
                this.loading = false
                this.loading_text = ''
            })
        },

        ViewMessages(group){

            this.$router.push({ path: `/app/${group._id}/message`, query: group });
        }

    },

    mounted() {
        this.getGroups()
    },
    created(){
        this.auth_token = localStorage.getItem('auth_token')
    }
};
</script>