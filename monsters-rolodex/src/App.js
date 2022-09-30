import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [

      ],

      searchQuery: "",

    };
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monster: users, filteredMonsters: users }
          },
        ))

  }

  onSearchChange = (event) => {
    const searchQuery = event.target.value;
    this.setState(() => {
      return { searchQuery };
    },
      () => {
        console.log(this)
      }
    );
  }

  render() {

    const { monster, searchQuery } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monster.filter((monster) => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return <div className="App">

      {/* <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        value={searchQuery}
        onChange={onSearchChange}

      /> */}

      <SearchBox onChange={onSearchChange} placeholder = 'Search Monsters' className = 'monsters-search-box'></SearchBox>



      <CardList monsters={filteredMonsters} ></CardList>

     
    </div>;
  }
}

export default App;
