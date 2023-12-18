import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '/src/redux/contacts/selectors';

export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (items, filter) =>
    items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
