import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './BoardSidebar.css';

const BoardSidebar = () => {
  return (
    <div className="board_sidebar_container">
      <Link to="/board/free?page=1">
        <div className="board_sidebar_container_free">자유게시판</div>
      </Link>
      <Link to="/board/small?page=1">
        <div className="board_sidebar_container_small">소형견</div>
      </Link>
      <Link to="/board/medium?page=1">
        <div className="board_sidebar_container_medium">중형견</div>
      </Link>
      <Link to="/board/large?page=1">
        <div className="board_sidebar_container_large">대형견</div>
      </Link>
      <Link to="/weather">
        <div className="board_sidebar_container_weather">산책 날씨</div>
      </Link>
    </div>
  );
};

export default BoardSidebar;
