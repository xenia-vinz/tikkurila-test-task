import Vue from 'vue';

export default {
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
      const prefix = process.env.NODE_ENV === 'production' ? '/tikkurila-test-task/' : '/';
      const path = `${prefix}api/tags.json`;

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
      context.dispatch('painters/loadData', null, {
        root: true,
      });
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
};
