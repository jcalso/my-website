import React from 'react';
import { Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/about" />
        <Route path="/resume"  />
        <Route path="/thoughts" />
      </Routes>
  );
}

export default AppRouter;