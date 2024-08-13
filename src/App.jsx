// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProctListingPage from './pages/ProctListingPage'
import ProductViewPage from './pages/ProductViewPage';
export function App() {
  return (
    <Router>
      <div className="w-full mx-auto bg-grayscale-light-gray-3 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/produtos' element={<ProctListingPage/>}></Route>
          <Route path="/product/:id" element={<ProductViewPage />} />
        </Routes>
      </div>
    </Router>
  );
}
