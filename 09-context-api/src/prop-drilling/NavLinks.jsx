import UserContainer from "./UserContainer";

const NavLinks = ({user, logout}) => {
  return (
    <>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout}/>
    </>
  );
};
export default NavLinks;
