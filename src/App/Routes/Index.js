import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../UI/Pages/Welcome";
import AboutUs from "../UI/Pages/AboutUs";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
