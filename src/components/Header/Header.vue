<template>
  <b-navbar class="header d-print-none app-header">
    <b-nav>
      <b-nav-item>
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod" id="barsTooltip">
          <i class='fi flaticon-menu' />
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class='fi flaticon-menu' />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav>
      
     
    </b-nav> 
    
    
    <!-- <a class="navbarBrand d-md-none">
      <i class="fa fa-circle text-danger" />
      &nbsp;
      sing
      &nbsp;
      <i class="fa fa-circle text-primary" />
    </a> -->
    <b-nav class="ml-auto">
      <strong style="padding: 20px;" class="text-info">
       Currently Logged In As<span  class="px-2 py-3 ">{{ this.user }}</span>
      </strong>

      <b-nav-item-dropdown
        class="d-none notificationsMenu"
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
        right>
        <template slot="button-content">
            <span class="notify" v-if="notificationsData.length"></span>

          <span class="avatar rounded-circle thumb-sm float-left mr-2">
            <img class="rounded-circle" src="../../assets/people/a7.png" alt="..." />
          </span>
          <!-- <span class="ml-1 mr-2 circle text-white fw-bold avatar-badge">9</span> -->
          <i class='fi flaticon-arrow-down px-2' />
        </template>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
        <template slot="button-content">
          <i class='fi flaticon-settings-10 px-2' />
        </template>
        <b-dropdown-item @click="navigate"><i class='fi flaticon-person px-3 mr-2' />My Account</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item><i class='fi flaticon-person px-3 mr-2' />Password</b-dropdown-item>
        <!-- <b-dropdown-item><i class='fi flaticon-email px-3 mr-3' />
          Inbox &nbsp;&nbsp;<b-badge variant="inverse" pill class="animate__animated animate__bounceIn" style="padding: 6px 9px;">9</b-badge>
        </b-dropdown-item> -->
        <b-dropdown-divider />
        <b-dropdown-item @click="trans"><i class='fi flaticon-person px-3 mr-2' />Transaction History</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logout">
          <i class="fi flaticon-power-1 px-3 mr-3" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>

    </b-nav>
  </b-navbar>
  
  
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Notifications from '@/components/Notifications/Notifications';
import axios from "axios"

export default {
  name: 'Header',
  components: { Notifications },
  computed: {
    ...mapState('layout', ['sidebarClose', 'sidebarStatic']),
    ...mapState('auth', ['auth_data'])
    
  },
  data(){
    return {
       notificationsData:[],
       loggedInAs : false,
       loading : false,
       openConfirm:true,
       user : ""
    }
  },
 
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'switchSidebar', 'changeSidebarActive']),
    
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    navigate() {
      this.$router.push({name: 'ProfilePage'});
    },
    trans() {
      this.$router.push({name: 'transaction'});
    },
    returnToMyAccount(){
        const auth_user = JSON.parse(localStorage.getItem('auth_info'))
        auth_user.shift();
        localStorage.setItem('auth_info',JSON.stringify(auth_user));
        this.$bvModal.hide('returnBack')
        this.$toast.success('Operation successful!', {
          position: 'top-center',
          timeout: 3000,
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
        });
        this.$router.push('/home');
    }
  },
  mounted(){
    const data = JSON.parse(localStorage.getItem('auth_user')) && JSON.parse(localStorage.getItem('auth_user')).auth_user.name || null;
    this.user = data
  }
};
</script>

<style src="./Header.scss" lang="scss"></style>
<style scoped>
  .notify {
    background: orange;
    width: 13px;
    height: 13px;
    position: absolute;
    z-index: 20;
    top: 15%;
    left: 22%;
    border-radius: 50%;
  }
  @media (max-width: 767.98px){
    .d-sm-down-none {
      display: inline-flex !important;
    }

    .notificationsMenu{
        right: 80% !important;
    }
  }
 
</style>