import React, { Component } from "react";

import Header from "./Header";
import Cover from "./Cover";

import "./PersonalInfo.css";
import Content from "./Content";
import Footer from "./Footer";

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cover />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default PersonalInfo;
