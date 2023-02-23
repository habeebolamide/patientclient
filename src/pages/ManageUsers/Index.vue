<template>
    <v-app>
        <v-card>
            <v-container>
                <div class="row">
                    <div class="col-md-6 mt-5">
                        <v-text-field label="Search By Name" outlined append-icon="mdi-magnify"></v-text-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th class="text-left">S/N</th>
                                    <th class="text-left">Username</th>
                                    <th class="text-left">Email</th>
                                    <th>Action</th>
                                    <!-- <th class="text-left">Keywords</th>
                                    <th class="text-left">View Graph</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users.data" :key="index">
                                    <td> {{ index + 1 }} </td>
                                    <td> {{ user.username }}</td>
                                    <td> {{ user.email }}</td>
                                    <td>
                                        <div class="text-capitalize actions-icon-btn">
                                            <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" right>
                                                <span slot="button-content">
                                                    <i class="fa fa-th"></i>
                                                </span>
                                                <div>
                                                    <v-btn type="button"  text @click="ResetPassword(user)">
                                                        <span>Reset Password</span>
                                                    </v-btn>
                                                </div>
                                            </b-dropdown>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                    </div>
                    <div class="col-md-12">
                        <laravelVuePagination :data="users" @pagination-change-page="getUsers" />
                    </div>
                </div>
            </v-container>
        </v-card>
    </v-app>
</template>
<script>
import laravelVuePagination from 'laravel-vue-pagination'
import VueElementLoading from "vue-element-loading";
export default {
    data() {
        return {
            users: {},
            loading: false,
        }
    },
    components: { VueElementLoading, laravelVuePagination },
    methods: {
        getUsers(page = 1) {
            this.loading = true
            this.$api.get(this.dynamic_route(`manage_users/getuser?page=${page}`)).then((res) => {
                this.users = res.data.users;
                this.loading = false;
            });
        },
        ResetPassword(data){
            console.log(data);
        }
    },
    mounted() {
        this.getUsers()
    }

}
</script>