import React from 'react';
import { Route } from 'react-router-dom';
import LandingContainer from './container/LandingContainer'
import AboutContainer from './container/AboutContainer'
import CalmingSignalContainer from './container/CalmingSignalContainer'
import Content from './components/Content';
import Board from './components/Board';
import MyPage from './components/MyPage';
import HappyContainer from './container/HappyContainer';
import wag from './components/calming-signal pages/happy/Wag';
import "./App.css";
import Smile from './components/calming-signal pages/happy/Smile';
import Belly from './components/calming-signal pages/happy/Belly';
// import SignIn from './components/SignIn';
import SignInContainer from './container/SignInContainer';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
      <Route component={LandingContainer} path="/" exact />
      <Route component={AboutContainer} path="/about" exact />
      <Route component={SignInContainer} path="/sign-in" exact />
      <Route component={SignUp} path="/sign-up" exact />
      <Route component={CalmingSignalContainer} path="/calming-signal" exact />
      <Route component={HappyContainer} path="/calming-signal/happy" exact />
      <Route component={wag} path="/calming-signal/wag" exact />
      <Route component={Smile} path="/calming-signal/smile" exact />
      <Route component={Belly} path="/calming-signal/belly" exact />
      <Route component={Content} path="/calming-signal/4" exact />
      <Route component={Content} path="/calming-signal/5" exact />
      <Route component={Content} path="/calming-signal/6" exact />
      <Route component={Content} path="/calming-signal/7" exact />
      <Route component={Board} path="/board" exact />
      <Route component={MyPage} path="/mypage" exact />  
    </>
  );
};

export default App;
