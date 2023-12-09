import { createSlice } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  getAllContacts,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  showModal: false,
  editedContact: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.showModal = payload._id === state.editedContact?._id ? false : true;
      state.editedContact =
        payload._id === state.editedContact?._id ? null : payload;
    },

    closeModal: state => {
      state.showModal = false;
      state.editedContact = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getAllContacts.rejected, handleRejected)

      //// add contact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = [payload, ...state.items];
      })
      .addCase(addContact.rejected, handleRejected)

      //// delete contact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = state.items.filter(item => item._id !== payload);
      })
      .addCase(deleteContact.rejected, handleRejected)

      //// update contact
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.showModal = false;
        state.editedContact = null;
        state.items = state.items.map(item =>
          item._id !== payload._id ? item : payload
        );
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const { openModal, closeModal } = contactsSlice.actions;
