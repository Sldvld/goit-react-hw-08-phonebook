import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import css from './ContactItem.module.css';
import Notiflix from 'notiflix';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const hendleDeleteContact = () => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`${name} was deleted`);
  };
  return (
    <li className={css.contactItem} key={id}>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button className={css.contactButton} onClick={hendleDeleteContact}>
        Delete
      </button>
    </li>
  );
};
