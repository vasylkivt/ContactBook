import styled from 'styled-components';

export const HeroWrap = styled.div`
  background: transparent;
  padding: 20px;
  border-radius: 20px;
  backdrop-filter: blur(15px);

  @media screen and (min-width: 375px) {
    padding: 35px;
  }
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  font-size: 28px;

  font-weight: 600;

  @media screen and (min-width: 375px) {
    font-size: 34px;
  }
  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.white};

  font-size: 24px;

  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 1.4;
  font-weight: 400;
`;
export const ListWrap = styled.div``;
export const List = styled.ul``;
export const Item = styled.li`
  & ::before {
    content: '✦ ';
    margin-left: 16px;
  }
`;
