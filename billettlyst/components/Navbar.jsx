import {Link} from "react-router-dom";

function Navbar () {
    return (
        <nav>
            <Link to="/">Billettlyst</Link>
            <Link to="/category/music">Musikk</Link>
            <Link to="/category/sport">Sport</Link>
            <Link to="/category/theatre">Theatre</Link>
            <Link to="/dashboard">Logg inn</Link>
        </nav>
    );
}

export default Navbar;