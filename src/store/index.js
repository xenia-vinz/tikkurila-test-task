import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    sortings: {
      namespaced: true,
      state: {
        data: null,
        current: null,
      },
      mutations: {
        SET_DATA(state, data) {
          Vue.set(state, 'data', data);

          if (!state.current) {
            const defaultSorting = (Vue.$_.findKey(data, {
              default: true,
            })) || null;
            Vue.set(state, 'current', defaultSorting);
          }
        },
        SET_CURRENT(state, data) {
          Vue.set(state, 'current', data);
        },
      },
      actions: {
        loadData: (state) => {
          const path = '/api/sortings.json';

          Vue.superagent
            .get(path)
            .accept('json')
            .then((response) => {
              const reponseBody = response.body || {};

              if (Object.prototype.hasOwnProperty.call(reponseBody, 'data')) {
                state.commit('SET_DATA', reponseBody.data);
              }
            })
            .catch((err) => {
              console.error(err);
            });
        },
        setCurrent: (state, data) => {
          state.commit('SET_CURRENT', data);
        },
      },
      getters: {
        getData(state) {
          return state.data;
        },
        getCurrent(state) {
          return state.current;
        },
      },
    },
  },
});
