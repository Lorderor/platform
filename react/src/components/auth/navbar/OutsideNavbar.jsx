import "./outsideNavbar.css";
import Logo from "../../../assets/uimpactify-logo.png";
import {Link} from "react-router-dom";
import styled from "styled-components";

const OutsiteNavbar = () => {
    return (
        <StyledNav>
            <LeftContainer>
                <StyledLink to="/home">
                    <img src={Logo} alt='logo' className="custom-logo"/>
                </StyledLink>
                <ContainerLink>
                    <StyledNavLink to="/about" className="nav-item nav-link custom-link">
                        О нас
                    </StyledNavLink>
                    <StyledNavLink to="/solutions" className="nav-item nav-link custom-link">
                        Решения
                    </StyledNavLink>
                    <StyledNavLink to="/faq" className="nav-item nav-link custom-link">
                        Цены
                    </StyledNavLink>
                </ContainerLink>
            </LeftContainer>
            <RightContainer>
                <ButtonLink to="/create">
                    Регистрация
                </ButtonLink>
                <ButtonLink to="/login">
                    Войти
                </ButtonLink>
            </RightContainer>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
 background-color: #FCFCFB;
border-color: #FCFCFB;
display: flex;
position: sticky;
top: 0;
z-index: 1020;
padding: 1rem;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
height: 130px;
width: 100%;
box-sizing: border-box;
`;

const LeftContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
`;
const RightContainer = styled(LeftContainer)`
justify-content: flex-end;
`;

const ContainerLink = styled.div`
display: flex;
margin-left: 4rem;
`;

const StyledLink = styled(Link)`
color: black;
display: flex;
padding: .5rem 1rem;
text-decoration:none;
background-color: transparent;
`;

const StyledNavLink = styled(Link)`
color: #212529;
padding: 0 1rem ;
font-size: 1.5rem;
font-weight: 500;
text-decoration:none;
background-color: transparent;
`;

const ButtonLink = styled(Link)`
padding: 1rem ;
font-size: 1rem;
color: white;
border-radius: 10px;
font-weight: 400;
text-decoration:none;
background-color: #a78ec3;
:last-child{
margin-left: 2rem;
}
`;
export default OutsiteNavbar