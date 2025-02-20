import { useDispatch, useSelector } from 'react-redux';
import { RootSrate } from '../Redux/Store';
import { increment } from '../Redux/Slice';
import { Link } from 'react-router';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootSrate) => state.counter.value);
  return (
    <div className="text-blue-400 flex flex-col items-center justify-center capitalize gap-6">
      <h1>This is Dashboard</h1>
      <p>Count is : {count}</p>
      <button onClick={() => dispatch(increment())}>Increase It</button>
      <Link className='text-white' to={'/home'}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Dashboard;
