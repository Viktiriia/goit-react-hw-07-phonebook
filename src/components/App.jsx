import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { Container } from './Form/Form.styled';

export default function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </Container>
  );
}