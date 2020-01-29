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
      const prefix = process.env.NODE_ENV === 'production' ? '/tikkurila-test-task' : '';
      const path = `${prefix}/api/painters.json`;
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
            // Temporal sorting on client - the server supposed to return filtered values
            let filtered = reponseBody.data;
            if (selectedTags) {
              filtered = filtered.filter((painter) => {
                const itemTags = painter.tags.map(tag => tag.slug);
                const intersection = Vue.$_.intersection(itemTags, selectedTags);
                return selectedTags.length ? (intersection.length > 0) : true;
              });
            }
            if (currentSorting) {
              const order = currentSorting !== 'name' ? 'desc' : 'acs';
              filtered = Vue.$_.orderBy(
                filtered,
                (item) => {
                  const value = item[currentSorting];
                  return (+value || value === '0') ? parseInt(value, 10) : value;
                },
                [order],
              );
            }
            context.commit('SET_DATA', filtered);
          }
          context.commit('SET_REQUEST', null);
        })
        .catch((err) => {
          console.error(err);
          context.commit('SET_REQUEST', null);
        });

      context.commit('SET_REQUEST', request);
    },
    setData: (context, data) => {
      context.commit('SET_DATA', data);
    },
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
};
