import { Route, Routes } from 'react-router';
import Home from './Pages/00_Home.tsx';
import Navbar from './Components/02_Navbar/Navbar.tsx';
// import Authform from './Components/01_AuthForm/Authform.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Interface from './Pages/01_Interface.tsx';
import Dashboard from './Pages/02_Dashboard.tsx';

const App = () => {
  return (
    <MantineProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<Authform type="signin" />} /> */}
        {/* <Route path="/signup" element={<Authform type="signup" />} /> */}
        <Route path="/interface" element={<Interface />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MantineProvider>
  );
};

export default App;
