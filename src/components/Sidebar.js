import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <Link to="/calming-signal/1">
        <div>카밍 시그널 종류 1</div>
      </Link>
      <Link to="/calming-signal/2">
        <div>카밍 시그널 종류 2</div>
        //{" "}
      </Link>
      <Link to="/calming-signal/3">
        <div>카밍 시그널 종류 3</div>
        //{" "}
      </Link>
      <Link to="/calming-signal/4">
        <div>카밍 시그널 종류 4</div>
        //{" "}
      </Link>
      <Link to="/calming-signal/5">
        <div>카밍 시그널 종류 5</div>
        //{" "}
      </Link>
      <Link to="/calming-signal/6">
        <div>카밍 시그널 종류 6</div>
        //{" "}
      </Link>
      <Link to="/calming-signal/7">
        <div>카밍 시그널 종류 7</div>
        //{" "}
      </Link>
    </div>
  );
};

export default Sidebar;
