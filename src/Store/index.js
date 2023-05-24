import { configureStore } from '@reduxjs/toolkit';
import {
  todoReducer,
  addTodoList,
  addTodoItem,
  toggleTodoItem,
  editTodoItem,
} from './reducer/todoSlice';

import {
  formReducer,
  changeId,
} from './reducer/formSlice';

const store = configureStore({
  reducer: {
    TodoLists: todoReducer,
    form: formReducer,
  },
});

export {
  store,
  addTodoList,
  addTodoItem,
  changeId,
  toggleTodoItem,
  editTodoItem,
};
