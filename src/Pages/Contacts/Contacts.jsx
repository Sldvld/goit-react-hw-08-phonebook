import css from './Contacts.module.css';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
export default function Contacts() {
  return (
    <section>
      <h1 className={css.formTitle}>Phonebook</h1>
      <Form />
      <div className={css.filterBlock}>
        <h2 className={css.contactTitle}>Contacts</h2>
        <Filter />
      </div>
      <ContactList />
    </section>
  );
}
