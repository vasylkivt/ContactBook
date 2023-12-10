import { useAuth } from 'hooks';
import { StyledNavLink } from './Nav.style';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </>
  );
};
