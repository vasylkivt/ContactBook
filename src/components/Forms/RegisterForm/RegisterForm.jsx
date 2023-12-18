import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Title,
  FormStyled,
  PersonIcon,
  StyledLink,
  Text,
  PasswordIcon,
  InvalidInput,
} from 'components';
import { useDispatch } from 'react-redux';
import { authOperations } from '/src/redux/auth';
import { Input } from '../Input';
import { scheme } from '../FormValidation';

const schemeRegister = Yup.object().shape({
  name: scheme.name,
  email: scheme.email,
  password: scheme.password,
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={values => {
        dispatch(
          authOperations.register({
            ...values,
          }),
        );
      }}
      validationSchema={schemeRegister}
    >
      {() => (
        <FormStyled>
          <Title>Sign up</Title>

          <Input icon={<PersonIcon />} type="text" name="name" label="Name">
            <ErrorMessage name="name" component={InvalidInput} />
          </Input>
          <Input icon={<PersonIcon />} type="email" name="email" label="Email">
            <ErrorMessage name="email" component={InvalidInput} />
          </Input>

          <Input
            icon={<PasswordIcon />}
            type="password"
            name="password"
            label="Password"
          >
            <ErrorMessage name="password" component={InvalidInput} />
          </Input>

          <Text>
            Already have an account?{' '}
            <StyledLink to="/login">
              <u>Log in.</u>
            </StyledLink>
          </Text>

          <Button type="submit">Sign up</Button>
        </FormStyled>
      )}
    </Formik>
  );
};
