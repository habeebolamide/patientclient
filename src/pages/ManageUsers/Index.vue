<template>
    <v-app>
        <v-card>
            <VueElementLoading :active="loading" spinner="line-scale" color="var(--primary)" />
            <v-container>
                <div class="row">
                    <div class="col-md-6 mt-5">
                        <v-text-field v-model="filter.search" @keyup="searchData" label="Search By Name" outlined
                            append-icon="mdi-magnify"></v-text-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive mt-4">
                            <table class="table table-hover table-sm mb-0 requests-table">
                                <thead>
                                    <tr>
                                        <th class="hidden-sm-down">S/N</th>
                                        <th class="hidden-sm-down">User Info</th>
                                        <th class="hidden-sm-down">Username</th>
                                        <th class="hidden-sm-down">Phone </th>
                                        <th class="hidden-sm-down">User Type</th>
                                        <th class="hidden-sm-down">Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, index) in users.data" :key="index">
                                        <td> {{ index + 1 }} </td>
                                        <td>
                                            <span class="d-flex pt-2">
                                                <span>
                                                    <span class="b-avatar rounded-circle" :class="getRandomBadgeClass()"
                                                        style="width: 38px; height: 38px; font-weight: 600">
                                                        {{ getInitials(user.name) }}
                                                    </span>
                                                </span>
                                                <span class="ml-3">
                                                    <!-- <p class="mb-0"> -->
                                                    <span class="fw-semi-bold">&nbsp; {{ user.name }}</span>
                                                    <!-- </p> -->
                                                    <p>
                                                        <small>
                                                            <span class="text-semi-muted">&nbsp; {{ user.email }}</span>
                                                        </small>
                                                    </p>
                                                </span>
                                            </span>
                                        </td>
                                        <td class="text-dark">
                                            {{ user.username ? user.username : '-' }}
                                        </td>
                                        <td class="text-dark">
                                            {{ user.phone ? user.phone : '-' }}
                                        </td>
                                        <td class="font-weight-bolder">
                                            <span class="badge badge-pill"
                                                :class="user.user_type == 'user' ? 'badge-light-info' : 'badge-light-warning'">
                                                {{ user.user_type }}
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge badge-pill"
                                                :class="user.status == 'active' ? 'badge-light-primary' : 'badge-light-danger'">
                                                {{ user.status }}
                                            </span>
                                        </td>
                                        <td class="text-center" style="font-size: 18px">
                                            <v-menu bottom origin="center center" transition="scale-transition"
                                                :close-on-content-click="closeOnContentClick" left>
                                                <template #activator="{ on, attrs }">
                                                    <v-btn color="black" icon v-bind="attrs" v-on="on">
                                                        <i class="fa fa-list-ul"></i>
                                                    </v-btn>
                                                </template>

                                                <v-list>
                                                    <v-list-item>
                                                        <v-list-item-title style="cursor:pointer"
                                                            @click="setCurrent(user); $bvModal.show('edit')">
                                                            <i class="mdi mdi-square-edit-outline mr-1"></i> Edit Details
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <!-- <v-list-item>
                                                        <v-list-item-title style="cursor:pointer"
                                                            @click="openConfirm4 = true; reset_id = user.id; currentUser = user">
                                                            <i class="mdi mdi-square-edit-outline mr-1"></i> login as
                                                        </v-list-item-title>
                                                    </v-list-item> -->
                                                    <!-- <v-list-item>
                                                <v-list-item-title
                                                style="cursor:pointer"
                                                @click="openConfirm2=true;del_id=user.id"
                                                >
                                                <i class="mdi mdi-delete-forever-outline mr-1"></i> Delete Account
                                                </v-list-item-title>
                                            </v-list-item> -->
                                                    <v-list-item>
                                                        <v-list-item-title style="cursor:pointer"
                                                            @click="ResetPassword(user); openConfirm3 = true; reset_id = user.id">
                                                            <i class="mdi mdi-account-outline mr-1"></i> Reset Password
                                                        </v-list-item-title>
                                                    </v-list-item>

                                                </v-list>
                                            </v-menu>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="col-md-12">
                        <laravelVuePagination :data="users" @pagination-change-page="getUsers" />
                    </div>
                    <b-modal size="md" style="background:white" title="Edit user details" id="edit" hide-footer>
                        <edit :user="currentUser" @updated="getUsers" />
                    </b-modal>
                    <v-dialog v-model="openConfirm4" max-width="450">
                        <v-card>
                            <v-card-title class="text-h5">
                                <p class="text-success">You are about to <b> Login As {{ currentUser.fullname }}</b></p>
                                <p><small><b>Note: </b> This will make you act as <b>{{ currentUser.fullname }}</b></small>
                                </p>
                            </v-card-title>

                            <v-card-text>
                                Are you sure you want to perform this operation ?
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn color=" darken-1" text @click="openConfirm4 = false">
                                    No, exit
                                </v-btn>

                                <v-btn color="primary darken-1" text @click="loginAs(reset_id); openConfirm4 = false">
                                    Yes, continue
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </v-container>
        </v-card>
    </v-app>
