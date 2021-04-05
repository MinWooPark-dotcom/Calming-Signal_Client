import React from 'react';
import { Route } from 'react-router-dom';
import LandingContainer from './container/LandingContainer'
import AboutContainer from './container/AboutContainer'
import CalmingSignalContainer from './container/CalmingSignalContainer'
// import Content from './components/Content';
// import FreeBulletinBoard from './components/board/FreeBulletinBoard';
import FreeBulletinBoardContainer from './container/FreeBulletinBoardContainer'
import MyPage from './components/MyPage';
//! happy
import HappyContainer from './container/HappyContainer';
import WagContainer from './container/WagContainer';

import Smile from './components/calming-signal pages/happy/Smile';
import Belly from './components/calming-signal pages/happy/Belly';
// import SignIn from './components/SignIn';
//! comfortable
import ComfortableContainer from './container/ComfortableContainer';
import NaturalTail from './components/calming-signal pages/comfortable/NaturalTail';
import Sigh from './components/calming-signal pages/comfortable/Sigh';
//! nervous
import NervousContainer from './container/NervousContainer';
import Licking from './components/calming-signal pages/nervous/Licking';
import RollTail from './components/calming-signal pages/nervous/RollTail';
//! settle
import SettleContainer from './container/SettleContainer';
import Yawn from './components/calming-signal pages/settle/Yawn';
import Interrupting from './components/calming-signal pages/settle/Interrupting';
import TurnHead from './components/calming-signal pages/settle/TurnHead';

//! board
import WritePage from './components/board/WirtePage'

import SignInContainer from './container/SignInContainer';
import SignUp from './components/SignUp';

import "./App.css";
import ContentPage from './components/board/Content';
import ContentContainer from './container/ContentContainer';

const App = ({ match }) => {
  return (
    <>
      <Route component={LandingContainer} path="/" exact />
      <Route component={AboutContainer} path="/about" exact />
      {/* sing in */}
      <Route component={SignInContainer} path="/sign-in" exact />
      <Route component={SignUp} path="/sign-up" exact />
      <Route component={CalmingSignalContainer} path="/calming-signal" exact />
      {/* happy */}
      <Route component={HappyContainer} path="/calming-signal/happy" exact />
      <Route component={WagContainer} path="/calming-signal/wag" exact />
      <Route component={Smile} path="/calming-signal/smile" exact /> 
      <Route component={Belly} path="/calming-signal/belly" exact />
      {/* comfortable */}
      <Route component={ComfortableContainer} path="/calming-signal/comfortable" exact />
      <Route component={NaturalTail} path="/calming-signal/natural-tail" exact />
      <Route component={Sigh} path="/calming-signal/sigh" exact />
      {/* Nervous */}
      <Route component={NervousContainer} path="/calming-signal/nervous" exact />
      <Route component={Licking} path="/calming-signal/licking" exact />
      <Route component={RollTail} path="/calming-signal/roll-tail" exact />
      {/* settle */}
      <Route component={SettleContainer} path="/calming-signal/settle" exact />
      <Route component={Yawn} path="/calming-signal/yawn" exact />
      <Route component={Interrupting} path="/calming-signal/interrupting" exact />
      <Route component={TurnHead} path="/calming-signal/turn-head" exact />
      
      {/* <Route component={Content} path="/calming-signal/4" exact /> */}
      {/* <Route component={Content} path="/calming-signal/5" exact /> */}
      {/* <Route component={Content} path="/calming-signal/6" exact /> */}
      {/* <Route component={Content} path="/calming-signal/7" exact /> */}
      
      {/* board */}
      <Route component={FreeBulletinBoardContainer} path="/board/:category" exact />
      <Route component={WritePage} path="/write" exact />
      <Route component={ContentContainer} path="/content/:title" exact />
      
      
      <Route component={MyPage} path="/mypage" exact />  
      


    </>
  );
};

export default App;
