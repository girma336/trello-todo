import { createSlice } from '@reduxjs/toolkit';
import { addTodoList } from './todoSlice';
/* eslint-enable no-param-reassign */

const formSlice = createSlice({
  name: 'form',
  initialState: {
    id: '',
    todos: [],
  },

  reducers: {
    changeId(state, action) {
      state.id = action.payload;
    },

    changeTilte(state, action) {
      state.tilte = action.payload;
    },

  },
  extraReducers(builder) {
    builder.addCase(addTodoList, (state) => {
      state.id = '';
      state.todos = [];
    });
  },
});

export const { changeId } = formSlice.actions;
export const formReducer = formSlice.reducer;
