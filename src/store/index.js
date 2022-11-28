import Vue from 'vue'
import Vuex from 'vuex'
import { apiService } from '../services/api-service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    energyUse: null
  },
  getters: {
    energyUse: state => state.energyUse
  },
  mutations: {
    setEnergyUse(state, { energyUse }) {
      const revisedEnergyUse = energyUse.records.map((energy) => energy.fields);
      state.energyUse = revisedEnergyUse
    }
  },
  actions: {
    async loadEnergyUse({ commit, state }) {
      const energyUse = await apiService.getEnergyUse()
      try {
        commit({ type: 'setEnergyUse', energyUse })
      } catch (err) {
        console.error(err)
      }

    }
  },
  modules: {
  }
})
