import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {HashRouter, Route, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Pjmain from "./projectReviews/Pjmain";
function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:project" element={<Pjmain />} />
        </Routes>
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
