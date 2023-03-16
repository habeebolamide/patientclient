<template>
    <div>
        <form action="" @submit.prevent="updateUserDetails">
            <VueElementLoading
            :active="loading"
            spinner="bar-fade-scale"
            color="var(--primary)"
            text="Loading.."
            duration="0.6"
          />
            <v-card-text class="_body">
                <v-container class="px-0">
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <small class="text-danger" v-if="error_messg.lname">{{error_messg.lname[0]}}</small>

                            <v-text-field
                            label="Name*"
                            v-model="form.name"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <small class="text-danger" v-if="error_messg.fname">{{error_messg.fname[0]}}</small>

                            <v-text-field
                            label="Username*"
                            v-model="form.username"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <small class="text-danger" v-if="error_messg.email">{{error_messg.email[0]}}</small>

                            <v-text-field
                            label="Email*"
                            v-model="form.email"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <small class="text-danger" v-if="error_messg.phone">{{error_messg.phone[0]}}</small>

                            <v-text-field
                            label="Phone"
                            v-model="form.phone"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <small class="text-danger" v-if="error_messg.status">{{error_messg.status[0]}}</small>

                            <v-select
                                :items="items"
                                label="Status"
                                v-model="form.status"
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="closeMe()"
                    class="mr-4"
                >
                    Close
                </v-btn>
                <button
                    class="btn btn-primary"
                    type="submit"
                >
                    Update
                </button>
            </v-card-actions>
        </form>
    </div>
</template>

<script>
import VueElementLoading from 'vue-element-loading'
import axios from "axios"

export default {
    props: ['user', 'authToken'],
    components: {
        VueElementLoading
    },
    data() {
        return {
            loading: false,
            form: this.user,
            error_messg:{},
            items: ["active", "inactive"],
        }
    },
    methods: {
        updateUserDetails(){
            this.loading = true
            this.$api.put(this.dynamic_route('manage_users/edit'), this.form, {
                    
                }).then(()=> {
                    this.$emit('updated')
                    this.$toast.success('User details updated successfully!', {
                        position: 'top-right',
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
                    this.closeMe()
                })
                .catch((err) => {
                    this.$toast.error('An error occurred. Please try again!', {
                        position: 'top-right',
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
                .finally(() => this.loading = false)
        },
        closeMe() {
            this.$bvModal.hide('edit')
        }
    },
    mounted(){

    },
}
</script>

<style>
    .modal-body {
        background: none;
    }
</style>