</template>
<script>
import laravelVuePagination from 'laravel-vue-pagination'
import VueElementLoading from "vue-element-loading";
import edit from './Partials/EditUser'
export default {
    data() {
        return {
            users: {},
            filter: {},
            loading: false,
            closeOnContentClick: true,
            currentUser: {},
            openConfirm: false,
            openConfirm2: false,
            openConfirm3: false,
            openConfirm4: false,
        }
    },
    components: { VueElementLoading, laravelVuePagination, edit },
    methods: {
        getUsers(page = 1) {
            this.loading = true
            this.$api.post(this.dynamic_route(`manage_users/getuser?page=${page}`), { filter: this.filter }).then((res) => {
                // return console.log(res.data.users);
                this.users = res.data.users;
                this.loading = false;
            });
        },
        setCurrent(data) {
            this.currentUser = data
        },
        searchData() {
            this.getUsers()
        },
        getInitials(fullname) {
            const allNames = fullname.trim().split(' ');
            const initials = allNames.reduce((acc, curr, index) => {
                if (index === 0 || index === allNames.length - 1) {
                    acc = `${acc}${curr.charAt(0).toUpperCase()}`;
                }
                return acc;
            }, '');
            return initials;
        },
        getRandomBadgeClass() {
            //   const {primary, success, info, danger} = this.appConfig.colors;
            const colors = ['badge-light-info', 'badge-light-primary', 'badge-light-danger',
                'badge-light-success', 'badge-light-warning', 'badge-light-secondary'];
            return colors[Math.floor(Math.random() * colors.length)]
        },
        ResetPassword(data) {
            // this.loading = true
            let userid = data.id
            // return console.log(userid);
            this.$api.post(this.dynamic_route(`manage_users/reset_password/${userid}`)).then((res) => {
                this.$toast.success('Password Reset successfully!', {
                    position: 'top-center',
                    timeout: 3000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: 'button',
                    icon: true,
                    rtl: false,
                })
                this.getUsers()
            });
        },
        loginAs(id) {
        this.loading = true
      this.$api
            .get(this.dynamic_route(`manage_users/login-as/${id}`), {
                // headers:{
                //     authorization: `Bearer ${this.auth_token}`
                // }
            })
            .then((res) => {
                if(res.data.access_token) {

                    var newUser = {
                        auth_token : res.data.access_token,
                        auth_user : res.data.data
                    };
                    return console.log(newUser);
                    var data = JSON.parse(localStorage.getItem('auth_info'));

                    data.unshift(newUser)
                    localStorage.setItem('auth_info', JSON.stringify(data));
                    location.href="/app/dashboard"
                }
                this.$toast.success('Operation successfully!', {
                    position: 'top-center',
                    timeout: 3000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: 'button',
                    icon: true,
                    rtl: false,
                })
                
            })
            .catch(err => {
                this.loading = false;
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    return this.logoutUser();
                }
                this.$toast.error('An error occurred please try again!', {
                    position: 'top-center',
                    timeout: 3000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: 'button',
                    icon: true,
                    rtl: false,
                })
            })
            .finally(() => {
                this.loading = false
            })
    },
    },
    mounted() {
        this.getUsers()
    }

}
</script>

<style scoped>
.requests-table td {
    font-size: 14px;
    vertical-align: middle;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
}
</style>