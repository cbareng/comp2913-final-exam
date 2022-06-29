import create from "zustand";
import produce from "immer";
import { foods } from "./data";

export const useStore = create((set) => ({
  items: foods.map((food) => {
    return { ...food, isVisible: true };
  }),
  filter: "",
  setFilter: (filter) =>
    set(
      produce((state) => {
        const newFilter = filter ? filter.trim().toLowerCase() : "";
        state.filter = newFilter;
        // hide food if it "contains" filter
        state.items = foods.map((food) => {
          console.log(food.name, ": ", filter);
          return {
            ...food,
            isVisible: food.name.toLowerCase().includes(newFilter)
              ? true
              : false
          };
        });
        console.log("state.items ", state.items);
      })
    )
}));
