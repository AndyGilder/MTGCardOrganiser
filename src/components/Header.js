import { NavLink } from "react-router-dom"
import './Header.scss';

function Header() {
  return (
    <header>
        <nav className="top-nav">
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/collection" activeclassname="active">Collection</NavLink>
        </nav>
    </header>
  )
}

export default Header