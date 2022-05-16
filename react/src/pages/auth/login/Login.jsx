import Login from "../../../components/auth/createAccount/LoginForm";
import "./login.css";
import OutsideNavbar from "../../../components/auth/navbar/OutsideNavbar.jsx";
import Picture from "../../../assets/loginPicture.png";
import styled from "styled-components";

const LoginPage = ()=> {
    return (
      <>
        <OutsideNavbar />
        <Container>
          <Image>
            <img src={Picture} alt="Map"></img>
          </Image>
            <LoginContainer>          <Login />
            </LoginContainer>
        </Container>
      </>
    );
};

const Container = styled.div`
  background: #fcfcfb;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.div`
  flex: 1;
`;
const LoginContainer = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  flex: 1;
`;
export default LoginPage;
