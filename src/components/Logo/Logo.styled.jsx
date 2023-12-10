import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;

  font-weight: 600;
  transition: color 250ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
