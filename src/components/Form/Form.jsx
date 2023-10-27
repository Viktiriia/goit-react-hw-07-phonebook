import { nanoid } from 'nanoid';
import { Button, FormContainer, Input, Text } from './Form.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from 'Redux/asyncRedux/requestsAPI';

export default function Form() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        break;
    }
  };
  const handleSub = e => {
    e.preventDefault();

    if (
      contacts.some(el => el.name.toLowerCase().includes(name.toLowerCase()))
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(newContact)).then(() => {
        setName('');
        setNumber('');
      });
    }
  };

  return (
    <form onSubmit={handleSub}>
      <FormContainer>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={name}
        />

        <Text>Number </Text>
        <Input
          type="tel"
          name="number"
          required
          onChange={handleChange}
          value={number}
        />

        <Button type="submit">Add contact</Button>
      </FormContainer>
    </form>
  );
}
