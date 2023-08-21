import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';

const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about"/>
        <Route path="/resume"  />
        <Route path="/thoughts" />
      </Routes>
  );
}

export default AppRouter;