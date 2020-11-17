import React, { Component } from "react";
import "./content.scss";
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
      currentItem: null,
    };
  }
  modalShow() {
    this.setState({ isShow: true });
  }
  modalHide() {
    this.setState({ isShow: false });
  }
  handleModal(item) {
    this.modalShow();
    this.setState({ currentItem: item });
  }
  render() {
    const { isShow, currentItem } = this.state;
    return (
      <div className="content">
        <div className="app-container">
          <div className="head-text">
            <h2 className="header-text1">OUR LEADERSHIP TEAM</h2>
            <span className="header-text2">
              The best and brightest innovators of Oway
            </span>
          </div>
          <div className="ourteam">
            <div className="forcard">
              {teams.map((item) => (
                <Card
                  callBackFun={(item) => this.handleModal(item)}
                  item={item}
                  key={item.id}
                />
              ))}
            </div>
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
              title="Personal Info"
              visible={isShow}
              onOk={() => this.modalHide()}
              onCancel={() => this.modalHide()}
            >
              {currentItem && currentItem.name}
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
