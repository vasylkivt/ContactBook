import { AuthNav, Container, MainNav, UserMenu } from 'components';
import { Header, NavWrap, Wrap } from './AppBar.style';
import { useAuth } from 'hooks';
import Logo from 'components/Logo/Logo';
import { useEffect, useState } from 'react';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import BurgerButton from 'components/BurgerButton/BurgerButton';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const [onShowMenu, setOnShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  document.body.style.overflow = onShowMenu ? 'hidden' : 'visible';

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <Header>
      <Container>
        <NavWrap>
          <Wrap>
            <Logo />
            {screenWidth > 768 ? <MainNav setOnShow={setOnShowMenu} /> : null}
          </Wrap>
          {screenWidth > 768 ? (
            <Wrap>
              {!isLoggedIn ? (
                <AuthNav setOnShow={setOnShowMenu} />
              ) : (
                <UserMenu setOnShow={setOnShowMenu} />
              )}
            </Wrap>
          ) : (
            <div onClick={() => setOnShowMenu(p => !p)}>
              <BurgerButton isOpen={onShowMenu} />
            </div>
          )}

          <MobileMenu onShow={onShowMenu} setOnShow={setOnShowMenu} />
        </NavWrap>
      </Container>
    </Header>
  );
};
