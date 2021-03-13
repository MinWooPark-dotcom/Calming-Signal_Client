import React from "react";
import NavConatiner from "../../container/NavContainer";
import HamburgerContainer from "../../container/HamburgerContainer";
import Sidebar from "../../components/Sidebar";

const CalmingSignal = ({isToggled}) => {
console.log("🚀 ~ file: CalmingSignal.js ~ line 7 ~ CalmingSignal ~ isToggled", isToggled)
  return (
    <div>
      {isToggled? (<HamburgerContainer />):(
      <div>
      <NavConatiner />
      <Sidebar />
      </div>)}
    </div>
  );
};

export default CalmingSignal;
