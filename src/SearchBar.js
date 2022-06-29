import React, { useState } from "react";
import { useStore } from "./store";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const setFilterFromStore = useStore((state) => state.setFilter);
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
    setFilterFromStore(e.currentTarget.value);
  };
  return (
    <label>
      Search: <input value={userInput} type="text" onChange={handleChange} />
    </label>
  );
}
