import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import EditorContainer from '../../container/EditorContainer';
import NavContainer from '../../container/NavContainer';
import './WirtePage.css';

const WirtePage = ({ isLoggedIn, history }) => {
  return (
    <div className="wirte_page_container">
      <NavContainer />
      {isLoggedIn ? <EditorContainer /> : history.goBack()}
    </div>
  );
};

export default withRouter(WirtePage);
