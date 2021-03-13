import React from 'react';
import HamburgerContainer from '../../container/HamburgerContainer';
import NavContainer from '../../container/NavContainer';
import Sidebar from '../Sidebar';
import './Happy.css'
import img from '../../img/happy.jpg'

const Happy = ({isToggled}) => {
    return (
        <div>
            {isToggled? (<HamburgerContainer />):(<div>
            <NavContainer/>
            <Sidebar/>
            <div className="happy_container">
                {/* <div className="happy_img_div">
                    <img className="happy_img" src={img} alt="happy dog"></img>
                </div>     */}
                <div className="happy_text">
                반려견의 행복 시그널을 알아보고 일상 속에서 행복한 시간을 보내고 있는지 확인해 보세요.
                <br/>
                강아지들은 행복할 때 입을 벌리고 살짝 혀를 내밀고 있어요.
                <br/>
                꼬리르 좌우로 흔들며 표현하기도 하며, 배를 보이며 눕기도 합니다.
                <br/>
                배를 보여준다는 것은 신뢰의 의미이며 쓰다듬어 달라는 뜻입니다.
                <br/>
                이와 비슷하게 엉덩이를 대는 행동도 합니다.
                <br/>
                얼굴 또는 입을 핥음으로써 애정을 표현합니다.
                
                </div>
            </div>   
            </div>)}
        </div>
    );
};

export default Happy;