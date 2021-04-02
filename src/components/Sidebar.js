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
      <Link to="/calming-signal/natural-tail">
        <div className="sidebar_4">자연스러운 꼬리 내림</div>
      </Link>
      <Link to="/calming-signal/sigh">
        <div className="sidebar_5">편안한 자세에서 한 숨</div>
      </Link>
      {/* <Link to="/calming-signal/6"> */}
        {/* <div className="sidebar_6">앉기</div> */}
      {/* </Link> */} 
      <Link to="/calming-signal/nervous">
      <div className="sidebar_category_nervous">Nervous</div>
      </Link>
      <Link to="/calming-signal/licking">
        <div className="sidebar_7">코 핥기</div>
      </Link>
      {/* <Link to="/calming-signal/8"> */}
        {/* <div className="sidebar_8">귀를 뒤로 젖힘</div> */}
      {/* </Link> */}
      <Link to="/calming-signal/roll-tail">
        <div className="sidebar_9">꼬리 말림</div>
      </Link>
      <Link to="/calming-signal/settle">
      <div className="sidebar_category_settle">Settle</div>
      </Link>
      <Link to="/calming-signal/yawn">
        <div className="sidebar_9">하품 하기</div>
      </Link>
      <Link to="/calming-signal/interrupting">
        <div className="sidebar_10">중간에 끼어들기</div>
      </Link>
      <Link to="/calming-signal/turn-head">
        <div className="sidebar_11">고개 돌리기</div>
      </Link>
    </div>
  );
};

export default Sidebar;
