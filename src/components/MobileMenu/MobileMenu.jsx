import { AuthNav, MainNav, UserMenu } from 'components';
import { useAuth } from 'hooks';
import { Backdrop, MenuWrap, NavWrap } from './MobileMenu.stuled';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function MobileMenu({ onShow, setOnShow }) {
  const { isLoggedIn } = useAuth();

  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  return createPortal(
    <>
      <CSSTransition
        in={onShow}
        nodeRef={backdropRef}
        timeout={400}
        classNames="backdrop-wrapper"
        unmountOnExit
      >
        <Backdrop onClick={() => setOnShow(false)} ref={backdropRef} />
      </CSSTransition>
      <CSSTransition
        in={onShow}
        nodeRef={modalRef}
        timeout={400}
        classNames="modal-wrapper"
        unmountOnExit
      >
        <MenuWrap ref={modalRef}>
          <NavWrap>
            <MainNav setOnShow={setOnShow} />
          </NavWrap>
          <NavWrap>
            {' '}
            {!isLoggedIn ? (
              <AuthNav setOnShow={setOnShow} />
            ) : (
              <UserMenu setOnShow={setOnShow} />
            )}
          </NavWrap>
        </MenuWrap>
      </CSSTransition>
    </>,

    document.querySelector('#mobile-menu-root')
  );
}
