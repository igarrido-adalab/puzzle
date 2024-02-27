import { NavLink } from 'react-router-dom';

function Header() {

return (
  <header>
    <h1>Puzzles!</h1>
    <nav>
      <ul className="main-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="puzzle">Puzzle</NavLink>
        </li>
        <li>
          <NavLink to="contact-us">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  );
}


export default Header;