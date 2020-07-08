import React, { Component } from "react";
import "./content.css";
import Card from "./Card";

import { teams } from "../constants/constants";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "",
    };
  }
  render() {
    return (
      
        <div className="app-container">
          <span className="head-text">OUR LEADERSHIP TEAM</span>
          <br></br>
          <span className="text2">
            The best and brightest innovators of Oway
          </span>
          <br></br>
          <br></br>
          <div className="forcard">
            {teams.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <div className="line-break"></div>
          <center>
            <h2>OUR STRATEGY</h2>
            <span>The best and brightest innovators of Oway</span>
          </center>
        </div>
      
    );
  }
}
export default Content;
