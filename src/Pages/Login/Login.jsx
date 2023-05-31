import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';
import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section className={css.sectionWrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formLabel}>Email</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
          className={css.formInput}
          required
        />
        <label className={css.formLabel}>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleChange}
          className={css.formInput}
          required
        />
        <button type="submit" className={css.formButton}>
          Log In
        </button>
      </form>
    </section>
  );
}
