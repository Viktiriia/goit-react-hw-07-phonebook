import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, action) => {
      //   state.contacts.push(action.payload);
      state.contacts = [...state.contacts, action.payload];
    },
    deleteCantacts: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContacts, deleteCantacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;