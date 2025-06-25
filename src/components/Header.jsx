import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EdTech Platform</Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/fiches-metiers">Fiches métiers</Link></li>
          <li><Link to="/revision-bac">Révision Bac</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/orientation">Orientation</Link></li>
          <li><Link to="/temoignages">Témoignages</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;