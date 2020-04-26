<template>
  <div>
    <button id="addTodo" @click="addTodo">タスクを追加する</button>
    <todo-list
      :visible="visible"
      :todo-list="todoList"
      @updateTodo="updateTodo"
      @removeTodo="removeTodo"
    />
    <todo-empty :visible="!visible" />
    <div>
      <next-todo :next-todo-text="nextTodoText" />
      <todo-count :count="count" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('todo');

import TodoList from "./TodoList.vue";
import TodoEmpty from "./TodoEmpty.vue";
import NextTodo from "./NextTodo.vue";
import TodoCount from "./TodoCount.vue";

import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./mutation-types";

export default Vue.extend({
  components: {
    TodoList, TodoEmpty, NextTodo, TodoCount
  },
  computed: {
    ...mapState(['todoList']),
    ...mapGetters(['count']),
    nextTodoText(): string {
      return this.$store.state.todo.todoList.length > 0 ?
              this.$store.state.todo.todoList[0].todo :
              "(未登録)";
    },
    visible(): any {
        // "does not exist on type 'CombinedVueInstance" のエラー
        // 解決法 https://qiita.com/shunjikonishi/items/3774486d37af80d1ae47
        // @ts-ignore
        return this.count > 0;
    }
  },

  methods: {
    ...mapActions([ADD_TODO]),
    updateTodo(payload: { index: number, value: string }) {
      this.$store.dispatch(`todo/${UPDATE_TODO}`,
          {
              index: payload.index,
              value: payload.value
          });
    },
    removeTodo(index: number) {
        this.$store.dispatch(`todo/${REMOVE_TODO}`,
            {
                index
            });
    }
  }
});
</script>

<style scoped>
#addTodo {
  font-size: 1.2rem;
}
</style>
