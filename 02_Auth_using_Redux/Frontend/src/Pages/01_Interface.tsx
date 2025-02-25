
export default function Interface() {
  
  const token = document.cookie.split('=')[1].split(';')[0];
  const email = document.cookie.split('=')[2].split(';')[0];
  const profile_img = document.cookie.split('=')[3].split(';')[0];
  const name = document.cookie.split('=')[5]
  const user = { name, email, profile_img };


  return (
    <div className=" text-white min-h-[calc(100vh-80px)] flex flex-col bg-gray-700 justify-center items-center">
      <h1>Hello {user.name} </h1>
      <p>Your email {" => "} {user.email}</p>
      {token ? <h2> Welcome {user.name}</h2> : <h2> Please login first</h2>}
      <div>
        <img src={user.profile_img} alt="Profile Pic" width="150" />
      </div>
      <button onClick={() => console.log(' Your email is => ', user.email)}>
        Click to Get email
      </button>

     
    </div>
  );
}
