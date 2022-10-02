import React, { Component } from "react";
import "./card-container.styles.css";

const CardContainer = (props) => {
  const { name, email, id } = props.monster; 
  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${name}/?set=set2&size=180x180`} alt="" />
      <h2> {name} s</h2>
      <p> {email}</p>
    </div>
  );
};

export default CardContainer;
