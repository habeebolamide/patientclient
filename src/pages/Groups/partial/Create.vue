<template>
    <div>
        <div class="main-card card">
    <VueElementLoading
      :active="loading"
      :text="loading_text"
      spinner="line-scale"
      color="var(--primary)"
    />
    <form @submit.prevent="createGroup">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Group Name:</span>
              </div>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
              />
            </div>
            <!-- <small class="text-danger">{{ errors.grade_name }}</small> -->
          </div>
          <div class="col-md-12 mb-3">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Group Disease</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" v-model="form.diseaseId">
                    <option selected>Choose...</option>
                    <option v-for="d in disease" :value="d._id">{{ d.name }}</option>
                </select>
            </div>
            <!-- <small class="text-danger">{{ errors.grade_name }}</small> -->
          </div>
        </div>
      </div>
      <div class="d-block text-right card-footer">
        <button type="button" class="mr-2 btn btn-danger btn-sm" @click="closeMe()">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary btn-sm">
          Create Group
        </button>
      </div>
    </form>
  </div>
    </div>
</template>
<script>
import VueElementLoading from "vue-element-loading";
export default {
    props: {
        my_modal : Object
    },
    components:{
        VueElementLoading
    },
    data(){
        return {
            form:{},
            errors:{},
            disease:{},
            loading:false,
            loading_text:'',
            auth_token:{}
        }
    },
    methods:{
        getDisease(){
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.auth_token.replace(/"/g, '')}`,
                },
            };

            this.$http.get(this.dynamic_route('/disease/all'), config).then((res) => {
                this.disease = res.data.diseases;
            });
        },
        closeMe() {
            this.my_modal.hide("create-group");
        },
        createGroup(){
            this.loading = true
            this.loading_text = 'Creating Group'
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.auth_token.replace(/"/g, '')}`,
                },
            };
            this.$http.post(this.dynamic_route('/group/createGroup'),this.form, config)
            .then((res) => {
                this.$toast.success(res.data.message, {
                    timeout: 3000
                });
                this.loading = false
                this.loading_text = ''
                this.closeMe()
                this.$emit("get-group");
            })
            .catch((err) => {
                console.log(err.response.data);
            })
        }
    },
    mounted(){
        this.auth_token = localStorage.getItem('auth_token')
        this.getDisease()
    }
}
</script>