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
      const prefix = process.env.NODE_ENV === 'production' ? '/tikkurila-test-task/' : '/'; // 4githubpages
      const path = `${prefix}api/sortings.json`;

      Vue.superagent
        .get(path)
        .accept('json')
        .then((response) => {
          const responseBody = response.body || {};
          const status = Object.prototype.hasOwnProperty.call(responseBody, 'status') ? responseBody.status === 'success' : true; // check server`s response status prop

          if (status && Object.prototype.hasOwnProperty.call(responseBody, 'data')) {
            context.commit('SET_DATA', responseBody.data);

            // initial state - picking up default sorting
            if (!context.state.current) {
              const defaultSorting = (Vue.$_.findKey(responseBody.data, {
                default: true,
              })) || null;
              context.commit('SET_CURRENT', defaultSorting);
              // ask for sorted data
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
        // ask for sorted data only if sorting method has actually changed
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
