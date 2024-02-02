import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  padding: 15px 20px;
  background-color:  #0B44CD;
  
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

`;

export const MainTitle = styled.h1`
  font-size: 26px;
  color: #F7F7FB;

`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 8px;
  font-weight: 500;
`;

export const UlStyled = styled.ul`
display: flex;
gap: 8px;
font-weight: 500;
`;

export const LiStyled = styled.li`


`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  position: relative;

  &.active::after {
     content: '';
     position: absolute;
     left: 0;
     bottom: -8px;
     width: 100%;
     height: 4px;
     border-radius: 2px;
     background-color: #FFF;
   }

`;

