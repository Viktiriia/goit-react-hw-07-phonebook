import {  createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './requestsAPI';

const handlePanding = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.contacts = action.payload;
};
  
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  state.contacts.unshift(action.payload);
  state.isLoading = false;
  state.isError = null;
};
  
  export const handleDeleteContactFulfilled = (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload.id
    );
    state.isLoading = false;
    state.isError = null;
  };
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      contacts: [],
      isLoading: false,
      isError: null,
    },
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.pending, handlePanding)
        .addCase(fetchContacts.fulfilled, handleFulfilled)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePanding)
        .addCase(addContact.fulfilled, handleAddContactFulfilled)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePanding)
        .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
        .addCase(deleteContact.rejected, handleRejected);
    },
  });
  
  export const newReducers = contactsSlice.reducer;

  // export const getContactsThunk = () => {
  //     return async (dispatch) => {
  //       try {
  //           // запит на бекенд
  //         dispatch(contactSlice.actions.fetching());
  //           // дані що надійшли
  //         const data = await dispatch(fetchContacts());
  //         dispatch(contactSlice.actions.fetchSuccess(data));
  //       } catch (error) {
  //         dispatch(contactSlice.actions.fetchError(error));
  //       }
  //     };
  //   };
  
  
  // const initialState = {
  //   contacts: {
  //     items: [],
  //     isLoading: false,
  //     error: null,
  //   },
  // };
// const contactSlice = createSlice({
//   name: 'items',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(addContact.fulfilled, handleFulfilled)
//       .addCase(deleteContact.rejected, handleRejected);
//   },

  // reducers: {
  //   fetching: state => {
  //     state.contacts.isLoading = true;
  //   },
  //   fetchSuccess: (state, { payload }) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.items = payload.contacts;
  //     state.contacts.error = '';
  //   },
  //   fetchError: (state, { payload }) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = payload;
  //   },
  // },
  //   {
  //     [getContactsThunk.pending]: state => {
  //       state.contacts.isLoading = true;
  //     },
  //     [getContactsThunk.fulfilled]: (state, { payload }) => {
  //       state.contacts.isLoading = false;
  //       state.contacts.items = payload.contacts;
  //       state.contacts.error = '';
  //     },
  //     [getContactsThunk.rejected]: (state, { payload }) => {
  //       state.contacts.isLoading = false;
  //       state.contacts.error = payload;
  //     },
  //   },



