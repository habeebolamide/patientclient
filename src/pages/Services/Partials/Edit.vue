<template>
    <div class="">
      <form @submit.prevent="UpdateService">
            <VueElementLoading
          :active="loading"
          spinner="line-scale"
          color="var(--primary)"
        />
       <div>
        <v-text-field
          label="Service Name"
          :rules="rules"
          hide-details="auto"
          v-model="form.service_name"
        ></v-text-field>
        <v-text-field
          label="Description "
          hide-details="auto"
          v-model="form.description"
          class="mt-3"
        ></v-text-field>
       </div>
        <div class="d-block text-right mt-4">
        <button
          type="button"
          class="mr-2 btn btn-link btn-sm"
          @click="closeMe()"
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-primary btn-sm">
          Update Service
        </button>
       </div>
        </form>
    </div>
    
</template>
<script>
import VueElementLoading from "vue-element-loading";
import axios from "axios";

export default {
    props: {
    my_modal: Object,
    currentservice:Object
  },
    data() {
      return{
        errors: null,
        loading: false,

    form:{
      service_name: this.currentservice.service_name,
      description: this.currentservice.description,
    },
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      }
   
  },

    components:{
        VueElementLoading
    },
    methods:{
      UpdateService() {
        this.loading = true;
            this.$api.post(this.dynamic_route("services", {
              service_id : this.currentservice.id
            }), this.form)

        axios
          .put(
            // route("censis.config.party.update_party", {
            //   party_id: this.currentparty.id,
            // }),
            // this.form
          )
          .then((res) => {
            this.loading = false;
            this.$emit("edit-service");
            this.closeMe();
            toastr.success("Service Updated Successfully");
          })
          .catch((err) => {
            this.loading = false;
          });
      },
    closeMe() {
         this.my_modal.hide("edit-service");
    },
    },
    mounted(){
    }
}
</script>