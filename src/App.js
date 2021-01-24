import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/base_scss/index.scss";

import Header from "./components/global/header";
import Home from "./components/home/home";
import MeetEmily from "./components/meet_emily/meet_emily";
import FoxFit from "./components/fox_fit/fox_fit";
import PlansAndPricing from "./components/plans_and_pricing/plans_and_pricing";
import Login from "./components/login/login";
import Banner from "./components/global/banner";
//export const CurrentPage = React.createContext("/");

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-emily" element={<MeetEmily />} />
          <Route exact path="/foxfit" element={<FoxFit />} />
          <Route exact path="/plans-pricing" element={<PlansAndPricing />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
