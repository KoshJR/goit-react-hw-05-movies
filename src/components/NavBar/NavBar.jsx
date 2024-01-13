import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav>
      <div className={css.navContainer}>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="movie"
        >
          Movie
        </NavLink>
      </div>
    </nav>
  );
};
