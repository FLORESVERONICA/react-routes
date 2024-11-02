import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <link to='/'>Home</link>
            <link to='/projects'>Projects</link>
            <link to='/resumen'>Resume</link>
        </nav>
    );
}
export default Navbar;