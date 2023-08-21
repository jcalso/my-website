import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import AppRouter from './router';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;