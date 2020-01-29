import Vue from 'vue';
import Vuex from 'vuex';
import sortingsModule from './modules/sortings';
import tagsModule from './modules/tags';
import paintersModule from './modules/painters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sortings: sortingsModule,
    tags: tagsModule,
    painters: paintersModule,
  },
});
