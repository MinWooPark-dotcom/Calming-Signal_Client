// ! dev branch
import React from 'react';
import { Route } from 'react-router-dom';
import Smile from './components/calming-signal pages/happy/Smile';
import Belly from './components/calming-signal pages/happy/Belly';
import NaturalTail from './components/calming-signal pages/comfortable/NaturalTail';
import Sigh from './components/calming-signal pages/comfortable/Sigh';
import Licking from './components/calming-signal pages/nervous/Licking';
import RollTail from './components/calming-signal pages/nervous/RollTail';
import Yawn from './components/calming-signal pages/settle/Yawn';
import Interrupting from './components/calming-signal pages/settle/Interrupting';
import TurnHead from './components/calming-signal pages/settle/TurnHead';
import BoardContainer from './container/BoardContainer';
import SignInContainer from './container/SignInContainer';
import SignUp from './components/SignUp';
import ContentContainer from './container/ContentContainer';
import WritePageContainer from './container/WritePageContainer';
import MyPageContainer from './container/MyPageContainer';
import WeatherContainer from './container/WeatherContainer';
import CalmingSignal from './components/calming-signal pages/CalmingSignal';
import Comfortable from './components/calming-signal pages/comfortable/Comfortable';
import Nervous from './components/calming-signal pages/nervous/Nervous';
import Happy from './components/calming-signal pages/happy/Happy';
import Settle from './components/calming-signal pages/settle/Settle';
import Wag from './components/calming-signal pages/happy/Wag';
import Landing from './components/Landing';
import './App.css';

const App = () => {
  return (
    <>
      <Route component={Landing} path="/" exact />

      {/* sing in */}
      <Route component={SignInContainer} path="/sign-in" exact />
      <Route component={SignUp} path="/sign-up" exact />
      <Route component={CalmingSignal} path="/calming-signal" exact />
      {/* happy */}
      <Route component={Happy} path="/calming-signal/happy" exact />
      <Route component={Wag} path="/calming-signal/wag" exact />
      <Route component={Smile} path="/calming-signal/smile" exact />
      <Route component={Belly} path="/calming-signal/belly" exact />
      {/* comfortable */}
      <Route component={Comfortable} path="/calming-signal/comfortable" exact />
      <Route
        component={NaturalTail}
        path="/calming-signal/natural-tail"
        exact
      />
      <Route component={Sigh} path="/calming-signal/sigh" exact />
      {/* Nervous */}
      <Route component={Nervous} path="/calming-signal/nervous" exact />
      <Route component={Licking} path="/calming-signal/licking" exact />
      <Route component={RollTail} path="/calming-signal/roll-tail" exact />
      {/* settle */}
      <Route component={Settle} path="/calming-signal/settle" exact />
      <Route component={Yawn} path="/calming-signal/yawn" exact />
      <Route
        component={Interrupting}
        path="/calming-signal/interrupting"
        exact
      />
      <Route component={TurnHead} path="/calming-signal/turn-head" exact />

      {/* board */}
      <Route component={BoardContainer} path="/board/:category" exact />
      <Route component={WritePageContainer} path="/write" exact />
      <Route component={ContentContainer} path="/content/:title" exact />

      <Route component={WeatherContainer} path="/weather" exact />

      <Route component={MyPageContainer} path="/mypage" exact />
    </>
  );
};

export default App;
