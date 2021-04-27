/* eslint react/prop-types: 0 */

import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import './Comfortable.css';

const Comfortable = ({ isToggled }) => {
  return (
    <div>
      <NavContainer />
      <Sidebar />
      <div className="comfortable_container">
        {/* <div className="comfortable_img_div">
                    <img className="comfortable_img" src={img} alt="comfortable dog"></img>
                </div>     */}
        <div className="comfortable_text">
          <div className="comfortable_text_first">
            반려견의 편안함 시그널을 알아보고 <br /> 일상 속에서 편안한 시간을
            보내고 있는지 확인해 보세요.
          </div>
          <div className="comfortable_text_second">
            강아지들에게 꼬리는 많은 뜻을 나타낼 수 있는데요, 그 중 편안함을
            나타내는 시그널도 있습니다.
          </div>
          <div className="comfortable_text_third">
            꼬리가 편안하게 힘이 빠져있고 자연스럽게 내려가 있으면 편안하다는
            시그널이에요.
          </div>
          <div className="comfortable_text_forth">
            또는 잠자는 자세, 편안한 자세에서 한숨을 쉬기도 합니다.
          </div>
          <div className="comfortable_text_fifth"></div>
          <div className="comfortable_text_sixth"></div>
        </div>
      </div>
    </div>
  );
};

export default Comfortable;
