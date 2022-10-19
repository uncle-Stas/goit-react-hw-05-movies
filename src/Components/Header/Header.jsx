import scss from './Header.module.scss';

import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) =>
  isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <nav>
          <NavLink className={getClassName} to="/" end>
            Home
          </NavLink>
          <NavLink className={getClassName} to="/movies">
            Movie
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
