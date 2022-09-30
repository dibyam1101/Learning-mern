import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(monsters);
    console.log("Render from card list");
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster}></CardContainer>;
        })}
      </div>
    );
  }
}

export default CardList;
