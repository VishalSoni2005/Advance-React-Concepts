import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/Slice';
import { RootSrate } from '../Redux/Store';
import { Link } from 'react-router';

const Fun: React.FC = () => {
  const count = useSelector((state: RootSrate) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div className="text-blue-400 flex flex-col items-center justify-center capitalize gap-6">
      <h1>Fun Page</h1>
      <p className='text-xl'>Current count: <strong className='text-red-400'>{count}</strong></p>
      <div className='flex gap-4 text-white'>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        


      </div>
      <Link to={'/home'}>
        <button>Home</button></Link>
    </div>
  );
};

export default Fun;
