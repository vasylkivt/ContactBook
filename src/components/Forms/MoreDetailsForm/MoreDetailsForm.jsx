import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';
import * as Yup from 'yup';

import { closeModal } from '/src/redux/contacts/slice';
import { useCloseModalOnEscape, useContacts } from 'hooks';
import { contactsOperations } from '/src/redux/contacts';

import {
  ButtonClose,
  ButtonEdit,
  FormStyled,
  MoreDetailsWrap,
  Title,
} from './MoreDetails.style';
import { Button, InvalidInput, PersonIcon, TelephoneIcon } from 'components';

import { Input } from '../Input';
import { isAlreadyOnList, scheme } from '../FormValidation';

const schemeLogin = Yup.object().shape({
  name: scheme.name,
  number: scheme.number,
});

export const MoreDetailsForm = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { editedContact, contacts } = useContacts();
  const dispatch = useDispatch();
  const initialName = editedContact.name;
  const initialNumber = editedContact.number;

  useCloseModalOnEscape(dispatch);

  const onSubmit = formData => {
    const { name, number } = formData;
    const updateData = {};

    if (isAlreadyOnList(contacts, formData, editedContact.id)) return;
    if (name !== editedContact.name) updateData.name = name;
    if (number !== editedContact.number) updateData.number = number;

    if (Object.keys(updateData).length === 0) {
      dispatch(closeModal());
      return;
    }

    dispatch(contactsOperations.updateContact([editedContact, updateData]));
  };

  return (
    <>
      <MoreDetailsWrap>
        <Title>Contact Info</Title>
        <Formik
          enableReinitialize
          initialValues={{
            name: initialName,
            number: initialNumber,
          }}
          onSubmit={onSubmit}
          validationSchema={schemeLogin}
        >
          {() => (
            <FormStyled>
              <Input
                icon={<PersonIcon />}
                type="text"
                name="name"
                label="Contact name"
                disabled={!isEdit}
              >
                <ErrorMessage name="name" component={InvalidInput} />
                <ButtonEdit
                  onClick={() => setIsEdit(prev => !prev)}
                  type="button"
                >
                  <AiFillEdit />
                </ButtonEdit>
              </Input>

              <Input
                icon={<TelephoneIcon />}
                type="tel"
                name="number"
                label="Phone number"
                disabled={!isEdit}
              >
                <ErrorMessage name="number" component={InvalidInput} />
                <ButtonEdit
                  onClick={() => setIsEdit(prev => !prev)}
                  type="button"
                >
                  <AiFillEdit />
                </ButtonEdit>
              </Input>

              {isEdit && <Button type="submit">Edit contact</Button>}
            </FormStyled>
          )}
        </Formik>

        <ButtonClose
          id="editButton"
          onClick={() => dispatch(closeModal())}
          type="button"
        >
          <GrFormClose />
        </ButtonClose>
      </MoreDetailsWrap>
    </>
  );
};
