import SearchBar from "./SearchBar";
import List from "./List";
// import { foods } from "./data";

export default function FilterableList() {
  return (
    <>
      <SearchBar />
      <hr />
      <List />
      {/* <List items={foods} /> */}
    </>
  );
}
