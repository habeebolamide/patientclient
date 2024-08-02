import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Auth/Login';
import ForgotPassword from '@/pages/Auth/ForgotPassword';
import ResetPassword from '@/pages/Auth/ResetPassword';
import MyPackages from '@/pages/Package/UserIndex';
import MyServices from '@/pages/Services/Tryitout';
import Profile from '@/pages/Auth/Profile';
import Register from '@/pages/Auth/Register';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import Groups from '@/pages/Groups/Index';
import MyGroups from '@/pages/Groups/MyGroup';
import Message from '@/pages/Groups/partial/Messages';


// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';







Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword,
    },
    {
      path: '/reset',
      name: 'ResetPassword',
      component: ResetPassword,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/',
      name: 'Main',
      redirect: '/app/dashboard',
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'groups',
          name: 'Groups',
          component: Groups,
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'my-group',
          name: 'my-group',
          component: MyGroups,
          meta: {
            requireAuth: true
          },
        },
        {
          path: ":groupid/message",
          component: Message,
          meta: {
            requiresAuth: true, 
          },
        },
        {
          path: 'profile',
          name: 'ProfilePage',
          component: Profile,
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'user-profile',
          name: 'UserProfile',
          
          component: () => import('@/pages/Auth/Profile'),
          meta: {
            requireAuth: true
          },
        },
        // { path: "/:pathMatch(.*)*", component: AnalyticsPage }
      ],
    },
  ],
});

function isAuthenticated() {
  // Check if the user is authenticated
  // Modify this logic based on your authentication implementation
  const token = localStorage.getItem('authToken');
  return !!token;
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next('/auth/login');
  } else {
    // Otherwise, proceed with the navigation
    next();
  }
})