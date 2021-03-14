import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <Link to="/calming-signal/happy">
      <div className="sidebar_category_happy">Happy</div>
      </Link>
      <Link to="/calming-signal/wag">
        <div className="sidebar_1">꼬리 흔들기</div>
      </Link>
      <Link to="/calming-signal/smile">
        <div className="sidebar_2">웃는 표정</div>
      </Link>
      <Link to="/calming-signal/belly">
        <div className="sidebar_3">배 보이기</div>
      </Link>
      <Link to="/calming-signal/comfortable">
      <div className="sidebar_category_comfortable">Comfortable</div>
      </Link>
      <Link to="/calming-signal/4">
        <div className="sidebar_4">중간에 끼어들기</div>
      </Link>
      <Link to="/calming-signal/5">
        <div className="sidebar_5">돌아가기</div>
      </Link>
      <Link to="/calming-signal/6">
        <div className="sidebar_6">앉기</div>
      </Link>
      <Link to="/calming-signal/nervous">
      <div className="sidebar_category_nervous">Nervous</div>
      </Link>
      <Link to="/calming-signal/7">
        <div className="sidebar_7">엎드리기</div>
      </Link>
      <Link to="/calming-signal/8">
        <div className="sidebar_8">고개 돌리기</div>
      </Link>
      <Link to="/calming-signal/9">
        <div className="sidebar_9">등 돌리기</div>
      </Link>
      <Link to="/calming-signal/settle">
      <div className="sidebar_category_settle">Settle</div>
      </Link>
      <Link to="/calming-signal/9">
        <div className="sidebar_9">코 핥기</div>
      </Link>
      <Link to="/calming-signal/10">
        <div className="sidebar_10">몸을 긁거나 털기</div>
      </Link>
    </div>
  );
};

export default Sidebar;
