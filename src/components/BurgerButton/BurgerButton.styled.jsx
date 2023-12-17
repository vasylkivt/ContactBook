import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;

  .top,
  .center,
  .bottom {
    height: 3px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 2px;

    transition: opacity 400ms ease-in-out, rotate 400ms ease-in-out,
      width 400ms ease-in-out;
  }

  .top {
    transform-origin: bottom left;
    rotate: ${({ $isOpen }) => ($isOpen ? '45deg' : '0')};
    width: ${({ $isOpen }) => ($isOpen ? '121%' : '100%')};
  }

  .center {
    width: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  .bottom {
    margin-left: auto;
    transform-origin: top left;
    rotate: ${({ $isOpen }) => ($isOpen ? '-45deg' : '0')};
    width: ${({ $isOpen }) => ($isOpen ? '121%' : '80%')};
  }
`;
