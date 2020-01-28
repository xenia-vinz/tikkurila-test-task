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
    },
    tags: {
      namespaced: true,
      state: {
        data: null,
      },
      mutations: {
        SET_DATA(state, data) {
          Vue.set(state, 'data', data);
        },
        SET_SELECTED(state, data) {
          const itemIndex = Vue.$_.findIndex(state.data, {
            slug: data.slug,
          });
          if (itemIndex !== -1) {
            Vue.set(state.data[itemIndex], 'selected', data.selected);
          }
        },
      },
      actions: {
        loadData: (context) => {
          const path = '/api/tags.json';

          Vue.superagent
            .get(path)
            .accept('json')
            .then((response) => {
              const reponseBody = response.body || {};

              if (Object.prototype.hasOwnProperty.call(reponseBody, 'data')) {
                context.commit('SET_DATA', reponseBody.data);
              }
            })
            .catch((err) => {
              console.error(err);
            });
        },
        toggleSelected: (context, data) => {
          context.commit('SET_SELECTED', data);
        },
      },
      getters: {
        getData(state) {
          return state.data;
        },
        getSelected(state) {
          const selectedTags = state.data ? state.data.filter(tag => tag.selected) : [];
          const result = selectedTags.map(tag => tag.slug);
          return result;
        },
      },
    },
  },
});
