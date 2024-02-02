import { FooterStyle, LinkStyle } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyle>
            <p>our contacts</p> 
            <p>📱</p>
            <LinkStyle href="tel:+380730000000" target="_blank">
            +380730000000
            </LinkStyle>
        </FooterStyle>
    )
};

export default Footer;