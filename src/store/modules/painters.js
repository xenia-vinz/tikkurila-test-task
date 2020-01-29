import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    data: null,
    request: null,
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
    SET_REQUEST(state, data) {
      Vue.set(state, 'request', data);
    },
  },
  actions: {
    loadData: (context) => {
      const path = '/api/painters.json';
      const currentSorting = context.rootGetters['sortings/getCurrent'];
      const selectedTags = context.rootGetters['tags/getSelected'];
      const filtersQuery = {};

      if (currentSorting) {
        filtersQuery.sort = currentSorting;
      }
      if (!Vue.$_.isEmpty(selectedTags)) {
        filtersQuery.tags = selectedTags.join(';');
      }

      const request = Vue.superagent
        .get(path)
        .query(filtersQuery)
        .accept('json');

      if (context.state.request) {
        context.state.request.abort();
      }

      request
        .then((response) => {
          const reponseBody = response.body || {};

          if (Object.prototype.hasOwnProperty.call(reponseBody, 'data')) {
            context.commit('SET_DATA', reponseBody.data);
          }
          context.commit('SET_REQUEST', null);
        })
        .catch((err) => {
          console.error(err);
          context.commit('SET_REQUEST', null);
        });

      context.commit('SET_REQUEST', request);
    },
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
};
