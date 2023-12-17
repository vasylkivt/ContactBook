import styled from 'styled-components';

export const ModalWrap = styled.div`
  backdrop-filter: blur(10px);
  background-color: #00000066;
  width: 280px;
  padding: 20px 30px;
  border-radius: 10px;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 375px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 440px;
    font-size: 26px;
  }
  @media screen and (min-width: 1440px) {
    width: 660px;
    font-size: 30px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 20px;

  button {
    background-color: transparent;
    border: none;
  }
`;
