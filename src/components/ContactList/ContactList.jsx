import { useDispatch } from 'react-redux';
import { ButtonDel, List, Item } from './ContactList.styled';
import { deleteContact } from 'Redux/asyncRedux/requestsAPI'; 
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const filterArray = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List >
      { filterArray.map(({ name, number, id }) => (
        <Item key={id} id={id}>
          {name}: {number}
          <ButtonDel onClick={() => dispatch(deleteContact(id))}>
            {' '}
            Delete
          </ButtonDel>
        </Item>
      ))}
    </List>
  );
};