import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectShowModal,
  selectEditedContact,
  selectError,
  selectLoading,
} from '/src/redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const showModal = useSelector(selectShowModal);
  const editedContact = useSelector(selectEditedContact);

  return {
    contacts,
    loading,
    error,
    showModal,
    editedContact,
  };
};
