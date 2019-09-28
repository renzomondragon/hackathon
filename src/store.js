import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    state:true
  },
  mutations: {
    state(state,stateaction){
      state.state=stateaction
    }
  },
  actions: {

  },
  mounted() {
    console.log(this.state)
  }
})
