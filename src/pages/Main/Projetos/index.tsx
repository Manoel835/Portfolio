import { Box } from "../../../components/Box/styled";
import { NavBar } from "../../../components/NavBar";
import { Page } from "../styles";
import { Container } from "./styles";

export default function Project (){
  return(
    <Page>
      <Container>
        <NavBar></NavBar>
        <Box></Box>
      </Container>
    </Page>
  )
}
