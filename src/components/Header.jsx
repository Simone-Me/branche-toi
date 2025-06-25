import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/" className="brand-link">
            Branche-toi
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="navbar-links">
            <li className="navbar-link">
              <Link to="/fiches-metiers">Fiches métiers</Link>
            </li>
            <li className="navbar-link">
              <Link to="/revision-bac">Révision Bac</Link>
            </li>
            <li className="navbar-link">
              <Link to="/quiz">Quiz</Link>
            </li>
            <li className="navbar-link">
              <Link to="/orientation">Orientation</Link>
            </li>
            <li className="navbar-link">
              <Link to="/temoignages">Témoignages</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
