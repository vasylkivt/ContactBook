import styled from 'styled-components';

export const ListWrap = styled.div`
  position: relative;
  max-height: 550px;
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  min-height: 420px;

  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  gap: 10px;
  flex-direction: column;

  align-items: center;

  @media screen and (min-width: 375px) {
    width: 320px;
    padding: 25px;
    border-radius: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 50px;
    border-radius: 20px;
  }
`;

export const List = styled.ul`
  overflow: auto;
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`;
