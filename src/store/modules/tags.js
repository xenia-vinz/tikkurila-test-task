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
      // if tag with given slug exists - add/modify it`s selected state
      if (itemIndex !== -1) {
        Vue.set(state.data[itemIndex], 'selected', data.selected);
      }
    },
  },
  actions: {
    loadData: (context) => {
      const prefix = process.env.NODE_ENV === 'production' ? '/tikkurila-test-task/' : '/'; // 4githubpages
      const path = `${prefix}api/tags.json`;

      Vue.superagent
        .get(path)
        .accept('json')
        .then((response) => {
          const responseBody = response.body || {};
          const status = Object.prototype.hasOwnProperty.call(responseBody, 'status') ? responseBody.status === 'success' : true; // check server`s response status prop

          if (status && Object.prototype.hasOwnProperty.call(responseBody, 'data')) {
            context.commit('SET_DATA', responseBody.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    toggleSelected: (context, data) => {
      context.commit('SET_SELECTED', data);
      // ask for filtered data
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
      const result = selectedTags.map(tag => tag.slug); // we need an array of slugs only
      return result;
    },
  },
};
