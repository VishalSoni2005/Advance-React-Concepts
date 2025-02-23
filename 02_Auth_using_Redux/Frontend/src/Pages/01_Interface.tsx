import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';

export default function Interface() {
  const email = useSelector((state: RootState) => state.user.email);
  
  return (
    <div className=" text-white min-h-[calc(100vh-80px)] flex flex-col bg-gray-700 justify-center items-center">
      <h1>Hello, {email}</h1>
      <button onClick={() => console.log( " Your email is => ",email)}>Click to Get email</button>
    </div>
  );
}
