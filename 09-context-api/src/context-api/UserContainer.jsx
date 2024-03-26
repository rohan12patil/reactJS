import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = ({ user, logout }) => {

  const {user,logout} = useContext(NavbarContext);

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
