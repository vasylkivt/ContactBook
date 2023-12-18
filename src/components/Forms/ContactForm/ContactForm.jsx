import { ErrorMessage, Formik } from 'formik';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import {
  Button,
  FormStyled,
  InvalidInput,
  PersonIcon,
  TelephoneIcon,
  Title,
} from 'components';
import { selectContacts } from '/src/redux/contacts/selectors';

import { contactsOperations } from '/src/redux/contacts';
import { isAlreadyOnList, scheme } from '../FormValidation';
import { Input } from '../Input';

const schemeLogin = Yup.object().shape({
  name: scheme.name,
  number: scheme.number,
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  const inputNameRef = useRef();

  const onSubmit = (formData, action) => {
    if (isAlreadyOnList(contactList, formData)) {
      return;
    }
    dispatch(contactsOperations.addContact(formData));
    action.resetForm();
    inputNameRef.current.focus();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={onSubmit}
        validationSchema={schemeLogin}
      >
        {() => (
          <FormStyled>
            <Title>Add contact</Title>
            <Input
              innerRef={el => {
                inputNameRef.current = el;
              }}
              icon={<PersonIcon />}
              type="text"
              name="name"
              label="Contact name"
            >
              <ErrorMessage name="name" component={InvalidInput} />
            </Input>
            <Input
              icon={<TelephoneIcon />}
              type="tel"
              name="number"
              label="Phone number"
            >
              <ErrorMessage name="number" component={InvalidInput} />
            </Input>

            <Button type="submit">Add contact</Button>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};
