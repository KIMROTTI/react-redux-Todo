import { legacy_createStore as createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

// const addToDo = (text) => {
//   //action creator
//   return {
//     type: ADD,
//     text,
//   };
// };

// const DeleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload);
//   },
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

console.log(toDos.actions);
// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export const { add, remove } = toDos.actions;
export default store;
