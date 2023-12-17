import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { useAuth } from 'hooks';
import { Button } from 'components';
import { StyledNavLink, UserName } from './Nav.style';

export const UserMenu = ({ setOnShow }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <StyledNavLink onClick={() => setOnShow(false)} to="/profile">
        User Profile
      </StyledNavLink>
      <UserName>{user.name}</UserName>
      <Button
        type="button"
        onClick={() => {
          setOnShow(false);
          dispatch(authOperations.logout());
        }}
      >
        Logout
      </Button>
    </>
  );
};
