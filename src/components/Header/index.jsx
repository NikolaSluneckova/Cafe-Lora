import './index.css';

export const Header = ({ showMenu = true }) => {
  return (
    <header id="home">
      <div className="header__content container">
        <a href="/" className="site-logo">
          <img src="/img/site-logo.png"/>
        </a>

        {showMenu && (
          <div className="navigation">
            <button className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};