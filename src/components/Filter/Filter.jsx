import { Input } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'Redux/filtersSlice';

export const Filter = ({filter}) => {
  
  const dispatch = useDispatch();

  return (
    <>
      <Input
        placeholder="Search name"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </>
  );
};
