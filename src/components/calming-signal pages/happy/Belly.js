import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import belly_img from '../../../img/happy_belly.png';
import './Belly.css';

const Belly = () => {
  return (
    <div className="belly_container">
      <NavContainer />
      <Sidebar />
      <div className="belly_contents">
        <div className="belly_contents_left">
          <div className="belly_right_img_box">
            <img className="belly_right_img" src={belly_img} alt="dog" />
          </div>
        </div>
        <div className="belly_contents_right">
          <div className="belly_contents_right_title">배 보이기</div>
          <div className="belly_contents_right_first">
            개들 중 자신의 배를 긁어줄 때의 그 ‘느낌’을 좋아하는 <br></br>경우가
            많습니다.
          </div>
          <div className="belly_contents_right_second">
            그리고 관심과 사랑을 달라는 의미에서 배를 보이며 눕기도<br></br>{' '}
            합니다
          </div>
          <div className="belly_contents_right_third">
            하지만 배를 보여준다고 모두 즐거운 의미는 아닙니다.
          </div>
          <div className="belly_contents_right_forth">
            모르는 사람이나 위협적인 강아지 앞에서 배를 보인다는 건<br></br>{' '}
            불편함을 느끼고 있을 수 있습니다.
          </div>
          <div className="belly_contents_right_fifth">
            그러므로 모르는 사람에게 배를 보인다고 해서 그 사람이<br></br> 배를
            만지는 행위는 불편할 수 있습니다.
          </div>
          <div className="belly_contents_right_sixth">
            모든 카밍시그널은 맥락 속에서 해석할 필요가 있습니다
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belly;
