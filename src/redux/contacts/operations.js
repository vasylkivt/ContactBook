import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastMessage } from 'utils/toast';

axios.defaults.baseURL = 'https://contact-book-backend-gs28.onrender.com';
// axios.defaults.baseURL = 'http://localhost:1618';

const CONTACT_ENDPOINTS = {
  getAll: '/api/contacts',
  add: '/api/contacts',
  delete: '/api/contacts',
  update: '/api/contacts',
};

//! Get all contacts
export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(CONTACT_ENDPOINTS.getAll);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! add contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(CONTACT_ENDPOINTS.add, contact);
      toastMessage.add(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! delete contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ _id, name }, thunkAPI) => {
    try {
      await axios.delete(`${CONTACT_ENDPOINTS.delete}/${_id}`);
      toastMessage.remove(name);

      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! update contact
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ([editedContact, updateData], thunkAPI) => {
    try {
      const { data } = await axios.put(
        `${CONTACT_ENDPOINTS.update}/${editedContact._id}`,
        updateData
      );
      toastMessage.update(editedContact, updateData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
