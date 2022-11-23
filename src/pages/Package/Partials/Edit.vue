<template>
    <div class="">
      <form action="" @submit.prevent="UpdatePackage()">
        <VueElementLoading
            :active="loading"
            spinner="line-scale"
            color="var(--primary)"
        />

    <div class="row">
        <div class="col-md-12 mb-3">
            <v-text-field
            label="Package Name"
            :rules="rules"
            hide-details="auto"
            v-model="form.package_name"
            ></v-text-field>
        </div>
        <div class="col-md-12 mb-3">
        <v-text-field
        label="Package Price"
        :rules="rules"
        hide-details="auto"
        v-model="form.package_price"
        ></v-text-field>
        </div>
      
    </div>
    <div class="d-block text-right card-footer">
        <button type="button" class="mr-2 btn btn-link btn-sm" @click="closeMe()">
            Cancel
        </button>
        <button type="submit" class="btn btn-primary btn-sm">
            Update Package
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
    package:Object
  },
  data() {
      return {
      errors: null,
      loading: false,
      form:this.package
    }
  },
    components:{
        VueElementLoading
    },
    methods:{
        UpdatePackage(){
            this.loading = true 
            this.$api.put(this.dynamic_route("pacakges/"+this.form.id),this.form).then((res) => {
            this.loading = false;
            this.$emit("edit-package");
            this.closeMe();
            this.$toast.success("Package updated successfully!", {
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
              rtl: false,
            });
            
          })
          .catch((err) => {
            this.loading = false;
          });
        },
    closeMe() {
         this.my_modal.hide("edit-package");
    },
    },
    mounted(){
    }
}
</script>