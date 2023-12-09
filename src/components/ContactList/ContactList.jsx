import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { List, ListWrap } from './ContactList.style';
import { ContactItem, Filter, MoreDetailsForm, Notification } from 'components';

import { useAuth, useContacts, useFilter } from 'hooks';
import { contactsOperations } from 'redux/contacts';

export const ContactList = () => {
  const { contacts, loading, error, showModal } = useContacts();
  const { visibleContacts } = useFilter();
  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getAllContacts());
  }, [dispatch, isLoggedIn]);

  const isContactEmpty = contacts.length === 0;
  const isVisibleContactsEmpty = visibleContacts.length === 0;

  return (
    <ListWrap>
      {!isContactEmpty && <Filter />}

      <List>
        {visibleContacts.map(contact => (
          <ContactItem contact={contact} key={contact._id} />
        ))}
      </List>
      {showModal && <MoreDetailsForm />}

      {!loading && !isContactEmpty && isVisibleContactsEmpty && (
        <Notification>
          There are no contacts here with that name… 🧐 enter a new name ✍️ .
        </Notification>
      )}

      {!error && !loading && isContactEmpty && (
        <Notification $margin="auto">
          No contacts...🥲. Add your first contact ☎️ .
        </Notification>
      )}

      <BarLoader
        loading={loading}
        color="#2A9D8F"
        width="100%"
        speedMultiplier={0.5}
      />

      {error && <Notification>{error}... 😢😢😢</Notification>}
    </ListWrap>
  );
};
