<template>
    <v-app class="p-2">
        <div >
            
            <form action="" >
                <div class="row" style="margin-bottom:0">
                    <div class="col-12">
                        <div class="card border-0" style="height:auto">
                            <div class="row">
                                <small class="pl-4 text-danger" v-if="errorMessage.sender_id">{{errorMessage.sender_id[0]}}</small>
                                <div class="col-md-12 mb-0">
                                    <v-textarea
                                        outlined
                                        name="input-7-4"
                                        label="Send message"
                                        v-model="form.messages"
                                    ></v-textarea>
                                </div>
                                <div class="col-md-12 text-right mb-2">
                                    <button @click="send" type="button" class="btn btn-lg  btn-success">Send</button>
                                    
                                </div>
                            </div>
                            <div class="card-body">
                                <VueElementLoading
                                :active="loading"
                                spinner="bar-fade-scale"
                                color="var(--primary)"
                                text="Loading.."
                                duration="0.6"
                            />
                                <!-- <v-card-title>
                                    <span class="text-h5">Create Property</span>
                                </v-card-title> -->
                                <v-card-text >
                                <v-container class="px-0">
                                <div>
                                    <div class="table-responsive mt-4">
                                        <table class="table table-hover table-sm mb-0 requests-table">
                                            <thead>
                                                <tr>
                                                    <th class="hidden-sm-down">ID</th>
                                                    <th class="hidden-sm-down">MESSAGE</th>
                                                    <th class="hidden-sm-down">HAS READ</th>
                                                    
                                                    <th class="hidden-sm-down">STATUS</th>
                                                    
                                                    <!-- <th class="hidden-sm-down text-center">Action</th> -->
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(c, i) in data.user_messages" :key="i">
                                                    <td>#{{i+1}}</td>
                                                    <td>
                                                        <v-expansion-panels accordion flat>
                                                            <v-expansion-panel
                                                            
                                                            >
                                                                <v-expansion-panel-header>
                                                                    <p class="truncate">
                                                                        {{c.messages}}
                                                                    </p>
                                                                </v-expansion-panel-header>
                                                                <v-expansion-panel-content>
                                                                    {{c.messages}}
                                                                </v-expansion-panel-content>
                                                            </v-expansion-panel>
                                                        </v-expansion-panels>
                                                       
                                                    </td>
                                                    <td>
                                                    <span class="badge"  :class="{
                                                        'badge-info': c.has_read =='no',
                                                        'badge-warning': c.has_read =='yes',
                                                    }">
                                                            {{c.has_read}}

                                                    </span>
                                                    </td>
                                                    <td>
                                                        <span class="badge"  :class="{
                                                        'badge-success': c.status =='active',
                                                        'badge-warning': c.status =='inactive',
                                                    }">
                                                            {{c.status}}

                                                    </span>
                                                    </td>
                                                    
                                                    
                                                    <!-- <td class="text-center" style="font-size: 18px">
                                                        <v-menu
                                                            bottom
                                                            origin="center center"
                                                            transition="scale-transition"
                                                            :close-on-content-click="closeOnContentClick"
                                                            left
                                                        >
                                                            <template #activator="{ on, attrs }">
                                                                <v-btn
                                                                    color="black"
                                                                    icon
                                                                    v-bind="attrs"
                                                                    v-on="on"
                                                                >
                                                                    <i class="fa fa-list-ul"></i>
                                                                </v-btn>
                                                            </template>

                                                            <v-list>
                                                                <v-list-item>
                                                                    <v-list-item-title
                                                                    style="cursor:pointer"
                                                                    @click="current=c;$bvModal.show('message')"
                                                                    
                                                                    >
                                                                    <i class="mdi mdi-square-edit-outline mr-1"></i> Manage Message
                                                                    </v-list-item-title>
                                                                </v-list-item>
                                                                <v-list-item>
                                                                    <v-list-item-title
                                                                    style="cursor:pointer"
                                                                    @click="current=c;$bvModal.show('view')"
                                                                    
                                                                    >
                                                                    <i class="mdi mdi-square-edit-outline mr-1"></i> View Orders
                                                                    </v-list-item-title>
                                                                </v-list-item>
                                                                <v-list-item>
                                                                    <v-list-item-title
                                                                    style="cursor:pointer"
                                                                    @click="current=c;$bvModal.show('edit')"
                                                                    
                                                                    >
                                                                    <i class="mdi mdi-square-edit-outline mr-1"></i> Edit
                                                                    </v-list-item-title>
                                                                </v-list-item>
                                                                <v-list-item>
                                                                    <v-list-item-title
                                                                    style="cursor:pointer"
                                                                    @click="openConfirm2=true;del_id=c.id"
                                                                    
                                                                    >
                                                                    <i class="mdi mdi-square-edit-outline mr-1"></i> Delete
                                                                    </v-list-item-title>
                                                                </v-list-item>
                                                                
                                                            </v-list>
                                                        </v-menu>
                                                    </td> -->
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </v-container>
                                </v-card-text>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-0 text-right "
                >
                    <button type="button" @click="closeMe" class="mr-5 btn btn-lg  btn-outline-success">CANCEL</button>

                </div>
    
            </form>
        </div>

    </v-app>
</template>
<script>
    
import VueElementLoading from 'vue-element-loading'

import { mapState,mapActions } from 'vuex';

export default {
    props:['my_model', 'data'],
    components:{ VueElementLoading },
    data() {
        return {
            form:this.data,
            nameRules: [
                v => !!v || 'Name is required',
            ],
            statusRules:[
                v => !!v || 'Status is required',
            ],
            editorOption: {
                debug: 'info',
                placeholder: 'Contents..',
                readOnly: true,
                theme: 'snow'
            },
            delta: undefined,
            loading:false,
            errorMessage:{}
        }
    },
    computed:{
        ...mapState('auth',['auth_data'])

    },
    
    
    methods:{
        
        closeMe() {
            this.$bvModal.hide("message");
        },
        send() {
            let payload = {
                user_id: this.data.id,
                sender_id: this.auth_data.id,
                messages: this.form.messages
            }
            this.$api
            .post(this.dynamic_route('/customers/message'), payload)
            .then(res => {
                this.form.messages='';
                this.errorMessage={}
                this.data.user_messages.push(res.data.data)
                this.data.user_messages.reverse()
            //    this.closeMe()
               this.$toasted.success('Message sent successfully !', {
                    action: {
                    text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                    }
                })
               this.$emit('sent')
                
            })
            .catch(err => {
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    // return this.logoutUser();
                }
                if(err.response.status == 422) {
                    this.$toasted.success(err.response.data.message, {
                        action: {
                        text: 'Close',
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
                        }
                        }
                    })
                    this.errorMessage=err.response.data.errors
                }
                // eslint-disable-next-line no-console
            })
            .finally(() => {
                NProgress.done()

            })
        },
    }
    
}
</script>

<style>
    .v-application--wrap {
        min-height: 2% !important;
    }

    .truncate {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis !important;
    }

    @media screen and (max-width: 920px) {
        .control_margin {
            margin-bottom: 200px !important;
        }
    }
</style>