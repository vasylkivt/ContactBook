import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import {
  Button,
  FormStyled,
  PersonIcon,
  StyledLink,
  Title,
  Text,
  PasswordIcon,
  InvalidInput,
} from 'components';

import { Input } from '../Input';
import { authOperations } from '/src/redux/auth';
import { scheme } from '../FormValidation';

const schemeLogin = Yup.object().shape({
  email: scheme.email,
  password: scheme.password,
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        dispatch(authOperations.login(values));
      }}
      validationSchema={schemeLogin}
    >
      {() => (
        <FormStyled>
          <Title>Login</Title>

          <Input icon={<PersonIcon />} type="text" name="email" label="Email">
            {' '}
            <ErrorMessage name="email" component={InvalidInput} />
          </Input>

          <Input
            icon={<PasswordIcon />}
            type="password"
            name="password"
            label="Password"
          >
            {' '}
            <ErrorMessage name="password" component={InvalidInput} />
          </Input>

          <Text>
            Don't have an account yet?{' '}
            <StyledLink to="/register">
              <u>Sign up.</u>
            </StyledLink>
          </Text>

          <Button type="submit">Login</Button>
        </FormStyled>
      )}
    </Formik>
  );
};
