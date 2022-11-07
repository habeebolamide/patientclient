<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div
            class="
              font-size-lg
              text-capitalize
              font-weight-normal
            "
          >
            <i class="header-icon fa fa-header mr-3 text-muted opacity-6"></i>
            Services Manager
          </div>
        <div class="float-right text-capitalize actions-icon-btn">
          <b-dropdown
            toggle-class="btn-icon btn-icon-only"
            variant="link"
            right
          >
            <span slot="button-content">
                <i class="fa fa-th"></i>
            </span>
            <div>
              <button
                type="button"
                tabindex="0"
                class="dropdown-item"
                @click="$bvModal.show('creates-service')"
              >
                <i class="pe-7s-note icon-gradient bg-grow-early mr-2"></i>
                <span>Create Service</span>
              </button>
            </div>
          </b-dropdown>
        </div>
      </div>
      <div class="card-body"></div>
    </div>
    <b-modal
      id="creates-service"
      size="lg"
      hide-footer
      title="Create Service"
    >
    <CreateService
          :my_modal="this.$bvModal"
        />
    </b-modal>
  </div>
</template>
<script>
import Widget from "@/components/Widget/Widget";
import CreateService from "./Partials/Create.vue";
import axios from "axios";
import VueElementLoading from "vue-element-loading";

import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "File", value: "file" },
        { text: "Duration", value: "duration" },
        { text: "Timestamp", value: "timestamp" },
      ],
      data: [],
    };
  },
  components:{
    CreateService
  },
  computed: {},
  mounted() {},
  methods: {},
};
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