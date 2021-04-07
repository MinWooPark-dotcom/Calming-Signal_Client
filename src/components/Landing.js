/* eslint react/prop-types: 0 */

import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import NavContainer from '../container/NavContainer'
import HamburgerContainer from '../container/HamburgerContainer'
import Footer from './Footer'
import "./Landing.css";
import landing_logo from '../img/landing_logo.png'
import landing_logo2 from '../img/landing_logo2.png'
import happy from '../img/happy.png'
import comfortable from '../img/comfortable.png'
import nervous from '../img/nervous.png'
import settle from '../img/settle.png'

const Landing = ({number, isToggled, clickGoHome, clickHamburger, clickRightBtn, clickLeftBtn, setFirstNum, setLastNum}) => {
  const hadleOnClickRight = () => {
    if (number < 5) {
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
    <div className="landing_page">
      <div className="landing_container">
      <NavContainer />
        {/* //! num1 */}
      {number === 1? (<div className="landing_contents1">
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        {/* Link 컴포넌트 같은 거 써서 클릭하면 행복한 감정 표현 카밍 시그널로 이동, 아래도 마찬가지 */}
        <Link to="/about">
        <div className="landing_contents_text1">Calming Signal</div>
        <div className="landing_contents_landing_logo"><img className="landing_contents_logo_img" src={landing_logo} alt="logo_img"></img></div>
        {/* <div className="landing_contents_logo"><img className="landing_contents_logo_img" src={landing_logo2} alt="logo_img"></img></div> */}
        </Link>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      {/* //! num2 */}
      {number === 2? (<div className="landing_contents2">
      {/* <NavContainer /> */}
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        {/* Link 컴포넌트 같은 거 써서 클릭하면 행복한 감정 표현 카밍 시그널로 이동, 아래도 마찬가지 */}
        <Link to="/calming-signal/happy">
        <div className="landing_contents_text2">Happy</div>
        <div className="landing_contents_logo"><img className="landing_contents_logo_img" src={happy} alt="logo_img"></img></div>
        </Link>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      {/* //! num3 */}
      {number === 3? (<div className="landing_contents3">
      {/* <NavContainer /> */}
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <Link to="/calming-signal/comfortable">
      <div className="landing_contents_text3">Comfortable</div>
      <div className="landing_contents_logo"><img className="landing_contents_logo_img" src={comfortable} alt="logo_img"></img></div>
        </Link>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      {/* //! num4 */}
      {number === 4? (<div className="landing_contents4">
      {/* <NavContainer /> */}
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <Link to="/calming-signal/nervous">
        <div className="landing_contents_text4">Nervous</div>
        <div className="landing_contents_logo"><img className="landing_contents_logo_img" src={nervous} alt="logo_img"></img></div>
        </Link>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      {/* //! num5 */}
      {number === 5? (<div className="landing_contents5">
      {/* <NavContainer /> */}
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <Link to="/calming-signal/settle">
        <div className="landing_contents_text5">Settle</div>
        <div className="landing_contents_logo"><img className="landing_contents_logo_img" src={settle} alt="logo_img"></img></div>
        </Link>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
        <Footer/>
      </div>):(null)}
      </div>
    </div>
      );
};

export default Landing;


