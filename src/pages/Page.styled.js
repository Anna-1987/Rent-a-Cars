import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-image: ${props => props.$url || 'none'};
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
 
`;

export const SectionBackdrop = styled.div `
  position: absolute;
  width: 100%;
  height: 564px;
  background-color: rgba(46, 47, 66, 0.7);
`;

export const Container = styled.div` 
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: ${props => props.$bottom || '20px'};
  padding-top: ${props => props.$top || '0px'};
  padding-left: 120px;
  padding-right:120px;
`;

export const EmptyPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: rgba(18, 20, 23, 0.5);
  margin: 0 auto;
  padding: 0px 30px;
  
`;

export const WelcomeWrap = styled.div`
  position: relative;
  z-index:2;
  height: 564px;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  font-weight: 600;
  font-size: 22px;
  color: black;
`;

export const Welcome = styled.div`
  font-size: 36px;
  text-align: center;
  margin: auto 0;
  padding: 15px;
  color: #fff;
  }
`;

export const BtnGo = styled.button`
padding: 8px;
margin-top: 64px;
justify-content: center;
align-items: center;

font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px;

border-radius: 12px;
background: #3470FF;
border-color: transparent;

&:hover,
 :focus{
  background-color: #0B44CD;
  justify-content: center;
  align-items: center;
}
`;

export const Link = styled(NavLink) `
  color: #fff;
`;