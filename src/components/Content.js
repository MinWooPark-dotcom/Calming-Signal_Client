import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "./Content.css";
import landing_top from "../img/landing_top.jpeg";

const Content = () => {
  return (
    <div className="content_container">
      <Nav />
      <Sidebar />
      <div className="content_content">
        <div className="content_left">
          <div>카밍시그널 이름</div>
          <div>카밍시그널 설명</div>
        </div>
        <div className="content_right">
          <div className="content_right_img_box">
            <img className="content_right_img" src={landing_top} alt="dog" />
          </div>
          <div>강아지 기분 설명 이모티콘</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
