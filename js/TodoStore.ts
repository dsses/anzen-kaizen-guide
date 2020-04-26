/* eslint-disable no-unused-vars */
import { ActionTree, GetterTree, MutationTree, Module } from "vuex";
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./mutation-types";
import { TodoState, RootState } from "./state-types";

const getters: GetterTree<TodoState, RootState> = {
  count(state: TodoState): Number {
    return state.todoList.length;
  }
};

const actions: ActionTree<TodoState, RootState> = {
  [ADD_TODO]({ commit }) {
    commit(ADD_TODO);
  },
  [REMOVE_TODO]({ commit }, payload) {
    commit(REMOVE_TODO, payload);
  },
  [UPDATE_TODO]({ commit }, payload) {
    commit(UPDATE_TODO, payload);
  }
};

const mutations: MutationTree<TodoState> = {
  [ADD_TODO](state: TodoState) {
    state.todoList.push({
      key: new Date().getTime(),
      todo: ""
    });
  },
  [REMOVE_TODO](state: TodoState, payload) {
    state.todoList.splice(payload.index, 1);
  },
  [UPDATE_TODO](state: TodoState, payload) {
    /* eslint-disable no-param-reassign */
    state.todoList[payload.index].todo = payload.value;
  }
};

const state: TodoState = {
  todoList: []
};

export const todo: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
