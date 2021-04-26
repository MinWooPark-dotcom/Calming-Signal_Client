import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import smile_img from '../../../img/happy_smile.jpg';
import './Smile.css';

const Smile = () => {
  return (
    <div className="smile_container">
      <NavContainer />
      <Sidebar />
      <div className="smile_contents">
        <div className="smile_contents_left">
          <div className="smile_right_img_box">
            <img className="smile_right_img" src={smile_img} alt="dog" />
          </div>
        </div>
        <div className="smile_contents_right">
          <div className="smile_contents_right_title">표정</div>
          <div className="smile_contents_right_first">
            개들은 기분이 좋을 때 입을 벌리고 살짝 혀를 내밉니다.
          </div>
          <div className="smile_contents_right_second">
            사람이 웃는 것처럼 개들도 입꼬리가 올라가 웃는 표정이 <br></br>
            드러나 쉽게 알 수 있는 시그널입니다.
          </div>
          <div className="smile_contents_right_third">
            이처럼 개들은 입을 벌리는 행동을 통해 긴장도를<br></br> 표현합니다.
          </div>
          <div className="smile_contents_right_forth">
            하지만 더운 여름이라면 다른 경우도 있습니다.
          </div>
          <div className="smile_contents_right_fifth">
            땀샘이 없는 개는 호흡을 통해 체온을 조절하기 때문에 혀를<br></br>{' '}
            내밀고 헥헥거리면서 수분을 증발시켜 체온을 낮추기 <br></br>위함일 수
            있습니다.
          </div>
          <div className="smile_contents_right_sixth">
            또는 특별한 경우가 아님에도 자주 혀를 내밀고 <br></br>헥헥거린다면
            건강의 적신호가 왔다는 의미일 수 있으니 <br></br>검사를 받아보는
            것이 좋습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smile;
