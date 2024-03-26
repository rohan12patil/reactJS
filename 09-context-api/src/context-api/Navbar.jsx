import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

// create context
export const NavbarContext = createContext();

//custom Hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () =>{
    const [user, setUser] = useState({name:'Bob'});
    const logout = () =>{
        setUser(null);
    }
    return (
    <NavbarContext.Provider value={{user, logout}}>
    <nav>
        <h2>Context API</h2>
        <NavLinks user={user} logout={logout}/>
    </nav>
    </NavbarContext.Provider>
    );
}

export default Navbar;