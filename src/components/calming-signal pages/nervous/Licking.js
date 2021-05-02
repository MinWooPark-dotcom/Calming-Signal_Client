import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import licking from '../../../img/licking.jpg';
import './Licking.css';

const Licking = () => {
  return (
    <div className="licking_container">
      <NavContainer />
      <Sidebar />
      <div className="licking_contents">
        <div className="licking_contents_left">
          <div className="licking_right_img_box">
            <img className="licking_right_img" src={licking} alt="licking" />
          </div>
        </div>
        <div className="licking_contents_right">
          <div className="licking_contents_right_title">코 핥기</div>
          <div className="licking_contents_right_first">
            냄새를 잘 맡기 위해서 촉촉하게 유지하는게 아닌 <br></br>
            카밍시그널에서의 의미는 긴장이 많이 될때 코를 핥는 <br></br>행동을
            한답니다.
          </div>
          <div className="licking_contents_right_second">
            안정이 필요하고 불안하니 코를 핥으면서 안정을 느낀다고<br></br>해요!
          </div>
          <div className="licking_contents_right_third">
            이럴때에는 편안할 수 있도록 배려하는 마음을 갖는게 <br></br>
            중요해요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licking;
