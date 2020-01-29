import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    data: null,
    current: null,
  },
  mutations: {
    SET_DATA(state, data) {
      Vue.set(state, 'data', data);
    },
    SET_CURRENT(state, data) {
      Vue.set(state, 'current', data);
    },
  },
  actions: {
    loadData: (context) => {
      const path = '/api/sortings.json';

      Vue.superagent
        .get(path)
        .accept('json')
        .then((response) => {
          const reponseBody = response.body || {};

          if (Object.prototype.hasOwnProperty.call(reponseBody, 'data')) {
            context.commit('SET_DATA', reponseBody.data);
            if (!context.state.current) {
              const defaultSorting = (Vue.$_.findKey(reponseBody.data, {
                default: true,
              })) || null;
              context.commit('SET_CURRENT', defaultSorting);
              context.dispatch('painters/loadData', null, {
                root: true,
              });
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setCurrent: (context, data) => {
      if (context.state.current !== data) {
        context.commit('SET_CURRENT', data);
        context.dispatch('painters/loadData', null, {
          root: true,
        });
      }
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
};
