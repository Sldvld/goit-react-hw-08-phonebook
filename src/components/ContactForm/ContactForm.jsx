import css from './Form.module.css';
import Notiflix from 'notiflix';
import { selectAllContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contacts/contacts-selectors';
import Loader from 'components/Loader/Loader';
import { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);

  const handleName = evt => {
    setName(evt.currentTarget.value);
  };
  const handleNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const isNameExists = contacts.some(
      contact => contact.name?.toLowerCase() === name.toLocaleLowerCase()
    );

    if (isNameExists) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    Notiflix.Notify.success(
      `Yes! The contact ${name} has been added to the list`
    );
  };

  return (
    <>
      <h1 className={css.formTitle}>Phonebook</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name" className={css.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
          placeholder="Add name"
          className={css.formInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number" className={css.formLabel}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          id="number"
          value={number}
          onChange={handleNumber}
          placeholder="Add number:   XXX-XX-XX "
          className={css.formInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className={css.formButton}>
          {isLoading ? <Loader /> : 'Add contact'}
        </button>
      </form>
    </>
  );
}
