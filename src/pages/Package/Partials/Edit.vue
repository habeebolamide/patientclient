<template>
    <div class="">
        <form action="" @submit.prevent="UpdateService()">
            <VueElementLoading
          :active="loading"
          spinner="line-scale"
          color="var(--primary)"
        />
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Service Name</span>
              </div>
              <input
                type="text"
                class="form-control"
                v-model="form.service_name"
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
                v-model="form.description"
                required
              />
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
import VueElementLoading from "vue-element-loading";
import axios from "axios";
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
        UpdateService(){
            this.loading = true 
            axios .post('/services/', this.form)
        .then((res) => {
          this.loading = false;
          toastr.success("Services Created Successfully");
        //   this.$emit("election-created");
          this.closeMe();
        })
        .catch((err) => {
          this.loading = false;
        });
        },
    closeMe() {
         this.my_modal.hide("creates-service");
    },
    },
    mounted(){
    }
}
</script>