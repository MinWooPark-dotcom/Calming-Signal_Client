import React from 'react';
import { Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Landing from './components/Landing.js';
import LandingContainer from './container/LandingContainer'
// import About from './components/About';
import AboutContainer from './container/AboutContainer'
import CalmingSignal from './components/CalmingSignal';
import Content from './components/Content';
import Board from './components/Board';
import MyPage from './components/MyPage';
import "./App.css";

const App = () => {
  return (
    <>
      {/* <Route component={Landing} path="/" exact /> */}
      <Route component={LandingContainer} path="/" exact />
      <Route component={AboutContainer} path="/about" exact />
      <Route component={CalmingSignal} path="/calming-signal" exact />
      <Route component={Content} path="/calming-signal/1" exact />
      <Route component={Content} path="/calming-signal/2" exact />
      <Route component={Content} path="/calming-signal/3" exact />
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
