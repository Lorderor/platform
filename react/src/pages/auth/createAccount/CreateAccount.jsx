import CreateAccount from "../../../components/auth/createAccount/CreateAccountForm";
import "./createAccount.css";
import OutsideNavbar from "../../../components/auth/navbar/OutsideNavbar.jsx";
import Picture from "../../../assets/createPicture.png";
import styled from "styled-components";

export default ()=>{

    return (
      <>
        <OutsideNavbar />
        <Container>
          <PictureCreate>
            <Image>
              <img src={Picture} alt="Map"></img>
            </Image>
          </PictureCreate>
          <ContainerCreateAccount>
            <CreateAccount />
          </ContainerCreateAccount>
        </Container>
      </>
    );

}

const PictureCreate = styled.div`
  flex:1;
    background-color: #FCFCFB;
`;

const ContainerCreateAccount = styled.div`
  flex:1;
   box-sizing: border-box;
   padding: 0 1rem;
`;

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
  height: 3.8rem;
  margin-bottom: 43rem;
  margin-left: 3rem;
`;
