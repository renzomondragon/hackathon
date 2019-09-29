import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2RyaWdvYmVycmlvczE5OThAZ21haWwuY29tIiwiZXhwIjoxNTY5NzM0MDYyfQ.CgxcTG-fK15-RUQ0p65kkqCVG9qEDhoWoUSGxHpBybuKEi7oNc2uHy66y2XW2DNqls1PxQCi9vJOyc-xWP9CJA',
    localStorageLength: 0,
    otherLenght: localStorage.getItem('objects'),
    user:{},
    estado: false,
    otroestado: false,
    otrootro: false,
    comisarias:[],
    misdenuncias:[],
    AllDenuncias: []
  },
  mutations: {
    estado(state,stateaction){
      state.estado=stateaction
    },
    otrootro(state,otroaction){
      state.otrootro = otroaction
    },
    Token(state, tokenAction){
      state.accessToken = tokenAction
    },
    localStorageLength(state, localSAction){
      state.localStorageLength += localSAction
    },
    User(state, userAction){
      state.user = userAction
    },
    otherLenght(state, otherAction){
      state.otherLenght = otherAction
    },
    otroestado(state, otroAction){
      state.otroestado = otroAction
    },
    comisarias(state, comiAction){
      state.comisarias = comiAction
    },
    misdenuncias(state, misdenunciasActions){
      state.misdenuncias = misdenunciasActions
    },
    AllDenuncias(state, alldenunciasAction){
      state.AllDenuncias = alldenunciasAction
    }

  },
  actions: {  
    verLogin(){
      this.commit('localStorageLength', 2)
      localStorage.setItem('objects', this.state.localStorageLength)
    },
    Logout({state, commit}){
      //Remover los items del localStorage
     localStorage.removeItem('token')
     localStorage.removeItem('objects')
     localStorage.removeItem('estado')
     localStorage.removeItem('usuario')
     commit('estado', true)
     commit('Token', null)
     commit('localStorageLength', -3)
     state.localStorageLength = 0
     window.location.href = '/'
   },
    cambiaIndex({commit}){
      commit('estado', false)
      commit('otroestado', true)
      commit('otrootro', false)
    },
    cambialog({commit}){
      /* this.getUsuario()
      this.getComisarias() */
      localStorage.setItem('token',this.state.token)
      commit('estado', false)
      commit('otroestado', false)
      commit('otrootro', true)
      router.push({path: '/maps', name: 'maps'})
    },
    log({commit}){
      commit('estado', false)
      commit('otroestado', false)
      commit('otrootro', false)
    },

    async getUsuario({state, commit}){
      console.log(localStorage.getItem('token'))
      let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      if(state.token==null){
        commit('Token', localStorage.getItem('token'))
      }
      console.log(config)
      await axios.get('https://hackaton2019utp.azurewebsites.net/usuario ', config)
      .then(response =>{
        console.log(response.data)
        commit('User', response.data)
        localStorage.setItem('usuario', JSON.stringify(response.data))


      }).catch(error =>{
        /* console.log('error obteniendo usuario', error)
        localStorage.removeItem('token')
        localStorage.removeItem('objects')
        localStorage.removeItem('estado')
        localStorage.removeItem('usuario')
        commit('estado', true)
        location.reload() */
      }); 
    },

    async getComisarias({state, commit}){
      let config = {
        headers: {
          'Authorization': 'Bearer ' + state.token
        }
      }
      await axios.get('https://hackaton2019utp.azurewebsites.net/comisaria ', config)
      .then(response =>{
        commit('comisarias', response.data)
        localStorage.setItem('comisarias', JSON.stringify(response.data))
      }).catch(error =>{
        console.log('error', error)
        /* localStorage.removeItem('token')
        localStorage.removeItem('objects')
        localStorage.removeItem('estado')
        localStorage.removeItem('usuario')
        location.reload() */
      }); 
    },

    async misDenuncias({state,commit}){
      let config = {
        headers: {
          'Authorization': 'Bearer ' + state.token
        }
      }
      await axios.get('https://hackaton2019utp.azurewebsites.net/usuario/denuncias/comisaria ', config)
      .then(response =>{
        commit('misdenuncias', response.data)
        localStorage.setItem('misdenuncias', JSON.stringify(response.data))
      }).catch(error =>{
        console.log('error', error)
        /* localStorage.removeItem('token')
        localStorage.removeItem('objects')
        localStorage.removeItem('estado')
        localStorage.removeItem('usuario')
        location.reload() */
      }); 
    },
    async procesoDenuncias({state, commit}){
      let config = {
        headers: {
          'Authorization': 'Bearer ' + state.token
        }
      }
      await axios.get('https://hackaton2019utp.azurewebsites.net/usuario/denuncias ', config)
      .then(response =>{
        console.log(response.data)
        commit('AllDenuncias', response.data)
        localStorage.setItem('AllDenuncias', JSON.stringify(response.data))
      }).catch(error =>{
        console.log('error', error)
        /* localStorage.removeItem('token')
        localStorage.removeItem('objects')
        localStorage.removeItem('estado')
        localStorage.removeItem('usuario')
        location.reload() */
      }); 
    }

 

  },

})
