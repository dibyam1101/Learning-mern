import React, { Component } from 'react';
import './card-container.styles.css'

class CardContainer extends Component {
  render() {
    const {name, email, id} = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${name}/?set=set2&size=180x180`}
          alt=""
        />
        <h2> {name} s</h2>
        <p> {email}</p>
      </div>
    );
  }
}

export default CardContainer;
