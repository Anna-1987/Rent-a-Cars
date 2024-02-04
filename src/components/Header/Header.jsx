import { Section } from "pages/Page.styled";
import { HeaderStyled, LogoWrap, MainTitle, NavStyled, StyledNavLink, UlStyled, LiStyled } from "./Header.styled";
// import Logo from "../../assets/logo.png";

export const Header = () => {
    return (
        <Section>
                <HeaderStyled>
                    <LogoWrap>
                        <MainTitle>Rent 🚘</MainTitle>
                    </LogoWrap>
                    <NavStyled>
                    <UlStyled>
                         <LiStyled>
                           <StyledNavLink to="/">Home</StyledNavLink>
                         </LiStyled>
                         <LiStyled>
                           <StyledNavLink to="/catalog">Catalog</StyledNavLink>
                         </LiStyled>
                         <LiStyled>
                         <StyledNavLink to="/favorites">Favorites</StyledNavLink>
                         </LiStyled>
                    </UlStyled>
                    </NavStyled>
                </HeaderStyled>
        </Section>
    )
};