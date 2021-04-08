/* eslint react/prop-types: 0 */

import React from "react";
import NavConatiner from "../../container/NavContainer";
import HamburgerContainer from "../../container/HamburgerContainer";
import Sidebar from "../../components/Sidebar";
import AboutContainer from "../../container/AboutContainer";
import './CalmingSignal.css'

const CalmingSignal = () => {
  return (
    <div className="calming_signal_container">
      <NavConatiner />
      <Sidebar />
      <AboutContainer />
    </div>
  );
};

export default CalmingSignal;
