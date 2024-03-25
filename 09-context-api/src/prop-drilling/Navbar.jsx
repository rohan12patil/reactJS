import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () =>{
    const [user, setUser] = useState({name:'Bob'});
    const logout = () =>{
        setUser(null);
    }
    return <nav>
        <h2>Context API</h2>
        <NavLinks user={user} logout={logout}/>
    </nav>
}

export default Navbar;