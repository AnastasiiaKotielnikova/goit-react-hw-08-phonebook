import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationClk = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  &.active {
    color: blue;
  }
`;
