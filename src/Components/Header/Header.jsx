import scss from './Header.module.scss';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movie</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
