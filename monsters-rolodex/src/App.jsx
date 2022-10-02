import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("Render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters));
  }, []); //Nothing goes in this array since we want the hook to run only once. If we put a variable in the array, the hook will run every time the variable changes.

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, monsters]);

  const onSearchChange = (event) => {
    const searchQueryString = event.target.value.toLocaleLowerCase();
    setSearchQuery(searchQueryString);
  };

  return (
    <div className="App">
      <SearchBox
        onChange={onSearchChange}
        placeholder="Search Monsters"
        value={searchQuery}
        className="monsters-search-box"
      ></SearchBox>

      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};



export default App;
