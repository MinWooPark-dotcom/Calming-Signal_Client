import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import NavContainer from '../container/NavContainer'
import HamburgerContainer from '../container/HamburgerContainer'
import Footer from './Footer'
import "./Landing.css";

const Landing = ({number, isToggled, clickGoHome, clickHamburger, clickRightBtn, clickLeftBtn, setFirstNum, setLastNum}) => {
  const hadleOnClickRight = () => {
    if (number < 4) {
      // setNum(number + 1)
      clickRightBtn()
    } else {
      // setNum(1)
      setFirstNum()
    }
  }
  const hadleOnClickLeft = () => {
    if (number === 1) {
      // setNum(4)
      setLastNum()
    } else {
      // setNum(number -1)
      clickLeftBtn()
    }
  }
  
  return (
    <div>
      {isToggled? 
      (<HamburgerContainer/>) 
      : 
      (<div className="landing_container">
      {/* //! num1 */}
      {number === 1? (<div className="landing_contents1">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        {/* Link 컴포넌트 같은 거 써서 클릭하면 행복한 감정 표현 카밍 시그널로 이동, 아래도 마찬가지 */}
        <div className="landing_contents_text1">Happy</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      {/* //! num2 */}
      {number === 2? (<div className="landing_contents2">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
      <div className="landing_contents_text2">Comfortable</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      {/* //! num3 */}
      {number === 3? (<div className="landing_contents3">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <div className="landing_contents_text3">Nervous</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      {/* //! num4 */}
      {number === 4? (<div className="landing_contents4">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <div className="landing_contents_text4">Settle</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
    </div>
)}
    </div>
      );
};

export default Landing;


