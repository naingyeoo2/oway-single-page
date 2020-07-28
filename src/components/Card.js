import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card" onClick={()=>this.props.callBackFun(this.props.item)}>
          <div className="photo">
            {/* <img
              src={require(`../assets/images/png/${this.props.item.img_url}`)}
              width="100%"
              height="100%"
            /> */}
            <div
              style={{
                backgroundImage: `url(${require(`../assets/images/png/${this.props.item.img_url}`)})`,
              }}
              className="image"
            />
          </div>
          <div className="info">
            <span className="name">{this.props.item.name}</span>
            <br></br>
            <span className="position">{this.props.item.position}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
