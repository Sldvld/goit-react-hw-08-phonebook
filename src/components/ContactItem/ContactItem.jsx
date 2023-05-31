import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectLoading } from 'redux/contacts/contacts-selectors';
import css from './ContactItem.module.css';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const hendleDeleteContact = () => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`${name} was deleted`);
  };
  return (
    <li className={css.contactItem} key={id}>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button
        className={css.contactButton}
        disabled={isLoading}
        onClick={hendleDeleteContact}
      >
        {isLoading ? <Loader /> : 'Delete'}
      </button>
    </li>
  );
};
