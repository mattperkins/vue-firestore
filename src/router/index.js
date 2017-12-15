import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'

import Dashboard from '@/components/Dashboard'
import EditUser from '@/components/EditUser'
import NewUser from '@/components/NewUser'
import ViewUser from '@/components/ViewUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/edit/:user_id',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/newuser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/:user_id',
      name: 'ViewUser',
      component: ViewUser
    },
  ]
})
