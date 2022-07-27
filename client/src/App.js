import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from "react";
import Landing from "./components/Landing/landing.js";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Pricing from "./components/price/pricing.js";
import "./App.css";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <AppContainer>
          <Routes>
            <Route exact path="/login" element={<AccountBox />} />
            <Route exact path="/price" element={<Pricing />} />
          </Routes>
        </AppContainer>
      </div>
    </Router>
  );
}

export default App;
