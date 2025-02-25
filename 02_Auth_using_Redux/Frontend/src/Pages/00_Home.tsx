import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
// import Particle from '../Components/Particle';

const Home: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.user);
  // const name = useSelector( (state: RootState) => state.user.name);

  return (
    <div className=" text-white min-h-[calc(100vh-80px)] flex flex-col bg-gray-700 justify-center items-center">
      <h1>Welcome to the Home Page</h1>
      {token ? <h2 className="text-white capitalize"> {user.name}</h2> : null}
      <div className="p-2 rounded-2xl mt-10 text-black h-auto w-auto bg-gray-500 max-w-md">
        <p className="break-words text-center">
          {' '}
          <strong>Cookie Stored in Browser: 👇</strong> {document.cookie}
        </p>
      </div>
      <div className="p-2 rounded-2xl mt-10 text-black h-auto w-auto bg-gray-500 max-w-md">
        <p className="break-words text-center">
          {' '}
          <strong>Token Stored in State: 👇</strong> {token.token} <br />
          <strong>Email Address:</strong> {token.email}
        </p>
      </div>
      <div className="p-2 rounded-2xl mt-10 text-black h-auto w-auto bg-gray-500 max-w-md">
        <p className="break-words text-center">
          {' '}
          <strong>User in State: 👇</strong> {user.name} <br />
        </p>
      </div>
    </div>
  );
};

export default Home;
