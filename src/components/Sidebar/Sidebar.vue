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
        <NavLink
            :activeItem="activeItem"
            header="Groups"
            link="/app/groups"
            iconName="flaticon-homew"
            index="manage-orders"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="My Group"
            link="/app/my-group"
            iconName="flaticon-homew"
            index="manage-orders"
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
