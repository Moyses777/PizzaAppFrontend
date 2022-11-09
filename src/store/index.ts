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
    CloseSession: function (state) {
      state.user = { name: "" };
    },
  },
  actions: {},
  modules: {},
});
