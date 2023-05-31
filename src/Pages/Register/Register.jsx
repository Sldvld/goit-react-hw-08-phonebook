import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/auth-operations';
import css from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formLabel}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
          className={css.formInput}
          placeholder="Enter your Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.formLabel}>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          className={css.formInput}
          placeholder="Enter your E-mail"
          required
        />
        <label className={css.formLabel}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="off"
          className={css.formInput}
          placeholder="Enter a strong password"
          required
        />
        <button type="submit" className={css.formButton}>
          Register
        </button>
      </form>
    </div>
  );
}
