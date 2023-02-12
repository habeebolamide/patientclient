<template>
    <transition name="fade" mode="out-in">
      <div>
        <div class="pt-4">
          <tabs
            :tabs="tabs"
            :currentTab="currentTab"
            :wrapper-class="'body-tabs shadow-tabs'"
            :tab-class="'tab-item'"
            :tab-active-class="'tab-item-active'"
            :line-class="'tab-item-line'"
            @onClick="handleClick"
          />
        </div>
  
        <div class="col-md-12" v-if="currentTab === 'tab1'">
          <b-card no-body>
            <template v-slot:title
              >Upload 
              <b-badge href="#" variant="info" id="rolePerm" pill>
                <i class="fa fa-question" aria-hidden="true"></i>
              </b-badge>
              </template>
            <div class="row">
              <div class="col-md-12"><Upload/></div>
            </div>
          </b-card>
        </div>
        <v-spacer></v-spacer>
        <div class="col-md-12" v-if="currentTab === 'tab2'">
          <b-card class="mb-3" no-body>
            <template v-slot:title
              >Manage
              <b-badge href="#" variant="info" id="manageRolePerm" pill
                ><i class="fa fa-question" aria-hidden="true"></i></b-badge
            ></template>
            <div class="row">
              <div class="col-md-12"><Manage /></div>
            </div>
          </b-card>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
//   import VuePerfectScrollbar from "vue-perfect-scrollbar";
  import VueElementLoading from "vue-element-loading";
//   import Spinner from "vue-spinkit";
  import Tabs from "vue-tabs-with-active-line";
  import Upload from "./partials/Index.vue";
  import Manage from "./partials/Manage.vue";
  const TABS = [
    {
      title: '<span class = "mr-5"><i class="badge badge-pill badge-primary">1</i> Upload.</span> ',
      value: "tab1",
      disabled: false,
    },
    {
      title: ' <i class="badge badge-pill badge-primary">2</i> Manage Audios',
      value: "tab2",
      disabled: false,
    },
  ];
  
  export default {
    props: {},
    components: {
      VueElementLoading,
      Tabs,
      Upload,
      Manage,
    },
    data () {
        return {
            heading: "Configuration",
            subheading: "Configuration.",
            icon: "pe-7s-lock icon-gradient bg-tempting-azure",
            tabs: TABS,
            currentTab: "tab1",
        }
    },
  
    methods: {
      handleClick(newTab) {
        var tab = newTab.replace("tab", "");
        if (tab == "1") {
          this.currentTab = newTab;
        }
        if (tab == "2") {
          this.currentTab = newTab;
        }
      },
    },
  };
  </script>
  
  