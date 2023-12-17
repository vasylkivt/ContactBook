import { StyledNavLink } from './Nav.style';

export const AuthNav = ({ setOnShow }) => {
  return (
    <>
      <StyledNavLink onClick={() => setOnShow(false)} to="/login">
        Login
      </StyledNavLink>
      <StyledNavLink onClick={() => setOnShow(false)} to="/register">
        Register
      </StyledNavLink>
    </>
  );
};
