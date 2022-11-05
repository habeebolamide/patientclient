<template>
     <v-app class="p-4">
        <div class="">
            <div class="card">
                <div class="card-body">
                    <div class="row bg-isnfo">
                        <div class="border-right col-md-9 col-12">
                            <v-row>
                                <v-col
                                    cols="12"
                                    
                                    md="6"
                                    >
                                    <v-text-field
                                        label="Name"
                                        v-model="filters.search"
                                        placeholder="Placeholder"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                    class="text-center pt-5"
                                    >
                                    
                                    <button type="button" @click="fetchData" class="btn-lg btn-block btn btn-outline-success">Filter</button>
                                </v-col>

                            </v-row>
                            <div class="table-responsive mt-4">
                                <table v-if="subCategories.length" class="table table-hover table-sm mb-0 requests-table">
                                    <thead>
                                        <tr>
                                            <th class="hidden-sm-down">ID</th>
                                            <th class="hidden-sm-down">NAME</th>
                                            <th class="hidden-sm-down">SLUG</th>
                                            <th class="hidden-sm-down">DESCRIPTION</th>
                                            
                                            <th class="hidden-sm-down">STATUS</th>
                                            
                                            <th class="hidden-sm-down text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(cat, i) in subCategories" :key="i">
                                            <td>
                                                {{i+1}}
                                            </td>
                                            <td>
                                                {{cat.sub_category_name}}
                                            </td>
                                            <td>
                                                {{cat.slug}}
                                            </td>
                                            <td>
                                                {{cat.description}}
                                            </td>
                                            <td>
                                                <span class="badge">
                                                {{cat.status}}
                                                </span>
                                            </td>
                                            <td class="text-center" style="font-size: 18px">
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
                                                            @click="$bvModal.show('manage_nested');current=cat"
                                                            
                                                            >
                                                            <i class="mdi mdi-square-edit-outline mr-1"></i> Manage Nested Subcategories
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item>
                                                            <v-list-item-title
                                                            style="cursor:pointer"
                                                            @click="editing=true;form=cat"
                                                            
                                                            >
                                                            <i class="mdi mdi-square-edit-outline mr-1"></i> Edit
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item>
                                                            <v-list-item-title
                                                            style="cursor:pointer"
                                                            @click="openConfirm2=true;del_id=cat.id"
                                                            >
                                                            <i class="mdi mdi-square-edit-outline mr-1"></i> Delete
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                        
                                                    </v-list>
                                                </v-menu>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="alert alert-info" v-else>
                                    <h5>No records found</h5>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-3 col-12" md="5">
                            <form @submit.prevent="editing ? update() : save()">
                                <p v-if="editing" style="text-transform:capitalize" class="text-danger">Currently Editing {{form.sub_category_name}}</p>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    class=" bgs-info m-0 p-0"
                                    >
                                    <p class="mb-0 text-danger" v-if="errorMssg.sub_category_name">{{errorMssg.sub_category_name[0]}}</p>
                                    <v-text-field
                                        
                                        v-model="form.sub_category_name"
                                        label="Name"
                                        outlined
                                        clearable
                                    ></v-text-field>
                                    </v-col>
                                    <v-col
                                    cols="12"
                                    sm="12"
                                    class="m-0 p-0"
                                    >
                                    <p class="mb-0 text-danger" v-if="errorMssg.slug">{{errorMssg.slug[0]}}</p>

                                    <v-text-field
                                        
                                        v-model="form.slug"
                                        label="Slug"
                                        placehold="Enter category slug"
                                        outlined
                                        clearable
                                    ></v-text-field>
                                    </v-col>
                                    <v-col
                                    cols="12"
                                    sm="12"
                                    class="m-0 p-0"
                                    >
                                    <p class="mb-0 text-danger" v-if="errorMssg.description">{{errorMssg.description[0]}}</p>

                                    <v-textarea
                                        
                                        outlined
                                        v-model="form.description"
                                        name="input-7-4"
                                        label="Description "
                                        value="Lorem ipsum dolor sit amt"
                                    ></v-textarea>

                                    </v-col>
                                    <v-col
                                    cols="12"
                                    class="m-0 p-0"
                                    >
                                    <p class="mb-0 text-danger" v-if="errorMssg.status">{{errorMssg.status[0]}}</p>

                                    <v-select
                                        :items="['active', 'inactive']"
                                        v-model="form.status"
                                        label="Status"
                                        outlined
                                    ></v-select>
                                </v-col>
                                    <v-col
                                    cols="12"
                                    sm="12"
                                    class="text-center m-0 p-0"
                                    >
                                    <button v-if="editing" type="submit" class="btn btn-block btn-lg btn-primary">UPDATE</button>
                                    <button v-else type="submit" class="btn btn-block btn-lg btn-primary">SAVE</button>

                                    </v-col>

                            </form>
                        </div>
                        

                    </div>
                </div>
            </div>
            <v-dialog
            v-model="openConfirm2"
            max-width="460"
        >
            <v-card>
                <v-card-title class="text-h5">
                Delete Subcategory
                </v-card-title>

                <v-card-text>
                Are you sure you want to perform this operation ?
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color=" darken-1"
                    text
                    @click="openConfirm2 = false"
                >
                    No, exit
                </v-btn>

                <v-btn
                    color="primary darken-1"
                    text
                    @click="deleteSubcat(del_id);openConfirm2=false"


                >
                    Yes, continue
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>
        <b-modal size="xl"  style="background:white" :title="'Manage Nested Subcategory for ' + current.sub_category_name " id="manage_nested" hide-footer>
            <nestedSub :my_model="$bvModal" :data="current"   @updated="fetchData()"  />
        </b-modal>

    </v-app>
