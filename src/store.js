import create from "zustand";
import produce from "immer";
import { foods } from "./data";

export const useStore = create((set) => ({
  foods: foods.map((food) => {
    return { ...food, isVisible: true };
  }),
  filter: "",
  setFilter: (filter) =>
    set(
      produce((state) => {
        state.filter = filter;
        // hide food if it "contains" filter
        state.foods = state.foods.filter((todo) => todo.name === filter);
      })
    ),
  // just zustand:
  // add: (title) => set((state) => ({ todos: [...state.todos, { title }] }))
  // using immer with zustand
  removeBook: (bookId) =>
    set(
      produce((state) => {
        state.todoList = state.todoList.filter((todo) => todo.id !== bookId);
        // hide update book form if it is currently displayed
        state.book = undefined;
      })
    )
}));
