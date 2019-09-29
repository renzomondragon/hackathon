import Vue from 'vue'
import Router from 'vue-router'
/* import Home from './views/Home.vue' */
import RegistrarDenuncia from './components/RegistrarDenuncia'
import Maps from './components/Maps'
import Profile from './components/Profile'
import MisDenuncias from './components/MisDenuncias'
/* import Login from './components/Login' */
import DashboardDenuncias from './components/DashboardDenuncias'
import EditarDenuncias from './components/EditarDenuncias'




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
    {
      path: '/mis_denuncias',
      name: 'mis_denuncias',
      component: MisDenuncias, 
    },
    /* {
      path: '/zonas-rojas',
      name: 'zonas-rojas',
      component: MisDenuncias, 
    }, */
    {
      path: '/dashboard-denuncias',
      name: 'dashboard-denuncias',
      component: DashboardDenuncias, 
    },
    {
      path: '/editar-denuncias',
      name: 'editar-denuncias',
      component: EditarDenuncias, 
    },
  ]
})
console.log('router 1 - fin')

export default router;
