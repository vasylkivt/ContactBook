import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: rgba(0, 0, 0, 0.3);

  &.backdrop-wrapper-enter {
    opacity: 0;
  }

  &.backdrop-wrapper-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  &.backdrop-wrapper-exit {
    opacity: 1;
  }

  &.backdrop-wrapper-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out 200ms;
  }
`;

export const MenuWrap = styled.div`
  padding-top: 68px;
  position: fixed;

  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  z-index: 0;
  background-color: #50505097;
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 40px;

  &.modal-wrapper-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.modal-wrapper-enter-active {
    opacity: 1;
    transform: translateX(0%);

    transition: opacity 200ms ease-in-out 200ms,
      transform 200ms ease-in-out 200ms;
  }

  &.modal-wrapper-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  &.modal-wrapper-exit-active {
    opacity: 0;
    transform: translateX(100%);

    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
