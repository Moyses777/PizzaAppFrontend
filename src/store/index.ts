import { createStore } from "vuex";

export default createStore({
  state: {
    user: { name: "" },
  },
  getters: {},
  mutations: {
    LoginSession: function (state, user: any) {
      state.user = { name: user.name };
    },
  },
  actions: {},
  modules: {},
});
