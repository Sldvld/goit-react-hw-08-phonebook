import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllContacts,
  selectFilter,
} from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import css from './ContactList.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const lowerFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerFilter)
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
}
