// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://6538c0dea543859d1bb1d9d1.mockapi.io';

// const postsInstance = axios.create({
//   baseURL: 'https://6538c0dea543859d1bb1d9d1.mockapi.io'
// })

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const response = await axios.get('/contacts');
//     console.log('contacts:', response);
//     return response.data;
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async newContacts => {
//     const response = await axios.post('/contacts', newContacts);
//     return response.data;
//   }
// );


// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     const response = await axios.delete(`/contacts/${id}`);
//     return response.data;
//   }
// );




import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://651d032c44e393af2d590112.mockapi.io';

const createContactAsyncThunk = (name, asyncFunction) =>
  createAsyncThunk(`contacts/${name}`, async (payload, thunkAPI) => {
    try {
      const response = await asyncFunction(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const fetchContacts = createContactAsyncThunk('getContacts', () =>
  axios.get('/contacts')
);
export const addContact = createContactAsyncThunk('addContact', newContacts =>
  axios.post('/contacts', newContacts)
);
export const deleteContact = createContactAsyncThunk(
  'deleteContact',
  id => axios.delete(`/contacts/${id}`)
);