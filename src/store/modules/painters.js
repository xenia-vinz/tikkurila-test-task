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
    SET_REQUEST(state, data) {
      Vue.set(state, 'request', data);
    },
  },
  actions: {
    loadData: (context) => {
      const prefix = process.env.NODE_ENV === 'production' ? '/tikkurila-test-task/' : '/'; // 4githubpages
      const path = `${prefix}api/painters.json`;
      const currentSorting = context.rootGetters['sortings/getCurrent'];
      const selectedTags = context.rootGetters['tags/getSelected'];
      const filtersQuery = {};

      // form query string
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

      // abort existing painters list request if needed
      if (context.state.request) {
        context.state.request.abort();
      }

      // do the request
      request
        .then((response) => {
          const responseBody = response.body || {};
          const status = Object.prototype.hasOwnProperty.call(responseBody, 'status') ? responseBody.status === 'success' : true; // check server`s response status prop

          if (status && Object.prototype.hasOwnProperty.call(responseBody, 'data')) {
            // Temporal sorting/filterting on client - the server supposed to return filtered values
            let filtered = responseBody.data;
            if (selectedTags) {
              filtered = filtered.filter((painter) => {
                const itemTags = painter.tags.map(tag => tag.slug);
                const intersection = Vue.$_.intersection(itemTags, selectedTags);
                return selectedTags.length ? (intersection.length > 0) : true;
              });
            }
            if (currentSorting) {
              const order = currentSorting !== 'name' ? 'desc' : 'asc';
              filtered = Vue.$_.orderBy(
                filtered,
                (item) => {
                  const value = item[currentSorting];
                  return (+value || value === '0') ? parseInt(value, 10) : value;
                },
                [order],
              );
            }

            // replace "filtered" with "responseBody.data" after implementing server side filtering
            context.commit('SET_DATA', filtered);
          }

          // clear request variable once the actual request is done
          context.commit('SET_REQUEST', null);
        })
        .catch((err) => {
          console.error(err);
          context.commit('SET_REQUEST', null);
        });

      // memorize the request in order to be able to abort it
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
