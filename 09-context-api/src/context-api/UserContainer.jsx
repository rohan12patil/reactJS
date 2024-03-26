import { useAppContext } from "./Navbar";


const UserContainer = ({ user, logout }) => {

  const {user,logout} = useAppContext;

  return (
    <div className="user-container">
    {user ? (
    <>
    <p> Hello There, {user?.name?.toUpperCase()}</p>
    <button className='btn' onClick={logout}>Logout</button>
    </>
    ) : (
        <p>Please Login</p>
    )}
    </div>
  );
};

export default UserContainer;
