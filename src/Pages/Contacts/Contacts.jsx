import css from './Contacts.module.css';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';

export default function Contacts() {
  return (
    <section>
      <ContactForm />
      <div className={css.filterBlock}>
        <h2 className={css.contactTitle}>Contacts</h2>
        <Filter />
      </div>
      <ContactList />
    </section>
  );
}
