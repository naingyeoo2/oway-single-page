import React, { Component } from "react";
import "./content.css";
import Card from "./Card";

import { teams } from "../constants/constants";
import { strategy } from "../constants/constants";
import StrategyCard from "./StrategyCard";
import Modal from "antd/lib/modal/Modal";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      currentItem: null
    };
  }
  modalShow(){
    this.setState({isShow:true})
  }
  modalHide(){
    this.setState({isShow:false})
  }
  handleModal(item){
    this.modalShow();
    this.setState({currentItem : item})
  }
  render() {
    const { isShow, currentItem } = this.state;
    return (
      <div className="app-container">
        <h2 className="head-text1">OUR LEADERSHIP TEAM</h2>
        <span className="text2">The best and brightest innovators of Oway</span>
        <br></br>
        <br></br>
        <div className="forcard">
          {teams.map((item) => (
            <Card callBackFun= {(item) => this.handleModal(item)} item={item} key={item.id} />
          ))}
        </div>  
        <div className="line-break"></div>
        <center>
          <h2 className="head-text3">OUR STRATEGY</h2>
          <div className="text3">
            The best and brightest innovators of Oway
          </div>
        </center>
        <div className="for-strategy">
          {strategy.map((item) => (
            <StrategyCard item={item} key={item.id} />
          ))}
        </div>
        <div>
        <Modal
          title="Basic Modal"
          visible={isShow}
          onOk={()=> this.modalHide()}
          onCancel={()=> this.modalHide()}
        >
          {currentItem && currentItem.name}
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </div>
      </div>
    );
  }
}
export default Content;
