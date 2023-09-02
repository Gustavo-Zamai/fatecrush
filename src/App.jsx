import React from "react";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import OnBoarding from "./pages/OnBoarding/OnBoarding";

import './assets/styles/global.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/onboarding" element={<OnBoarding/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
