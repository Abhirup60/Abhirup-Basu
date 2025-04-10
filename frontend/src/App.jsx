import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreenInterface from "./pages/ScreenInterface";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ScreenInterface />} />
          <Route path='/portfolio/abhirup' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
