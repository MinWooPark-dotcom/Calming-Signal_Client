import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import NavContainer from '../container/NavContainer'
import "./Landing.css";

const Landing = ({number, isToggled, clickRightBtn, clickLeftBtn, setFirstNum, setLastNum}) => {
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
      (<div className="landing_toggled_container">
      <NavContainer />
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Calming Signal</li>
          <li>Board</li>
          <li>Mypage</li>
          <li>Sign In</li>
        </ul>
      </div>
      </div>) 
      : 
      (<div className="landing_container">
      {/* //! num1 */}
      {number === 1? (<div className="landing_contents1">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <div className="landing_contents_text1">Happy</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
      </div>):(null)}
      {/* //! num2 */}
      {number === 2? (<div className="landing_contents2">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
      <div className="landing_contents_text2">Comfortable</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
      </div>):(null)}
      {/* //! num3 */}
      {number === 3? (<div className="landing_contents3">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <div className="landing_contents_text3">nervous</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
      </div>):(null)}
      {/* //! num4 */}
      {number === 4? (<div className="landing_contents4">
      <NavContainer />
        <button className="landing_left_btn" onClick={hadleOnClickLeft}>&#10094;</button>
        <div className="landing_contents_text4">settle</div>
        <button className="landing_right_btn" onClick={hadleOnClickRight}>&#10095;</button>
      </div>):(null)}
    </div>
)}
    </div>
      );
};

export default Landing;


