import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';

export default function Interface() {
  const email = useSelector((state: RootState) => state.user.email);
  const name = useSelector((state: RootState) => state.user.name);
  const imgUrl = useSelector((state: RootState) => state.user.profile_img);

  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <div className=" text-white min-h-[calc(100vh-80px)] flex flex-col bg-gray-700 justify-center items-center">
      <h1>Hello {name} </h1>
      <p>Your email is {email}</p>
      {token ? <h2> Welcome {name}</h2> : <h2> Please login first</h2>}
      <div>
        <img src={imgUrl} alt="Profile Pic" width="150" />
      </div>
      <button onClick={() => console.log(' Your email is => ', email)}>
        Click to Get email
      </button>

     
    </div>
  );
}
