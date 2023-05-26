import authSelecors from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux//auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelecors.getUserName);
  return (
    <>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </>
  );
}
