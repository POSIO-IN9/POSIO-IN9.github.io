import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pjmain from "./projectReviews/Pjmain";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":/project" element={<Pjmain />} />
      </Routes>
    </Router>
  );
}

export default App;
