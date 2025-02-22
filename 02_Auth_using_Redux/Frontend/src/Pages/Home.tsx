import React from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from '../Redux/Store';

const Home: React.FC = () => {

  const token = useSelector( (state: AuthState) => state.token);
  return (
    <div className=" min-h-[calc(100vh-80px)] flex flex-col bg-gray-700 justify-center items-center">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <h2>Hello Sir : Your cookie token is : {token} </h2>
      <div className="h-auto w-auto bg-gray-500 max-w-md">
        <p className="break-words">{document.cookie}</p>
      </div>
    </div>
  );
};

export default Home;
