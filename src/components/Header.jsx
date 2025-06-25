import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EdTech Platform</Link>
      </div>
      <nav className="navbar main-nav">
        <ul className="navbar-links">
          <li className="navbar-link"><Link to="/fiches-metiers">Fiches métiers</Link></li>
          <li className="navbar-link"><Link to="/revision-bac">Révision Bac</Link></li>
          <li className="navbar-link"><Link to="/quiz">Quiz</Link></li>
          <li className="navbar-link"><Link to="/orientation">Orientation</Link></li>
          <li className="navbar-link"><Link to="/temoignages">Témoignages</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;