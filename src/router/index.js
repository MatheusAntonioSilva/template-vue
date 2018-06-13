import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Registrer from '@/components/registrer/Registrer'
import Footer from '@/components/dash/Footer'
import List from '@/components/admin/List'
import Edit from '@/components/admin/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
      children: [
        {
          path: '/',
          component: Footer,
          name: 'Footer'
        }
      ]
    },
    {
      path: '/registrer',
      name: 'Registrer',
      component: Registrer,
      children: [
        {
          path: '/registrer',
          component: Footer,
          name: 'Footer'
        }
      ]
    },
    {
      path: '/list',
      component: List,
      name: 'List',
      children: [
        {
          path: '/list',
          component: Footer,
          name: 'Footer'
        }
      ]
    },
    {
      path: '/edit/:companyId',
      component: Edit,
      name: 'Edit',
      children: [
        {
          path: '/edit',
          component: Footer,
          name: 'Footer'
        }
      ]
    }
  ]
})
