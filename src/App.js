import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import About from './components/About';
import CalmingSignal from './components/CalmingSignal';
import Content from './components/Content';
import Board from './components/Board';
import MyPage from './components/MyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage.js';
import PostListPage from './pages/PostListPage.js';
import WritePage from './pages/WritePage.js';
import PostPage from './pages/PostPage.js';
// import "./App.css";

const App = () => {
  return (
    <>
      {/* <Route component={Landing} path="/" exact /> */}
      <Route component={About} path="/about" exact />
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
      {/* Page dir */}
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      {/* <Route component={PostListPage} path="/" exact /> */}
      <Route component={LoginPage} path="/login" exact />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};

export default App;
