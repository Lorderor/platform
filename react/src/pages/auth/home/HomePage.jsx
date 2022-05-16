import Home from "./content/Home.jsx";
import styled from "styled-components";
import OutsideNavbar from "../../../components/auth/navbar/OutsideNavbar.jsx";

const HomePage = ()=> {

    return (
      <Container>
        <OutsideNavbar />
        <Home />
      </Container>
    );

}

const Container = styled.div`
  background: #fcfcfb;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default HomePage