import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelecors from '../../redux/auth//auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelecors.getIsLoggedIn);
  return (
    <header className={css.headerBox}>
      <div className={css.headerLabel}>Phonebook</div>

      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </header>
  );
}
