import React, { Component } from "react";

import Header from "./Header";
import NavBar from "./NavBar";
import Cover from "./Cover";

import "./PersonalInfo.css";
import Content from "./Content";
import Footer from "./Footer";
import BgPhoto from "./BgPhoto";

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Cover />
        {/* <BgPhoto /> */}
        <Content />
        <Footer />
      </div>
    );
  }
}

export default PersonalInfo;
