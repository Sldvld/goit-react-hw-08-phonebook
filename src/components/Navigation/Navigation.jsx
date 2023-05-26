import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className={css.headerList}>
      <li className={css.headerElement}>
        <NavLink className={css.headerLink} to="/login">
          Log In
        </NavLink>
      </li>
      <li className={css.headerElement}>
        <NavLink className={css.headerLink} to="/register">
          Registrate
        </NavLink>
      </li>
    </ul>
  );
}
