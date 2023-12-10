import { AuthNav, Container, MainNav, UserMenu } from 'components';
import { Header, NavWrap, Wrap } from './AppBar.style';
import { useAuth } from 'hooks';
import Logo from 'components/Logo/Logo';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const screenWidth = 400;

  return (
    <Header>
      <Container>
        <NavWrap>
          <Wrap>
            <Logo />
            {screenWidth > 768 ? <MainNav /> : null}
          </Wrap>
          {screenWidth > 768 ? (
            <Wrap>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</Wrap>
          ) : (
            '|||'
          )}
        </NavWrap>
      </Container>
    </Header>
  );
};
