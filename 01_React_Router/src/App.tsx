import React from 'react';
import { Link } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/00_Home.tsx';
import Dashboard from './Pages/01_Dashboard.tsx';
import Fun from './Pages/02_Fun.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex gap-8 text-white">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/fun">Fun</Link>
      </div>
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
