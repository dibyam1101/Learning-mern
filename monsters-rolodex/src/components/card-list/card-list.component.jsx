import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

const CardList = (props) => {
  const { monsters } = props;
  // console.log(monsters);
  // console.log("Render from card list");
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardContainer monster={monster}></CardContainer>;
      })}
    </div>
  );
};

export default CardList;
