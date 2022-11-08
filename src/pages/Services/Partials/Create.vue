<template>
    <div class="">
        <form @submit.prevent="createService">
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
          Create Service
        </button>
       </div>
        </form>
     
    </div>
    
</template>
<script>
import VueElementLoading from "vue-element-loading";
export default {
    props: {
    my_modal: Object,
  },
    data: () => ({
    errors: null,
    loading: false,
    form:{},
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
  }),

    components:{
        VueElementLoading
    },
    methods:{
        createService(){
          this.loading = "true"
             this.$api.post(this.dynamic_route("services"), this.form)
              .then(() => {
          this.loading = false;
          this.$emit("creates-service");
          this.closeMe();
          this.$toast.success("Service Created Successfully!", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false
            });
            
        })
        .catch(() => {
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