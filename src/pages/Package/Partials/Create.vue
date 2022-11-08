<template>
    <div class="">
        <form action="" @submit.prevent="createPackage()">
            <VueElementLoading
          :active="loading"
          spinner="line-scale"
          color="var(--primary)"
        />
         <div class="container">
            <div class="row">
            <div class="col-md-12 mb-3">
                <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Service Name</span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    v-model="form.package_name"
                    required
                />
                </div>
            </div>
            <div class="col-md-12 mb-3">
                <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Description</span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    v-model="form.package_price"
                    required
                />
                </div>
            </div>
            <div class="col-md-12 mb-3">
                <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Description</span>
                </div>
                    <select class="form-control" id="user_type" v-model="form.user_type">
                        <option  value="">Select Status</option>
                        <option  value="active">Active</option>
                        <option  value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            </div>
        </div>
        </form>
        <div class="d-block text-right card-footer">
        <button
          type="button"
          class="mr-2 btn btn-link btn-sm"
          @click="closeMe()"
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-primary btn-sm">
          Create Service
        </button>
      </div>
    </div>

</template>
<script>
import Widget from "@/components/Widget/Widget";
import VueElementLoading from "vue-element-loading";
import { mapState, mapActions } from "vuex";


export default {
    props: {
    my_modal: Object,
  },
    data: () => ({
    errors: null,
    loading: false,
    form:{}
  }),
    components:{
        VueElementLoading
    },
    methods:{
        createPackage(){
            this.loading = true 
            this.$api.post(this.dynamic_route('/package')).then((res) => {
               this.loading = false;
            //   toastr.success("Services Created Successfully");
            }).catch(err => { 
            //   this.loading = false;
            });
        },
    closeMe() {
         this.my_modal.hide("creates-packages");
    },
    },
    mounted(){
    }
}
</script>