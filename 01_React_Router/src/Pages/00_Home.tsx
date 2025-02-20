import { useDispatch, useSelector } from 'react-redux';
import { RootSrate } from '../Redux/Store';
import { decrement, increment, incrementByAmount } from '../Redux/Slice';

const Home: React.FC = () => {
  const count = useSelector((state: RootSrate) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-blue-400 flex flex-col items-center justify-center capitalize gap-6">
      <h1> Welcome to Home</h1>
      <p className="text-xl">
        Count:{' '}
        <strong className={`${count > 0 ?  count === 0 ? 'text-white' : 'text-green-400' : 'text-red-400'}`}>
          {count}
        </strong>
      </p>
      <div className="flex gap-4 text-white">
        <button onClick={() => dispatch(increment())}>Increase It</button>
        <button onClick={() => dispatch(decrement())}>Fuck It</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Star by 5
        </button>
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

// const HomePage = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
//     </div>
//   );
// };

// export default HomePage;
