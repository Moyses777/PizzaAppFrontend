import { createStore } from "vuex";

export default createStore({
  state: {
    user: { name: "" },
    itempage: { name: "", description: "", price: "", rating: "" },
  },
  getters: {},
  mutations: {
    LoginSession: function (state, user: any) {
      state.user = { name: user.name };
    },
    CloseSession: function (state) {
      state.user = { name: "" };
    },
    changeItemPage: function (state, item: any) {
      state.itempage = item;
    },
  },
  actions: {},
  modules: {},
});
