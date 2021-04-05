/* eslint react/prop-types: 0 */

import React from 'react';
import { Link, withRouter } from "react-router-dom";
import NavContainer from '../container/NavContainer'
import axios from 'axios'

const Hamburger = ({isToggled, isLoggedIn, changeLoggedIn,  clickGoHome, clickHamburger}) => {
  const handleLogout = async () => {
    const logout = await axios.post("https://localhost:3002/logout",null,{
        withCredentials: true,         
    })
    console.log("🚀 ~ file: Hamburger.js ~ line 11 ~ handleLogout ~ logout", logout)
    changeLoggedIn()
  } 

  return (
      <div className="landing_toggled_container">
      <NavContainer />
      <div className="landing_toggled_list_box">
        <ul className="landing_toggled_ul">
          <Link to="/" className="landing_toggled_list_Link" onClick={clickGoHome}>
          <li className="landing_toggled_list_1">Home</li>
          </Link>
          <Link to="/about" className="landing_toggled_list_Link" onClick={clickHamburger}>
          <li className="landing_toggled_list_2">About</li>
          </Link>
          <Link to="/calming-signal" className="landing_toggled_list_Link" onClick={clickHamburger}>
          <li className="landing_toggled_list_3">Calming Signal</li>
          </Link>
          <Link to="/board/free?page=1" className="landing_toggled_list_Link" onClick={clickHamburger}>
          <li className="landing_toggled_list_4">Board</li>
          </Link>
          {/* <li className="landing_toggled_list_5">Mypage</li> */}
          {isLoggedIn?(
          <div>
          <Link to="/mypage" className="landing_toggled_list_Link" onClick={clickHamburger}>
          <li className="landing_toggled_list_5">Mypage</li>
          </Link>
          <li className="landing_toggled_list_5" onClick={handleLogout}>Logout</li>
          </div>
          ):(
          <Link to="/sign-in" className="landing_toggled_list_Link" onClick={clickHamburger}>
          <li className="landing_toggled_list_6">Sign In</li>
          </Link>
          )}

        </ul>
      </div>
      </div>
  );
};

export default Hamburger;