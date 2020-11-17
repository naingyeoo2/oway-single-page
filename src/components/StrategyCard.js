import React, { Component } from "react";
import "./strategy-card.css";

export default class StrategyCard extends Component {
  render() {
    return (
      <div className="strategy-card">
        <div className="for-icon">
          {/* <img className="icon-img" src={require(`../assets/images/svg/${this.props.item.icon_url}`)} 
                        /> */}
          <div
            style={{
              backgroundImage: `url(${require(`../assets/images/svg/${this.props.item.icon_url}`)})`,
            }}
            className="icon-img"
          ></div>
        </div>
        <div className="for-text">
          <h3 className="title">{this.props.item.title}</h3>
          <span className="text">{this.props.item.text}</span>
        </div>
      </div>
    );
  }
}
