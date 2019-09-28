import Vue from 'vue'
import Router from 'vue-router'
/* import Home from './views/Home.vue' */
import RegistrarDenuncia from './components/RegistrarDenuncia'
import Maps from './components/Maps'
import Profile from './components/Profile'




Vue.use(Router)

const router = new Router({
  routes:[
    {
      path: '/registrar-denuncia',
      name: 'denuncia',
      component: RegistrarDenuncia, 
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps, 
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile, 
    },
  ]
})
console.log('router 1 - fin')

export default router;
