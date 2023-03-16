<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo text-center mt-3">
        <img src="../../assets/remove.png" alt="HypelBase logo" width="70%">

        <router-link to="/app/dashboard">
          <!-- <span class="primary-word">
          <img src="/img/cardLogo.png" style="height:25px;" alt=""></span>  -->
          <!-- <span class="secondary-word"> COInvest</span> -->
        </router-link>
      </header>

      <!-- <a class="generator-link navTitle" target="_blank" href="https://flatlogic.com/generator">Main modules</a> -->

      <!-- <h5 class="navTitle first">
        APP
      </h5> -->
      <ul class="nav">

        <!-- <NavLink
            v-for="(menu, index) in menus"
            :key="index"
            :activeItem="activeItem"
            :header="menu.header"
            :link="menu.link"
            :iconName="menu.iconName"
            :index="menu.index"
            isHeader
        /> -->
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/dashboard"
            iconName="flaticon-homew"
            index="dashboard"
            isHeader
        />
        
        <!-- <div class="bg-info" style="position:relative;width:100%;overflow:hidden"> -->
          <NavLink
              :activeItem="activeItem"
              header="User Profiles"
              link="/app/user-profile"
              iconName="flaticon-account-box"
              index="list"
              isHeader
          />
          <!-- <span class="badge badge-warning">90</span> -->

        <!-- </div> -->
         <NavLink
            :activeItem="activeItem"
            header="Upload Audios"
            iconName="flaticon-audio"
            link="/app/upload-audio"
            index="manage-orders"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Transcribe text"
            link="/app/transcribe-text"
            iconName="flaticon-admin-quick"
            index="transcribe-text"
            isHeader
        />
      
        <NavLink
            :activeItem="activeItem"
            header="Text Excerpt"
            link="/app/text-exercpt"
            iconName="flaticon-investment"
            index="settings"
            isHeader
        />
        <!-- <NavLink
            :activeItem="activeItem"
            header="POS"
            link="/app/pos"
            iconName="flaticon-audio"
            index="settings2"
            isHeader
        /> -->
        <!-- <NavLink
            :activeItem="activeItem"
            header="Text Sentiment"
            link="/app/sentiment"
            iconName="flaticon-investment"
            index="settings2"
            isHeader
        /> -->
        <NavLink
            :activeItem="activeItem"
            header="Paraphrase Text"
            link="/app/paraphrase"
            iconName="flaticon-investment"
            index="settings2"
            isHeader
        />
        <NavLink 
            v-if="user_type_hash == '$2y$10$7iVAOMjRy8J4Fbt7IGY20OBzgW7EBwSlGjCvd9x4ds0gSZjYfEqvC'"
            :activeItem="activeItem"
            header="Services"
            link="/app/services"
            iconName="flaticon-alert"
            index="settingss"
            isHeader
        />

        <NavLink 
            v-if="user_type_hash == '$2y$10$7iVAOMjRy8J4Fbt7IGY20OBzgW7EBwSlGjCvd9x4ds0gSZjYfEqvC'"
            :activeItem="activeItem"
            header="packages"
            link="/app/package"
            iconName="flaticon-alert"
            index="settingss"
            isHeader
        />
        <!-- <NavLink 
            :activeItem="activeItem"
            header="My Packages"
            link="/app/my-packages"
            iconName="flaticon-alert"
            index="settingss"
            isHeader
        /> -->
        <NavLink 
            :activeItem="activeItem"
            header="My Services"
            link="/app/my-services"
            iconName="flaticon-alert"
            index="settingss"
            isHeader
        />
        <NavLink 
            v-if="user_type_hash == '$2y$10$7iVAOMjRy8J4Fbt7IGY20OBzgW7EBwSlGjCvd9x4ds0gSZjYfEqvC'"
            :activeItem="activeItem"
            header="Manage Users"
            link="/app/manage-users"
            iconName="flaticon-users"
            index="manage-users"
            isHeader
        />
      </ul>
      
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';
import axios from "axios";
export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      authType:'',
      menus:{},
      user_type_hash : "",
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
     
    getUserType(){
         const auth_user = JSON.parse(localStorage.getItem('auth_user'))  || null;
        if(auth_user) {
          this.user_type_hash = auth_user.user_typehash;
          this.$api
            .get(this.dynamic_route('user'),
            {
            })
            .then(res => {
              this.authType = res.data.user_type;
            })
            .catch(err => {
              if(err.response.status == 401 && err.response.data.message == "Unauthenticated.") {
                return this.logoutUser();

              }
            })
            .finally(() => {
              this.loading = false
            });
          
        }
    },

    getSidebarCont(){
      this.$api.get(this.dynamic_route("menus/getmenus")).then((res) => {
                this.menus = res.data;
                // console.log(this.menus);
            });
    }
  },
  created() {
    this.setActiveByRoute();
    this.getUserType();
    // this.getSidebarCont()
  },
  mounted() {
    
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
<style scoped>
.sidebarStatic .logo{
  width: fit-content;
}.logo{
  text-align: left !important;
  padding: 1px 15px 15px 15px !important;
  margin: 0px;
}
</style>
