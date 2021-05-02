import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import interrupting from '../../../img/interrupting.jpg';
import './Interrupting.css';

const Interrupting = () => {
  return (
    <div className="interrupting_container">
      <NavContainer />
      <Sidebar />
      <div className="interrupting_contents">
        <div className="interrupting_contents_left">
          <div className="interrupting_right_img_box">
            <img
              className="interrupting_right_img"
              src={interrupting}
              alt="interrupting"
            />
          </div>
        </div>
        <div className="interrupting_contents_right">
          <div className="interrupting_contents_right_title">
            중간에 끼어들기
          </div>
          <div className="interrupting_contents_right_first">
            강아지들이 싸울 때 중간에 끼어들기도 하지만 사람들 사이에 끼어들기도
            합니다.
          </div>
          <div className="interrupting_contents_right_second">
            이는 사람들이 가까이 붙어 있으면 싸운다고 생각하여 중재하기
            위함입니다.
          </div>
          <div className="interrupting_contents_right_third">
            이럴 땐 반려견이 하품을 하는 것처럼 사람이 하품을 해도 반려견이
            안정감을 느낀다고 합니다.
          </div>
          <div className="interrupting_contents_right_forth">
            긴장한 반려견을 안심시켜 주는 것이 중요해요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interrupting;
