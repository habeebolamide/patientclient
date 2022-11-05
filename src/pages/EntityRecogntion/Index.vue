<template>
    <v-app class="p-4">
        <div class="pb-3" style="border-bottom: 2px solid lightgrey">
            <h2 class="page-title mb-0" >Extract Entity</h2>
        </div>
        <div style="margin-top:80px">
            <v-textarea outlined name="input-7-4" label="Field" value="">
            </v-textarea>
        
        </div>
        <div class="col-5">
            <button class=" btn btn-primary btn-lg" type="button">Go</button>

        </div>
        
        
    </v-app>
</template>
<script>
import Widget from '@/components/Widget/Widget';

import subCat from "./partials/Subcategories.vue"
import edit from "./partials/Edit.vue"
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'
import laravelVuePagination from 'laravel-vue-pagination'
import { mapState,mapActions } from 'vuex';

export default {
    components:{Widget,edit,subCat,VueElementLoading,laravelVuePagination},
    data(){
        return {
            status_id:0,
            del_id:0,
            dynamic_status:'',
            openConfirm:false,
            openConfirm2:false,
            dialog:false,
            current:{},
            categories:[],
            filters: {},
            loading: false,
            isDialogVisible: false,
            closeOnContentClick: true,
            form:{}

        }
    },
    computed:{
    },
    mounted() {
        
    },
    methods: {
        pass_current(data) {
         this.current = data
        },
        fetchData(page=1) {
            
            this.$api
            .post(this.dynamic_route('/category/all'), {filters:this.filters})
            .then(res => {
                
                this.categories = res.data.data
                
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
        toggle_status(id, status) {
            this.loading = true
            axios
            .put(this.dynamic_route(`/properties/toggle-status/${id}`), { id, status }, {
                headers:{
                    authorization: `Bearer ${this.authToken}`

                }
            })
            .then(() => {
            this.fetchData()
            this.$toast.success('Status updated successfully!', {
                position: 'top-center',
                timeout: 5000,
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
            .catch((err) => {
            this.loading = false;
            if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    return this.logoutUser();
                }
            this.$toast.error('An error occurred please try again!', {
                position: 'top-center',
                timeout: 5000,
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
        deleteCategory(id) {
          
            this.$api
            .delete(this.dynamic_route('/category/'+id))
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
                // eslint-disable-next-line no-console
            })
            .finally(() => {
                NProgress.done()

            })
        },
        linkPage() {
            this.$router.push({name: 'CreateProduct'})
        },
        save() {
            

            this.$api
            .post(this.dynamic_route('/category'), this.form)
            .then(res => {
                delete this.form.category_name;
                delete this.form.status;
                delete this.form.slug;
                delete this.form.description;
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
                if(err.response.status == 401 && err.response.statusText == "Unauthorized") {
                    // return this.logoutUser();
                }
                this.$toasted.error('Something went wrong...', {
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
        }
    },
   
}
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
</style>