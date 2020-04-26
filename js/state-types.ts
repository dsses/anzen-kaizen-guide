export type RootState = {
  version: string;
};

export type Todo = {
  key: number;
  todo: string;
};

export type TodoState = {
  todoList: Todo[];
};

export type HogeState = {
  name: string;
};
