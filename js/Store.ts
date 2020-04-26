import Vue from "vue";
/* eslint-disable no-unused-vars */
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./state-types";
import { todo } from "./TodoStore";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    todo
  }
};

export default new Vuex.Store<RootState>(store);
