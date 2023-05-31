import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux//auth/auth-operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.welcomeMenu}>
      <p className={css.userItem}>Welcome, {user.name}</p>
      <button className={css.userLogout} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
