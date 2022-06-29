import React from "react";
import { useStore } from "./store";

// const List = ({ items }) => {
const List = ({ items }) => {
  const itemsFromStore = useStore((state) => state.items);
  return (
    <table>
      <tbody>
        {itemsFromStore.map((food) =>
          food.isVisible ? (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ) : (
            <tr key={food.id} hidden>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default List;
