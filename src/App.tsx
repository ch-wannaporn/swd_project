import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n";
import LayoutAndStylePage from "./pages/LayoutAndStylePage";
import SelectionPage from "./pages/SelectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/layout-style" element={<LayoutAndStylePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
