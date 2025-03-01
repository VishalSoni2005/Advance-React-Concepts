import { Route, Routes } from 'react-router';
// import Home from './Pages/00_Home.tsx';
import Navbar from './Components/02_Navbar/Navbar.tsx';
import Authform from './Components/01_AuthForm/Authform.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import Interface from './Pages/01_Interface.tsx';
import Dashboard from './Pages/02_Dashboard.tsx';

const App = () => {
  return (
    <MantineProvider>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signin" element={<Authform type="signin" />} />
        <Route path="/signup" element={<Authform type="signup" />} />
        {/* <Route path="/interface" element={<Interface />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MantineProvider>
  );
};

export default App;

// import axios from 'axios';
// import cookie from "js-cookie"

// export default function App() {
//   const request = async() => {
//     try{
//       const name = "vishal";
//       const response = await axios.post("http://localhost:3000/test", name);
//       console.log(response.data);
//       cookie.set(response.data.token)
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
//   const removeCookies = () => {
//     cookie.remove('email');
//     cookie.remove('profile_img');
//     cookie.remove('name');
//     cookie.remove('undefined');
//     cookie.remove('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9=');
//     console.log('Cookies removed successfully');
//   }
//   const showCookies = () => {
//     console.log(document.cookie);
//   }
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>This is a React App.</p>
//       <p>Please replace this content with your own.</p>
//       <button className='bg-green-500' onClick={() => request()}>Click me</button>
//       <button className='bg-red-500' onClick={() => removeCookies()}>Remove Cookies</button>
//        <button className='bg-blue-500' onClick={() => showCookies()}>Show Cookies</button>
//     </div>
//   )
// }
