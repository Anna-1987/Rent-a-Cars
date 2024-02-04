import { Container, Welcome, Section, WelcomeWrap, BtnGo, SectionBackdrop } from "./Page.styled";
import auto from '../assets/ce0138615e317a8ad157972ab5c3fb64f6f92e8a.jpg'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
       <>
        <SectionBackdrop />
        <Section $url={auto && `url(${auto})`}>
            <Container $bottom='0px'>
                <WelcomeWrap>
                    <Welcome>
                        <p>Welcome to our car rental website!</p>
                        <p>We are sure that you will find what you need. </p>
                        <BtnGo>
                          <Link to="/catalog">Let's go!</Link>
                        </BtnGo>
                    </Welcome>
                </WelcomeWrap>
            </Container>
        </Section>
       </>
    )
};

export default HomePage;