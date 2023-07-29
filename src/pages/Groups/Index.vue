<template>
    <!-- <div class="main-content">
        <VueElementLoading
        :active="loading"
        :text="loading_text"
        spinner="line-scale"
        color="var(--primary)"
        />
        <b-row>
            <b-col md="12" xl="12" lg="12">
                <b-card header-bg-variant="transparent" class="mb-30">
                    <template #header>
                        <div class="d-flex justify-content-between align-items-center">
                            <span>Groups</span>
                            <b-button class="outline-primary" @click="$bvModal.show('create-group')" >Create Group</b-button>
                        </div>
                        <b-modal id="create-group"  hide-footer title="Create Group">
                           <Create :my_modal="$bvModal"  @get-group="getGroups()" />
                        </b-modal>
                    </template>

                    <div class="table-responsive">
                        <table class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Disease</th>
                                    <th>Join Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(g, index) in groups" :key="index">
                                    <th>{{ index + 1 }}</th>
                                    <th>{{ g.name }}</th>
                                    <th>{{ g.disease.name }}</th>
                                    <th><button class="btn btn-success btn-sm" @click="joinGroup(g._id)">Join group</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </b-card>

                <b-pagination v-model="currentPage" :total-rows="groupCount" :per-page="perPage"
                    @change="getGroups"></b-pagination>
            </b-col>
        </b-row>
    </div> -->
    <v-app class="p-4 mx-0">
        <v-card>
            <VueElementLoading :active="loading" :text="loading_text" spinner="line-scale" color="var(--primary)" />
            <v-card-title class="d-flex justify-space-between">
                <div>
                    <span>Groups</span>
                </div>
                <v-btn @click="$bvModal.show('create-group')" small color="#3f50b5" outlined>Create Group</v-btn>
                <b-modal id="create-group" hide-footer title="Create Group">
                    <Create :my_modal="$bvModal" @get-group="getGroups()" />
                </b-modal>
            </v-card-title>


            <v-container>
                <div class="row">
                    <div class="col-md-12">
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th width="1%">S/N</th>
                                    <th width="10%">Name</th>
                                    <th width="10%">Disease</th>
                                    <th width="10%">Join Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(g, index) in groups" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ g.name }}</td>
                                    <td>{{ g.disease.name }}</td>
                                    <td>
                                        <v-btn class="mx-2" @click="joinGroup(g._id)" small color="#3f50b5" outlined>
                                            <span>Join group</span>
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
import Create from './partial/Create.vue'
import VueElementLoading from "vue-element-loading";
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "SignIn",
    },
    components: {
        Create,
        VueElementLoading
    },
    data() {
        return {
            groups: {},
            loading: false,
            loading_text: '',
            auth_token: {},
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
                params: {
                    page: this.currentPage,
                    perPage: this.perPage,
                },
            };

            this.$api.get(this.dynamic_route('group/all'), config).then((res) => {
                this.loading = false
                this.loading_text = ''
                this.groups = res.data.data.groups;
                this.perPage = res.data.data.perPage;
                this.groupCount = res.data.data.groupCount;
            });
        },

        joinGroup(id) {
            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         Authorization: `Bearer ${this.auth_token.replace(/"/g, '')}`,
            //     },
            // };
            this.$api.post(this.dynamic_route(`group/${id}/joingroup`))
                .then((res) => {
                    if (res.data.status == false) {
                        return this.$toast.error(res.data.message, {
                            timeout: 3000
                        });
                    }
                    this.$toast.success(res.data.message, {
                        timeout: 3000
                    });
                })
                .catch((err) => {
                    console.log(err);
                    this.$toast.error(err.response.data.message, {
                        timeout: 3000
                    });
                })
        }

    },

    mounted() {
        this.auth_token = JSON.parse(localStorage.getItem('auth_info')).auth_token
        this.getGroups()
    }
};
</script>

