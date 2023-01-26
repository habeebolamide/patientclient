import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Auth/Login';
import ForgotPassword from '@/pages/Auth/ForgotPassword';
import ResetPassword from '@/pages/Auth/ResetPassword';
import MyPackages from '@/pages/Package/UserIndex';
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
          path: 'package',
          name: 'package',
          component: () => import('@/pages/Package/Index'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'my-packages',
          name: 'my-packages',
          component: MyPackages,
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'notification',
          name: 'notification',
          component: () => import('@/pages/Notifications/Notifications'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('@/pages/Services/Index'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'package',
          name: 'package',
          component: () => import('@/pages/Package/Index'),
          meta: {
            requireAuth: true
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
        {
          path: 'upload-audio',
          name: 'Upload Audio',
          component: () => import('@/pages/UploadAudio/Index'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'manage-coupons/list',
          name: 'Coupon',
          component: () => import('@/pages/Coupon/Index'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'transcribe-text',
          name: 'TranscribeText',
          component: () => import('@/pages/TranscribeText/Index'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'text-exercpt',
          name: 'TextExercpt',
          component: () => import('@/pages/TextExercpt/Index'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'entity-recogntion',
          name: 'Entity-Recogntion',
          component: () => import('@/pages/EntityRecogntion/Index'),
          meta: {
            requireAuth: true
          },
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('@/pages/Settings/Index'),
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
        // { path: "/:pathMatch(.*)*", component: AnalyticsPage }
      ],
    },
  ],
});
