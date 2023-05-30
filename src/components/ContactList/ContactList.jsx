import { useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectFilter,
} from 'redux/contacts/contacts-selectors';
import { Contact } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  const lowerFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerFilter)
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
}
