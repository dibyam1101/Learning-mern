import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [

      ],

    };
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monster: users }
          },
          () => {
            console.log(this.state)
          }))

  }

  render() {
    return <div className="App">


      {/* {
        this.state.monster.map((monster) => {
          return <h1 key={monster.id}>{monster}</h1>
        })
      } */}
    </div>;
  }
}

export default App;
