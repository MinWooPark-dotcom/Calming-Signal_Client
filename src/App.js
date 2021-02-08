import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing.js";
// import "./App.css";

const App = () => {
  return (
    <div>
      <Route path="/" component={Landing} />
    </div>
  );
};

export default App;
