import React, { Component } from "react";
import "./card.css";

const Card = (props) => (
  <div>
    <div className="card">
      <div className="photo">
        <img
          src={require(`../assets/images/png/${props.item.img_url}`)}
          width="100%"
          height="100%"
        />
      </div>
      <div className="info">
        <span className="name">{props.item.name}</span>
        <br></br>
        <span className="position">{props.item.position}</span>
      </div>
    </div>
  </div>
);
export default Card;
