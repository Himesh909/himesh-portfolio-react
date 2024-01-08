import React from "react";
import Home from "./Pages/Home";
import Achievements from "./Pages/Achievements";
import Education from "./Pages/Education";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/achievements" element={<Achievements />} />
        <Route exact path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
