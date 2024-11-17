import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Pjmain from "./projectReviews/Pjmain";
function App() {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Pjmain />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
