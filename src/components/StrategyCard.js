import React, { Component } from "react";
import "./strategy-card.css";

export default class StrategyCard extends Component {
  render() {
    return (
      <div>
        <div className="strategy-card">
          <div className="icon">
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
            <div className="title">
              <h4>{this.props.item.title}</h4>
            </div>
            <div className="text">
              <span>{this.props.item.text}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
