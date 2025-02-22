import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar.tsx';
import Home from './Pages/Home.tsx';
import Authform from './Components/Authform.tsx';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Authform type="signin" />} />
        <Route path="/signup" element={<Authform type="signup" />} />
      </Routes>
    </MantineProvider>
  );
};

export default App;
