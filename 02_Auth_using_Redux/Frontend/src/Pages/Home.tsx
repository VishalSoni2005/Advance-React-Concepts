import React from 'react';

const Home: React.FC = () => {
  // console.log('Token from Redux store:', token);
  return (
    <div className=" text-white min-h-[calc(100vh-80px)] flex flex-col bg-gray-700 justify-center items-center">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <h2>Hello Sir : Your cookie token is : {} </h2>
      <div className="p-2 rounded-2xl mt-10 text-black h-auto w-auto bg-gray-500 max-w-md">
        <p className="break-words text-center">
          {' '}
          <strong>Cookie Token 👇</strong> {document.cookie.split('=')[1]}
        </p>
      </div>
    </div>
  );
};

export default Home;
