import { Input } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'Redux/filtersSlice';

export const Filter = ({filter}) => {

const dispatch = useDispatch();
const onChangeValue = (evt) => {
  dispatch(filterContacts(evt.target.value))
}
  return (
  <>
    <label htmlFor="filter">Find contacts by name:</label>
    <Input type="text" name="filter" onChange={onChangeValue} value={filter} />
  </>)
;
}