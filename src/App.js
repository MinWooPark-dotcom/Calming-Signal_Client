import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing.js";
import About from "./components/About";
import CalmingSignal from "./components/CalmingSignal";
import Content from "./components/Content";
import Board from "./components/Board";
import MyPage from "./components/MyPage";
import SignIn from "./components/SignIn";
// import "./App.css";

const App = () => {
  return (
    <div>
      <Route path="/" component={Landing} exact />
      <Route path="/about" component={About} exact />
      <Route path="/calming-signal" component={CalmingSignal} exact />
      <Route path="/calming-signal/1" component={Content} />
      <Route path="/calming-signal/2" component={Content} />
      <Route path="/calming-signal/3" component={Content} />
      <Route path="/calming-signal/4" component={Content} />
      <Route path="/calming-signal/5" component={Content} />
      <Route path="/calming-signal/6" component={Content} />
      <Route path="/calming-signal/7" component={Content} />
      <Route path="/board" component={Board} exact />
      <Route path="/mypage" component={MyPage} exact />
      <Route path="/sign-in" component={SignIn} exact />
    </div>
  );
};

export default App;
