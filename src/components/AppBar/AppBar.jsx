import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.headerBox}>
      <NavLink className={css.headerLink} to="/login">
        <div className={css.headerLabel}>Phonebook</div>
      </NavLink>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </header>
  );
}
