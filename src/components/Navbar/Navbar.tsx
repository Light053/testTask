import { RouterPath } from '../../router/config';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classnames';

export const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink
        to={RouterPath.main}
        className={({ isActive }) =>
          classNames('navbar__link', { 'navbar__link--active': isActive })
        }
      >
        Profile
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to={RouterPath.todos}
              className={({ isActive }) =>
                classNames('navbar__link', { 'navbar__link--active': isActive })
              }
            >
              Todos
            </NavLink>
          </li>

          <li>
            <NavLink
              to={RouterPath.users}
              className={({ isActive }) =>
                classNames('navbar__link', { 'navbar__link--active': isActive })
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
