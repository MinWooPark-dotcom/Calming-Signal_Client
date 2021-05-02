import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import './Nervous.css';

const Nervous = ({ isToggled }) => {
  return (
    <div>
      <NavContainer />
      <Sidebar />
      <div className="nervous_container">
        <div className="nervous_text">
          <div className="nervous_text_first">
            반려견의 불안함 시그널을 알아보고 <br /> 불안감을 해소 시켜 주세요.
          </div>
          <div className="nervous_text_second">
            강아지들은 불안할 때 코를 핥는 행위를 합니다.
          </div>
          <div className="nervous_text_third">
            또 꼬리가 둥글게 몸 쪽으로 말려 있습니다.
          </div>
          <div className="nervous_text_forth">
            평소와 달리 귀가 뒤 쪽으로 접혀 있다면 보호자와 함께 있어 신날 때도
            있지만,
          </div>
          <div className="nervous_text_fifth">
            두려움에 처했을 때를 표현하기도 합니다.
          </div>
          <div className="nervous_text_sixth">
            맥락을 통해 불안감을 파악하여 반려견을 돌봐주세요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nervous;
