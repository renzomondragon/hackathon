import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estado:true
  },
  mutations: {
    state(state,stateaction){
      state.estado=stateaction
    }
  },
  actions: {

  },
  mounted() {
    console.log(this.state)
  }
})
