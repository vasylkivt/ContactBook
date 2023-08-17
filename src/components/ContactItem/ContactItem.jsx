import PropTypes from 'prop-types';

import { BsInfo } from 'react-icons/bs';
import {
  Item,
  Text,
  TextWrap,
  MoreDetails,
  ButtonDel,
} from './ContactItem.style';

import { contactsOperations } from 'redux/contacts';
import { useContacts } from 'hooks';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { openModal } from 'redux/contacts/slice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name } = contact;
  const { loading } = useContacts();

  const handlerDeleteBtn = () => {
    dispatch(contactsOperations.deleteContact({ id, name }));
  };

  const handleInfoBtn = () => {
    dispatch(openModal(contact));
  };

  return (
    <>
      <Item>
        <MoreDetails type="button" onClick={handleInfoBtn}>
          <BsInfo />
        </MoreDetails>
        <TextWrap>
          <Text>{name}</Text>
        </TextWrap>

        <ButtonDel
          disabled={loading && 'disabled'}
          onClick={handlerDeleteBtn}
          type="button"
        >
          <AiOutlineDelete />
        </ButtonDel>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
