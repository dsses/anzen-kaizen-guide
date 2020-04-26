import Vue from "vue";
import store from "./Store";
import TodoApp from "./TodoApp.vue";

new Vue({
  store,
  render: h => h(TodoApp)
}).$mount("#app");