</template>
<script>
import nestedSub from "./NestedSubCategories.vue"

export default {
    props:['my_model', 'data'],
    components:{nestedSub},
    data() {
        return {
            del_id:0,
            dynamic_status:'',
            openConfirm:false,
            openConfirm2:false,
            dialog:false,
            current:{},
            subCategories:[],
            filters: {},
            loading: false,
            isDialogVisible: false,
            closeOnContentClick: true,
            form:{},
            errorMssg:{},
            editing:false,
            editData:{}
        }
    },
    mounted() {
    },
    methods:{
        
        closeMe() {
            this.$bvModal.hide("manage");
        },

        fetchData(page=1) {
            
            this.$api
            .post(this.dynamic_route('/sub-category/category/' + this.data.id), {filters:this.filters})
            .then(res => {
                
                this.subCategories = res.data.data
                
            })
            .catch(err => {
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    // return this.logoutUser();
                }
                // eslint-disable-next-line no-console
            })
            .finally(() => {
                NProgress.done()

            })
        },
        save() {
            
            this.form.category_id=this.data.id
            this.$api
            .post(this.dynamic_route('/sub-category'), this.form)
            .then(res => {
                delete this.form.sub_category_name;
                delete this.form.status;
                delete this.form.slug;
                delete this.form.description;
                this.errorMssg={}
                this.$toasted.success('Saved successfully!', {
                    action: {
                    text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                    }
                })
               this.fetchData()
                
            })
            .catch(err => {
                if(err.response.data.errors) this.errorMssg= err.response.data.errors;
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    // return this.logoutUser();
                }
                var msg='Something went wrong...';
                if("string" == typeof err.response.data.message)  msg= err.response.data.message
                this.$toasted.error(msg, {
                    action: [
                        {
                            text: 'Cancel',
                            onClick: (e, toastObject) => {
                            toastObject.el.classList.remove('info');
                            toastObject.el.classList.add('success');
                            // toastObject.text('Alien planet destroyed!').goAway(2000);
                            }
                        }
                    ]
                });
                // eslint-disable-next-line no-console
            })
            .finally(() => {
                NProgress.done()

            })
        },
        update() {
            this.$api
            .patch(this.dynamic_route('/sub-category/' + this.form.id), this.form)
            .then(res => {
                
               this.$toasted.success('Edited successfully!', {
                    action: {
                    text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                    }
                })
                
            })
            .catch(err => {
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    // return this.logoutUser();
                }
                // eslint-disable-next-line no-console
            })
            .finally(() => {
                NProgress.done()

            })
        },
        deleteSubcat(id) {
          
          this.$api
          .delete(this.dynamic_route('/sub-category/'+id))
          .then(res => {
            this.$toasted.success('Deleted successfully!', {
                action: {
                text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            })
             this.fetchData()
              
          })
          .catch(err => {
              if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                  // return this.logoutUser();
              }
              this.$toasted.error('Unable to delete Subcategory!', {
                action: {
                text: 'Close',
                    onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            })
              // eslint-disable-next-line no-console
          })
          .finally(() => {
              NProgress.done()

          })
      },
    }
}
</script>
<style >
    .v-application--wrap {
        min-height: 2% !important;
    }
</style>