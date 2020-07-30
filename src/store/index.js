import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    updateData(state, responseStatus) {
        state.todos = responseStatus;
    }
  },
  getters: {
    todos: state => state.todos,
  }
});
