import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    TodoLists: [],
  },
  reducers: {
    addTodoList(state, action) {
      const newTodoList = {
        id: action.payload.id,
        todos: [],
      };

      state.TodoLists.push(newTodoList);
    },
    addTodoItem(state, action) {
      const { Id, title, description } = action.payload;
      const todoListIdx = state.TodoLists.findIndex((todo) => todo.id === Id);
      if (todoListIdx !== -1) {
        const newTodoItem = {
          id: title,
          title,
          description,
          isDone: false,
        };
        state.TodoLists[todoListIdx].todos.push(newTodoItem);
      }
    },
    toggleTodoItem(state, action) {
      const { Id, listId } = action.payload;
      const todoListIndex = state.TodoLists.findIndex(
        (todoList) => todoList.id === Id,
      );
      if (todoListIndex !== -1) {
        const todoItemIndex = state.TodoLists[todoListIndex].todos.findIndex(
          (item) => item.id === listId,
        );
        if (todoItemIndex !== -1) {
          state.TodoLists[todoListIndex].todos[todoItemIndex].isDone = !state
            .TodoLists[todoListIndex].todos[todoItemIndex].isDone;
        }
      }
    },
    editTodoItem(state, action) {
      const {
        Id, title, description, id, isDone,
      } = action.payload;
      const newTodoItem = {
        id: title,
        title,
        description,
        isDone,
      };
      const todoListIndex = state.TodoLists.findIndex(
        (todoList) => todoList.id === Id,
      );
      if (todoListIndex !== -1) {
        const todoItemIndex = state.TodoLists[todoListIndex].todos.findIndex(
          (item) => item.id === id,
        );
        if (todoItemIndex !== -1) {
          state.TodoLists[todoListIndex].todos[todoItemIndex] = newTodoItem;
        }
      }
    },
  },
});

export const {
  addTodoList, addTodoItem, toggleTodoItem, editTodoItem,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
