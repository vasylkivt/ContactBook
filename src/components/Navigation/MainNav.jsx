import { useAuth } from 'hooks';
import { StyledNavLink } from './Nav.style';

export const MainNav = ({ setOnShow }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledNavLink onClick={() => setOnShow(false)} to="/">
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink onClick={() => setOnShow(false)} to="/contacts">
          Contacts
        </StyledNavLink>
      )}
    </>
  );
};
