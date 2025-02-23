import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';

const Home: React.FC = () => {
  // console.log('Token from Redux store:', token);
  const token = useSelector( (state: RootState) => state.auth.token);
  console.log('Token from Redux store:', token);
  return (
    <div className=" text-white min-h-[calc(100vh-80px)] flex flex-col bg-gray-700 justify-center items-center">
      <h1>Welcome to the Home Page</h1>
      {
        token ? <h2> Vishal</h2> : null
      }
      <p>This is the home page content.</p>
      {/* <h2>Hello Sir : Your cookie token is : {token} </h2> */}
      <div className="p-2 rounded-2xl mt-10 text-black h-auto w-auto bg-gray-500 max-w-md">
        <p className="break-words text-center">
          {' '}
          <strong>Cookie Token 👇</strong> {document.cookie.split('=')[1]}
        </p>
      </div>
      <div className="p-2 rounded-2xl mt-10 text-black h-auto w-auto bg-gray-500 max-w-md">
        <p className="break-words text-center">
          {' '}
          <strong>Token Stored in State: 👇</strong> {token}
        </p>
      </div>
    </div>
  );
};

export default Home;
