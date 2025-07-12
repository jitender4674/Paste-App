import { NavLink } from "react-router-dom";


function Navbar(){

    return(
        <div className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
        </NavLink>

        <NavLink to="/pastes" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Pastes
        </NavLink>
        </div>
    )
};

export default Navbar;